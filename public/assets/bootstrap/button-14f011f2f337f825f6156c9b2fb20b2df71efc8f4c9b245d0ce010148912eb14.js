/*!
  * Bootstrap button.js v4.6.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Button=t(e.jQuery)}(this,function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{"default":e}}function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}var l=t(e),s="button",i="4.6.0",o="bs.button",r="."+o,u=".data-api",c=l["default"].fn[s],d="active",f="btn",g="focus",h='[data-toggle^="button"]',b='[data-toggle="buttons"]',v='[data-toggle="button"]',y='[data-toggle="buttons"] .btn',m='input:not([type="hidden"])',p=".active",_=".btn",A="click"+r+u,L="focus"+r+u+" blur"+r+u,j="load"+r+u,q=function(){function e(e){this._element=e,this.shouldAvoidTriggerChange=!1}var t=e.prototype;return t.toggle=function(){var e=!0,t=!0,a=l["default"](this._element).closest(b)[0];if(a){var n=this._element.querySelector(m);if(n){if("radio"===n.type)if(n.checked&&this._element.classList.contains(d))e=!1;else{var s=a.querySelector(p);s&&l["default"](s).removeClass(d)}e&&("checkbox"!==n.type&&"radio"!==n.type||(n.checked=!this._element.classList.contains(d)),this.shouldAvoidTriggerChange||l["default"](n).trigger("change")),n.focus(),t=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(t&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(d)),e&&l["default"](this._element).toggleClass(d))},t.dispose=function(){l["default"].removeData(this._element,o),this._element=null},e._jQueryInterface=function(t,a){return this.each(function(){var n=l["default"](this),s=n.data(o);s||(s=new e(this),n.data(o,s)),s.shouldAvoidTriggerChange=a,"toggle"===t&&s[t]()})},n(e,null,[{key:"VERSION",get:function(){return i}}]),e}();return l["default"](document).on(A,h,function(e){var t=e.target,a=t;if(l["default"](t).hasClass(f)||(t=l["default"](t).closest(_)[0]),!t||t.hasAttribute("disabled")||t.classList.contains("disabled"))e.preventDefault();else{var n=t.querySelector(m);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled")))return void e.preventDefault();"INPUT"!==a.tagName&&"LABEL"===t.tagName||q._jQueryInterface.call(l["default"](t),"toggle","INPUT"===a.tagName)}}).on(L,h,function(e){var t=l["default"](e.target).closest(_)[0];l["default"](t).toggleClass(g,/^focus(in)?$/.test(e.type))}),l["default"](window).on(j,function(){for(var e=[].slice.call(document.querySelectorAll(y)),t=0,a=e.length;t<a;t++){var n=e[t],l=n.querySelector(m);l.checked||l.hasAttribute("checked")?n.classList.add(d):n.classList.remove(d)}for(var s=0,i=(e=[].slice.call(document.querySelectorAll(v))).length;s<i;s++){var o=e[s];"true"===o.getAttribute("aria-pressed")?o.classList.add(d):o.classList.remove(d)}}),l["default"].fn[s]=q._jQueryInterface,l["default"].fn[s].Constructor=q,l["default"].fn[s].noConflict=function(){return l["default"].fn[s]=c,q._jQueryInterface},q});