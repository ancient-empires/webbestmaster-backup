'use strict';
/*global window */

import dot from './../lib/dot';

var doc = window.document,
		templateMaster = {
			templateSelector: '.js-template',
			mainJsSelector: '.js-main-js',
			tmplText: {},
			tmplFn: {},
			init: function () {

				var tm = this,
						templates = doc.querySelectorAll(tm.templateSelector),
						mainJs = doc.querySelector(tm.mainJsSelector);

				Array.prototype.forEach.call(templates, function (tmplNode) {

					var name = tmplNode.getAttribute('data-name'),
						text = tmplNode.textContent.replace(/\<\!\-\-[\s\S]+?\-\-\>/gi, '').trim();

					tm.tmplText[name] = text;
					tm.tmplFn[name] = dot.template(text);

					tmplNode.parentNode.removeChild(tmplNode);

				});

				return mainJs && mainJs.parentNode.removeChild(mainJs);

			}

		};

templateMaster.init();

export default templateMaster;


