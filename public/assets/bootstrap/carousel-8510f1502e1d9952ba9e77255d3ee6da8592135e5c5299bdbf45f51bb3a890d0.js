/*!
  * Bootstrap carousel.js v4.6.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Carousel=t(e.jQuery,e.Util)}(this,function(e,t){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e:{"default":e}}function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var r=i(e),s=i(t),o="carousel",u="4.6.0",c="bs.carousel",h="."+c,d=".data-api",f=r["default"].fn[o],_=37,v=39,m=500,g=40,p={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},y={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},E="next",I="prev",S="left",b="right",C="slide"+h,w="slid"+h,x="keydown"+h,T="mouseenter"+h,D="mouseleave"+h,X="touchstart"+h,j="touchmove"+h,k="touchend"+h,q="pointerdown"+h,P="pointerup"+h,A="dragstart"+h,N="load"+h+d,O="click"+h+d,Q="carousel",L="active",B="slide",U="carousel-item-right",H="carousel-item-left",V="carousel-item-next",F="carousel-item-prev",M="pointer-event",R=".active",W=".active.carousel-item",z=".carousel-item",G=".carousel-item img",J=".carousel-item-next, .carousel-item-prev",K=".carousel-indicators",Y="[data-slide], [data-slide-to]",Z='[data-ride="carousel"]',$={TOUCH:"touch",PEN:"pen"},ee=function(){function e(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=this._element.querySelector(K),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=e.prototype;return t.next=function(){this._isSliding||this._slide(E)},t.nextWhenVisible=function(){var e=r["default"](this._element);!document.hidden&&e.is(":visible")&&"hidden"!==e.css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(I)},t.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(J)&&(s["default"].triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(e){var t=this;this._activeElement=this._element.querySelector(W);var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)r["default"](this._element).one(w,function(){return t.to(e)});else{if(i===e)return this.pause(),void this.cycle();var n=e>i?E:I;this._slide(n,this._items[e])}},t.dispose=function(){r["default"](this._element).off(h),r["default"].removeData(this._element,c),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(e){return e=a({},p,e),s["default"].typeCheckConfig(o,e,y),e},t._handleSwipe=function(){var e=Math.abs(this.touchDeltaX);if(!(e<=g)){var t=e/this.touchDeltaX;this.touchDeltaX=0,t>0&&this.prev(),t<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&r["default"](this._element).on(x,function(t){return e._keydown(t)}),"hover"===this._config.pause&&r["default"](this._element).on(T,function(t){return e.pause(t)}).on(D,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var t=function(t){e._pointerEvent&&$[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){t.originalEvent.touches&&t.originalEvent.touches.length>1?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX},n=function(t){e._pointerEvent&&$[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},m+e._config.interval))};r["default"](this._element.querySelectorAll(G)).on(A,function(e){return e.preventDefault()}),this._pointerEvent?(r["default"](this._element).on(q,function(e){return t(e)}),r["default"](this._element).on(P,function(e){return n(e)}),this._element.classList.add(M)):(r["default"](this._element).on(X,function(e){return t(e)}),r["default"](this._element).on(j,function(e){return i(e)}),r["default"](this._element).on(k,function(e){return n(e)}))}},t._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case _:e.preventDefault(),this.prev();break;case v:e.preventDefault(),this.next()}},t._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(z)):[],this._items.indexOf(e)},t._getItemByDirection=function(e,t){var i=e===E,n=e===I,l=this._getItemIndex(t),a=this._items.length-1;if((n&&0===l||i&&l===a)&&!this._config.wrap)return t;var r=(l+(e===I?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]},t._triggerSlideEvent=function(e,t){var i=this._getItemIndex(e),n=this._getItemIndex(this._element.querySelector(W)),l=r["default"].Event(C,{relatedTarget:e,direction:t,from:n,to:i});return r["default"](this._element).trigger(l),l},t._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var t=[].slice.call(this._indicatorsElement.querySelectorAll(R));r["default"](t).removeClass(L);var i=this._indicatorsElement.children[this._getItemIndex(e)];i&&r["default"](i).addClass(L)}},t._updateInterval=function(){var e=this._activeElement||this._element.querySelector(W);if(e){var t=parseInt(e.getAttribute("data-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}},t._slide=function(e,t){var i,n,l,a=this,o=this._element.querySelector(W),u=this._getItemIndex(o),c=t||o&&this._getItemByDirection(e,o),h=this._getItemIndex(c),d=Boolean(this._interval);if(e===E?(i=H,n=V,l=S):(i=U,n=F,l=b),c&&r["default"](c).hasClass(L))this._isSliding=!1;else if(!this._triggerSlideEvent(c,l).isDefaultPrevented()&&o&&c){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(c),this._activeElement=c;var f=r["default"].Event(w,{relatedTarget:c,direction:l,from:u,to:h});if(r["default"](this._element).hasClass(B)){r["default"](c).addClass(n),s["default"].reflow(c),r["default"](o).addClass(i),r["default"](c).addClass(i);var _=s["default"].getTransitionDurationFromElement(o);r["default"](o).one(s["default"].TRANSITION_END,function(){r["default"](c).removeClass(i+" "+n).addClass(L),r["default"](o).removeClass(L+" "+n+" "+i),a._isSliding=!1,setTimeout(function(){return r["default"](a._element).trigger(f)},0)}).emulateTransitionEnd(_)}else r["default"](o).removeClass(L),r["default"](c).addClass(L),this._isSliding=!1,r["default"](this._element).trigger(f);d&&this.cycle()}},e._jQueryInterface=function(t){return this.each(function(){var i=r["default"](this).data(c),n=a({},p,r["default"](this).data());"object"==typeof t&&(n=a({},n,t));var l="string"==typeof t?t:n.slide;if(i||(i=new e(this,n),r["default"](this).data(c,i)),"number"==typeof t)i.to(t);else if("string"==typeof l){if("undefined"==typeof i[l])throw new TypeError('No method named "'+l+'"');i[l]()}else n.interval&&n.ride&&(i.pause(),i.cycle())})},e._dataApiClickHandler=function(t){var i=s["default"].getSelectorFromElement(this);if(i){var n=r["default"](i)[0];if(n&&r["default"](n).hasClass(Q)){var l=a({},r["default"](n).data(),r["default"](this).data()),o=this.getAttribute("data-slide-to");o&&(l.interval=!1),e._jQueryInterface.call(r["default"](n),l),o&&r["default"](n).data(c).to(o),t.preventDefault()}}},l(e,null,[{key:"VERSION",get:function(){return u}},{key:"Default",get:function(){return p}}]),e}();return r["default"](document).on(O,Y,ee._dataApiClickHandler),r["default"](window).on(N,function(){for(var e=[].slice.call(document.querySelectorAll(Z)),t=0,i=e.length;t<i;t++){var n=r["default"](e[t]);ee._jQueryInterface.call(n,n.data())}}),r["default"].fn[o]=ee._jQueryInterface,r["default"].fn[o].Constructor=ee,r["default"].fn[o].noConflict=function(){return r["default"].fn[o]=f,ee._jQueryInterface},ee});