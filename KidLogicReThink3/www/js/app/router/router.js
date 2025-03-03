/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global Backbone, APP, $ */

	win.APP = win.APP || {};

	APP.BB = APP.BB || {};

	APP.BB.Router = Backbone.Router.extend({

		routes: {
			'': 'title',
			'about': 'about',
			'help-info': 'helpInfo',
			'section/:jsKey': 'section'
		},

		title: function () {
			new APP.BB.TitleView();
		},

		about: function () {
			new APP.BB.AboutView();
		},

		helpInfo: function () {
			new APP.BB.HelpInfoView();
		},

		section: function (jsKey) {
			new APP.BB.SectionView({
				jsKey: jsKey
			});
		},

		getAction: function () {

			var e = window.event || {},
				newURL = e.newURL || '',
				oldURL = e.oldURL || '',
				popupPart = APP.BB.BaseView.prototype.popupUrl,
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
				proto = APP.BB.Router.prototype;

			_.each(router.routes, function (value) {

				originalFunctions[value] = proto[value];

				proto[value] = function () {

					var router = this,
						viewAction = router.getAction(),
						baseProto = win.APP.BB.BaseView.prototype;

					if ( !viewAction ) {
						return originalFunctions[value].apply(router, arguments);
					}

					switch (viewAction) {
						case 'hidePopup':
							baseProto.hidePopup();
							break;
						case 'showPopup':
							break;
					}

				};

			});

			return Backbone.Router.prototype.constructor.apply(router, arguments);

		}

	});

}(window));