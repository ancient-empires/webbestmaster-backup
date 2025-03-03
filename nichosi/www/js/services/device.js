/*jslint white: true, nomen: true */
(function (win, doc, docElem) {

	"use strict";
	/*global window */
	/*global */

	win.APP = win.APP || {};
	win.APP.BB = win.APP.BB || {};

	win.APP.BB.DeviceModel = Backbone.Model.extend({

		url: {
			internetConnection: 'http://statlex.com/i/statlex-icon.png'
		},

		initialize: function () {

			var device = this;

			device.bindEventListeners();

			device.onResize();

			device.checkInternetConnection();

		},

		bindEventListeners: function () {

			var device = this;

			win.addEventListener('resize', function () {
				device.onResize();
			}, false);

		},

		onResize: function () {

			var device = this;

			device.set({
				width: docElem.clientWidth,
				height: docElem.clientHeight
			});

			device.trigger('resize');

		},

		checkInternetConnection: function () {

			var device = this,
				url = device.url.internetConnection + '?timestamp=' + Date.now(),
				img = new Image(),
				deferred = $.Deferred();

			function onLoad() {
				img.removeEventListener('load', onLoad, false);
				img.removeEventListener('error', onError, false);
				device.set('isOnLine', true);
				device.trigger('connectionStatus');
				deferred.resolve();
			}

			function onError() {
				img.removeEventListener('load', onLoad, false);
				img.removeEventListener('error', onError, false);
				device.set('isOnLine', false);
				device.trigger('connectionStatus');
				deferred.reject();
			}

			img.addEventListener('load', onLoad, false);

			img.addEventListener('error', onError, false);

			img.src = url;

			return deferred.promise();

		}




	});

}(window, window.document, window.document.documentElement ));