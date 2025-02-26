/*jslint white: true, nomen: true */
(function (win, doc) {

	"use strict";
	/*global window, document, setTimeout */
	/*global APP, Backbone, FastClick */

	win.APP = win.APP || {};

	win.APP.bb = win.APP.bb || {};

	function start() {

		win.APP.templateMaster.init();
		win.APP.BB.BaseView.prototype.initStatic();

		win.FastClick.attach(doc.body);

		function back() {

			if ( win.location.hash ) {
				win.history.back();
				setTimeout(back, 50);
			} else {
				win.APP.bb.router = new win.APP.BB.Router();
				Backbone.history.start();
				win.APP.soundMaster.init();
				//win.APP.soundMaster.playBgSound();
			}

		}

		back();

	}

	win.addEventListener('load', start, false);

}(window, window.document));