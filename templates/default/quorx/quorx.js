<script>(function(b,h,e){var a=b.UIkit||{},f=b("html"),g=b(window);if(!a.fn){a.version="2.0.0";a.fn=function(c,g){var d=arguments,j=c.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),f=j[1],e=j[2];return!a[f]?(b.error("UIkit component ["+f+"] does not exist."),this):this.each(function(){var c=b(this),j=c.data(f);j||c.data(f,j=new a[f](this,e?void 0:g));e&&j[e].apply(j,Array.prototype.slice.call(d,1))})};a.support={};var c=a.support,d;a:{d=h.body||h.documentElement;var j={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",
OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in j)if(void 0!==d.style[n]){d=j[n];break a}d=void 0}c.transition=d&&{end:d};a.support.requestAnimationFrame=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||e.oRequestAnimationFrame||function(b){e.setTimeout(b,1E3/60)};a.support.touch="ontouchstart"in window||e.DocumentTouch&&document instanceof e.DocumentTouch||e.navigator.msPointerEnabled&&0<e.navigator.msMaxTouchPoints||
!1;a.support.mutationobserver=e.MutationObserver||e.WebKitMutationObserver||e.MozMutationObserver||null;a.Utils={};a.Utils.debounce=function(b,c,a){var g;return function(){var d=this,j=arguments,f=a&&!g;clearTimeout(g);g=setTimeout(function(){g=null;a||b.apply(d,j)},c);f&&b.apply(d,j)}};a.Utils.removeCssRules=function(b){var c,a,g,d,j,f,e,n,h,s;b&&setTimeout(function(){try{s=document.styleSheets;d=0;for(e=s.length;d<e;d++){g=s[d];a=[];g.cssRules=g.cssRules;c=j=0;for(n=g.cssRules.length;j<n;c=++j)g.cssRules[c].type===
CSSRule.STYLE_RULE&&b.test(g.cssRules[c].selectorText)&&a.unshift(c);f=0;for(h=a.length;f<h;f++)g.deleteRule(a[f])}}catch(t){}},0)};a.Utils.isInView=function(c,a){var d=b(c);if(!d.is(":visible"))return!1;var j=g.scrollLeft(),f=g.scrollTop(),e=d.offset(),n=e.left,e=e.top;a=b.extend({topoffset:0,leftoffset:0},a);return e+d.height()>=f&&e-a.topoffset<=f+g.height()&&n+d.width()>=j&&n-a.leftoffset<=j+g.width()?!0:!1};a.Utils.options=function(c){if(b.isPlainObject(c))return c;var a=c?c.indexOf("{"):-1,
g={};if(-1!=a)try{g=(new Function("","var json = "+c.substr(a)+"; return JSON.parse(JSON.stringify(json));"))()}catch(d){}return g};a.Utils.events={};a.Utils.events.click=a.support.touch?"tap":"click";b.UIkit=a;b.fn.uk=a.fn;b.UIkit.langdirection="rtl"==f.attr("dir")?"right":"left";b(function(){b(h).trigger("firtz-domready");a.support.mutationobserver&&((new a.support.mutationobserver(a.Utils.debounce(function(){b(h).trigger("firtz-domready")},300))).observe(document.body,{childList:!0,subtree:!0}),a.support.touch&&
a.Utils.removeCssRules(/\.firtz-(?!navbar).*:hover/))});f.addClass(a.support.touch?"firtz-touch":"firtz-notouch")}})(jQuery,document,window);
(function(b){function h(){d=null;a.last&&(a.el.trigger("longTap"),a={})}function e(){f&&clearTimeout(f);g&&clearTimeout(g);c&&clearTimeout(c);d&&clearTimeout(d);f=g=c=d=null;a={}}var a={},f,g,c,d,j;b(function(){var n,p,l=0,k=0,m;"MSGesture"in window&&(j=new MSGesture,j.target=document.body);b(document).bind("MSGestureEnd",function(b){if(b=1<b.originalEvent.velocityX?"Right":-1>b.originalEvent.velocityX?"Left":1<b.originalEvent.velocityY?"Down":-1>b.originalEvent.velocityY?"Up":null)a.el.trigger("swipe"),
a.el.trigger("swipe"+b)}).on("touchstart MSPointerDown",function(c){if("MSPointerDown"!=c.type||c.originalEvent.pointerType==c.originalEvent.MSPOINTER_TYPE_TOUCH&&c.originalEvent.isPrimary)m="MSPointerDown"==c.type?c:c.originalEvent.touches[0],n=Date.now(),p=n-(a.last||n),a.el=b("tagName"in m.target?m.target:m.target.parentNode),f&&clearTimeout(f),a.x1=m.pageX,a.y1=m.pageY,0<p&&250>=p&&(a.isDoubleTap=!0),a.last=n,d=setTimeout(h,750),j&&"MSPointerDown"==c.type&&j.addPointer(c.originalEvent.pointerId)}).on("touchmove MSPointerMove",
function(b){if("MSPointerMove"!=b.type||b.originalEvent.pointerType==b.originalEvent.MSPOINTER_TYPE_TOUCH&&b.originalEvent.isPrimary)m="MSPointerMove"==b.type?b:b.originalEvent.touches[0],d&&clearTimeout(d),d=null,a.x2=m.pageX,a.y2=m.pageY,l+=Math.abs(a.x1-a.x2),k+=Math.abs(a.y1-a.y2)}).on("touchend MSPointerUp",function(j){if("MSPointerUp"!=j.type||j.originalEvent.pointerType==j.originalEvent.MSPOINTER_TYPE_TOUCH&&j.originalEvent.isPrimary)d&&clearTimeout(d),d=null,a.x2&&30<Math.abs(a.x1-a.x2)||
a.y2&&30<Math.abs(a.y1-a.y2)?c=setTimeout(function(){a.el.trigger("swipe");a.el.trigger("swipe"+(Math.abs(a.x1-a.x2)>=Math.abs(a.y1-a.y2)?0<a.x1-a.x2?"Left":"Right":0<a.y1-a.y2?"Up":"Down"));a={}},0):"last"in a&&(isNaN(l)||30>l&&30>k?g=setTimeout(function(){var c=b.Event("tap");c.cancelTouch=e;a.el.trigger(c);a.isDoubleTap?(a.el.trigger("doubleTap"),a={}):f=setTimeout(function(){f=null;a.el.trigger("singleTap");a={}},250)},0):a={},l=k=0)}).on("touchcancel MSPointerCancel",e);b(window).on("scroll",
e)});"swipe swipeLeft swipeRight swipeUp swipeDown doubleTap tap singleTap longTap".split(" ").forEach(function(c){b.fn[c]=function(a){return b(this).on(c,a)}})})(jQuery);
(function(b,h){var e=function(a,f){var g=this;this.options=b.extend({},e.defaults,f);this.element=b(a);this.element.data("alert")||(this.element.on("click",this.options.trigger,function(b){b.preventDefault();g.close()}),this.element.data("alert",this))};b.extend(e.prototype,{close:function(){function b(){f.trigger("closed").remove()}var f=this.element.trigger("close");this.options.fade?f.css("overflow","hidden").css("max-height",f.height()).animate({height:0,opacity:0,"padding-top":0,"padding-bottom":0,
"margin-top":0,"margin-bottom":0},this.options.duration,b):b()}});e.defaults={fade:!0,duration:200,trigger:".firtz-alert-close"};h.alert=e;b(document).on("click.alert.uikit","[data-firtz-alert]",function(a){var f=b(this);if(!f.data("alert")){var g=new e(f,h.Utils.options(f.data("firtz-alert")));b(a.target).is(f.data("alert").options.trigger)&&(a.preventDefault(),g.close())}})})(jQuery,jQuery.UIkit);
(function(b,h){var e=function(a,c){var d=this,j=b(a);j.data("buttonRadio")||(this.options=b.extend({},e.defaults,c),this.element=j.on("click",this.options.target,function(c){c.preventDefault();j.find(d.options.target).not(this).removeClass("firtz-active").blur();j.trigger("change",[b(this).addClass("firtz-active")])}),this.element.data("buttonRadio",this))};b.extend(e.prototype,{getSelected:function(){this.element.find(".firtz-active")}});e.defaults={target:".firtz-button"};var a=function(g,c){var d=b(g);d.data("buttonCheckbox")||
(this.options=b.extend({},a.defaults,c),this.element=d.on("click",this.options.target,function(c){c.preventDefault();d.trigger("change",[b(this).toggleClass("firtz-active").blur()])}),this.element.data("buttonCheckbox",this))};b.extend(a.prototype,{getSelected:function(){this.element.find(".firtz-active")}});a.defaults={target:".firtz-button"};var f=function(a,c){var d=this,j=b(a);j.data("button")||(this.options=b.extend({},f.defaults,c),this.element=j.on("click",function(b){b.preventDefault();d.toggle();
j.trigger("change",[j.blur().hasClass("firtz-active")])}),this.element.data("button",this))};b.extend(f.prototype,{options:{},toggle:function(){this.element.toggleClass("firtz-active")}});f.defaults={};h.button=f;h.buttonCheckbox=a;h.buttonRadio=e;b(document).on("click.buttonradio.uikit","[data-firtz-button-radio]",function(a){var c=b(this);c.data("buttonRadio")||(c=new e(c,h.Utils.options(c.attr("data-firtz-button-radio"))),b(a.target).is(c.options.target)&&b(a.target).trigger("click"))});b(document).on("click.buttoncheckbox.uikit",
"[data-firtz-button-checkbox]",function(g){var c=b(this);c.data("buttonCheckbox")||(c=new a(c,h.Utils.options(c.attr("data-firtz-button-checkbox"))),b(g.target).is(c.options.target)&&b(g.target).trigger("click"))});b(document).on("click.button.uikit","[data-firtz-button]",function(){var a=b(this);a.data("button")||(new f(a,a.attr("data-firtz-button")),a.trigger("click"))})})(jQuery,jQuery.UIkit);
(function(b,h){var e=!1,a=function(g,c){var d=this,j=b(g);if(!j.data("dropdown")){this.options=b.extend({},a.defaults,c);this.element=j;this.dropdown=this.element.find(".firtz-dropdown");this.centered=this.dropdown.hasClass("firtz-dropdown-center");this.justified=this.options.justify?b(this.options.justify):!1;this.boundary=b(this.options.boundary);this.boundary.length||(this.boundary=b(window));if("click"==this.options.mode||h.support.touch)this.element.on("click",function(c){var a=b(c.target);a.parents(".firtz-dropdown").length||
((a.is("a[href='#']")||a.parent().is("a[href='#']"))&&c.preventDefault(),a.blur());if(d.element.hasClass("firtz-open")){if(a.is("a")||!d.element.find(".firtz-dropdown").find(c.target).length)d.element.removeClass("firtz-open"),e=!1}else d.show()});else this.element.on("mouseenter",function(){d.remainIdle&&clearTimeout(d.remainIdle);d.show()}).on("mouseleave",function(){d.remainIdle=setTimeout(function(){d.element.removeClass("firtz-open");d.remainIdle=!1;e&&e[0]==d.element[0]&&(e=!1)},d.options.remaintime)});
this.element.data("dropdown",this)}};b.extend(a.prototype,{remainIdle:!1,show:function(){e&&e[0]!=this.element[0]&&e.removeClass("firtz-open");this.checkDimensions();this.element.addClass("firtz-open");e=this.element;this.registerOuterClick()},registerOuterClick:function(){var a=this;b(document).off("click.outer.dropdown");setTimeout(function(){b(document).on("click.outer.dropdown",function(c){if(e&&e[0]==a.element[0]&&(b(c.target).is("a")||!a.element.find(".firtz-dropdown").find(c.target).length))e.removeClass("firtz-open"),
b(document).off("click.outer.dropdown")})},10)},checkDimensions:function(){if(this.dropdown.length){var a=this.dropdown.css("margin-"+b.UIkit.langdirection,"").css("min-width",""),c=a.show().offset(),d=a.outerWidth(),j=this.boundary.width(),f=this.boundary.offset()?this.boundary.offset().left:0;if(this.centered&&(a.css("margin-"+b.UIkit.langdirection,-1*(parseFloat(d)/2-a.parent().width()/2)),c=a.offset(),d+c.left>j||0>c.left))a.css("margin-"+b.UIkit.langdirection,""),c=a.offset();if(this.justified&&
this.justified.length){var e=this.justified.outerWidth();a.css("min-width",e);"right"==b.UIkit.langdirection?(c=j-(this.justified.offset().left+e),e=j-(a.offset().left+a.outerWidth()),a.css("margin-right",c-e)):a.css("margin-left",this.justified.offset().left-c.left);c=a.offset()}d+(c.left-f)>j&&(a.addClass("firtz-dropdown-flip"),c=a.offset());0>c.left&&a.addClass("firtz-dropdown-stack");a.css("display","")}}});a.defaults={mode:"hover",remaintime:800,justify:!1,boundary:b(window)};h.dropdown=a;var f=h.support.touch?
"click":"mouseenter";b(document).on(f+".dropdown.uikit","[data-firtz-dropdown]",function(g){var c=b(this);c.data("dropdown")||(c=new a(c,h.Utils.options(c.data("firtz-dropdown"))),("click"==f||"mouseenter"==f&&"hover"==c.options.mode)&&c.show(),c.element.find(".firtz-dropdown").length&&g.preventDefault())})})(jQuery,jQuery.UIkit);
(function(b,h){var e=b(window),a=function(g,c){var d=this,j=b(g);j.data("gridMatchHeight")||(this.options=b.extend({},a.defaults,c),this.element=j,this.columns=this.element.children(),this.elements=this.options.target?this.element.find(this.options.target):this.columns,this.columns.length&&(e.on("resize orientationchange",function(){var a=function(){d.match()};b(function(){a();e.on("load",a)});return h.Utils.debounce(a,150)}()),b(document).on("firtz-domready",function(){d.columns=d.element.children();
d.elements=d.options.target?d.element.find(d.options.target):d.columns;d.match()}),this.element.data("gridMatch",this)))};b.extend(a.prototype,{match:function(){this.revert();var a=this.columns.filter(":visible:first");if(a.length){var c=0,d=this;if(!(100<=Math.ceil(100*parseFloat(a.css("width"))/parseFloat(a.parent().css("width")))))return this.elements.each(function(){c=Math.max(c,b(this).outerHeight())}).each(function(a){var g=b(this),f="border-box"==g.css("box-sizing")?"outerHeight":"height";
a=d.columns.eq(a);f=g.height()+(c-a[f]());g.css("min-height",f+"px")}),this}},revert:function(){this.elements.css("min-height","");return this}});a.defaults={target:!1};var f=function(a){var c=this;a=b(a);a.data("gridMargin")||(this.element=a,this.columns=this.element.children(),this.columns.length&&(e.on("resize orientationchange",function(){var a=function(){c.process()};b(function(){a();e.on("load",a)});return h.Utils.debounce(a,150)}()),b(document).on("firtz-domready",function(){c.columns=c.element.children();
c.process()}),this.element.data("gridMargin",this)))};b.extend(f.prototype,{process:function(){this.revert();var a=!1,c=this.columns.filter(":visible:first"),d=c.length?c.offset().top:!1;if(!1!==d)return this.columns.each(function(){var c=b(this);c.is(":visible")&&(a?c.addClass("firtz-grid-margin"):c.offset().top!=d&&(c.addClass("firtz-grid-margin"),a=!0))}),this},revert:function(){this.columns.removeClass("firtz-grid-margin");return this}});f.defaults={};h.gridMatch=a;h.gridMargin=f;b(document).on("firtz-domready",
function(){b("[data-firtz-grid-match],[data-firtz-grid-margin]").each(function(){var g=b(this);g.is("[data-firtz-grid-match]")&&!g.data("gridMatch")&&new a(g,h.Utils.options(g.attr("data-firtz-grid-match")));g.is("[data-firtz-grid-margin]")&&!g.data("gridMargin")&&new f(g,h.Utils.options(g.attr("data-firtz-grid-margin")))})})})(jQuery,jQuery.UIkit);
(function(b,h,e){var a=!1,f=b("html"),g=function(a,c){var f=this;this.element=b(a);this.options=b.extend({},g.defaults,c);this.transition=h.support.transition;this.dialog=this.element.find(".firtz-modal-dialog");this.element.on("click",".firtz-modal-close",function(a){a.preventDefault();f.hide()}).on("click",function(a){b(a.target)[0]==f.element[0]&&f.options.bgclose&&f.hide()})};b.extend(g.prototype,{transition:!1,toggle:function(){this[this.isActive()?"hide":"show"]()},show:function(){this.isActive()||
(a&&a.hide(!0),this.resize(),this.element.removeClass("firtz-open").show(),a=this,f.addClass("firtz-modal-page").height(),this.element.addClass("firtz-open").trigger("uk.modal.show"))},hide:function(a){if(this.isActive())if(!a&&h.support.transition){var b=this;this.element.one(h.support.transition.end,function(){b._hide()}).removeClass("firtz-open")}else this._hide()},resize:function(){this.dialog.css("margin-left","");var a=parseInt(this.dialog.css("width"),10),b=a+parseInt(this.dialog.css("margin-left"),10)+
parseInt(this.dialog.css("margin-right"),10)<e.width();this.dialog.css("margin-left",a&&b?-1*Math.ceil(a/2):"")},_hide:function(){this.element.hide().removeClass("firtz-open");f.removeClass("firtz-modal-page");a===this&&(a=!1);this.element.trigger("uk.modal.hide")},isActive:function(){return a==this}});g.defaults={keyboard:!0,show:!1,bgclose:!0};var c=function(a,c){var f=this,e=b(a);e.data("modal")||(this.options=b.extend({target:e.is("a")?e.attr("href"):!1},c),this.element=e,this.modal=new g(this.options.target,
c),e.on("click",function(a){a.preventDefault();f.show()}),b.each(["show","hide","isActive"],function(a,b){f[b]=function(){return f.modal[b]()}}),this.element.data("modal",this))};c.Modal=g;h.modal=c;b(document).on("click.modal.uikit","[data-firtz-modal]",function(){var a=b(this);a.data("modal")||(new c(a,h.Utils.options(a.attr("data-firtz-modal")))).show()});b(document).on("keydown.modal.uikit",function(b){a&&(27===b.keyCode&&a.options.keyboard)&&(b.preventDefault(),a.hide())});e.on("resize orientationchange",
h.Utils.debounce(function(){a&&a.resize()},150))})(jQuery,jQuery.UIkit,jQuery(window)); (function(b,h){var e,a,f=b(window),g=b(document),c={show:function(d){d=b(d);if(d.length){var h=b("html"),p=d.find(".firtz-offcanvas-bar:first"),l=p.hasClass("firtz-offcanvas-bar-flip")?-1:1,k=-1==l&&f.width()<window.innerWidth?window.innerWidth-f.width():0;e=window.scrollX;a=window.scrollY;d.addClass("firtz-active");h.css({width:window.innerWidth,height:window.innerHeight}).addClass("firtz-offcanvas-page");h.css("margin-left",(p.outerWidth()-k)*l).width();p.addClass("firtz-offcanvas-bar-show").width();d.off(".ukoffcanvas").on("click.ukoffcanvas swipeRight.ukoffcanvas swipeLeft.ukoffcanvas",
function(a){var d=b(a.target);if(a.type.match(/swipe/)||!d.hasClass("firtz-offcanvas-bar")&&!d.parents(".firtz-offcanvas-bar:first").length)a.stopImmediatePropagation(),c.hide()});g.on("keydown.offcanvas",function(a){27===a.keyCode&&c.hide()})}},hide:function(c){var d=b("html"),f=b(".firtz-offcanvas.firtz-active"),h=f.find(".firtz-offcanvas-bar:first");f.length&&(b.UIkit.support.transition&&!c?(d.one(b.UIkit.support.transition.end,function(){d.removeClass("firtz-offcanvas-page").attr("style","");f.removeClass("firtz-active");
window.scrollTo(e,a)}).css("margin-left",""),setTimeout(function(){h.removeClass("firtz-offcanvas-bar-show")},50)):(d.removeClass("firtz-offcanvas-page").attr("style",""),f.removeClass("firtz-active"),h.removeClass("firtz-offcanvas-bar-show"),window.scrollTo(e,a)),f.off(".ukoffcanvas"),g.off(".ukoffcanvas"))}},d=function(a,d){var g=this,f=b(a);f.data("offcanvas")||(this.options=b.extend({target:f.is("a")?f.attr("href"):!1},d),this.element=f,f.on("click",function(a){a.preventDefault();c.show(g.options.target)}),
this.element.data("offcanvas",this))};d.offcanvas=c;h.offcanvas=d;g.on("click.offcanvas.uikit","[data-firtz-offcanvas]",function(a){a.preventDefault();a=b(this);a.data("offcanvas")||(new d(a,h.Utils.options(a.attr("data-firtz-offcanvas"))),a.trigger("click"))})})(jQuery,jQuery.UIkit);
(function(b,h){function e(a){a=b(a);var g="auto";if(a.is(":visible"))g=a.outerHeight();else{var c={position:a.css("position"),visibility:a.css("visibility"),display:a.css("display")},g=a.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight();a.css(c)}return g}var a=function(f,g){var c=this,d=b(f);d.data("nav")||(this.options=b.extend({},a.defaults,g),this.element=d.on("click",this.options.toggler,function(a){a.preventDefault();a=b(this);c.open(a.parent()[0]==c.element[0]?a:a.parent("li"))}),
this.element.find(this.options.lists).each(function(){var a=b(this),d=a.parent(),g=d.hasClass("firtz-active");a.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>');d.data("list-container",a.parent());g&&c.open(d,!0)}),this.element.data("nav",this))};b.extend(a.prototype,{open:function(a,g){var c=this.element,d=b(a);this.options.multiple||c.children(".firtz-open").not(a).each(function(){b(this).data("list-container")&&b(this).data("list-container").stop().animate({height:0},function(){b(this).parent().removeClass("firtz-open")})});
d.toggleClass("firtz-open");d.data("list-container")&&(g?d.data("list-container").stop().height(d.hasClass("firtz-open")?"auto":0):d.data("list-container").stop().animate({height:d.hasClass("firtz-open")?e(d.data("list-container").find("ul:first")):0}))}});a.defaults={toggler:">li.firtz-parent > a[href='#']",lists:">li.firtz-parent > ul",multiple:!1};h.nav=a;b(document).on("firtz-domready",function(){b("[data-firtz-nav]").each(function(){var f=b(this);f.data("nav")||new a(f,h.Utils.options(f.attr("data-firtz-nav")))})})})(jQuery,
jQuery.UIkit); (function(b,h){var e,a,f=function(a,c){var d=this,e=b(a);e.data("tooltip")||(this.options=b.extend({},f.defaults,c),this.element=e.on({focus:function(){d.show()},blur:function(){d.hide()},mouseenter:function(){d.show()},mouseleave:function(){d.hide()}}),this.tip="function"===typeof this.options.src?this.options.src.call(this.element):this.options.src,this.element.attr("data-cached-title",this.element.attr("title")).attr("title",""),this.element.data("tooltip",this))};b.extend(f.prototype,{tip:"",
show:function(){a&&clearTimeout(a);if(this.tip.length){e.stop().css({top:-2E3,visibility:"hidden"}).show();e.html('<div class="firtz-tooltip-inner">'+this.tip+"</div>");var g=this,c=b.extend({},this.element.offset(),{width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}),d=e[0].offsetWidth,f=e[0].offsetHeight,h="function"===typeof this.options.offset?this.options.offset.call(this.element):this.options.offset,p="function"===typeof this.options.pos?this.options.pos.call(this.element):
this.options.pos,l={display:"none",visibility:"visible",top:c.top+c.height+f,left:c.left},k=p.split("-");if(("left"==k[0]||"right"==k[0])&&"right"==b.UIkit.langdirection)k[0]="left"==k[0]?"right":"left";h={bottom:{top:c.top+c.height+h,left:c.left+c.width/2-d/2},top:{top:c.top-f-h,left:c.left+c.width/2-d/2},left:{top:c.top+c.height/2-f/2,left:c.left-d-h},right:{top:c.top+c.height/2-f/2,left:c.left+c.width+h}};b.extend(l,h[k[0]]);2==k.length&&(l.left="left"==k[1]?c.left:c.left+c.width-d);if(f=this.checkBoundary(l.left,
l.top,d,f)){switch(f){case "x":p=2==k.length?k[0]+"-"+(0>l.left?"left":"right"):0>l.left?"right":"left";break;case "y":p=2==k.length?(0>l.top?"bottom":"top")+"-"+k[1]:0>l.top?"bottom":"top";break;case "xy":p=2==k.length?(0>l.top?"bottom":"top")+"-"+(0>l.left?"left":"right"):0>l.left?"right":"left"}k=p.split("-");b.extend(l,h[k[0]]);2==k.length&&(l.left="left"==k[1]?c.left:c.left+c.width-d)}a=setTimeout(function(){e.css(l).attr("class","firtz-tooltip firtz-tooltip-"+p);g.options.animation?e.css({opacity:0,
display:"block"}).animate({opacity:1},parseInt(g.options.animation,10)||400):e.show();a=!1},parseInt(this.options.delay,10)||0)}},hide:function(){this.element.is("input")&&this.element[0]===document.activeElement||(a&&clearTimeout(a),e.stop(),this.options.animation?e.fadeOut(parseInt(this.options.animation,10)||400):e.hide())},content:function(){return this.tip},checkBoundary:function(a,b,d,f){var e="";if(0>a||a+d>window.innerWidth)e+="x";if(0>b||b+f>window.innerHeight)e+="y";return e}});f.defaults=
{offset:5,pos:"top",animation:!1,delay:0,src:function(){return this.attr("title")}};h.tooltip=f;b(function(){e=b('<div class="firtz-tooltip"></div>').appendTo("body")});b(document).on("mouseenter.tooltip.uikit focus.tooltip.uikit","[data-firtz-tooltip]",function(){var a=b(this);a.data("tooltip")||(new f(a,h.Utils.options(a.attr("data-firtz-tooltip"))),a.trigger("mouseenter"))})})(jQuery,jQuery.UIkit);
(function(b,h){var e=function(a,f){var g=this,c=b(a);c.data("switcher")||(this.options=b.extend({},e.defaults,f),this.element=c.on("click",this.options.toggler,function(a){a.preventDefault();g.show(this)}),this.options.connect&&(this.connect=b(this.options.connect).find(".firtz-active").removeClass(".firtz-active").end(),c=this.element.find(this.options.toggler).filter(".firtz-active"),c.length&&this.show(c)),this.element.data("switcher",this))};b.extend(e.prototype,{show:function(a){a=isNaN(a)?b(a):this.element.find(this.options.toggler).eq(a);
if(!a.hasClass("firtz-disabled")){this.element.find(this.options.toggler).filter(".firtz-active").removeClass("firtz-active");a.addClass("firtz-active");if(this.options.connect&&this.connect.length){var f=this.element.find(this.options.toggler).index(a);this.connect.children().removeClass("firtz-active").eq(f).addClass("firtz-active")}this.element.trigger("uk.switcher.show",[a])}}});e.defaults={connect:!1,toggler:">*"};h.switcher=e;b(document).on("firtz-domready",function(){b("[data-firtz-switcher]").each(function(){var a=
b(this);a.data("switcher")||new e(a,h.Utils.options(a.attr("data-firtz-switcher")))})})})(jQuery,jQuery.UIkit); (function(b,h){var e=function(a,f){var g=this,c=b(a);if(!c.data("tab")){this.element=c;this.options=b.extend({},e.defaults,f);this.options.connect&&(this.connect=b(this.options.connect));window.location.hash&&(c=this.element.children().filter(window.location.hash),c.length&&this.element.children().removeClass("firtz-active").filter(c).addClass("firtz-active"));var d=b('<li class="firtz-tab-responsive firtz-active"><a href="javascript:void(0);"></a></li>'),h=d.find("a:first"),c=b('<div class="firtz-dropdown firtz-dropdown-small"><ul class="firtz-nav firtz-nav-dropdown"></ul><div>'),
n=c.find("ul");h.html(this.element.find("li.firtz-active:first").find("a").text());this.element.hasClass("firtz-tab-bottom")&&c.addClass("firtz-dropdown-up");this.element.hasClass("firtz-tab-flip")&&c.addClass("firtz-dropdown-flip");this.element.find("a").each(function(a){var c=b(this).parent(),c=b('<li><a href="javascript:void(0);">'+c.text()+"</a></li>").on("click",function(){g.element.data("switcher").show(a)});b(this).parents(".firtz-disabled:first").length||n.append(c)});this.element.uk("switcher",{toggler:">li:not(.firtz-tab-responsive)",
connect:this.options.connect});d.append(c).uk("dropdown",{mode:"click"});this.element.append(d).data({dropdown:d.data("dropdown"),mobilecaption:h}).on("uk.switcher.show",function(a,b){d.addClass("firtz-active");h.html(b.find("a").text())});this.element.data("tab",this)}};e.defaults={connect:!1};h.tab=e;b(document).on("firtz-domready",function(){b("[data-firtz-tab]").each(function(){var a=b(this);a.data("tab")||new e(a,h.Utils.options(a.attr("data-firtz-tab")))})})})(jQuery,jQuery.UIkit);
(function(b,h){var e={},a=function(g,c){var d=this,f=b(g);f.data("search")||(this.options=b.extend({},a.defaults,c),this.element=f,this.value=this.timer=null,this.input=this.element.find(".firtz-search-field"),this.form=this.input.length?b(this.input.get(0).form):b(),this.input.attr("autocomplete","off"),this.input.on({keydown:function(a){d.form[d.input.val()?"addClass":"removeClass"](d.options.filledClass);if(a&&a.which&&!a.shiftKey)switch(a.which){case 13:d.done(d.selected);a.preventDefault();break;
case 38:d.pick("prev");a.preventDefault();break;case 40:d.pick("next");a.preventDefault();break;case 27:case 9:d.hide()}},keyup:function(){d.trigger()},blur:function(a){setTimeout(function(){d.hide(a)},200)}}),this.form.find("button[type=reset]").bind("click",function(){d.form.removeClass("firtz-open").removeClass("firtz-loading").removeClass("firtz-active");d.value=null;d.input.focus()}),this.dropdown=b('<div class="firtz-dropdown firtz-dropdown-search"><ul class="firtz-nav firtz-nav-search"></ul></div>').appendTo(this.form).find(".firtz-nav-search"),
this.options.flipDropdown&&this.dropdown.parent().addClass("firtz-dropdown-flip"),this.dropdown.on("mouseover",">li",function(){d.pick(b(this))}),this.renderer=new e[this.options.renderer](this),this.element.data("search",this))};b.extend(a.prototype,{request:function(a){var c=this;this.form.addClass(this.options.loadingClass);this.options.source?b.ajax(b.extend({url:this.options.source,type:this.options.method,dataType:"json",success:function(a){a=c.options.onLoadedResults.apply(this,[a]);c.form.removeClass(c.options.loadingClass);
c.suggest(a)}},a)):this.form.removeClass(c.options.loadingClass)},pick:function(a){var b=!1;"string"!==typeof a&&!a.hasClass(this.options.skipClass)&&(b=a);if("next"==a||"prev"==a)if(b=this.dropdown.children().filter(this.options.match),this.selected)var d=b.index(this.selected),b="next"==a?b.eq(d+1<b.length?d+1:0):b.eq(0>d-1?b.length-1:d-1);else b=b["next"==a?"first":"last"]();b&&b.length&&(this.selected=b,this.dropdown.children().removeClass(this.options.hoverClass),this.selected.addClass(this.options.hoverClass))},
trigger:function(){var a=this,b=this.value,d={};this.value=this.input.val();if(this.value.length<this.options.minLength)return this.hide();this.value!=b&&(this.timer&&window.clearTimeout(this.timer),this.timer=window.setTimeout(function(){d[a.options.param]=a.value;a.request({data:d})},this.options.delay,this));return this},done:function(a){this.renderer.done(a)},suggest:function(a){a&&(!1===a?this.hide():(this.selected=null,this.dropdown.empty(),this.renderer.suggest(a),this.show()))},show:function(){this.visible||
(this.visible=!0,this.form.addClass("firtz-open"))},hide:function(){this.visible&&(this.visible=!1,this.form.removeClass(this.options.loadingClass).removeClass("firtz-open"))}});a.addRenderer=function(a,b){e[a]=b};a.defaults={source:!1,param:"search",method:"post",minLength:3,delay:300,flipDropdown:!1,match:":not(.firtz-skip)",skipClass:"firtz-skip",loadingClass:"firtz-loading",filledClass:"firtz-active",listClass:"results",hoverClass:"firtz-active",onLoadedResults:function(a){return a},renderer:"default"};var f=function(a){this.search=
a;this.options=b.extend({},f.defaults,a.options)};b.extend(f.prototype,{done:function(a){a?(a.hasClass(this.options.moreResultsClass)?this.search.form.submit():a.data("choice")&&(window.location=a.data("choice").url),this.search.hide()):this.search.form.submit()},suggest:function(a){var c=this,d={click:function(a){a.preventDefault();c.done(b(this).parent())}};this.options.msgResultsHeader&&b("<li>").addClass(this.options.resultsHeaderClass+" "+this.options.skipClass).html(this.options.msgResultsHeader).appendTo(this.search.dropdown);
a.results&&0<a.results.length?(b(a.results).each(function(){var a=b('<li><a href="#">'+this.title+"</a></li>").data("choice",this);this.text&&a.find("a").append("<div>"+this.text+"</div>");c.search.dropdown.append(a)}),this.options.msgMoreResults&&(b("<li>").addClass("firtz-nav-divider "+c.options.skipClass).appendTo(c.dropdown),b("<li>").addClass(c.options.moreResultsClass).html('<a href="#">'+c.options.msgMoreResults+"</a>").appendTo(c.search.dropdown).on(d)),c.search.dropdown.find("li>a").on(d)):
this.options.msgNoResults&&b("<li>").addClass(this.options.noResultsClass+" "+this.options.skipClass).html("<a>"+this.options.msgNoResults+"</a>").appendTo(c.search.dropdown)}});f.defaults={resultsHeaderClass:"firtz-nav-header",moreResultsClass:"firtz-search-moreresults",noResultsClass:"",msgResultsHeader:"Search Results",msgMoreResults:"More Results",msgNoResults:"No results found"};a.addRenderer("default",f);h.search=a;b(document).on("focus.search.uikit","[data-firtz-search]",function(){var f=b(this);f.data("search")||
new a(f,h.Utils.options(f.attr("data-firtz-search")))})})(jQuery,jQuery.UIkit); (function(b,h){var e=b(window),a=[],f=function(c,d){if(!b(c).data("scrollspy")){this.options=b.extend({},f.defaults,d);this.element=b(c);var e=this,g,k,m,q=function(){var a=h.Utils.isInView(e.element,e.options);a&&!k&&(g&&clearTimeout(g),m||(e.element.addClass(e.options.initcls),e.offset=e.element.offset(),m=!0,e.element.trigger("firtz-scrollspy-init")),g=setTimeout(function(){a&&e.element.addClass("firtz-scrollspy-inview").addClass(e.options.cls).width()},e.options.delay),k=!0,e.element.trigger("uk.scrollspy.inview"));
!a&&(k&&e.options.repeat)&&(e.element.removeClass("firtz-scrollspy-inview").removeClass(e.options.cls),k=!1,e.element.trigger("uk.scrollspy.outview"))};q();this.element.data("scrollspy",this);this.check=q;a.push(this)}};f.defaults={cls:"firtz-scrollspy-inview",initcls:"firtz-scrollspy-init-inview",topoffset:0,leftoffset:0,repeat:!1,delay:0};h.scrollspy=f;var g=[],c=function(a,d){var f=b(a);if(!f.data("scrollspynav")){this.element=f;this.options=b.extend({},c.defaults,d);var l=[],k=this.element.find("a[href^='#']").each(function(){l.push(b(this).attr("href"))}),
m=b(l.join(",")),q=this,r,f=function(){r=[];for(var a=0;a<m.length;a++)h.Utils.isInView(m.eq(a),q.options)&&r.push(m.eq(a));if(r.length){a=e.scrollTop();a:{for(var b=0;b<r.length;b++)if(r[b].offset().top>=a){a=r[b];break a}a=void 0}a&&(q.options.closest?k.closest(q.options.closest).removeClass(q.options.cls).end().filter("a[href='#"+a.attr("id")+"']").closest(q.options.closest).addClass(q.options.cls):k.removeClass(q.options.cls).filter("a[href='#"+a.attr("id")+"']").addClass(q.options.cls))}};this.options.smoothscroll&&
h.smoothScroll&&k.each(function(){new h.smoothScroll(this,q.options.smoothscroll)});f();this.element.data("scrollspynav",this);this.check=f;g.push(this)}};c.defaults={cls:"firtz-active",closest:!1,topoffset:0,leftoffset:0,smoothscroll:!1};h.scrollspynav=c;var d=function(){for(var b=0;b<a.length;b++)h.support.requestAnimationFrame.apply(window,[a[b].check]);for(b=0;b<g.length;b++)h.support.requestAnimationFrame.apply(window,[g[b].check])};e.on("scroll",d).on("resize orientationchange",h.Utils.debounce(d,
50));b(document).on("firtz-domready",function(){b("[data-firtz-scrollspy]").each(function(){var a=b(this);a.data("scrollspy")||new f(a,h.Utils.options(a.attr("data-firtz-scrollspy")))});b("[data-firtz-scrollspy-nav]").each(function(){var a=b(this);a.data("scrollspynav")||new c(a,h.Utils.options(a.attr("data-firtz-scrollspy-nav")))})})})(jQuery,jQuery.UIkit);
(function(b,h){var e=function(a,f){var g=this,c=b(a);c.data("smoothScroll")||(this.options=b.extend({},e.defaults,f),this.element=c.on("click",function(){var a=b(this.hash).length?b(this.hash):b("body"),c=a.offset().top-g.options.offset,f=b(document).height(),e=b(window).height();a.outerHeight();c+e>f&&(c=f-e);b("html,body").stop().animate({scrollTop:c},g.options.duration,g.options.transition);return!1}),this.element.data("smoothScroll",this))};e.defaults={duration:1E3,transition:"easeOutExpo",offset:0};
h.smoothScroll=e;b.easing.easeOutExpo||(b.easing.easeOutExpo=function(a,b,e,c,d){return b==d?e+c:c*(-Math.pow(2,-10*b/d)+1)+e});b(document).on("click.smooth-scroll.uikit","[data-firtz-smooth-scroll]",function(){var a=b(this);a.data("smoothScroll")||(new e(a,h.Utils.options(a.attr("data-firtz-smooth-scroll"))),a.trigger("click"))})})(jQuery,jQuery.UIkit);
(function(b,h,e){var a=function(b,e){var c=this,d=h(b);d.data("toggle")||(this.options=h.extend({},a.defaults,e),this.totoggle=this.options.target?h(this.options.target):[],this.element=d.on("click",function(a){a.preventDefault();c.toggle()}),this.element.data("toggle",this))};h.extend(a.prototype,{toggle:function(){this.totoggle.length&&this.totoggle.toggleClass(this.options.cls)}});a.defaults={target:!1,cls:"firtz-hidden"};e.toggle=a;h(document).on("click.toggle.uikit","[data-firtz-toggle]",function(){var b=
h(this);b.data("toggle")||(new a(b,e.Utils.options(b.attr("data-firtz-toggle"))),b.trigger("click"))})})(this,jQuery,jQuery.UIkit);</script>