'use strict';
/*global window */

import $ from './../lib/jbone';
import Queue from './../lib/queue';

var win = window,
//doc = win.document,
//docElem = doc.documentElement,
	util = {

		assortArray: function (arr) {
			return arr.sort(function () {
				return 0.5 - Math.random();
			});
		},

		getPath: function (folder, index, type) {

			index += 1;

			if (index < 10) {
				index = '0' + index;
			}

			return folder + '/' + folder + '-' + index + '.' + type;

		},

		arrayRemoveByValue: function (arr, value) {
			var index = arr.indexOf(value);
			if (index !== -1) {
				arr.splice(index, 1);
			}
			return arr;
		},

		getBetween: function (min, current, max) {
			current = Math.min(current, max);
			current = Math.max(current, min);
			return current;
		},

		getRandomBetween: function (min, max) {
			return Math.round(Math.random() * (max - min) + min);
		},

		toTop: function () {
			win.scrollTo(0, 0);
		},

		copyJSON: function (obj) { // external
			return JSON.parse(JSON.stringify(obj));
		},
		formatTime: function (number) {
			return number >= 10 ? number : '0' + number;
		},
		formatMs: function (ms) {

			var util = this,
				date = new Date(ms);

			return {
				d: util.formatTime(date.getUTCDate()),
				h: util.formatTime(date.getUTCHours()),
				m: util.formatTime(date.getUTCMinutes()),
				s: util.formatTime(date.getUTCSeconds()),
				ms: util.formatTime(date.getUTCMilliseconds())
			};

		},

		loadImage: function (src) {

			var def = $.Deferred(),
				$img = $(new Image());

			$img.one('load error', def.resolve);

			$img.attr('src', src);

			return def.promise();

		},

		loadImages: function (srcs) {

			var loadImage = this.loadImage,
				queue = new Queue();

			srcs.forEach(function (src) {
				queue.push(function () {
					return loadImage(src);
				});
			});

			return queue.run();

		}

	};

export default util;