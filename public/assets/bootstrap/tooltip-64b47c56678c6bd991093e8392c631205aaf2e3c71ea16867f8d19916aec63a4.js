/*!
  * Bootstrap tooltip.js v4.6.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery"),require("popper.js"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","popper.js","./util"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).Tooltip=e(t.jQuery,t.Popper,t.Util)}(this,function(t,e,n){"use strict";function i(t){return t&&"object"==typeof t&&"default"in t?t:{"default":t}}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function s(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===h.indexOf(n)||Boolean(t.nodeValue.match(g)||t.nodeValue.match(p));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1}function l(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),r=[].slice.call(i.body.querySelectorAll("*")),a=function(t){var n=r[t],i=n.nodeName.toLowerCase();if(-1===o.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var a=[].slice.call(n.attributes),l=[].concat(e["*"]||[],e[i]||[]);a.forEach(function(t){s(t,l)||n.removeAttribute(t.nodeName)})},l=0,u=r.length;l<u;l++)a(l);return i.body.innerHTML}var u=i(t),f=i(e),c=i(n),h=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],d={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},g=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,p=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,m="tooltip",v="4.6.0",_="bs.tooltip",E="."+_,T=u["default"].fn[m],b="bs-tooltip",y=new RegExp("(^|\\s)"+b+"\\S+","g"),C=["sanitize","whiteList","sanitizeFn"],w={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},A={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},S={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:d,popperConfig:null},O="show",D="out",N={HIDE:"hide"+E,HIDDEN:"hidden"+E,SHOW:"show"+E,SHOWN:"shown"+E,INSERTED:"inserted"+E,CLICK:"click"+E,FOCUSIN:"focusin"+E,FOCUSOUT:"focusout"+E,MOUSEENTER:"mouseenter"+E,MOUSELEAVE:"mouseleave"+E},j="fade",P="show",k=".tooltip-inner",I=".arrow",x="hover",L="focus",U="click",F="manual",H=function(){function t(t,e){if("undefined"==typeof f["default"])throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var e=t.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=u["default"](t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),u["default"](t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(u["default"](this.getTipElement()).hasClass(P))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),u["default"].removeData(this.element,this.constructor.DATA_KEY),u["default"](this.element).off(this.constructor.EVENT_KEY),u["default"](this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&u["default"](this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var t=this;if("none"===u["default"](this.element).css("display"))throw new Error("Please use show on visible elements");var e=u["default"].Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){u["default"](this.element).trigger(e);var n=c["default"].findShadowRoot(this.element),i=u["default"].contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=c["default"].getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&u["default"](o).addClass(j);var a="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,s=this._getAttachment(a);this.addAttachmentClass(s);var l=this._getContainer();u["default"](o).data(this.constructor.DATA_KEY,this),u["default"].contains(this.element.ownerDocument.documentElement,this.tip)||u["default"](o).appendTo(l),u["default"](this.element).trigger(this.constructor.Event.INSERTED),this._popper=new f["default"](this.element,o,this._getPopperConfig(s)),u["default"](o).addClass(P),u["default"](o).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&u["default"](document.body).children().on("mouseover",null,u["default"].noop);var h=function(){t.config.animation&&t._fixTransition();var e=t._hoverState;t._hoverState=null,u["default"](t.element).trigger(t.constructor.Event.SHOWN),e===D&&t._leave(null,t)};if(u["default"](this.tip).hasClass(j)){var d=c["default"].getTransitionDurationFromElement(this.tip);u["default"](this.tip).one(c["default"].TRANSITION_END,h).emulateTransitionEnd(d)}else h()}},e.hide=function(t){var e=this,n=this.getTipElement(),i=u["default"].Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==O&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),u["default"](e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(u["default"](this.element).trigger(i),!i.isDefaultPrevented()){if(u["default"](n).removeClass(P),"ontouchstart"in document.documentElement&&u["default"](document.body).children().off("mouseover",null,u["default"].noop),this._activeTrigger[U]=!1,this._activeTrigger[L]=!1,this._activeTrigger[x]=!1,u["default"](this.tip).hasClass(j)){var r=c["default"].getTransitionDurationFromElement(n);u["default"](n).one(c["default"].TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(t){u["default"](this.getTipElement()).addClass(b+"-"+t)},e.getTipElement=function(){return this.tip=this.tip||u["default"](this.config.template)[0],this.tip},e.setContent=function(){var t=this.getTipElement();this.setElementContent(u["default"](t.querySelectorAll(k)),this.getTitle()),u["default"](t).removeClass(j+" "+P)},e.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=l(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?u["default"](e).parent().is(t)||t.empty().append(e):t.text(u["default"](e).text())},e.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},e._getPopperConfig=function(t){var e=this;return a({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:I},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},this.config.popperConfig)},e._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=a({},e.offsets,t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},e._getContainer=function(){return!1===this.config.container?document.body:c["default"].isElement(this.config.container)?u["default"](this.config.container):u["default"](document).find(this.config.container)},e._getAttachment=function(t){return A[t.toUpperCase()]},e._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(e){if("click"===e)u["default"](t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(e!==F){var n=e===x?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,i=e===x?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;u["default"](t.element).on(n,t.config.selector,function(e){return t._enter(e)}).on(i,t.config.selector,function(e){return t._leave(e)})}}),this._hideModalHandler=function(){t.element&&t.hide()},u["default"](this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=a({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||u["default"](t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),u["default"](t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?L:x]=!0),u["default"](e.getTipElement()).hasClass(P)||e._hoverState===O?e._hoverState=O:(clearTimeout(e._timeout),e._hoverState=O,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===O&&e.show()},e.config.delay.show):e.show())},e._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||u["default"](t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),u["default"](t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?L:x]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=D,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===D&&e.hide()},e.config.delay.hide):e.hide())},e._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},e._getConfig=function(t){var e=u["default"](this.element).data();return Object.keys(e).forEach(function(t){-1!==C.indexOf(t)&&delete e[t]}),"number"==typeof(t=a({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),c["default"].typeCheckConfig(m,t,this.constructor.DefaultType),t.sanitize&&(t.template=l(t.template,t.whiteList,t.sanitizeFn)),t},e._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},e._cleanTipClass=function(){var t=u["default"](this.getTipElement()),e=t.attr("class").match(y);null!==e&&e.length&&t.removeClass(e.join(""))},e._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},e._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(u["default"](t).removeClass(j),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},t._jQueryInterface=function(e){return this.each(function(){var n=u["default"](this),i=n.data(_),o="object"==typeof e&&e;if((i||!/dispose|hide/.test(e))&&(i||(i=new t(this,o),n.data(_,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},r(t,null,[{key:"VERSION",get:function(){return v}},{key:"Default",get:function(){return S}},{key:"NAME",get:function(){return m}},{key:"DATA_KEY",get:function(){return _}},{key:"Event",get:function(){return N}},{key:"EVENT_KEY",get:function(){return E}},{key:"DefaultType",get:function(){return w}}]),t}();return u["default"].fn[m]=H._jQueryInterface,u["default"].fn[m].Constructor=H,u["default"].fn[m].noConflict=function(){return u["default"].fn[m]=T,H._jQueryInterface},H});