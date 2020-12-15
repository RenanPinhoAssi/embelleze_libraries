var e=!0,t=window.console,a={code:"0",string:"No Error",diagnostic:"No Error"},s={code:"101",string:"General Exception",diagnostic:"General Exception"},i=!1,o=null;function n(){if(i)return"true";var e=v();if(null==e)return w("Unable to locate the LMS's API Implementation.\nLMSInitialize was not successful."),"false";var t=e.LMSInitialize("");"true"!=t.toString()?w("LMSInitialize failed with error code: "+p().code):i=!0;return t.toString()}function r(){if(!i)return"true";var e=v();if(null==e)return w("Unable to locate the LMS's API Implementation.\nLMSFinish was not successful."),"false";var t=e.LMSFinish("");return"true"!=t.toString()&&w("LMSFinish failed with error code: "+p().code),i=!1,t.toString()}function c(e){var t=v(),s="";if(null==t)w("Unable to locate the LMS's API Implementation.\nLMSGetValue was not successful.");else if(i||n()){s=t.LMSGetValue(e);var o=p();o.code!=a.code&&(w("LMSGetValue("+e+") failed. \n"+o.code+": "+o.string),s="")}else{w("LMSGetValue failed - Could not initialize communication with the LMS - error code: "+p().code)}return s.toString()}function l(e,t){var a=v(),s="false";if(null==a)w("Unable to locate the LMS's API Implementation.\nLMSSetValue was not successful.");else if(i||n()){if("true"!=(s=a.LMSSetValue(e,t)).toString())w("LMSSetValue("+e+", "+t+") failed. \n"+(o=p()).code+": "+o.string)}else{var o;w("LMSSetValue failed - Could not initialize communication with the LMS - error code: "+(o=p()).code)}return s.toString()}function d(){var e=v(),t="false";if(null==e)w("Unable to locate the LMS's API Implementation.\nLMSCommit was not successful.");else if(i||n()){if("true"!=(t=e.LMSCommit("")))w("LMSCommit failed - error code: "+p().code)}else{w("LMSCommit failed - Could not initialize communication with the LMS - error code: "+p().code)}return t.toString()}function u(){var e=v();return null==e?(w("Unable to locate the LMS's API Implementation.\nLMSGetLastError was not successful."),s.code):e.LMSGetLastError().toString()}function f(e){var t=v();return null==t?(w("Unable to locate the LMS's API Implementation.\nLMSGetErrorString was not successful."),s.string):t.LMSGetErrorString(e).toString()}function h(e){var t=v();return null==t?(w("Unable to locate the LMS's API Implementation.\nLMSGetDiagnostic was not successful."),"Unable to locate the LMS's API Implementation. LMSGetDiagnostic was not successful."):t.LMSGetDiagnostic(e).toString()}function p(){var e={code:a.code,string:a.string,diagnostic:a.diagnostic},t=v();return null==t?(w("Unable to locate the LMS's API Implementation.\nCannot determine LMS error code."),e.code=s.code,e.string=s.string,e.diagnostic="Unable to locate the LMS's API Implementation. Cannot determine LMS error code.",e):(e.code=t.LMSGetLastError().toString(),e.code!=a.code&&(e.string=t.LMSGetErrorString(e.code),e.diagnostic=t.LMSGetDiagnostic("")),e)}function v(){return null==o&&(o=b()),o}function g(e){for(var t=0;null==e.API&&null!=e.parent&&e.parent!=e;){if(++t>7)return w("Error finding API -- too deeply nested."),null;e=e.parent}return e.API}function b(){var e=g(window);return null==e&&null!=window.opener&&void 0!==window.opener&&(e=g(window.opener)),null==e&&w("Unable to find an API adapter"),e}function w(a){e&&t.log(a)}function S(){return n(),c("cmi.core.student_id").split("scone_prod.")[1]}class C{constructor(){this.aps_elements={}}get_aps(e){return this.aps_elements[e]}include_aps(e,t){this.aps_elements[e]=t}remove_aps(e){this.aps_elements[e].finish(),delete this.aps_elements[e]}}class x{constructor(e){this.html_element=$(e),this.frames=$(this.html_element).find(".frame"),this.flags={},this.setup_flags(),this.flags.autoplay&&this.play()}setup_flags(){let e=$(this.html_element).attr("animation-style"),t=$(this.html_element).attr("animation-configuration").split(" ");for(var a in t){let e=t[a];this.flags[e]=!0}if(this.flags.looping){let e=Math.abs(Number($(this.html_element).attr("looping-counter")));this.flags["looping-counter"]=e||-1}else this.flags["looping-counter"]=1;this.flags["animation-style"]=e||""}finish(){console.log("Maybe I should do something with this...")}play(){let e=this;return new Promise(async function(t,a){switch(e.flags["animation-style"]){case"moveline":t();default:await e.regular_animation(),t()}})}async regular_animation(){let e,t,a,s=this,i=0;for(;-1==s.flags["looping-counter"]||i<s.flags["looping-counter"];){for(var o=0;o<s.frames.length;o++){t=s.frames[o],a=Number($(t).attr("frame-duration"));try{$(e).hide()}catch(e){}$(t).show(),await L(a),e=t}if(s.flags.palinmation)for(o=s.frames.length-2;o>=0;o--){t=s.frames[o],a=Number($(t).attr("frame-duration"));try{$(e).hide()}catch(e){}$(t).show(),await L(a),e=t}i++}}}var L=function(e){return new Promise(t=>setTimeout(t,e))},k=function(e){let t=0;$.each($(e),function(e,a){let s=$(a).outerHeight();t=s>t?s:t}),$.each($(e),function(e,a){$(a).height(t)})},M=function(e,t){let a=0;for(let t=0;t<e.length-1;t++){let s=$(e[t]).outerHeight();a<s&&(a=s)}t.css("min-height",a)},z=function(e,t,a){let s=$(e).offset().top-t-a;window.scrollTo(0,s)},T=function(){var e=new C;function t(e,t,a,s,i){let o;return $(e[a]).addClass("not-active"),a+=i,$(e[a]).removeClass("not-active"),o=a==e.length-1?100:Math.round(s+s*a),t.attr("aria-valuenow",o),t.css("width",o+"%"),a}function a(e,t,a){let s=$(t).position();return $(e).css({top:s.top,left:s.left}),$(e).attr("actual-cell",t.id),$(e).css("zIndex",1),a[t.id].correct==$(e)[0]}function s(e,t,a,s){let i=e[t].Title,o=_.shuffle(e[t].Answers);for(var n in $(a).html(i),o)$(s[n]).html(o[n].Title);return o}$.each($(".aps-animator"),function(t,a){let s=$(a).attr("id");a=new x("#"+s);e.include_aps(s,a)}),$.each($(".accordion"),function(e,t){let a,s,i=$($(".card-header")[0]).height(),o=$(".navbar").height();$(this).find(".card");$(".card").on("show.bs.collapse",function(){s=this;try{clearInterval(a)}catch(e){}a=setInterval(()=>{z(s,o,i)},1)}).on("shown.bs.collapse",function(){clearInterval(a),z(s,o,i)})}),$.each($(".accordion-automatic"),function(e,t){let a="aan-"+e,s=$(this).find(".card");$(this).attr("id",a),$.each(s,function(e,t){let s=$(t).children("div"),i=s[0],o=s[1],n=a+"_tab_"+e;e%2==1?$(i).addClass("card-header light-color pointer collapsed"):$(i).addClass("card-header pointer collapsed"),$(i).attr("data-toggle","collapse"),$(i).attr("data-target","#"+n),$(o).addClass("card-body collapse"),$(o).attr("id",n)})}),$.each($(".tabs"),function(e,t){let a="tab-"+e,s=$(this).find(".tab-items"),i=$(s).find("a"),o=$(this).find(".tab-pane");$(i[0]).addClass("active"),$(o[0]).addClass("active"),$(i).wrapAll("<ul class='nav nav-tabs'></ul>"),$.each(i,function(e,t){let s=a+"-item-"+e;$(t).addClass("nav-link"),$(t).attr("href","#"+s),$(t).attr("data-toggle","tab"),$(t).wrap("<li class='nav-item'></li>"),$(o[e]).attr("id",s)})}),$.each($(".carousel"),function(e,t){let a="car-id-"+e,s=$.parseHTML("<ol class='carousel-indicators'></ol>"),i=$(this).find(".carousel-item");$(t).attr("id",a),$(t).prepend(s),$.each(i,function(e,t){let i=$.parseHTML("<li data-target='' data-slide-to='' data-ride='carousel'></li>");$(i).attr("data-target","#"+a),$(i).attr("data-slide-to",e),$(i).attr("data-ride","carousel"),0==e&&($(i).attr("class","active"),$(t).addClass("active")),$(s).append(i)}),$(this).hasClass("auto-height")&&k(i)}),$.each($(".ventanita"),function(e,t){let a=$(this).find("#ventanita-objects"),s=$(a).children(),i=null,o=$(a).find("#ventanita-placeholder"),n=$(this).find(".ventanita-show");k(s),$.each(n,function(e,t){let n="#"+t.getAttribute("data-turnon"),r=s[e+1],c="#null"!=n?$(a).find(n):$(r);$(t).on("click",function(){$(i).removeClass("active"),$(o).removeClass("active"),$(this).addClass("active"),c.addClass("active"),i=$(this),o=$(c)})})}),$.each($(".ventanitas_pin_marker"),function(e,t){let a=$(this).find("#ventanita-objects"),s=$(a).children(),i=null,o=$(a).find("#ventanita-placeholder"),n=$(this).find(".ventanita-show"),r=$(this).find(".pin-marker"),c=$(r).width()/4,l=$(r).height()/4;$(r).css("top",0),$(r).css("left",0),k($(this).find(".ventana")),$.each(n,function(e,t){let n="#"+t.getAttribute("data-turnon"),d=s[e+1],u="#null"!=n?$(a).find(n):$(d);$(t).on("click",function(){$(r).show();let e=$(this).position(),t=e.left-c,a=e.top-l;$(r).css("top",a),$(r).css("left",t),$(i).removeClass("active"),$(o).removeClass("active"),$(this).addClass("active"),u.addClass("active"),i=$(this),o=$(u)})})}),$.each($(".circle_slider"),function(e,t){let a=2;var s,i=$($(t).find(".itemDot")),o=$($(t).find(".dotCircle")),n=o.width();s=n/2;var r=o.height(),c=0,l=2*Math.PI/i.length;i.each(function(){var e=Math.round(n/2+s*Math.cos(c)-$(this).width()/2),t=Math.round(r/2+s*Math.sin(c)-$(this).height()/2);$(this).css({left:e+"px",top:t+"px"}),c+=l}),$($(t).find(".itemDot")).click(function(){var e=$(this).data("tab");i.removeClass("active"),$(this).addClass("active"),$($(t).find(".CirItem")).removeClass("active"),$($(t).find(".CirItem"+e)).addClass("active"),a=e,o.css({transform:"rotate("+(360-36*(a-1))+"deg)",transition:"2s"}),i.css({transform:"rotate("+36*(a-1)+"deg)",transition:"1s"})})}),$(".ba-slider").each(function(){var e,t,a,s=$(this),i=s.width()+"px";s.find(".resize img").css("width",i),e=s.find(".handle"),t=s.find(".resize"),a=s,e.on("mousedown touchstart",function(s){e.addClass("draggable"),t.addClass("resizable");var i=s.pageX?s.pageX:s.originalEvent.touches[0].pageX,o=e.outerWidth(),n=e.offset().left+o-i,r=a.offset().left,c=a.outerWidth();minLeft=r+10,maxLeft=r+c-o-10,e.parents().on("mousemove touchmove",function(e){var a=e.pageX?e.pageX:e.originalEvent.touches[0].pageX;leftValue=a+n-o,leftValue<minLeft?leftValue=minLeft:leftValue>maxLeft&&(leftValue=maxLeft),widthValue=100*(leftValue+o/2-r)/c+"%",$(".draggable").css("left",widthValue).on("mouseup touchend touchcancel",function(){$(this).removeClass("draggable"),t.removeClass("resizable")}),$(".resizable").css("width",widthValue)}).on("mouseup touchend touchcancel",function(){e.removeClass("draggable"),t.removeClass("resizable")}),s.preventDefault()}).on("mouseup touchend touchcancel",function(a){e.removeClass("draggable"),t.removeClass("resizable")})}),$(".ba-slider").each(function(){var e=$(this),t=e.width()+"px";e.find(".resize img").css("width",t)}),$.each($(".progress-bar-container"),function(e,a){let s=0,i=$(this).find(".progress-next"),o=$(this).find(".progress-prev"),n=$(this).find(".progress-bar"),r=($(this).find(".text-area"),$(this).find(".text-item")),c=r.length,l=100/r.length;k(r),t(r,n,s,l,0),i.on("click",function(){s<c-1&&(s=t(r,n,s,l,1))}),o.on("click",function(){s>0&&(s=t(r,n,s,l,-1))})}),$.each($(".split_carousel"),function(e,t){let a,s=0,i=$(this).find(".split_button"),o=$(this).find(".text-item");k(o);for(let e=0;e<i.length;e++)$(i[e]).on("click",function(){try{a.removeClass("active")}catch(e){}a=$(this),$(this).addClass("active"),$(o[s]).addClass("not-active"),s=$(this).attr("target-index"),$(o[s]).removeClass("not-active")})}),$.each($(".split_carousel_pin_marker"),function(e,t){let a,s=0,i=$(this).find(".split_button"),o=$(this).find(".text-item"),n=$(this).find(".pin-marker"),r=($(n).width(),$(n).height());$(n).css("top",0),$(n).css("left",0),k($(this).find(".text-item")),$.each(i,function(e,t){$(t).on("click",function(){$(n).show();let e=$(this).parent().position(),t=($(this).parent().outerWidth(),parseInt($(this).parent().css("marginLeft"),10)),i=parseInt($(this).css("paddingLeft"),10)/2,c=$(this).innerWidth()/2,l=e.left+t+i+c,d=e.top-r/2;$(n).css("top",d),$(n).css("left",l);try{a.removeClass("active")}catch(e){}a=$(this),$(this).addClass("active"),$(o[s]).addClass("not-active"),s=$(this).attr("target-index"),$(o[s]).removeClass("not-active")})})}),$.each($(".jesus_slider"),function(e,t){let a=0,s=$(this).find(".back_arrow"),i=$(this).find(".forward_arrow"),o=$(this).find(".jesus-set"),n=$(this).find(".text-item"),r=$(this).find(".jesus-head"),c=$(this).find(".jesus-set").width();k(n),i.on("click",function(){if(a<o.length){let e=parseInt(r.css("margin-left"))-c-32;e+="px",r.animate({marginLeft:e}),$(o[a]).removeClass("active"),$(n[a]).removeClass("active"),a++,$(o[a]).addClass("active"),$(n[a]).addClass("active")}}),s.on("click",function(){if(a>0){let e=parseInt(r.css("margin-left"))+c+32;e+="px",r.animate({marginLeft:e}),$(o[a]).removeClass("active"),$(n[a]).removeClass("active"),a--,$(o[a]).addClass("active"),$(n[a]).addClass("active")}})}),$.each($(".jesus_slider_ball"),function(e,t){let a=0,s=$(this).find(".slide_ball"),i=$(this).find(".jesus-set"),o=$(this).find(".text-item"),n=$(this).find(".jesus-head"),r=$(this).find(".jesus-set").width();k(o),s.each(function(e){$(s[e]).on("click",function(){let t=a-e,s=parseInt(n.css("margin-left"))+r*t+32*t;s+="px",n.animate({marginLeft:s}),$(i[a]).removeClass("active"),$(o[a]).removeClass("active"),a=e,$(i[a]).addClass("active"),$(o[a]).addClass("active")})})}),$.each($(".jesus_slider_no_arrow"),function(e,t){let a=0,s=$(this).find(".slide_ball"),i=$(this).find(".jesus-set"),o=$(this).find(".text-item"),n=$(this).find(".jesus-head"),r=$(this).find(".jesus-set").width();k(o),s.each(function(e){$(s[e]).on("click",function(){let t=a-e,s=parseInt(n.css("margin-left"))+r*t+32*t;s+="px",n.animate({marginLeft:s}),$(i[a]).removeClass("active"),$(o[a]).removeClass("active"),a=e,$(i[a]).addClass("active"),$(o[a]).addClass("active")})})}),$.each($(".jesus_slider_no_arrow_image_background"),function(e,t){let a=0,s=$(this).find(".slide_ball"),i=$(this).find(".jesus-set"),o=$(this).find(".text-item"),n=$(this).find(".jesus-head"),r=$(this).find(".jesus-set").width();k(o),s.each(function(e){$(s[e]).on("click",function(){let t=a-e,s=parseInt(n.css("margin-left"))+r*t+32*t;s+="px",n.animate({marginLeft:s}),$(i[a]).removeClass("active"),$(o[a]).removeClass("active"),a=e,$(i[a]).addClass("active"),$(o[a]).addClass("active")})})}),$.each($(".split_carousel_img"),function(e,t){let a=0,s=$(this).find(".split_button"),i=$(this).find(".text-item");k(i),$(s).on("click",function(){$(i[a]).addClass("not-active"),a=$(this).attr("target-index"),$(i[a]).removeClass("not-active")})}),$.each($(".flipster_slider"),function(e,t){let a=0,s=$(this).find(".flipster-set"),i=$(this).find(".flipster-head"),o=$($(this).find(".flipster-set")[0]).width();s.on("click",function(){let e,t=$(this).attr("order");e=0!=t?-o*t+20*t+20*(t-1):0,$(s[a]).removeClass("active"),a=t,$(s[a]).addClass("active"),e+="px",i.animate({marginLeft:e})})}),$.each($(".flipster_carousel_slider"),function(e,t){let a=0,s=$(this).find(".flipster_carousel-head").find(".fog"),i=$(this).find(".flipster_carousel-set"),o=i.length,n=$(this).find(".flipster_carousel-head"),r=$($(this).find(".flipster_carousel-set")[0]).width(),c=r-.7*r;$.each(i,function(e){let t=o-e;$(this).css("zIndex",t)}),i.on("click",function(e){let t=$(this).attr("order");if(a!=t){s.show(),(s=$(this).find(".fog")).hide();$(i[a]);let e=$(i[t]),r=t-a,l=parseInt(n.css("margin-left"))-c*r,d=Number(t),u=Number(t);for(a=t;d<o;){let e=$(i[d]),t=o-d;e.css("zIndex",t),e.removeClass("flip-right"),e.addClass("flip-left"),d++}for(;u>=0;){let e=$(i[u]),t=u;e.css("zIndex",t),e.removeClass("flip-left"),e.addClass("flip-right"),u--}e.removeClass("flip-left"),e.removeClass("flip-right"),e.css("zIndex",o),l+="px",n.animate({marginLeft:l})}})}),$(".flip-card").on("click",function(){$(this).hasClass("rotate")?$(this).removeClass("rotate"):$(this).addClass("rotate")}),$.each($(".split-list"),function(){let e=$(this).find(".btn-ret").children(),t=$(this).find(".sl-txt"),a=$(e[0]),s=$(t[0]);$.each(e,function(e){$(this).on("click",function(){a.removeClass("active"),s.hide(),a=$(this),s=$(t[e]),a.addClass("active"),s.show()})})}),$.each($(".matchup"),function(e,t){let a=[],s=!1,i=window.innerWidth>480?"settings":"mobile_settings",o=$(this).find(".matchup_container"),n=$(this).find("#cards"),r=JSON.parse(n[0].innerHTML),c=r[i].rows,l=r[i].columns,d=r[i].offset,u=[],f=0,h=0,p=window.innerHeight/c-d/c,m=o.width()/l,v=p<m?p:m,g='style="height:'+v+"px; width:"+v+'px"',b='<div class="matchup-card" '+g+'>                  <div class="flip-card-container">                      <div class="flip-card matchup-card-active" position="unset">                          <div class="flip-card-inner" '+g+'>                              <div class="matchup-card-front flip-card-front" >                                  <img class="logo-fundo" src="assets/images/identity/logos/marca.png">                              </div>                              <div class="matchup-card-back flip-card-back" '+g+'>                                  <img class="matchup-card-content" src="" draggable="false">                                  <div class="frame">                                      <div class="molding">                                          <i class="fas fa-check fa-2x crush-check"></i>                                      </div>                                  </div>                              </div>                          </div>                      </div>                  </div>              </div>';$(n).remove(),$.each(r.cards,function(e,t){t[0].id=f,u.push(t[0]),t[1]?(t[1].id=f,u.push(t[1])):u.push(t[0]),f++}),u=_.shuffle(u);for(var w=0;w<c;w++){let e=$.parseHTML('<div class="row d-flex justify-content-center"></div>')[0];o.append(e);for(var S=0;S<l;S++){let t=$.parseHTML(b)[0];$(t).find(".matchup-card-content").attr("src",u[h].card),$(t).find(".flip-card").attr("position",h),e.append(t),h++}}$(this).find(".matchup-card-active").on("click",function(e){if(!s&&!$(this).hasClass("rotate"))if($(this).addClass("rotate"),a.length>=1){a.push($(this)),s=!0;let e=a[0].attr("position"),t=a[1].attr("position");if(u[e].id==u[t].id){let e=a;a=[],setTimeout(function(){s=!1},200),setTimeout(function(){e[0].removeClass("matchup-card-active"),e[1].removeClass("matchup-card-active")},600)}else setTimeout(function(){a[0].removeClass("rotate"),a[1].removeClass("rotate"),a=[],setTimeout(function(){s=!1},200)},1e3)}else a.push($(this))})}),$.each($(".puzzle"),function(e,t){let s=window.innerWidth>480?"settings":"mobile_settings",i=$(this).find(".puzzle_container"),o=$(this).find("#puzzle_json"),n=JSON.parse(o[0].innerHTML),r=n.img,c=n[s].rows,l=n[s].columns,d=n[s].factor_view,u=(n[s].offset,[]),f=window.innerHeight,h=i.outerWidth(),p=f/c,m=h/l,v=p<m?p:m,g=p<m?f:h,b={},w="",S=0,C="height:"+v*d+"px; width:"+v*d+"px;",x='<div class="puzzle-piece puzzle-dropping" style="'+C+("background-image: url("+r+"); background-size: "+g*d+"px "+g*d+"px")+'"></div>',L='<div class="puzzle-cell puzzle-dropping" style="'+C+'"></div>';$(i).height(p*c),$(i).css("padding-top",p*d),$(o).remove();for(var k=0;k<g;k+=v){let e=$.parseHTML('<div class="row d-flex justify-content-center"></div>')[0];i.append(e);for(var M=0;M<g;M+=v){let t=$.parseHTML(x)[0],s=$.parseHTML(L)[0],i=-M*d+"px "+-k*d+"px",o="cell-"+(k/v+"-"+M/v);u.push(t),$(s).attr("id",o),e.append(s),b[o]={correct:t,status:!1},$(t).css("background-position",i),$(t).draggable({start_handler:function(e){w=$(e).attr("actual-cell"),$(e).css("zIndex",2);try{S+=b[w].status,b[w].status=!1}catch(e){}},droptarget:".puzzle-dropping",drop:function(e,t){let s=!1,i=!1,o=!1;if($(t).hasClass("puzzle-cell"))s=a(this,t,b),b[t.id].status=s;else{let e=$(t).attr("actual-cell");w&&e?(s=a(this,$("#"+e)[0],b),i=a(t,$("#"+w)[0],b),o=b[e].status,b[e].status=s,b[w].status=i):!w&&e&&(s=a(this,$("#"+e)[0],b),o=b[e].status,b[e].status=s,n=t,$(n).css({top:10,left:10}),$(n).attr("actual-cell",""))}var n;if(0==(S+=o-(s+i)))for(var r in u){let e=$(u[r]),t=$("#"+e.attr("actual-cell"));e.draggable("destroy"),e.appendTo(t),t.addClass("complete"),e.addClass("complete")}}}),S++}}u=_.shuffle(u);for(e=0;e<u.length;e++){let t=Math.floor(e/c),a=e%l,s=Math.random(),o=Math.random();s=t*(p/10)+10*(s<.5?-s:s),o=a*(m/10)+10*(o<.5?-o:o),i.append(u[e]),$(u[e]).css({top:s,left:o})}}),$.each($(".quiz"),function(e,t){let a,s,i=$(this).find(".start-menu-screen"),o=$(this).find(".game-screen"),n=$(".moldura"),r=$(".avatar"),c=$(o).width();$(n).on("click",function(){let e=$(this).attr("mob");$(r).addClass(e),$(i).hide(),$(o).show(),a=$(r).width(),s=(c-a)/2,$(r).css({left:s+"px"})})}),$.each($(".close-tab-button"),function(e,t){$(this).on("click",function(){window.location.href="https://institutoembelleze.instructure.com/courses/49/assignments/347?module_item_id=959"})}),$.each($(".lss_quiz"),function(t,a){let i,o=$(this).find("#database"),n=JSON.parse(o[0].innerHTML),r=n.settings,c=n.questions,l=n.gamemode,d=0,u=0,f=r.questions,h=100/f,p=!1,m=" de "+f,v=$(".navbar").height(),g=$(this).find("#game_box"),b=$(this).find(".questionsBox"),w=$(this).find("#choices_group"),S=$(this).find("#progress_lettering"),C=$(this).find("#lettering"),x=[],L=$(this).find("#julia_waiting"),k=$(this).find("#julia_responde");$(k).attr("src");$(S).text(u+1+m),$(S).css({width:h+"%"});for(var M=0;M<r.answers;M++){let t=$.parseHTML('<li>              <label>                  <input                      type="checkbox"                      name="answerGroup"                      class="input-box"                  />                  <div class="checkbox-radio-custom">                      <i class="check-onradio fa fa-check"></i>                  </div>                  <span></span>              </label>          </li>')[0],a=$(t).find("input"),o=$(t).find("span"),n=$(a).parent().find(".check-onradio");a.attr("value",M),a.attr("id","answerGroup_"+M),$(w).append(t),x.push(o),$(a).on("click",function(){if(!p){console.log(g.offset().top-v-15),console.log(g.offset().top),console.log(v),console.log(15),$("html, body").animate({scrollTop:g.offset().top-v-15},200),$(b).hide(),$(L).hide(),$(k).show(),p=!0,$(n).show();let t=$(this).val();d+=i[t].Score,u++,e.get_aps("julia_responde").play().then(function(){if($(b).show(),$(L).show(),$(k).hide(),u<f)i=s(c,u,C,x),S.text(u+1+m),$(S).css({width:(u+1)*h+"%"});else{let t=l.feedback_rule,a=l.feedbacks;if("min-max"==t)for(var e in a){let t=a[e].bounds;if(d>=t[0]&&d<=t[1])return $(g).hide(),$("#demo_final").show(),$("#"+a[e].target).show(),!0}}$(n).hide(),p=!1})}})}c=_.shuffle(c),i=s(c,u,C,x),$(o).remove()}),$.each($(".lss_quiz_no_animation"),function(e,t){$(this).attr("database-name");let a,i=$(this),o={questions:4,answers:4,randomize_questions:!0,randomize_answers:!0},n=[{"Title":"Quando um cliente procurar os seus serviços como colorista, ele pode não ter definido exatamente o que deseja fazer. Sendo assim, qual deve ser a sua primeira atitude ao atender o cliente?","Answers":[{"Title":"Conversar bastante com o cliente, buscando entender como está a sua vida, se ele está feliz com o seu cabelo atual e o que o motivou a querer modificar o visual.","Score":1},{"Title":"Explicar como funciona o processo de tintura química e todos os riscos envolvidos nesse procedimento.","Score":0},{"Title":"Analisar a situação do cabelo do cliente, observando se ele está em condições de receber qualquer tipo de produto químico.","Score":0},{"Title":"Oferecer ao cliente um catálogo com diversas opções de cores e tonalidades para que ele conheça todas as possibilidades e defina qual será a cor do novo visual.","Score":0}],"Feedback-certo":"Isso mesmo! É fundamental conversar com seu cliente para que você verifique se ele está certo da decisão de mudar a cor, além de entender quais são as expectativas quanto ao resultado.","Feedback-chance":"Que pena que você errou. Mas, vamos lá! Pense em toda a experiência que você proporcionará com o atendimento, pois, acima de tudo, ele é o personagem principal de todo o processo.","Feedback-errado":"Não se preocupe, errar faz parte do aprendizado. Assim que você convida o seu cliente para se sentar na cadeira de atendimento, antes de pensar em qualquer procedimento, é importante ter uma boa conversa com ele. Dessa maneira, você entenderá mais sobre quem é seu cliente, os motivos que o levaram a procurar o seu serviço e quais são os desejos e expectativas envolvidos.<br/>Ele pode querer uma mudança radical ou algo sutil, por isso, você deve procurar entender a fundo o que ele deseja."},{"Title":"Um fio de cabelo é composto, basicamente, por três estruturas: medula, córtex e cutícula. Em qual delas a melanina fica armazenada?","Answers":[{"Title":"Na medula.","Score":0},{"Title":"No córtex.","Score":1},{"Title":"Na cutícula.","Score":0},{"Title":"No bulbo piloso.","Score":0}],"Feedback-certo":"Exato! No córtex. Ele é o responsável pela elasticidade, resistência e a cor dos cabelos. É nele que ocorrem a maior parte das interações e transformações físico-químicas.","Feedback-chance":"Você errou, mas não se preocupe. Vamos lá! Os pigmentos precisam ocupar uma área que possua espaço para armazená-los. Uma estrutura porosa, resistente e flexível é o local ideal para isso.","Feedback-errado":"A resposta correta é no córtex. Além de ser o responsável pela elasticidade, resistência dos fios e cor dos cabelos, é no córtex que ocorre a maior parte das interações e transformações físico-químicas."},{"Title":"A melanina existe em duas formas, podendo derivar em até três pigmentos. Qual é o nome de cada tipo de melanina e seu respectivo pigmento predominante?","Answers":[{"Title":"Eumelanina (azul), feomelanina (amarelo) e tricosiderina (vermelho).","Score":1},{"Title":"Queratina (azul), feomelanina (azul), melanina (vermelho).","Score":0},{"Title":"Feomelanina (azul), eumelanina (amarelo) e tricosiderina (vermelho).","Score":0},{"Title":"Queratina (vermelho), feomelanina (amarelo) e tricosiderina (vermelho).","Score":0}],"Feedback-certo":"Correto! Os pigmentos são a eumelanina, cujo pigmento predominante é o azul; a feomelanina, que é o amarelo; e, por fim, a tricosiderina, que é o vermelho.","Feedback-chance":"Você errou, mas vamos dar uma ajudinha. A primeira é responsável pelos cabelos mais escuros; a segunda, pelos mais claros; e a terceira, pelos cabelos avermelhados.","Feedback-errado":"Novamente, você errou, mas vamos explicar. A eumelanina possui pigmento azul; a feomelanina possui pigmento amarelo; e a tricosiderina, derivada da feomelanina e com presença de ferro em sua composição, possui pigmento vermelho."},{"Title":"A <b>altura de tom</b> está relacionada à:","Answers":[{"Title":"forma como são classificados os tons, partindo do tom mais escuro até o mais claro, dentro da sequência de cores naturais. Segue uma escala internacional que vai de 1 a 10.","Score":1},{"Title":"forma como o pigmento de melanina está concentrado na raiz do couro cabeludo, que é o local onde os pigmentos se encontram.","Score":0},{"Title":"forma como são classificados os tons de tinturas de cabelo. Segue uma escala nacional que vai de 1 a 9.","Score":0},{"Title":"forma como os pigmentos de melanina estão distribuídos ao longo do comprimento do fio de cabelo.","Score":0}],"Feedback-certo":"É isso aí!  A altura de tom é a forma como são classificados os tons, partindo do tom mais escuro até o mais claro, dentro da sequência de cores naturais. Segue uma escala internacional que vai de 1 a 10.","Feedback-chance":"Calma! Você errou, mas vamos ajudá-lo. A altura de tom é a forma como enxergamos a cor, da mais clara para a mais escura, e tem algo que nos auxilia a separar cada uma delas.","Feedback-errado":"Uma pena! Você errou novamente. Mas vamos explicar a resposta correta. A altura de tom é a forma como são classificados os tons, partindo do tom mais escuro até o mais claro, dentro da sequência de cores naturais. Segue uma escala internacional que vai de 1 a 10."},{"Title":"O <b>fundo de clareamento</b> de um cabelo é revelado durante o processo de clareamento, em que as cores vão sendo removidas gradativamente, de acordo com o seu pigmento predominante. Qual é o primeiro pigmento eliminado do fio durante esse processo?","Answers":[{"Title":"O azul, por ser mais fraco, desaparece rapidamente.","Score":1},{"Title":"O vermelho, pois apresenta várias tonalidades.","Score":0},{"Title":"O amarelo, por ser o último estágio.","Score":0},{"Title":"Todos são eliminados ao mesmo tempo.","Score":0}],"Feedback-certo":"É isso aí! O primeiro pigmento a ser eliminado é o azul, por ser mais fraco, o que faz com que desapareça rapidamente. Em seguida, o vermelho, o qual, à medida que vai clareando, apresenta várias tonalidades. Por último, é revelado o amarelo e suas variações de tons.","Feedback-chance":"Você errou, mas vamos ajudá-lo. O primeiro pigmento a ser eliminado é o que possui menor concentração e não apresenta variações de tom.","Feedback-errado":"Uma pena! Você errou novamente. Mas vamos explicar a resposta correta. O primeiro pigmento a ser eliminado é o azul, que, por ser mais fraco, desaparece rapidamente. Em seguida, o vermelho, o qual, à medida que vai clareando, apresenta várias tonalidades. Por último, é revelado o amarelo e suas variações de tons."}],r={feedback_mode:!0,feedback_rule:"feed-and-go"},c=0,l=0,d=!1,u=o.questions,f=100/u,h=!1,p=" de "+u,m=i.find(".questionsBox"),v=i.find("#game_box"),g=i.find("#choices_group"),b=i.find("#progress_lettering"),w=i.find("#lettering"),S=[],C=r.feedback_rule,x=r.feedbacks,L=i.find("#feedbackBox"),k=i.find("#feedback_lettering");$(b).text(l+1+p),$(b).css({width:f+"%"});for(var M=0;M<o.answers;M++){let e=$.parseHTML('<li>              <label>                  <input                      type="checkbox"                      name="answerGroup"                      class="input-box"                  />                  <div class="checkbox-radio-custom">                      <i class="check-onradio fa fa-check"></i>                  </div>                  <span></span>              </label>          </li>')[0],t=$(e).find("input"),i=$(e).find("span"),o=$(t).parent().find(".check-onradio");t.attr("value",M),t.attr("id","answerGroup_"+M),$(g).append(e),S.push(i),$(t).on("click",function(){if(!h){h=!0,$(o).show();let e=$(this).val();setTimeout(function(){if("min-max"==C)if(c+=a[e].Score,++l<u)a=s(n,l,w,S),b.text(l+1+p),$(b).css({width:(l+1)*f+"%"});else for(var t in x){let e=x[t].bounds;if(c>=e[0]&&c<=e[1])return $(v).hide(),$("#demo_final").show(),$("#"+x[t].target).show(),!0}else if("feed-and-go"==C){$(m).hide(),$(L).show(),c+=a[e].Score;let t=1==a[e].Score;l<u&&(t?($(k).html(n[l]["Feedback-certo"]),d=!1,++l<u&&(a=s(n,l,w,S),b.text(l+1+p),$(b).css({width:(l+1)*f+"%"}))):d?($(k).html(n[l]["Feedback-errado"]),d=!1,++l<u&&(a=s(n,l,w,S),b.text(l+1+p),$(b).css({width:(l+1)*f+"%"}))):($(k).html(n[l]["Feedback-chance"]),d=!0)),$(o).hide(),h=!1}},800)}})}let z=i.find("#button_continue");$(z).on("click",function(){l<u?($(m).show(),$(L).hide()):($(v).hide(),i.find("#feed_and_go_final_screen").show(),F(c))}),n=_.shuffle(n),a=s(n,l,w,S)})},I="https://embelleze.generalwebsolutions.com.br/api",q=function(){$('[data-toggle="popover"]').popover()},y=function(){console.log("Loading Parallax..."+window.location.href),$.ajax({type:"GET",url:I+"/parallax/get_parallax?url="+window.location.href,contentType:"application/json",success:function(e){console.log("Parallax loaded!"),T(e),AOS.init()},error:function(){console.log("Parallax Could not be loaded...")}})},A=function(){console.log("LOADING"),q(),y(),$("html, body").animate({scrollTop:0},500);try{particlesJS.load("particles-js","../assets/effects/particles.json",function(){console.log("callback - particles.js config loaded")})}catch(e){}},j=function(e){let t=$(e),a=$("#menu-header").height()+20;console.log(t.hasClass("aos-animate"));let s=t.hasClass("aos-animate")?0:100,i=t.offset().top-a-s;console.log(t.height()),console.log(t.offset().top),$("html, body").animate({scrollTop:i},500)};A();