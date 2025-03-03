'use strict';
/*global window */

import mediator from './../../services/mediator';
import Backbone from './../../lib/backbone';
import _ from './../../lib/lodash';
import BaseView from './../view/core/base';
import HomeView from './../view/home/home-view';

var win = window,
	router,
	Router = Backbone.Router.extend({

		routes: {
			'': 'home'
		},

		home: function () {
			new HomeView();
		},

		url: {
			popup: 'show-popup=popup'
		},

		getAction: function () {

			var router = this,
				e = window.event || {},
				newURL = e.newURL || '',
				oldURL = e.oldURL || '',
				popupPart = router.url.popup,
				viewAction;

			if ( newURL.indexOf(popupPart) !== -1 ) {
				viewAction = 'showPopup';
			}

			if ( oldURL.indexOf(popupPart) !== -1 ) {
				viewAction = 'hidePopup';
			}

			// other action is here
			return viewAction;

		},

		constructor: function () {

			var router = this,
				originalFunctions = {},
				proto = Router.prototype;

			_.each(router.routes, function (value) {

				originalFunctions[value] = proto[value];

				proto[value] = function () {

					var viewAction = router.getAction();

					if ( !viewAction ) {
						return originalFunctions[value].apply(router, arguments);
					}

					switch (viewAction) {
						case 'hidePopup':
							router.publish('hide-popup');
							break;
						case 'showPopup':
							break;
					}

				};

			});

			return Backbone.Router.prototype.constructor.apply(router, arguments);

		},

		routeToPopup: function () {
			this.navigate(Backbone.history.fragment + '?' + this.url.popup, false);
		},

		hidePopup: function () {

			var router = this;

			if (Backbone.history.fragment.indexOf(router.url.popup) !== -1) {
				win.history.back();
			} else {
				router.publish('hide-popup');
			}

		}

	});

router = new Router();

mediator.installTo(router);

router.subscribe('route-to-popup', router.routeToPopup);
router.subscribe('router-hide-popup', router.hidePopup);
router.subscribe('navigate', router.navigate);

router.on('route', function (route, data) {
	router.publish('route', route, data);
});

export default router;