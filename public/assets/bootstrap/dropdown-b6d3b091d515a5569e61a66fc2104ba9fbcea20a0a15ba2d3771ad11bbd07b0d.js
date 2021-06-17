/*!
  * Bootstrap dropdown.js v4.6.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("popper.js"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","popper.js","./util"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Dropdown=t(e.jQuery,e.Popper,e.Util)}(this,function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{"default":e}}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=r(e),s=r(t),f=r(n),u="dropdown",d="4.6.0",h="bs.dropdown",c="."+h,p=".data-api",g=l["default"].fn[u],m=27,_=32,y=9,v=38,b=40,w=3,C=new RegExp(v+"|"+b+"|"+m),E="hide"+c,P="hidden"+c,j="show"+c,k="shown"+c,q="click"+c,D="click"+c+p,N="keydown"+c+p,O="keyup"+c+p,T="disabled",x="show",S="dropup",A="dropright",F="dropleft",I="dropdown-menu-right",M="position-static",Q='[data-toggle="dropdown"]',H=".dropdown form",K=".dropdown-menu",L=".navbar-nav",R=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",U="top-start",B="top-end",V="bottom-start",z="bottom-end",G="right-start",J="left-start",W={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},X={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},Y=function(){function e(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=e.prototype;return t.toggle=function(){if(!this._element.disabled&&!l["default"](this._element).hasClass(T)){var t=l["default"](this._menu).hasClass(x);e._clearMenus(),t||this.show(!0)}},t.show=function(t){if(void 0===t&&(t=!1),!(this._element.disabled||l["default"](this._element).hasClass(T)||l["default"](this._menu).hasClass(x))){var n={relatedTarget:this._element},r=l["default"].Event(j,n),i=e._getParentFromElement(this._element);if(l["default"](i).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar&&t){if("undefined"==typeof s["default"])throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var o=this._element;"parent"===this._config.reference?o=i:f["default"].isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&l["default"](i).addClass(M),this._popper=new s["default"](o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===l["default"](i).closest(L).length&&l["default"](document.body).children().on("mouseover",null,l["default"].noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),l["default"](this._menu).toggleClass(x),l["default"](i).toggleClass(x).trigger(l["default"].Event(k,n))}}},t.hide=function(){if(!this._element.disabled&&!l["default"](this._element).hasClass(T)&&l["default"](this._menu).hasClass(x)){var t={relatedTarget:this._element},n=l["default"].Event(E,t),r=e._getParentFromElement(this._element);l["default"](r).trigger(n),n.isDefaultPrevented()||(this._popper&&this._popper.destroy(),l["default"](this._menu).toggleClass(x),l["default"](r).toggleClass(x).trigger(l["default"].Event(P,t)))}},t.dispose=function(){l["default"].removeData(this._element,h),l["default"](this._element).off(c),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;l["default"](this._element).on(q,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(e){return e=a({},this.constructor.Default,l["default"](this._element).data(),e),f["default"].typeCheckConfig(u,e,this.constructor.DefaultType),e},t._getMenuElement=function(){if(!this._menu){var t=e._getParentFromElement(this._element);t&&(this._menu=t.querySelector(K))}return this._menu},t._getPlacement=function(){var e=l["default"](this._element.parentNode),t=V;return e.hasClass(S)?t=l["default"](this._menu).hasClass(I)?B:U:e.hasClass(A)?t=G:e.hasClass(F)?t=J:l["default"](this._menu).hasClass(I)&&(t=z),t},t._detectNavbar=function(){return l["default"](this._element).closest(".navbar").length>0},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=a({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),a({},e,this._config.popperConfig)},e._jQueryInterface=function(t){return this.each(function(){var n=l["default"](this).data(h);if(n||(n=new e(this,"object"==typeof t?t:null),l["default"](this).data(h,n)),"string"==typeof t){if("undefined"==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},e._clearMenus=function(t){if(!t||t.which!==w&&("keyup"!==t.type||t.which===y))for(var n=[].slice.call(document.querySelectorAll(Q)),r=0,i=n.length;r<i;r++){var o=e._getParentFromElement(n[r]),a=l["default"](n[r]).data(h),s={relatedTarget:n[r]};if(t&&"click"===t.type&&(s.clickEvent=t),a){var f=a._menu;if(l["default"](o).hasClass(x)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&t.which===y)&&l["default"].contains(o,t.target))){var u=l["default"].Event(E,s);l["default"](o).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&l["default"](document.body).children().off("mouseover",null,l["default"].noop),n[r].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),l["default"](f).removeClass(x),l["default"](o).removeClass(x).trigger(l["default"].Event(P,s)))}}}},e._getParentFromElement=function(e){var t,n=f["default"].getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},e._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(t.which===_||t.which!==m&&(t.which!==b&&t.which!==v||l["default"](t.target).closest(K).length)):C.test(t.which))&&!this.disabled&&!l["default"](this).hasClass(T)){var n=e._getParentFromElement(this),r=l["default"](n).hasClass(x);if(r||t.which!==m){if(t.preventDefault(),t.stopPropagation(),!r||t.which===m||t.which===_)return t.which===m&&l["default"](n.querySelector(Q)).trigger("focus"),void l["default"](this).trigger("click");var i=[].slice.call(n.querySelectorAll(R)).filter(function(e){return l["default"](e).is(":visible")});if(0!==i.length){var o=i.indexOf(t.target);t.which===v&&o>0&&o--,t.which===b&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}}},o(e,null,[{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return W}},{key:"DefaultType",get:function(){return X}}]),e}();return l["default"](document).on(N,Q,Y._dataApiKeydownHandler).on(N,K,Y._dataApiKeydownHandler).on(D+" "+O,Y._clearMenus).on(D,Q,function(e){e.preventDefault(),e.stopPropagation(),Y._jQueryInterface.call(l["default"](this),"toggle")}).on(D,H,function(e){e.stopPropagation()}),l["default"].fn[u]=Y._jQueryInterface,l["default"].fn[u].Constructor=Y,l["default"].fn[u].noConflict=function(){return l["default"].fn[u]=g,Y._jQueryInterface},Y});