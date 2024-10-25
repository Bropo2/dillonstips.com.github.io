/**handles:jquery-effects-core,jquery-ui-menu,wp-dom-ready,wp-a11y,jquery-ui-autocomplete,imagesloaded**/
/*!
 * jQuery UI Effects 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./jquery-var-for-color","./vendor/jquery-color/jquery.color","./version"],t):t(jQuery)}(function(u){"use strict";var s,o,r,a,c,e,n,i,f,l,d="ui-effects-",h="ui-effects-style",p="ui-effects-animated";function m(t){var e,n,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,o={};if(i&&i.length&&i[0]&&i[i[0]])for(n=i.length;n--;)"string"==typeof i[e=i[n]]&&(o[e.replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})]=i[e]);else for(e in i)"string"==typeof i[e]&&(o[e]=i[e]);return o}function g(t,e,n,i){return t={effect:t=u.isPlainObject(t)?(e=t).effect:t},"function"==typeof(e=null==e?{}:e)&&(i=e,n=null,e={}),"number"!=typeof e&&!u.fx.speeds[e]||(i=n,n=e,e={}),"function"==typeof n&&(i=n,n=null),e&&u.extend(t,e),n=n||e.duration,t.duration=u.fx.off?0:"number"==typeof n?n:n in u.fx.speeds?u.fx.speeds[n]:u.fx.speeds._default,t.complete=i||e.complete,t}function v(t){return!t||"number"==typeof t||u.fx.speeds[t]||"string"==typeof t&&!u.effects.effect[t]||"function"==typeof t||"object"==typeof t&&!t.effect}function y(t,e){var n=e.outerWidth(),e=e.outerHeight(),t=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t)||["",0,n,e,0];return{top:parseFloat(t[1])||0,right:"auto"===t[2]?n:parseFloat(t[2]),bottom:"auto"===t[3]?e:parseFloat(t[3]),left:parseFloat(t[4])||0}}return u.effects={effect:{}},a=["add","remove","toggle"],c={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1},u.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,e){u.fx.step[e]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,e,t.end),t.setAttr=!0)}}),u.fn.addBack||(u.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),u.effects.animateClass=function(o,t,e,n){var s=u.speed(t,e,n);return this.queue(function(){var n=u(this),t=n.attr("class")||"",e=(e=s.children?n.find("*").addBack():n).map(function(){return{el:u(this),start:m(this)}}),i=function(){u.each(a,function(t,e){o[e]&&n[e+"Class"](o[e])})};i(),e=e.map(function(){return this.end=m(this.el[0]),this.diff=function(t,e){var n,i,o={};for(n in e)i=e[n],t[n]===i||c[n]||!u.fx.step[n]&&isNaN(parseFloat(i))||(o[n]=i);return o}(this.start,this.end),this}),n.attr("class",t),e=e.map(function(){var t=this,e=u.Deferred(),n=u.extend({},s,{queue:!1,complete:function(){e.resolve(t)}});return this.el.animate(this.diff,n),e.promise()}),u.when.apply(u,e.get()).done(function(){i(),u.each(arguments,function(){var e=this.el;u.each(this.diff,function(t){e.css(t,"")})}),s.complete.call(n[0])})})},u.fn.extend({addClass:(r=u.fn.addClass,function(t,e,n,i){return e?u.effects.animateClass.call(this,{add:t},e,n,i):r.apply(this,arguments)}),removeClass:(o=u.fn.removeClass,function(t,e,n,i){return 1<arguments.length?u.effects.animateClass.call(this,{remove:t},e,n,i):o.apply(this,arguments)}),toggleClass:(s=u.fn.toggleClass,function(t,e,n,i,o){return"boolean"==typeof e||void 0===e?n?u.effects.animateClass.call(this,e?{add:t}:{remove:t},n,i,o):s.apply(this,arguments):u.effects.animateClass.call(this,{toggle:t},e,n,i)}),switchClass:function(t,e,n,i,o){return u.effects.animateClass.call(this,{add:e,remove:t},n,i,o)}}),u.expr&&u.expr.pseudos&&u.expr.pseudos.animated&&(u.expr.pseudos.animated=(e=u.expr.pseudos.animated,function(t){return!!u(t).data(p)||e(t)})),!1!==u.uiBackCompat&&u.extend(u.effects,{save:function(t,e){for(var n=0,i=e.length;n<i;n++)null!==e[n]&&t.data(d+e[n],t[0].style[e[n]])},restore:function(t,e){for(var n,i=0,o=e.length;i<o;i++)null!==e[i]&&(n=t.data(d+e[i]),t.css(e[i],n))},setMode:function(t,e){return e="toggle"===e?t.is(":hidden")?"show":"hide":e},createWrapper:function(n){if(n.parent().is(".ui-effects-wrapper"))return n.parent();var i={width:n.outerWidth(!0),height:n.outerHeight(!0),float:n.css("float")},t=u("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:n.width(),height:n.height()},o=document.activeElement;try{o.id}catch(t){o=document.body}return n.wrap(t),n[0]!==o&&!u.contains(n[0],o)||u(o).trigger("focus"),t=n.parent(),"static"===n.css("position")?(t.css({position:"relative"}),n.css({position:"relative"})):(u.extend(i,{position:n.css("position"),zIndex:n.css("z-index")}),u.each(["top","left","bottom","right"],function(t,e){i[e]=n.css(e),isNaN(parseInt(i[e],10))&&(i[e]="auto")}),n.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),n.css(e),t.css(i).show()},removeWrapper:function(t){var e=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),t[0]!==e&&!u.contains(t[0],e)||u(e).trigger("focus")),t}}),u.extend(u.effects,{version:"1.13.3",define:function(t,e,n){return n||(n=e,e="effect"),u.effects.effect[t]=n,u.effects.effect[t].mode=e,n},scaledDimensions:function(t,e,n){var i;return 0===e?{height:0,width:0,outerHeight:0,outerWidth:0}:(i="horizontal"!==n?(e||100)/100:1,n="vertical"!==n?(e||100)/100:1,{height:t.height()*n,width:t.width()*i,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*i})},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,n){var i=t.queue();1<e&&i.splice.apply(i,[1,0].concat(i.splice(e,n))),t.dequeue()},saveStyle:function(t){t.data(h,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(h)||"",t.removeData(h)},mode:function(t,e){t=t.is(":hidden");return"toggle"===e&&(e=t?"show":"hide"),e=(t?"hide"===e:"show"===e)?"none":e},getBaseline:function(t,e){var n,i;switch(t[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=t[0]/e.height}switch(t[1]){case"left":i=0;break;case"center":i=.5;break;case"right":i=1;break;default:i=t[1]/e.width}return{x:i,y:n}},createPlaceholder:function(t){var e,n=t.css("position"),i=t.position();return t.css({marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),/^(static|relative)/.test(n)&&(n="absolute",e=u("<"+t[0].nodeName+">").insertAfter(t).css({display:/^(inline|ruby)/.test(t.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight"),float:t.css("float")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),t.data(d+"placeholder",e)),t.css({position:n,left:i.left,top:i.top}),e},removePlaceholder:function(t){var e=d+"placeholder",n=t.data(e);n&&(n.remove(),t.removeData(e))},cleanUp:function(t){u.effects.restoreStyle(t),u.effects.removePlaceholder(t)},setTransition:function(i,t,o,s){return s=s||{},u.each(t,function(t,e){var n=i.cssUnit(e);0<n[0]&&(s[e]=n[0]*o+n[1])}),s}}),u.fn.extend({effect:function(){function t(t){var e=u(this),n=u.effects.mode(e,a)||s;e.data(p,!0),c.push(n),s&&("show"===n||n===s&&"hide"===n)&&e.show(),s&&"none"===n||u.effects.saveStyle(e),"function"==typeof t&&t()}var i=g.apply(this,arguments),o=u.effects.effect[i.effect],s=o.mode,e=i.queue,n=e||"fx",r=i.complete,a=i.mode,c=[];return u.fx.off||!o?a?this[a](i.duration,r):this.each(function(){r&&r.call(this)}):!1===e?this.each(t).each(f):this.queue(n,t).queue(n,f);function f(t){var e=u(this);function n(){"function"==typeof r&&r.call(e[0]),"function"==typeof t&&t()}i.mode=c.shift(),!1===u.uiBackCompat||s?"none"===i.mode?(e[a](),n()):o.call(e[0],i,function(){e.removeData(p),u.effects.cleanUp(e),"hide"===i.mode&&e.hide(),n()}):(e.is(":hidden")?"hide"===a:"show"===a)?(e[a](),n()):o.call(e[0],i,n)}},show:(f=u.fn.show,function(t){return v(t)?f.apply(this,arguments):((t=g.apply(this,arguments)).mode="show",this.effect.call(this,t))}),hide:(i=u.fn.hide,function(t){return v(t)?i.apply(this,arguments):((t=g.apply(this,arguments)).mode="hide",this.effect.call(this,t))}),toggle:(n=u.fn.toggle,function(t){return v(t)||"boolean"==typeof t?n.apply(this,arguments):((t=g.apply(this,arguments)).mode="toggle",this.effect.call(this,t))}),cssUnit:function(t){var n=this.css(t),i=[];return u.each(["em","px","%","pt"],function(t,e){0<n.indexOf(e)&&(i=[parseFloat(n),e])}),i},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):y(this.css("clip"),this)},transfer:function(t,e){var n=u(this),i=u(t.to),o="fixed"===i.css("position"),s=u("body"),r=o?s.scrollTop():0,s=o?s.scrollLeft():0,a=i.offset(),a={top:a.top-r,left:a.left-s,height:i.innerHeight(),width:i.innerWidth()},i=n.offset(),c=u("<div class='ui-effects-transfer'></div>");c.appendTo("body").addClass(t.className).css({top:i.top-r,left:i.left-s,height:n.innerHeight(),width:n.innerWidth(),position:o?"fixed":"absolute"}).animate(a,t.duration,t.easing,function(){c.remove(),"function"==typeof e&&e()})}}),u.fx.step.clip=function(t){t.clipInit||(t.start=u(t.elem).cssClip(),"string"==typeof t.end&&(t.end=y(t.end,t.elem)),t.clipInit=!0),u(t.elem).cssClip({top:t.pos*(t.end.top-t.start.top)+t.start.top,right:t.pos*(t.end.right-t.start.right)+t.start.right,bottom:t.pos*(t.end.bottom-t.start.bottom)+t.start.bottom,left:t.pos*(t.end.left-t.start.left)+t.start.left})},l={},u.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,t){l[t]=function(t){return Math.pow(t,e+2)}}),u.extend(l,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),u.each(l,function(t,e){u.easing["easeIn"+t]=e,u.easing["easeOut"+t]=function(t){return 1-e(1-t)},u.easing["easeInOut"+t]=function(t){return t<.5?e(2*t)/2:1-e(-2*t+2)/2}}),u.effects});
/*!
 * jQuery UI Menu 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../keycode","../position","../safe-active-element","../unique-id","../version","../widget"],e):e(jQuery)}(function(a){"use strict";return a.widget("ui.menu",{version:"1.13.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.lastMousePosition={x:null,y:null},this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault(),this._activateItem(e)},"click .ui-menu-item":function(e){var t=a(e.target),i=a(a.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&t.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),t.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&i.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active)&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer))},"mouseenter .ui-menu-item":"_activateItem","mousemove .ui-menu-item":"_activateItem",mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this._menuItems().first();t||this.focus(e,i)},blur:function(e){this._delay(function(){a.contains(this.element[0],a.ui.safeActiveElement(this.document[0]))||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e,!0),this.mouseHandled=!1}})},_activateItem:function(e){var t,i;this.previousFilter||e.clientX===this.lastMousePosition.x&&e.clientY===this.lastMousePosition.y||(this.lastMousePosition={x:e.clientX,y:e.clientY},t=a(e.target).closest(".ui-menu-item"),i=a(e.currentTarget),t[0]!==i[0])||i.is(".ui-state-active")||(this._removeClass(i.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,i))},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),e.children().each(function(){var e=a(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var t,i,s,n=!0;switch(e.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(e);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case a.ui.keyCode.HOME:this._move("first","first",e);break;case a.ui.keyCode.END:this._move("last","last",e);break;case a.ui.keyCode.UP:this.previous(e);break;case a.ui.keyCode.DOWN:this.next(e);break;case a.ui.keyCode.LEFT:this.collapse(e);break;case a.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(e);break;case a.ui.keyCode.ESCAPE:this.collapse(e);break;default:t=this.previousFilter||"",s=n=!1,i=96<=e.keyCode&&e.keyCode<=105?(e.keyCode-96).toString():String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),i===t?s=!0:i=t+i,t=this._filterMenuItems(i),(t=s&&-1!==t.index(this.active.next())?this.active.nextAll(".ui-menu-item"):t).length||(i=String.fromCharCode(e.keyCode),t=this._filterMenuItems(i)),t.length?(this.focus(e,t),this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}n&&e.preventDefault()},_activate:function(e){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var e,t,s=this,n=this.options.icons.submenu,i=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),e=i.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=a(this),t=e.prev(),i=a("<span>").data("ui-menu-submenu-caret",!0);s._addClass(i,"ui-menu-icon","ui-icon "+n),t.attr("aria-haspopup","true").prepend(i),e.attr("aria-labelledby",t.attr("id"))}),this._addClass(e,"ui-menu","ui-widget ui-widget-content ui-front"),(e=i.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function(){var e=a(this);s._isDivider(e)&&s._addClass(e,"ui-menu-divider","ui-widget-content")}),t=(i=e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(i,"ui-menu-item")._addClass(t,"ui-menu-item-wrapper"),e.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){var i;"icons"===e&&(i=this.element.find(".ui-menu-icon"),this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,t.submenu)),this._super(e,t)},_setOptionDisabled:function(e){this._super(e),this.element.attr("aria-disabled",String(e)),this._toggleClass(null,"ui-state-disabled",!!e)},focus:function(e,t){var i;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),i=this.active.children(".ui-menu-item-wrapper"),this._addClass(i,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",i.attr("id")),i=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(i,null,"ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),(i=t.children(".ui-menu")).length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(e){var t,i,s;this._hasScroll()&&(t=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,i=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,t=e.offset().top-this.activeMenu.offset().top-t-i,i=this.activeMenu.scrollTop(),s=this.activeMenu.height(),e=e.outerHeight(),t<0?this.activeMenu.scrollTop(i+t):s<t+e&&this.activeMenu.scrollTop(i+t-s+e))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",e,{item:this.active}),this.active=null)},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(e){var t=a.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(t)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var e=i?this.element:a(t&&t.target).closest(this.element.find(".ui-menu"));e.length||(e=this.element),this._close(e),this.blur(t),this._removeClass(e.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=e},i?0:this.delay)},_close:function(e){(e=e||(this.active?this.active.parent():this.element)).find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!a(e.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this._menuItems(this.active.children(".ui-menu")).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_menuItems:function(e){return(e||this.element).find(this.options.items).filter(".ui-menu-item")},_move:function(e,t,i){var s;(s=this.active?"first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").last():this.active[e+"All"](".ui-menu-item").first():s)&&s.length&&this.active||(s=this._menuItems(this.activeMenu)[t]()),this.focus(i,s)},nextPage:function(e){var t,i,s;this.active?this.isLastItem()||(this._hasScroll()?(i=this.active.offset().top,s=this.element.innerHeight(),0===a.fn.jquery.indexOf("3.2.")&&(s+=this.element[0].offsetHeight-this.element.outerHeight()),this.active.nextAll(".ui-menu-item").each(function(){return(t=a(this)).offset().top-i-s<0}),this.focus(e,t)):this.focus(e,this._menuItems(this.activeMenu)[this.active?"last":"first"]())):this.next(e)},previousPage:function(e){var t,i,s;this.active?this.isFirstItem()||(this._hasScroll()?(i=this.active.offset().top,s=this.element.innerHeight(),0===a.fn.jquery.indexOf("3.2.")&&(s+=this.element[0].offsetHeight-this.element.outerHeight()),this.active.prevAll(".ui-menu-item").each(function(){return 0<(t=a(this)).offset().top-i+s}),this.focus(e,t)):this.focus(e,this._menuItems(this.activeMenu).first())):this.next(e)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||a(e.target).closest(".ui-menu-item");var t={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,t)},_filterMenuItems:function(e){var e=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),t=new RegExp("^"+e,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return t.test(String.prototype.trim.call(a(this).children(".ui-menu-item-wrapper").text()))})}})});
/*! This file is auto-generated */
(()=>{"use strict";var e={d:(t,d)=>{for(var o in d)e.o(d,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:d[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function d(e){"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",e):e())}e.d(t,{default:()=>d}),(window.wp=window.wp||{}).domReady=t.default})();
/*! This file is auto-generated */
(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{setup:()=>d,speak:()=>p});const n=window.wp.domReady;var o=e.n(n);const i=window.wp.i18n;function a(e="polite"){const t=document.createElement("div");t.id=`a11y-speak-${e}`,t.className="a11y-speak-region",t.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions text"),t.setAttribute("aria-atomic","true");const{body:n}=document;return n&&n.appendChild(t),t}let r="";function d(){const e=document.getElementById("a11y-speak-intro-text"),t=document.getElementById("a11y-speak-assertive"),n=document.getElementById("a11y-speak-polite");null===e&&function(){const e=document.createElement("p");e.id="a11y-speak-intro-text",e.className="a11y-speak-intro-text",e.textContent=(0,i.__)("Notifications"),e.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),e.setAttribute("hidden","hidden");const{body:t}=document;t&&t.appendChild(e)}(),null===t&&a("assertive"),null===n&&a("polite")}function p(e,t){!function(){const e=document.getElementsByClassName("a11y-speak-region"),t=document.getElementById("a11y-speak-intro-text");for(let t=0;t<e.length;t++)e[t].textContent="";t&&t.setAttribute("hidden","hidden")}(),e=function(e){return e=e.replace(/<[^<>]+>/g," "),r===e&&(e+=" "),r=e,e}(e);const n=document.getElementById("a11y-speak-intro-text"),o=document.getElementById("a11y-speak-assertive"),i=document.getElementById("a11y-speak-polite");o&&"assertive"===t?o.textContent=e:i&&(i.textContent=e),n&&n.removeAttribute("hidden")}o()(d),(window.wp=window.wp||{}).a11y=t})();
/*!
 * jQuery UI Autocomplete 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./menu","../keycode","../position","../safe-active-element","../version","../widget"],e):e(jQuery)}(function(o){"use strict";return o.widget("ui.autocomplete",{version:"1.13.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,liveRegionTimer:null,_create:function(){var i,s,n,e=this.element[0].nodeName.toLowerCase(),t="textarea"===e,e="input"===e;this.isMultiLine=t||!e&&this._isContentEditable(this.element),this.valueMethod=this.element[t||e?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly"))s=n=i=!0;else{s=n=i=!1;var t=o.ui.keyCode;switch(e.keyCode){case t.PAGE_UP:i=!0,this._move("previousPage",e);break;case t.PAGE_DOWN:i=!0,this._move("nextPage",e);break;case t.UP:i=!0,this._keyEvent("previous",e);break;case t.DOWN:i=!0,this._keyEvent("next",e);break;case t.ENTER:this.menu.active&&(i=!0,e.preventDefault(),this.menu.select(e));break;case t.TAB:this.menu.active&&this.menu.select(e);break;case t.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(e),e.preventDefault());break;default:s=!0,this._searchTimeout(e)}}},keypress:function(e){if(i)i=!1,this.isMultiLine&&!this.menu.element.is(":visible")||e.preventDefault();else if(!s){var t=o.ui.keyCode;switch(e.keyCode){case t.PAGE_UP:this._move("previousPage",e);break;case t.PAGE_DOWN:this._move("nextPage",e);break;case t.UP:this._keyEvent("previous",e);break;case t.DOWN:this._keyEvent("next",e)}}},input:function(e){n?(n=!1,e.preventDefault()):this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=o("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().attr({unselectable:"on"}).menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault()},menufocus:function(e,t){var i,s;this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent)&&/^mouse/.test(e.originalEvent.type)?(this.menu.blur(),this.document.one("mousemove",function(){o(e.target).trigger(e.originalEvent)})):(s=t.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:s})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(s.value),(i=t.item.attr("aria-label")||s.value)&&String.prototype.trim.call(i).length&&(clearTimeout(this.liveRegionTimer),this.liveRegionTimer=this._delay(function(){this.liveRegion.html(o("<div>").text(i))},100)))},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==o.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=o("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var t=this.menu.element[0];return e.target===this.element[0]||e.target===t||o.contains(t,e.target)},_closeOnClickOutside:function(e){this._isEventTargetInWidget(e)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e=(e=(e=e&&(e.jquery||e.nodeType?o(e):this.document.find(e).eq(0)))&&e[0]?e:this.element.closest(".ui-front, dialog")).length?e:this.document[0].body},_initSource:function(){var i,s,n=this;Array.isArray(this.options.source)?(i=this.options.source,this.source=function(e,t){t(o.ui.autocomplete.filter(i,e.term))}):"string"==typeof this.options.source?(s=this.options.source,this.source=function(e,t){n.xhr&&n.xhr.abort(),n.xhr=o.ajax({url:s,data:e,dataType:"json",success:function(e){t(e)},error:function(){t([])}})}):this.source=this.options.source},_searchTimeout:function(s){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),t=this.menu.element.is(":visible"),i=s.altKey||s.ctrlKey||s.metaKey||s.shiftKey;e&&(t||i)||(this.selectedItem=null,this.search(null,s))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):!1!==this._trigger("search",t)?this._search(e):void 0},_search:function(e){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")}.bind(this)},__response:function(e){e=e&&this._normalize(e),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:o.map(e,function(e){return"string"==typeof e?{label:e,value:e}:o.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var t=this.menu.element.empty();this._renderMenu(t,e),this.isNewMenu=!0,this.menu.refresh(),t.show(),this._resizeMenu(),t.position(o.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(i,e){var s=this;o.each(e,function(e,t){s._renderItemData(i,t)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(e,t){return o("<li>").append(o("<div>").text(t.label)).appendTo(e)},_move:function(e,t){this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur()):this.menu[e](t):this.search(null,t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(e,t),t.preventDefault())},_isContentEditable:function(e){var t;return!!e.length&&("inherit"===(t=e.prop("contentEditable"))?this._isContentEditable(e.parent()):"true"===t)}}),o.extend(o.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,t){var i=new RegExp(o.ui.autocomplete.escapeRegex(t),"i");return o.grep(e,function(e){return i.test(e.label||e.value||e)})}}),o.widget("ui.autocomplete",o.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(1<e?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments),this.options.disabled||this.cancelSearch||(t=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,clearTimeout(this.liveRegionTimer),this.liveRegionTimer=this._delay(function(){this.liveRegion.html(o("<div>").text(t))},100))}}),o.ui.autocomplete});
/*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(t,e){"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,(function(){function t(){}let e=t.prototype;return e.on=function(t,e){if(!t||!e)return this;let i=this._events=this._events||{},s=i[t]=i[t]||[];return s.includes(e)||s.push(e),this},e.once=function(t,e){if(!t||!e)return this;this.on(t,e);let i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this},e.off=function(t,e){let i=this._events&&this._events[t];if(!i||!i.length)return this;let s=i.indexOf(e);return-1!=s&&i.splice(s,1),this},e.emitEvent=function(t,e){let i=this._events&&this._events[t];if(!i||!i.length)return this;i=i.slice(0),e=e||[];let s=this._onceEvents&&this._onceEvents[t];for(let n of i){s&&s[n]&&(this.off(t,n),delete s[n]),n.apply(this,e)}return this},e.allOff=function(){return delete this._events,delete this._onceEvents,this},t})),
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(t,e){"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}("undefined"!=typeof window?window:this,(function(t,e){let i=t.jQuery,s=t.console;function n(t,e,o){if(!(this instanceof n))return new n(t,e,o);let r=t;var h;("string"==typeof t&&(r=document.querySelectorAll(t)),r)?(this.elements=(h=r,Array.isArray(h)?h:"object"==typeof h&&"number"==typeof h.length?[...h]:[h]),this.options={},"function"==typeof e?o=e:Object.assign(this.options,e),o&&this.on("always",o),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))):s.error(`Bad element for imagesLoaded ${r||t}`)}n.prototype=Object.create(e.prototype),n.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const o=[1,9,11];n.prototype.addElementImages=function(t){"IMG"===t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);let{nodeType:e}=t;if(!e||!o.includes(e))return;let i=t.querySelectorAll("img");for(let t of i)this.addImage(t);if("string"==typeof this.options.background){let e=t.querySelectorAll(this.options.background);for(let t of e)this.addElementBackgroundImages(t)}};const r=/url\((['"])?(.*?)\1\)/gi;function h(t){this.img=t}function d(t,e){this.url=t,this.element=e,this.img=new Image}return n.prototype.addElementBackgroundImages=function(t){let e=getComputedStyle(t);if(!e)return;let i=r.exec(e.backgroundImage);for(;null!==i;){let s=i&&i[2];s&&this.addBackground(s,t),i=r.exec(e.backgroundImage)}},n.prototype.addImage=function(t){let e=new h(t);this.images.push(e)},n.prototype.addBackground=function(t,e){let i=new d(t,e);this.images.push(i)},n.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();let t=(t,e,i)=>{setTimeout((()=>{this.progress(t,e,i)}))};this.images.forEach((function(e){e.once("progress",t),e.check()}))},n.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&s&&s.log(`progress: ${i}`,t,e)},n.prototype.complete=function(){let t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){let t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},h.prototype=Object.create(e.prototype),h.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src)},h.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},h.prototype.confirm=function(t,e){this.isLoaded=t;let{parentNode:i}=this.img,s="PICTURE"===i.nodeName?i:this.img;this.emitEvent("progress",[this,s,e])},h.prototype.handleEvent=function(t){let e="on"+t.type;this[e]&&this[e](t)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype=Object.create(h.prototype),d.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},d.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},n.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&(i=e,i.fn.imagesLoaded=function(t,e){return new n(this,t,e).jqDeferred.promise(i(this))})},n.makeJQueryPlugin(),n}));