function ajaxsend_form(e){var t=$("#form"+e).serialize(),i=0,n=$("#form"+e+" input").filter(function(){return $(this).data("required")&&""===$(this).val()}).css({"box-shadow":"rgb(239, 76, 76) 0px -10px 3px -7px inset"});return n.length?!1:void $.ajax({type:"POST",url:"php/mail.php",data:t,success:function(t){setTimeout("document.getElementById('parent_popup').style.display='block'",i),$("#form"+e)[0].reset()},error:function(e,t){alert("Возникла ошибка!")}})}!function($){var e={},t={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};$.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){$(this).bxSlider(n)}),this;var s={},o=this;e.el=this;var a=$(window).width(),r=$(window).height(),l=function(){s.settings=$.extend({},t,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"==s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!=s.settings.mode&&function(){var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in t)if(void 0!==e.style[t[i]])return s.cssPrefix=t[i].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"==s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){$(this).data("origStyle",$(this).attr("style"))}),c()},c=function(){o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.loader=$('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"==s.settings.mode?100*s.children.length+215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing");var e=f();s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:h()}),s.settings.pager||s.viewport.parent().css({margin:"0 auto 0px"}),s.children.css({"float":"horizontal"==s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",u()),"horizontal"==s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"==s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"==s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=$('<div class="bx-controls" />'),s.settings.captions&&T(),s.active.last=s.settings.startSlide==v()-1,s.settings.video&&o.fitVids();var t=s.children.eq(s.settings.startSlide);"all"==s.settings.preloadImages&&(t=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.pager&&b(),s.settings.controls&&y(),s.settings.auto&&s.settings.autoControls&&C(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),d(t,g)},d=function(e,t){var i=e.find("img, iframe").length;if(0==i)return void t();var n=0;e.find("img, iframe").each(function(){$(this).one("load",function(){++n==i&&t()}).each(function(){this.complete&&$(this).load()})})},g=function(){if(s.settings.infiniteLoop&&"fade"!=s.settings.mode&&!s.settings.ticker){var e="vertical"==s.settings.mode?s.settings.minSlides:s.settings.maxSlides,t=s.children.slice(0,e).clone().addClass("bx-clone"),i=s.children.slice(-e).clone().addClass("bx-clone");o.append(t).prepend(i)}s.loader.remove(),x(),"vertical"==s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(p()),o.redrawSlider(),s.settings.onSliderLoad(s.active.index),s.initialized=!0,s.settings.responsive&&$(window).bind("resize",F),s.settings.auto&&s.settings.autoStart&&(v()>1||s.settings.autoSlideForOnePage)&&A(),s.settings.ticker&&W(),s.settings.pager&&P(s.settings.startSlide),s.settings.controls&&q(),s.settings.touchEnabled&&!s.settings.ticker&&H()},p=function(){var e=0,t=$();if("vertical"==s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var n=1==s.settings.moveSlides?s.active.index:s.active.index*m();for(t=s.children.eq(n),i=1;i<=s.settings.maxSlides-1;i++)t=n+i>=s.children.length?t.add(s.children.eq(i-1)):t.add(s.children.eq(n+i))}else t=s.children.eq(s.active.index);else t=s.children;return"vertical"==s.settings.mode?(t.each(function(t){e+=$(this).outerHeight()}),s.settings.slideMargin>0&&(e+=s.settings.slideMargin*(s.settings.minSlides-1))):e=Math.max.apply(Math,t.map(function(){return $(this).outerHeight(!1)}).get()),"border-box"==s.viewport.css("box-sizing")?e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"==s.viewport.css("box-sizing")&&(e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),e},h=function(){var e="100%";return s.settings.slideWidth>0&&(e="horizontal"==s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),e},u=function(){var e=s.settings.slideWidth,t=s.viewport.width();return 0==s.settings.slideWidth||s.settings.slideWidth>t&&!s.carousel||"vertical"==s.settings.mode?e=t:s.settings.maxSlides>1&&"horizontal"==s.settings.mode&&(t>s.maxThreshold||t<s.minThreshold&&(e=(t-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides)),e},f=function(){var e=1;if("horizontal"==s.settings.mode&&s.settings.slideWidth>0)if(s.viewport.width()<s.minThreshold)e=s.settings.minSlides;else if(s.viewport.width()>s.maxThreshold)e=s.settings.maxSlides;else{var t=s.children.first().width()+s.settings.slideMargin;e=Math.floor((s.viewport.width()+s.settings.slideMargin)/t)}else"vertical"==s.settings.mode&&(e=s.settings.minSlides);return e},v=function(){var e=0;if(s.settings.moveSlides>0)if(s.settings.infiniteLoop)e=Math.ceil(s.children.length/m());else for(var t=0,i=0;t<s.children.length;)++e,t=i+f(),i+=s.settings.moveSlides<=f()?s.settings.moveSlides:f();else e=Math.ceil(s.children.length/f());return e},m=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=f()?s.settings.moveSlides:f()},x=function(){if(s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop){if("horizontal"==s.settings.mode){var e=s.children.last(),t=e.position();w(-(t.left-(s.viewport.width()-e.outerWidth())),"reset",0)}else if("vertical"==s.settings.mode){var i=s.children.length-s.settings.minSlides,t=s.children.eq(i).position();w(-t.top,"reset",0)}}else{var t=s.children.eq(s.active.index*m()).position();s.active.index==v()-1&&(s.active.last=!0),void 0!=t&&("horizontal"==s.settings.mode?w(-t.left,"reset",0):"vertical"==s.settings.mode&&w(-t.top,"reset",0))}},w=function(e,t,i,n){if(s.usingCSS){var a="vertical"==s.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";o.css("-"+s.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==t?(o.css(s.animProp,a),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),L()})):"reset"==t?o.css(s.animProp,a):"ticker"==t&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,a),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),w(n.resetValue,"reset",0),j()}))}else{var r={};r[s.animProp]=e,"slide"==t?o.animate(r,i,s.settings.easing,function(){L()}):"reset"==t?o.css(s.animProp,e):"ticker"==t&&o.animate(r,speed,"linear",function(){w(n.resetValue,"reset",0),j()})}},S=function(){for(var e="",t=v(),i=0;t>i;i++){var n="";s.settings.buildPager&&$.isFunction(s.settings.buildPager)?(n=s.settings.buildPager(i),s.pagerEl.addClass("bx-custom-pager")):(n=i+1,s.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+n+"</a></div>"}s.pagerEl.html(e)},b=function(){s.settings.pagerCustom?s.pagerEl=$(s.settings.pagerCustom):(s.pagerEl=$('<div class="bx-pager" />'),s.settings.pagerSelector?$(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),S()),s.pagerEl.on("click","a",z)},y=function(){s.controls.next=$('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=$('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click",k),s.controls.prev.bind("click",E),s.settings.nextSelector&&$(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&$(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=$('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},C=function(){s.controls.start=$('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=$('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=$('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",I),s.controls.autoEl.on("click",".bx-stop",M),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?$(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),D(s.settings.autoStart?"stop":"start")},T=function(){s.children.each(function(e){var t=$(this).find("img:first").attr("title");void 0!=t&&(""+t).length&&$(this).append('<div class="bx-caption"><span>'+t+"</span></div>")})},k=function(e){s.settings.auto&&o.stopAuto(),o.goToNextSlide(),e.preventDefault()},E=function(e){s.settings.auto&&o.stopAuto(),o.goToPrevSlide(),e.preventDefault()},I=function(e){o.startAuto(),e.preventDefault()},M=function(e){o.stopAuto(),e.preventDefault()},z=function(e){s.settings.auto&&o.stopAuto();var t=$(e.currentTarget);if(void 0!==t.attr("data-slide-index")){var i=parseInt(t.attr("data-slide-index"));i!=s.active.index&&o.goToSlide(i),e.preventDefault()}},P=function(e){var t=s.children.length;return"short"==s.settings.pagerType?(s.settings.maxSlides>1&&(t=Math.ceil(s.children.length/s.settings.maxSlides)),void s.pagerEl.html(e+1+s.settings.pagerShortSeparator+t)):(s.pagerEl.find("a").removeClass("active"),void s.pagerEl.each(function(t,i){$(i).find("a").eq(e).addClass("active")}))},L=function(){if(s.settings.infiniteLoop){var e="";0==s.active.index?e=s.children.eq(0).position():s.active.index==v()-1&&s.carousel?e=s.children.eq((v()-1)*m()).position():s.active.index==s.children.length-1&&(e=s.children.eq(s.children.length-1).position()),e&&("horizontal"==s.settings.mode?w(-e.left,"reset",0):"vertical"==s.settings.mode&&w(-e.top,"reset",0))}s.working=!1,s.settings.onSlideAfter(s.children.eq(s.active.index),s.oldIndex,s.active.index)},D=function(e){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[e]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+e+")").addClass("active"))},q=function(){1==v()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0==s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index==v()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},A=function(){if(s.settings.autoDelay>0)var e=setTimeout(o.startAuto,s.settings.autoDelay);else o.startAuto();s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},W=function(){var e=0;if("next"==s.settings.autoDirection)o.append(s.children.clone().addClass("bx-clone"));else{o.prepend(s.children.clone().addClass("bx-clone"));var t=s.children.first().position();e="horizontal"==s.settings.mode?-t.left:-t.top}w(e,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&!s.usingCSS&&s.viewport.hover(function(){o.stop()},function(){var e=0;s.children.each(function(t){e+="horizontal"==s.settings.mode?$(this).outerWidth(!0):$(this).outerHeight(!0)});var t=s.settings.speed/e,i="horizontal"==s.settings.mode?"left":"top",n=t*(e-Math.abs(parseInt(o.css(i))));j(n)}),j()},j=function(e){speed=e?e:s.settings.speed;var t={left:0,top:0},i={left:0,top:0};"next"==s.settings.autoDirection?t=o.find(".bx-clone").first().position():i=s.children.first().position();var n="horizontal"==s.settings.mode?-t.left:-t.top,a="horizontal"==s.settings.mode?-i.left:-i.top,r={resetValue:a};w(n,"ticker",speed,r)},H=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart",N)},N=function(e){if(s.working)e.preventDefault();else{s.touch.originalPos=o.position();var t=e.originalEvent;s.touch.start.x=t.changedTouches[0].pageX,s.touch.start.y=t.changedTouches[0].pageY,s.viewport.bind("touchmove",O),s.viewport.bind("touchend",R)}},O=function(e){var t=e.originalEvent,i=Math.abs(t.changedTouches[0].pageX-s.touch.start.x),n=Math.abs(t.changedTouches[0].pageY-s.touch.start.y);if(3*i>n&&s.settings.preventDefaultSwipeX?e.preventDefault():3*n>i&&s.settings.preventDefaultSwipeY&&e.preventDefault(),"fade"!=s.settings.mode&&s.settings.oneToOneTouch){var o=0;if("horizontal"==s.settings.mode){var a=t.changedTouches[0].pageX-s.touch.start.x;o=s.touch.originalPos.left+a}else{var a=t.changedTouches[0].pageY-s.touch.start.y;o=s.touch.originalPos.top+a}w(o,"reset",0)}},R=function(e){s.viewport.unbind("touchmove",O);var t=e.originalEvent,i=0;if(s.touch.end.x=t.changedTouches[0].pageX,s.touch.end.y=t.changedTouches[0].pageY,"fade"==s.settings.mode){var n=Math.abs(s.touch.start.x-s.touch.end.x);n>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto())}else{var n=0;"horizontal"==s.settings.mode?(n=s.touch.end.x-s.touch.start.x,i=s.touch.originalPos.left):(n=s.touch.end.y-s.touch.start.y,i=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0==s.active.index&&n>0||s.active.last&&0>n)?w(i,"reset",200):Math.abs(n)>=s.settings.swipeThreshold?(0>n?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):w(i,"reset",200)}s.viewport.unbind("touchend",R)},F=function(e){if(s.initialized){var t=$(window).width(),i=$(window).height();a==t&&r==i||(a=t,r=i,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}};return o.goToSlide=function(e,t){if(!s.working&&s.active.index!=e)if(s.working=!0,s.oldIndex=s.active.index,0>e?s.active.index=v()-1:e>=v()?s.active.index=0:s.active.index=e,s.settings.onSlideBefore(s.children.eq(s.active.index),s.oldIndex,s.active.index),"next"==t?s.settings.onSlideNext(s.children.eq(s.active.index),s.oldIndex,s.active.index):"prev"==t&&s.settings.onSlidePrev(s.children.eq(s.active.index),s.oldIndex,s.active.index),s.active.last=s.active.index>=v()-1,s.settings.pager&&P(s.active.index),s.settings.controls&&q(),"fade"==s.settings.mode)s.settings.adaptiveHeight&&s.viewport.height()!=p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){$(this).css("zIndex",s.settings.slideZIndex),L()});else{s.settings.adaptiveHeight&&s.viewport.height()!=p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed);var i=0,n={left:0,top:0};if(!s.settings.infiniteLoop&&s.carousel&&s.active.last)if("horizontal"==s.settings.mode){var a=s.children.eq(s.children.length-1);n=a.position(),i=s.viewport.width()-a.outerWidth()}else{var r=s.children.length-s.settings.minSlides;n=s.children.eq(r).position()}else if(s.carousel&&s.active.last&&"prev"==t){var l=1==s.settings.moveSlides?s.settings.maxSlides-m():(v()-1)*m()-(s.children.length-s.settings.maxSlides),a=o.children(".bx-clone").eq(l);n=a.position()}else if("next"==t&&0==s.active.index)n=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1;else if(e>=0){var c=e*m();n=s.children.eq(c).position()}if("undefined"!=typeof n){var d="horizontal"==s.settings.mode?-(n.left-i):-n.top;w(d,"slide",s.settings.speed)}}},o.goToNextSlide=function(){if(s.settings.infiniteLoop||!s.active.last){var e=parseInt(s.active.index)+1;o.goToSlide(e,"next")}},o.goToPrevSlide=function(){if(s.settings.infiniteLoop||0!=s.active.index){var e=parseInt(s.active.index)-1;o.goToSlide(e,"prev")}},o.startAuto=function(e){s.interval||(s.interval=setInterval(function(){"next"==s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.autoControls&&1!=e&&D("stop"))},o.stopAuto=function(e){s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.autoControls&&1!=e&&D("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideCount=function(){return s.children.length},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).width(u()),s.viewport.css("height",p()),s.settings.ticker||x(),s.active.last&&(s.active.index=v()-1),s.active.index>=v()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(S(),P(s.active.index))},o.destroySlider=function(){s.initialized&&(s.initialized=!1,$(".bx-clone",this).remove(),s.children.each(function(){void 0!=$(this).data("origStyle")?$(this).attr("style",$(this).data("origStyle")):$(this).removeAttr("style")}),void 0!=$(this).data("origStyle")?this.attr("style",$(this).data("origStyle")):$(this).removeAttr("style"),$(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&s.pagerEl.remove(),$(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&$(window).unbind("resize",F))},o.reloadSlider=function(e){void 0!=e&&(n=e),o.destroySlider(),l()},l(),this}}(jQuery),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function($){var e=navigator.userAgent,t=/iphone/i.test(e),i=/chrome/i.test(e),n=/android/i.test(e),s;$.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},$.fn.extend({caret:function(e,t){var i;if(0!==this.length&&!this.is(":hidden")&&this.get(0)===document.activeElement)return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(i=this.createTextRange(),i.collapse(!0),i.moveEnd("character",t),i.moveStart("character",e),i.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(i=document.selection.createRange(),e=0-i.duplicate().moveStart("character",-1e5),t=e+i.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(e,o){var a,r,l,c,d,g,p,h;if(!e&&this.length>0){a=$(this[0]);var u=a.data($.mask.dataName);return u?u():void 0}return o=$.extend({autoclear:$.mask.autoclear,placeholder:$.mask.placeholder,completed:null},o),r=$.mask.definitions,l=[],c=p=e.length,d=null,e=String(e),$.each(e.split(""),function(e,t){"?"==t?(p--,c=e):r[t]?(l.push(new RegExp(r[t])),null===d&&(d=l.length-1),c>e&&(g=l.length-1)):l.push(null)}),this.trigger("unmask").each(function(){function a(){if(o.completed){for(var e=d;g>=e;e++)if(l[e]&&I[e]===u(e))return;o.completed.call(E)}}function u(e){return e<o.placeholder.length?o.placeholder.charAt(e):o.placeholder.charAt(0)}function f(e){for(;++e<p&&!l[e];);return e}function v(e){for(;--e>=0&&!l[e];);return e}function m(e,t){var i,n;if(!(0>e)){for(i=e,n=f(t);p>i;i++)if(l[i]){if(!(p>n&&l[i].test(I[n])))break;I[i]=I[n],I[n]=u(n),n=f(n)}T(),E.caret(Math.max(d,e))}}function x(e){var t,i,n,s;for(t=e,i=u(e);p>t;t++)if(l[t]){if(n=f(t),s=I[t],I[t]=i,!(p>n&&l[n].test(s)))break;i=s}}function w(e){var t=E.val(),i=E.caret();if(h&&h.length&&h.length>t.length){for(k(!0);i.begin>0&&!l[i.begin-1];)i.begin--;if(0===i.begin)for(;i.begin<d&&!l[i.begin];)i.begin++;E.caret(i.begin,i.begin)}else{var n=k(!0),s=t.charAt(i.begin);i.begin<p&&(l[i.begin]?l[i.begin].test(s)&&i.begin++:(i.begin++,l[i.begin].test(s)&&i.begin++)),E.caret(i.begin,i.begin)}a()}function S(e){k(),E.val()!=z&&E.change()}function b(e){if(!E.prop("readonly")){var i=e.which||e.keyCode,n,s,o;h=E.val(),8===i||46===i||t&&127===i?(n=E.caret(),s=n.begin,o=n.end,o-s===0&&(s=46!==i?v(s):o=f(s-1),o=46===i?f(o):o),C(s,o),m(s,o-1),e.preventDefault()):13===i?S.call(this,e):27===i&&(E.val(z),E.caret(0,k()),e.preventDefault())}}function y(e){if(!E.prop("readonly")){var t=e.which||e.keyCode,i=E.caret(),s,o,r;if(!(e.ctrlKey||e.altKey||e.metaKey||32>t)&&t&&13!==t){if(i.end-i.begin!==0&&(C(i.begin,i.end),m(i.begin,i.end-1)),s=f(i.begin-1),p>s&&(o=String.fromCharCode(t),l[s].test(o))){if(x(s),I[s]=o,T(),r=f(s),n){var c=function(){$.proxy($.fn.caret,E,r)()};setTimeout(c,0)}else E.caret(r);i.begin<=g&&a()}e.preventDefault()}}}function C(e,t){var i;for(i=e;t>i&&p>i;i++)l[i]&&(I[i]=u(i))}function T(){E.val(I.join(""))}function k(e){var t=E.val(),i=-1,n,s,a;for(n=0,a=0;p>n;n++)if(l[n]){for(I[n]=u(n);a++<t.length;)if(s=t.charAt(a-1),l[n].test(s)){I[n]=s,i=n;break}if(a>t.length){C(n+1,p);break}}else I[n]===t.charAt(a)&&a++,c>n&&(i=n);return e?T():c>i+1?o.autoclear||I.join("")===M?(E.val()&&E.val(""),C(0,p)):T():(T(),E.val(E.val().substring(0,i+1))),c?n:d}var E=$(this),I=$.map(e.split(""),function(e,t){return"?"!=e?r[e]?u(t):e:void 0}),M=I.join(""),z=E.val();E.data($.mask.dataName,function(){return $.map(I,function(e,t){return l[t]&&e!=u(t)?e:null}).join("")}),E.one("unmask",function(){E.off(".mask").removeData($.mask.dataName)}).on("focus.mask",function(){if(!E.prop("readonly")){clearTimeout(s);var t;z=E.val(),t=k(),s=setTimeout(function(){E.get(0)===document.activeElement&&(T(),t==e.replace("?","").length?E.caret(0,t):E.caret(t))},10)}}).on("blur.mask",S).on("keydown.mask",b).on("keypress.mask",y).on("input.mask paste.mask",function(){E.prop("readonly")||setTimeout(function(){var e=k(!0);E.caret(e),a()},0)}),i&&n&&E.off("input.mask").on("input.mask",w),k()})}})}),function($,e){var t,i,n,s,o;e.init=function(e){t=$(this),i=t.children(".before"),n=t.children(".after"),s=$.extend({},$.fn.comparison.defaults,e,t.data()),c(),o={width:i.width(),height:i.height()},t.width(o.width).height(o.height).addClass(s.direction),a(),l(t,n,o,s)};var a=function(){var e=function(e,t,i,n){return function(s){return l(e,t,i,n,s)}}(t,n,o,s);t.on({click:function(){$(this).toggleClass("locked")},mousemove:function(t){$(this).hasClass("locked")||e(t)}})},r=function(){},l=function(e,t,i,n,s){switch(n.direction){case"horizontal":var o;return o="undefined"!=typeof s?s.pageX-e.offset().left:Math.round(n.start*i.width),o<=n.snap?o=0:o>=i.width-n.snap&&(o=i.width),t.css("clip","rect(0, "+i.width+"px, "+i.height+"px, "+o+"px)"),$(".control").css("left",o-1+"px"),o;break;case"vertical":var a;return a="undefined"!=typeof s?s.pageY-e.offset().top:Math.round(n.start*i.height),a<=n.snap?a=0:a>=i.height-n.snap&&(a=i.height),t.css("clip","rect("+a+"px, "+i.width+"px, "+i.height+"px, 0)"),a;break;default:return null}},c=function(){0===i.length&&$.error("Could not find before image."),i.length>1&&$.error("More than one before image."),0===n.length&&$.error("Could not find after image."),n.length>1&&$.error("More than one after image."),i.width()===n.width()&&i.height()===n.height()||$.error("Images should have the same dimensions."),"boolean"!=typeof s.css&&$.error('Option "css" is not boolean.'),-1===$.inArray(s.direction,["horizontal","vertical"])&&$.error('Option "direction" is invalid ("'+s.direction+'").'),("number"!=typeof s.start||s.start<0&&s.start>1)&&$.error('Option "start" should be a float in interval [0, 1].')}}(jQuery,window.comparison=window.comparison||{}),function($,e){$.fn.comparison=function(t){return this.each(function(){e.init.call(this,t)})},$.fn.comparison.defaults={css:!1,direction:"horizontal",snap:20,start:.5}}(jQuery,comparison),$(document).ready(function(){function e(){var e={zoom:10,disableDefaultUI:!0,zoomControl:!0,scrollwheel:!1,center:new google.maps.LatLng(55.755031,37.616579),styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}]},t=new google.maps.Map(document.getElementById("map"),e),i="img/blue-point.png",n="img/orange-point.png",s=new google.maps.LatLng(55.708412,37.423457),o=new google.maps.Marker({position:s,map:t,icon:i}),a=new google.maps.LatLng(55.829285,37.647615),r=new google.maps.Marker({position:a,map:t,icon:i}),l=new google.maps.LatLng(55.885058,37.407279),c=new google.maps.Marker({position:l,map:t,icon:n}),d=new google.maps.LatLng(55.782211,37.509599),g=new google.maps.Marker({position:d,map:t,icon:i}),p=new google.maps.LatLng(55.620091,37.622836),h=new google.maps.Marker({position:p,map:t,icon:i}),u=new google.maps.LatLng(55.651184,37.77153),f=new google.maps.Marker({position:u,map:t,icon:i}),v=new google.maps.LatLng(55.745883,37.838229),m=new google.maps.Marker({position:v,map:t,icon:i}),x=[o,r,c,g,h,f,m];google.maps.event.addDomListener(o,"click",function(){for(var e=0;e<x.length;e++)x[e].setIcon(i);$(".contacts-wrp p").removeClass("active"),$(".contacts-wrp p.a1").addClass("active"),x[0].setIcon(n)}),google.maps.event.addDomListener(r,"click",function(){for(var e=0;e<x.length;e++)x[e].setIcon(i);$(".contacts-wrp p").removeClass("active"),$(".contacts-wrp p.a2").addClass("active"),x[1].setIcon(n)}),google.maps.event.addDomListener(c,"click",function(){for(var e=0;e<x.length;e++)x[e].setIcon(i);$(".contacts-wrp p").removeClass("active"),$(".contacts-wrp p.a3").addClass("active"),x[2].setIcon(n)}),google.maps.event.addDomListener(g,"click",function(){for(var e=0;e<x.length;e++)x[e].setIcon(i);$(".contacts-wrp p").removeClass("active"),$(".contacts-wrp p.a4").addClass("active"),x[3].setIcon(n)}),google.maps.event.addDomListener(h,"click",function(){for(var e=0;e<x.length;e++)x[e].setIcon(i);$(".contacts-wrp p").removeClass("active"),$(".contacts-wrp p.a5").addClass("active"),x[4].setIcon(n)}),google.maps.event.addDomListener(f,"click",function(){for(var e=0;e<x.length;e++)x[e].setIcon(i);$(".contacts-wrp p").removeClass("active"),$(".contacts-wrp p.a6").addClass("active"),x[5].setIcon(n)}),google.maps.event.addDomListener(m,"click",function(){for(var e=0;e<x.length;e++)x[e].setIcon(i);$(".contacts-wrp p").removeClass("active"),$(".contacts-wrp p.a7").addClass("active"),x[6].setIcon(n)});var w="a3";$(".contacts-wrp p").removeClass("active"),$(".contacts-wrp p."+w).addClass("active"),$(".contacts-wrp p").click(function(){var e=$(this).attr("class").split(" ")[1];$(".contacts-wrp p").removeClass("active"),$(".contacts-wrp p."+e).addClass("active"),$(".contacts-wrp p.a1").hasClass("active")?o.setIcon(n):o.setIcon(i),$(".contacts-wrp p.a2").hasClass("active")?r.setIcon(n):r.setIcon(i),$(".contacts-wrp p.a3").hasClass("active")?c.setIcon(n):c.setIcon(i),$(".contacts-wrp p.a4").hasClass("active")?g.setIcon(n):g.setIcon(i),$(".contacts-wrp p.a5").hasClass("active")?h.setIcon(n):h.setIcon(i),$(".contacts-wrp p.a6").hasClass("active")?f.setIcon(n):f.setIcon(i),$(".contacts-wrp p.a7").hasClass("active")?m.setIcon(n):m.setIcon(i)})}$(".phone-inp").mask("+7 (999) 999-99-99"),$("input, textarea").click(function(){$(this).css({"box-shadow":"none"})}),$("a.smooth").click(function(){var e=$(this).attr("href"),t=$(e).position().top;return $("html, body").animate({scrollTop:t},1e3),!1});var t="c2";$(".cars .car").removeClass("active"),$(".cars .car-text").hide(),$(".cars .car."+t).addClass("active"),$(".cars .car-text."+t).show(),$(".cars .car").hover(function(){var e=$(this).attr("class").split(" ")[1];$(".cars .car").removeClass("active"),$(".cars .car-text").hide(),$(".cars .car."+e).addClass("active"),$(".cars .car-text."+e).show()}),$(".reviews .reviews-slider").bxSlider({mode:"horizontal",speed:800,auto:!1,slideMargin:10,slideWidth:1170,touchEnabled:!0}),$(".opacity, .close").click(function(){$(".politics-popup").animate({opacity:0},400),$(".opacity").animate({opacity:0},200),$(".opacity, #parent_popup, .politics-popup").hide(),$("body").css({"overflow-y":"auto"})}),google.maps.event.addDomListener(window,"load",e)}),$(window).load(function(){$(".jquery-comparison.comp1").comparison()}),jQuery.fn.notExists=function(){return 0==$(this).length};