/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
define(function () {

	"use strict";
	/*global window, JSON */

	var info,
		isNormal = false,
		win = window,
		navigator = win.navigator,
		doc = win.document,
		docElem = doc.documentElement;

	info = {

		isNormal: isNormal,

		link: {
			ios: {
				normal: '',
				pro: ''
			},
			android: {
				normal: '',
				pro: ''
			}
		},

		ls: win.localStorage,
		savedItem: '!!!!-m-!!!!',
		attr: {},
		systemAttr: {},
		defaultLanguage: 'en',
		availableLanguages: ['en'],
		//availableLanguages: ['ru', 'en'],

		init: function () {

			var info = this;

			// get data from LS
			info.attr = JSON.parse(info.ls.getItem(info.savedItem) || '{}');

			//set settings
			info.setSettings();
			// set language
			info.setLanguage();
			// is phone
			info.set('isPhone', Math.max(docElem.clientHeight, docElem.clientWidth) <= 736, true); // 736 msx of iPhone6plus
			// is touch
			info.set('isTouch', 'ontouchstart' in doc, true);
			info.setOS();
			info.detectCssJsPrefix();
			info.detectTransitionEndEventName();
			info.detectAnimationEndEventName();

			info.setRemSize();

		},

		setLanguage: function () {

			var info = this,
				lang;

			lang = info.get('language') || navigator.language || navigator.userLanguage || this.defaultLanguage;
			lang = lang.split('-')[0].toLowerCase();
			lang = (info.availableLanguages.indexOf(lang) === -1) ? info.defaultLanguage : lang;
			lang = lang.toLowerCase();
			info.set('language', lang);

		},

		setOS: function () {

			var info = this,
				ua = navigator.userAgent,
				isIE = /MSIE/.test(ua),
				isAndroid = (/android/i).test(ua),
				isIOS = /iPad|iPhone|iPod/.test(ua);

			info.set('isIE', isIE, true);
			info.set('isAndroid', isAndroid, true);
			info.set('isIOS', isIOS, true);

			if (isIE) {
				info.set('os', 'wp', true);
			}

			if (isAndroid) {
				info.set('os', 'android', true);
			}

			if (isIOS) {
				info.set('os', 'ios', true);
			}

			// set os if os is not defined
			if ( !info.get('os', true) ) {
				info.set('os', 'ios', true);
				info.set('isIOS', true, true);
			}

		},

		detectCssJsPrefix: function () {

			var data = {
					js: '',
					css: ''
				},
				tempStyle = doc.createElement('div').style,
				vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];

			// find vendors by css transform property
			vendors.forEach(function (vendor) {

				var transform = vendor + 'ransform';

				if (!tempStyle.hasOwnProperty(transform)) {
					return;
				}

				vendor = vendor.replace(/t$/i, ''); // remove 't' from vendor

				data.js = vendor;

				vendor = vendor.toLowerCase();
				if (vendor) {
					data.css = '-' + vendor + '-';
				}

			});

			this.set('cssJsPrefix', data, true);

		},

		detectTransitionEndEventName: function () {

			var i,
				el = doc.createElement('div'),
				transitions = {
					'transition':'transitionend',
					'OTransition':'otransitionend',  // oTransitionEnd in very old Opera
					'MozTransition':'transitionend',
					'WebkitTransition':'webkitTransitionEnd'
				},
				transitionEnd = 'transitionend';

			for (i in transitions) {
				if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
					transitionEnd = transitions[i];
				}
			}

			this.set('transitionEnd', transitionEnd, true);

		},

		detectAnimationEndEventName: function () {
			var i,
				el = doc.createElement('div'),
				animations = {
					'animation':'animationend',
					'OAnimation':'oAnimationEnd',  // oAnimationEnd in very old Opera
					'MozAnimation':'animationend',
					'WebkitAnimation':'webkitAnimationEnd'
				},
				animationEnd = 'animationend';

			for (i in animations) {
				if (animations.hasOwnProperty(i) && el.style[i] !== undefined) {
					animationEnd = animations[i];
				}
			}

			this.set('animationEnd', animationEnd, true);

		},

		setRemSize: function () {

			var info = this,
				fontSize;

			fontSize = Math.round( 14 * Math.pow( docElem.clientWidth * docElem.clientHeight / 153600, 0.5) ); // 153600 = 320 * 480
			fontSize = Math.min(fontSize, 24);
			fontSize = Math.max(fontSize, 14);
			fontSize = Math.round(fontSize / 2) * 2;
			docElem.style.fontSize = fontSize + 'px';

			info.set('remSize', fontSize, true);

		},

		set: function (key, value, isSystem) {

			if (isSystem) {
				this.systemAttr[key] = value;
			} else {
				this.attr[key] = value;
				this.ls.setItem(this.savedItem, JSON.stringify(this.attr));
			}

			return key;

		},

		get: function (key, isSystem) {
			return isSystem ? this.systemAttr[key] : this.attr[key];
		},

		remove: function (key, isSystem) {
			if (isSystem) {
				delete this.systemAttr[key];
			} else {
				delete this.attr[key];
				this.ls.setItem(this.savedItem, JSON.stringify(this.attr));
			}

			return key;

		},

		setSettings: function () {

			var info = this,
				defaultSettings = {
					screenAnimation: 'on'
					//autoSave: 'on', // auto save game after every turn
					//confirmTurn: 'off', // game turn
					//confirmMove: 'off', // move unit
					//confirmAttack: 'off', // attack unit
					//music: 'on',
					//vibrate: 'off',
					//help: 'on',
					//fightAnimation: 'off',
					//buildingSmoke: 'off',
					//unitAnimation: 'off',
					//difficult: 'easy', // easy, normal, hard
					//gameSpeed: '3' // 1..5, use string type
				},
				key,
				value;

			for ( key in defaultSettings ) {
				if (defaultSettings.hasOwnProperty(key)) {
					value = info.get(key) || defaultSettings[key];
					info.set(key, value);
				}
			}

		},

		getLinkToStore: function (type) { // pro or normal
			return this.link[this.get('os', true)][type];
		}

	};

	info.init();

	return info;

});
