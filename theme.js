class T{constructor(){this.aps_elements={}}get_aps(t){return this.aps_elements[t]}include_aps(t,e){this.aps_elements[t]=e}remove_aps(t){this.aps_elements[t].finish(),delete this.aps_elements[t]}}class C{constructor(t){this.html_element=$(t),this.frames=$(this.html_element).find(".frame"),this.flags={},this.setup_flags(),this.flags.autoplay&&this.play()}setup_flags(){let t=$(this.html_element).attr("animation-style"),e=$(this.html_element).attr("animation-configuration").split(" ");for(var n in e){let t=e[n];this.flags[t]=!0}if(this.flags.looping){let t=Math.abs(Number($(this.html_element).attr("looping-counter")));this.flags["looping-counter"]=t||-1}else this.flags["looping-counter"]=1;this.flags["animation-style"]=t||""}finish(){console.log("Maybe I should do something with this...")}play(){let t=this;return new Promise(async function(e,n){switch(t.flags["animation-style"]){case"moveline":e();default:await t.regular_animation(),e()}})}async regular_animation(){let t,e,n,r=this,i=0;for(;-1==r.flags["looping-counter"]||i<r.flags["looping-counter"];){for(var o=0;o<r.frames.length;o++){e=r.frames[o],n=Number($(e).attr("frame-duration"));try{$(t).hide()}catch(t){}$(e).show(),await k(n),t=e}if(r.flags.palinmation)for(o=r.frames.length-2;o>=0;o--){e=r.frames[o],n=Number($(e).attr("frame-duration"));try{$(t).hide()}catch(t){}$(e).show(),await k(n),t=e}i++}}}var A,S,O,D,L,I,N,k=function(t){return new Promise(e=>setTimeout(e,t))},R=function(t){let e=0;$.each($(t),function(t,n){let r=$(n).outerHeight();e=r>e?r:e}),$.each($(t),function(t,n){$(n).height(e)})},P=function(t,e){let n=0;for(let e=0;e<t.length-1;e++){let r=$(t[e]).outerHeight();n<r&&(n=r)}e.css("min-height",n)},j=function(t,e,n){let r=$(t).offset().top-e-n;window.scrollTo(0,r)},M=function(){var t=new T;function e(t,e,n,r,i){let o;return $(t[n]).addClass("not-active"),n+=i,$(t[n]).removeClass("not-active"),o=n==t.length-1?100:Math.round(r+r*n),e.attr("aria-valuenow",o),e.css("width",o+"%"),n}function n(t,e,n){let r=$(e).position();return $(t).css({top:r.top,left:r.left}),$(t).attr("actual-cell",e.id),$(t).css("zIndex",1),n[e.id].correct==$(t)[0]}function r(t,e,n,r){let i=t[e].Title,o=_.shuffle(t[e].Answers);for(var a in $(n).html(i),o)$(r[a]).html(o[a].Title);return o}$.each($(".aps-animator"),function(e,n){let r=$(n).attr("id");n=new C("#"+r);t.include_aps(r,n)}),$.each($(".accordion"),function(t,e){let n,r,i=$($(".card-header")[0]).height(),o=$(".navbar").height();$(this).find(".card");$(".card").on("show.bs.collapse",function(){r=this;try{clearInterval(n)}catch(t){}n=setInterval(()=>{j(r,o,i)},1)}).on("shown.bs.collapse",function(){clearInterval(n),j(r,o,i)})}),$.each($(".accordion-automatic"),function(t,e){let n="aan-"+t,r=$(this).find(".card");$(this).attr("id",n),$.each(r,function(t,e){let r=$(e).children("div"),i=r[0],o=r[1],a=n+"_tab_"+t;t%2==1?$(i).addClass("card-header light-color pointer collapsed"):$(i).addClass("card-header pointer collapsed"),$(i).attr("data-toggle","collapse"),$(i).attr("data-target","#"+a),$(o).addClass("card-body collapse"),$(o).attr("id",a)})}),$.each($(".tabs"),function(t,e){let n="tab-"+t,r=$(this).find(".tab-items"),i=$(r).find("a"),o=$(this).find(".tab-pane");$(i[0]).addClass("active"),$(o[0]).addClass("active"),$(i).wrapAll("<ul class='nav nav-tabs'></ul>"),$.each(i,function(t,e){let r=n+"-item-"+t;$(e).addClass("nav-link"),$(e).attr("href","#"+r),$(e).attr("data-toggle","tab"),$(e).wrap("<li class='nav-item'></li>"),$(o[t]).attr("id",r)})}),$.each($(".carousel"),function(t,e){let n="car-id-"+t,r=$.parseHTML("<ol class='carousel-indicators'></ol>"),i=$(this).find(".carousel-item");$(e).attr("id",n),$(e).prepend(r),$.each(i,function(t,e){let i=$.parseHTML("<li data-target='' data-slide-to='' data-ride='carousel'></li>");$(i).attr("data-target","#"+n),$(i).attr("data-slide-to",t),$(i).attr("data-ride","carousel"),0==t&&($(i).attr("class","active"),$(e).addClass("active")),$(r).append(i)}),$(this).hasClass("auto-height")&&R(i)}),$.each($(".ventanita"),function(t,e){let n=$(this).find("#ventanita-objects"),r=$(n).children(),i=null,o=$(n).find("#ventanita-placeholder"),a=$(this).find(".ventanita-show");R(r),$.each(a,function(t,e){let a="#"+e.getAttribute("data-turnon"),s=r[t+1],l="#null"!=a?$(n).find(a):$(s);$(e).on("click",function(){$(i).removeClass("active"),$(o).removeClass("active"),$(this).addClass("active"),l.addClass("active"),i=$(this),o=$(l)})})}),$.each($(".ventanitas_pin_marker"),function(t,e){let n=$(this).find("#ventanita-objects"),r=$(n).children(),i=null,o=$(n).find("#ventanita-placeholder"),a=$(this).find(".ventanita-show"),s=$(this).find(".pin-marker"),l=$(s).width()/4,c=$(s).height()/4;$(s).css("top",0),$(s).css("left",0),R($(this).find(".ventana")),$.each(a,function(t,e){let a="#"+e.getAttribute("data-turnon"),u=r[t+1],f="#null"!=a?$(n).find(a):$(u);$(e).on("click",function(){$(s).show();let t=$(this).position(),e=t.left-l,n=t.top-c;$(s).css("top",n),$(s).css("left",e),$(i).removeClass("active"),$(o).removeClass("active"),$(this).addClass("active"),f.addClass("active"),i=$(this),o=$(f)})})}),$.each($(".circle_slider"),function(t,e){let n=2;var r,i=$($(e).find(".itemDot")),o=$($(e).find(".dotCircle")),a=o.width();r=a/2;var s=o.height(),l=0,c=2*Math.PI/i.length;i.each(function(){var t=Math.round(a/2+r*Math.cos(l)-$(this).width()/2),e=Math.round(s/2+r*Math.sin(l)-$(this).height()/2);$(this).css({left:t+"px",top:e+"px"}),l+=c}),$($(e).find(".itemDot")).click(function(){var t=$(this).data("tab");i.removeClass("active"),$(this).addClass("active"),$($(e).find(".CirItem")).removeClass("active"),$($(e).find(".CirItem"+t)).addClass("active"),n=t,o.css({transform:"rotate("+(360-36*(n-1))+"deg)",transition:"2s"}),i.css({transform:"rotate("+36*(n-1)+"deg)",transition:"1s"})})}),$(".ba-slider").each(function(){var t,e,n,r=$(this),i=r.width()+"px";r.find(".resize img").css("width",i),t=r.find(".handle"),e=r.find(".resize"),n=r,t.on("mousedown touchstart",function(r){t.addClass("draggable"),e.addClass("resizable");var i=r.pageX?r.pageX:r.originalEvent.touches[0].pageX,o=t.outerWidth(),a=t.offset().left+o-i,s=n.offset().left,l=n.outerWidth();minLeft=s+10,maxLeft=s+l-o-10,t.parents().on("mousemove touchmove",function(t){var n=t.pageX?t.pageX:t.originalEvent.touches[0].pageX;leftValue=n+a-o,leftValue<minLeft?leftValue=minLeft:leftValue>maxLeft&&(leftValue=maxLeft),widthValue=100*(leftValue+o/2-s)/l+"%",$(".draggable").css("left",widthValue).on("mouseup touchend touchcancel",function(){$(this).removeClass("draggable"),e.removeClass("resizable")}),$(".resizable").css("width",widthValue)}).on("mouseup touchend touchcancel",function(){t.removeClass("draggable"),e.removeClass("resizable")}),r.preventDefault()}).on("mouseup touchend touchcancel",function(n){t.removeClass("draggable"),e.removeClass("resizable")})}),$(".ba-slider").each(function(){var t=$(this),e=t.width()+"px";t.find(".resize img").css("width",e)}),$.each($(".progress-bar-container"),function(t,n){let r=0,i=$(this).find(".progress-next"),o=$(this).find(".progress-prev"),a=$(this).find(".progress-bar"),s=($(this).find(".text-area"),$(this).find(".text-item")),l=s.length,c=100/s.length;R(s),e(s,a,r,c,0),i.on("click",function(){r<l-1&&(r=e(s,a,r,c,1))}),o.on("click",function(){r>0&&(r=e(s,a,r,c,-1))})}),$.each($(".split_carousel"),function(t,e){let n,r=0,i=$(this).find(".split_button"),o=$(this).find(".text-item");R(o);for(let t=0;t<i.length;t++)$(i[t]).on("click",function(){try{n.removeClass("active")}catch(t){}n=$(this),$(this).addClass("active"),$(o[r]).addClass("not-active"),r=$(this).attr("target-index"),$(o[r]).removeClass("not-active")})}),$.each($(".split_carousel_pin_marker"),function(t,e){let n,r=0,i=$(this).find(".split_button"),o=$(this).find(".text-item"),a=$(this).find(".pin-marker"),s=($(a).width(),$(a).height());$(a).css("top",0),$(a).css("left",0),R($(this).find(".text-item")),$.each(i,function(t,e){$(e).on("click",function(){$(a).show();let t=$(this).parent().position(),e=($(this).parent().outerWidth(),parseInt($(this).parent().css("marginLeft"),10)),i=parseInt($(this).css("paddingLeft"),10)/2,l=$(this).innerWidth()/2,c=t.left+e+i+l,u=t.top-s/2;$(a).css("top",u),$(a).css("left",c);try{n.removeClass("active")}catch(t){}n=$(this),$(this).addClass("active"),$(o[r]).addClass("not-active"),r=$(this).attr("target-index"),$(o[r]).removeClass("not-active")})})}),$.each($(".jesus_slider"),function(t,e){let n=0,r=$(this).find(".back_arrow"),i=$(this).find(".forward_arrow"),o=$(this).find(".jesus-set"),a=$(this).find(".text-item"),s=$(this).find(".jesus-head"),l=$(this).find(".jesus-set").width();R(a),i.on("click",function(){if(n<o.length){let t=parseInt(s.css("margin-left"))-l-32;t+="px",s.animate({marginLeft:t}),$(o[n]).removeClass("active"),$(a[n]).removeClass("active"),n++,$(o[n]).addClass("active"),$(a[n]).addClass("active")}}),r.on("click",function(){if(n>0){let t=parseInt(s.css("margin-left"))+l+32;t+="px",s.animate({marginLeft:t}),$(o[n]).removeClass("active"),$(a[n]).removeClass("active"),n--,$(o[n]).addClass("active"),$(a[n]).addClass("active")}})}),$.each($(".jesus_slider_ball"),function(t,e){let n=0,r=$(this).find(".slide_ball"),i=$(this).find(".jesus-set"),o=$(this).find(".text-item"),a=$(this).find(".jesus-head"),s=$(this).find(".jesus-set").width();R(o),r.each(function(t){$(r[t]).on("click",function(){let e=n-t,r=parseInt(a.css("margin-left"))+s*e+32*e;r+="px",a.animate({marginLeft:r}),$(i[n]).removeClass("active"),$(o[n]).removeClass("active"),n=t,$(i[n]).addClass("active"),$(o[n]).addClass("active")})})}),$.each($(".jesus_slider_no_arrow"),function(t,e){let n=0,r=$(this).find(".slide_ball"),i=$(this).find(".jesus-set"),o=$(this).find(".text-item"),a=$(this).find(".jesus-head"),s=$(this).find(".jesus-set").width();R(o),r.each(function(t){$(r[t]).on("click",function(){let e=n-t,r=parseInt(a.css("margin-left"))+s*e+32*e;r+="px",a.animate({marginLeft:r}),$(i[n]).removeClass("active"),$(o[n]).removeClass("active"),n=t,$(i[n]).addClass("active"),$(o[n]).addClass("active")})})}),$.each($(".jesus_slider_no_arrow_image_background"),function(t,e){let n=0,r=$(this).find(".slide_ball"),i=$(this).find(".jesus-set"),o=$(this).find(".text-item"),a=$(this).find(".jesus-head"),s=$(this).find(".jesus-set").width();R(o),r.each(function(t){$(r[t]).on("click",function(){let e=n-t,r=parseInt(a.css("margin-left"))+s*e+32*e;r+="px",a.animate({marginLeft:r}),$(i[n]).removeClass("active"),$(o[n]).removeClass("active"),n=t,$(i[n]).addClass("active"),$(o[n]).addClass("active")})})}),$.each($(".split_carousel_img"),function(t,e){let n=0,r=$(this).find(".split_button"),i=$(this).find(".text-item");R(i),$(r).on("click",function(){$(i[n]).addClass("not-active"),n=$(this).attr("target-index"),$(i[n]).removeClass("not-active")})}),$.each($(".flipster_slider"),function(t,e){let n=0,r=$(this).find(".flipster-set"),i=$(this).find(".flipster-head"),o=$($(this).find(".flipster-set")[0]).width();r.on("click",function(){let t,e=$(this).attr("order");t=0!=e?-o*e+20*e+20*(e-1):0,$(r[n]).removeClass("active"),n=e,$(r[n]).addClass("active"),t+="px",i.animate({marginLeft:t})})}),$.each($(".flipster_carousel_slider"),function(t,e){let n=0,r=$(this).find(".flipster_carousel-head").find(".fog"),i=$(this).find(".flipster_carousel-set"),o=i.length,a=$(this).find(".flipster_carousel-head"),s=$($(this).find(".flipster_carousel-set")[0]).width(),l=s-.7*s;$.each(i,function(t){let e=o-t;$(this).css("zIndex",e)}),i.on("click",function(t){let e=$(this).attr("order");if(n!=e){r.show(),(r=$(this).find(".fog")).hide();$(i[n]);let t=$(i[e]),s=e-n,c=parseInt(a.css("margin-left"))-l*s,u=Number(e),f=Number(e);for(n=e;u<o;){let t=$(i[u]),e=o-u;t.css("zIndex",e),t.removeClass("flip-right"),t.addClass("flip-left"),u++}for(;f>=0;){let t=$(i[f]),e=f;t.css("zIndex",e),t.removeClass("flip-left"),t.addClass("flip-right"),f--}t.removeClass("flip-left"),t.removeClass("flip-right"),t.css("zIndex",o),c+="px",a.animate({marginLeft:c})}})}),$(".flip-card").on("click",function(){$(this).hasClass("rotate")?$(this).removeClass("rotate"):$(this).addClass("rotate")}),$.each($(".split-list"),function(){let t=$(this).find(".btn-ret").children(),e=$(this).find(".sl-txt"),n=$(t[0]),r=$(e[0]);$.each(t,function(t){$(this).on("click",function(){n.removeClass("active"),r.hide(),n=$(this),r=$(e[t]),n.addClass("active"),r.show()})})}),$.each($(".matchup"),function(t,e){let n=[],r=!1,i=window.innerWidth>480?"settings":"mobile_settings",o=$(this).find(".matchup_container"),a=$(this).find("#cards"),s=JSON.parse(a[0].innerHTML),l=s[i].rows,c=s[i].columns,u=s[i].offset,f=[],d=0,p=0,h=window.innerHeight/l-u/l,v=o.width()/c,m=h<v?h:v,g='style="height:'+m+"px; width:"+m+'px"',y='<div class="matchup-card" '+g+'>                <div class="flip-card-container">                    <div class="flip-card matchup-card-active" position="unset">                        <div class="flip-card-inner" '+g+'>                            <div class="matchup-card-front flip-card-front" >                                <img class="logo-fundo" src="assets/images/identity/logos/marca.png">                            </div>                            <div class="matchup-card-back flip-card-back" '+g+'>                                <img class="matchup-card-content" src="" draggable="false">                                <div class="frame">                                    <div class="molding">                                        <i class="fas fa-check fa-2x crush-check"></i>                                    </div>                                </div>                            </div>                        </div>                    </div>                </div>            </div>';$(a).remove(),$.each(s.cards,function(t,e){e[0].id=d,f.push(e[0]),e[1]?(e[1].id=d,f.push(e[1])):f.push(e[0]),d++}),f=_.shuffle(f);for(var b=0;b<l;b++){let t=$.parseHTML('<div class="row d-flex justify-content-center"></div>')[0];o.append(t);for(var w=0;w<c;w++){let e=$.parseHTML(y)[0];$(e).find(".matchup-card-content").attr("src",f[p].card),$(e).find(".flip-card").attr("position",p),t.append(e),p++}}$(this).find(".matchup-card-active").on("click",function(t){if(!r&&!$(this).hasClass("rotate"))if($(this).addClass("rotate"),n.length>=1){n.push($(this)),r=!0;let t=n[0].attr("position"),e=n[1].attr("position");if(f[t].id==f[e].id){let t=n;n=[],setTimeout(function(){r=!1},200),setTimeout(function(){t[0].removeClass("matchup-card-active"),t[1].removeClass("matchup-card-active")},600)}else setTimeout(function(){n[0].removeClass("rotate"),n[1].removeClass("rotate"),n=[],setTimeout(function(){r=!1},200)},1e3)}else n.push($(this))})}),$.each($(".puzzle"),function(t,e){let r=window.innerWidth>480?"settings":"mobile_settings",i=$(this).find(".puzzle_container"),o=$(this).find("#puzzle_json"),a=JSON.parse(o[0].innerHTML),s=a.img,l=a[r].rows,c=a[r].columns,u=a[r].factor_view,f=(a[r].offset,[]),d=window.innerHeight,p=i.outerWidth(),h=d/l,v=p/c,m=h<v?h:v,g=h<v?d:p,y={},b="",w=0,E="height:"+m*u+"px; width:"+m*u+"px;",x='<div class="puzzle-piece puzzle-dropping" style="'+E+("background-image: url("+s+"); background-size: "+g*u+"px "+g*u+"px")+'"></div>',T='<div class="puzzle-cell puzzle-dropping" style="'+E+'"></div>';$(i).height(h*l),$(i).css("padding-top",h*u),$(o).remove();for(var C=0;C<g;C+=m){let t=$.parseHTML('<div class="row d-flex justify-content-center"></div>')[0];i.append(t);for(var A=0;A<g;A+=m){let e=$.parseHTML(x)[0],r=$.parseHTML(T)[0],i=-A*u+"px "+-C*u+"px",o="cell-"+(C/m+"-"+A/m);f.push(e),$(r).attr("id",o),t.append(r),y[o]={correct:e,status:!1},$(e).css("background-position",i),$(e).draggable({start_handler:function(t){b=$(t).attr("actual-cell"),$(t).css("zIndex",2);try{w+=y[b].status,y[b].status=!1}catch(t){}},droptarget:".puzzle-dropping",drop:function(t,e){let r=!1,i=!1,o=!1;if($(e).hasClass("puzzle-cell"))r=n(this,e,y),y[e.id].status=r;else{let t=$(e).attr("actual-cell");b&&t?(r=n(this,$("#"+t)[0],y),i=n(e,$("#"+b)[0],y),o=y[t].status,y[t].status=r,y[b].status=i):!b&&t&&(r=n(this,$("#"+t)[0],y),o=y[t].status,y[t].status=r,a=e,$(a).css({top:10,left:10}),$(a).attr("actual-cell",""))}var a;if(0==(w+=o-(r+i)))for(var s in f){let t=$(f[s]),e=$("#"+t.attr("actual-cell"));t.draggable("destroy"),t.appendTo(e),e.addClass("complete"),t.addClass("complete")}}}),w++}}f=_.shuffle(f);for(t=0;t<f.length;t++){let e=Math.floor(t/l),n=t%c,r=Math.random(),o=Math.random();r=e*(h/10)+10*(r<.5?-r:r),o=n*(v/10)+10*(o<.5?-o:o),i.append(f[t]),$(f[t]).css({top:r,left:o})}}),$.each($(".quiz"),function(t,e){let n,r,i=$(this).find(".start-menu-screen"),o=$(this).find(".game-screen"),a=$(".moldura"),s=$(".avatar"),l=$(o).width();$(a).on("click",function(){let t=$(this).attr("mob");$(s).addClass(t),$(i).hide(),$(o).show(),n=$(s).width(),r=(l-n)/2,$(s).css({left:r+"px"})})}),$.each($(".close-tab-button"),function(t,e){$(this).on("click",function(){window.location.href="https://institutoembelleze.instructure.com/courses/49/assignments/347?module_item_id=959"})}),$.each($(".lss_quiz"),function(e,n){let i,o=$(this).find("#database"),a=JSON.parse(o[0].innerHTML),s=a.settings,l=a.questions,c=a.gamemode,u=0,f=0,d=s.questions,p=100/d,h=!1,v=" de "+d,m=$(".navbar").height(),g=$(this).find("#game_box"),y=$(this).find(".questionsBox"),b=$(this).find("#choices_group"),w=$(this).find("#progress_lettering"),E=$(this).find("#lettering"),x=[],T=$(this).find("#julia_waiting"),C=$(this).find("#julia_responde");$(C).attr("src");$(w).text(f+1+v),$(w).css({width:p+"%"});for(var A=0;A<s.answers;A++){let e=$.parseHTML('<li>            <label>                <input                    type="checkbox"                    name="answerGroup"                    class="input-box"                />                <div class="checkbox-radio-custom">                    <i class="check-onradio fa fa-check"></i>                </div>                <span></span>            </label>        </li>')[0],n=$(e).find("input"),o=$(e).find("span"),a=$(n).parent().find(".check-onradio");n.attr("value",A),n.attr("id","answerGroup_"+A),$(b).append(e),x.push(o),$(n).on("click",function(){if(!h){console.log(g.offset().top-m-15),console.log(g.offset().top),console.log(m),console.log(15),$("html, body").animate({scrollTop:g.offset().top-m-15},200),$(y).hide(),$(T).hide(),$(C).show(),h=!0,$(a).show();let e=$(this).val();u+=i[e].Score,f++,t.get_aps("julia_responde").play().then(function(){if($(y).show(),$(T).show(),$(C).hide(),f<d)i=r(l,f,E,x),w.text(f+1+v),$(w).css({width:(f+1)*p+"%"});else{let e=c.feedback_rule,n=c.feedbacks;if("min-max"==e)for(var t in n){let e=n[t].bounds;if(u>=e[0]&&u<=e[1])return $(g).hide(),$("#demo_final").show(),$("#"+n[t].target).show(),!0}}$(a).hide(),h=!1})}})}l=_.shuffle(l),i=r(l,f,E,x),$(o).remove()}),$.each($(".lss_quiz_no_animation"),function(t,e){let n="pages/extras/"+$(this).attr("database-name")+".json",i=$(this);$.ajax({dataType:"json",url:n,success:function(t){let e,n=t,o=n.settings,a=n.questions,s=n.gamemode,l=0,c=0,u=!1,f=o.questions,d=100/f,p=!1,h=" de "+f,v=i.find(".questionsBox"),m=i.find("#game_box"),g=i.find("#choices_group"),y=i.find("#progress_lettering"),b=i.find("#lettering"),w=[],E=s.feedback_rule,x=s.feedbacks,T=i.find("#feedbackBox"),C=i.find("#feedback_lettering");$(y).text(c+1+h),$(y).css({width:d+"%"});for(var A=0;A<o.answers;A++){let t=$.parseHTML('<li>            <label>                <input                    type="checkbox"                    name="answerGroup"                    class="input-box"                />                <div class="checkbox-radio-custom">                    <i class="check-onradio fa fa-check"></i>                </div>                <span></span>            </label>        </li>')[0],n=$(t).find("input"),i=$(t).find("span"),o=$(n).parent().find(".check-onradio");n.attr("value",A),n.attr("id","answerGroup_"+A),$(g).append(t),w.push(i),$(n).on("click",function(){if(!p){p=!0,$(o).show();let t=$(this).val();setTimeout(function(){if("min-max"==E)if(l+=e[t].Score,++c<f)e=r(a,c,b,w),y.text(c+1+h),$(y).css({width:(c+1)*d+"%"});else for(var n in x){let t=x[n].bounds;if(l>=t[0]&&l<=t[1])return $(m).hide(),$("#demo_final").show(),$("#"+x[n].target).show(),!0}else if("feed-and-go"==E){$(v).hide(),$(T).show(),l+=e[t].Score;let n=1==e[t].Score;c<f&&(n?($(C).html(a[c]["Feedback-certo"]),u=!1,++c<f&&(e=r(a,c,b,w),y.text(c+1+h),$(y).css({width:(c+1)*d+"%"}))):u?($(C).html(a[c]["Feedback-errado"]),u=!1,++c<f&&(e=r(a,c,b,w),y.text(c+1+h),$(y).css({width:(c+1)*d+"%"}))):($(C).html(a[c]["Feedback-chance"]),u=!0)),$(o).hide(),p=!1}},800)}})}let S=i.find("#button_continue");$(S).on("click",function(){c<f?($(v).show(),$(T).hide()):($(m).hide(),i.find("#feed_and_go_final_screen").show(),X(l))}),a=_.shuffle(a),e=r(a,c,b,w)}})})},H="https://embelleze.generalwebsolutions.com.br/api",B=function(){$('[data-toggle="popover"]').popover()},F=function(){console.log("Loading Parallax..."),$.ajax({type:"GET",url:H+"/parallax/get_parallax",contentType:"application/json",success:function(t){console.log("Parallax loaded!"),M(t),AOS.init()},error:function(){console.log("Parallax Could not be loaded...")}})},q=function(t,e){$("#content-viewer").load(t,function(){B(),F(),e(),$("html, body").animate({scrollTop:0},500);try{particlesJS.load("particles-js","assets/effects/particles.json",function(){console.log("callback - particles.js config loaded")})}catch(t){}})},W=function(t){let e=$(t),n=$("#menu-header").height()+20;console.log(e.hasClass("aos-animate"));let r=e.hasClass("aos-animate")?0:100,i=e.offset().top-n-r;console.log(e.height()),console.log(e.offset().top),$("html, body").animate({scrollTop:i},500)},z=function(){$(I).removeClass("active"),$(N).removeClass("active"),I=L[O],N=ball_items[O],$(I).addClass("active"),$(N).addClass("active")},U=function(t){$("#content-viewer").empty(),q(t,z),$("#backward_arrow").css("visibility","visible"),$("#forward_arrow").css("visibility","visible"),$("#content-next-mod-bt").css("visibility","visible"),O==S&&$("#backward_arrow").css("visibility","hidden"),O==A&&($("#forward_arrow").css("visibility","hidden"),$("#content-next-mod-bt").css("visibility","hidden"))};$(document).ready(function(){console.log("LOADING JSON"),$.getJSON("scripts/user/menu.json",function(t){let e=t.information,n=t.configuration,r=n.target,i=$("#ball-item-holder"),o=(n["open-width"],t.pages),a=sessionStorage.getItem("chapter");A=n["max-level"],S=n["min-level"],D=n["prefix-name"],O=a?Number(a):n["start-level"];for(let t=S;t<o.length;t++){let e=$.parseHTML('<li class="ball-item"><a class="capitulo-link"></a></li>')[0],n=$.parseHTML('<li>            <a                 class="linker menu-item pmd-ripple-effect pmd-sidebar-toggle"                href="javascript:void(0);"                data-target="basicSidebar"                ">            </a>        </li>')[0],a=($(e).find(".capitulo-link"),$(n).find(".linker"));$(a).text(o[t].placeholder),$(i).append(e),$(r).append(n)}L=$(".linker"),ball_items=$(".ball-item"),I=L[O],N=ball_items[O];try{$().pmdSidebar()}catch(t){}$.each($(".linker"),function(t,e){let n=Number(t+S),r=o[n].url;$(e).on("click",function(){O=n,U(r)})}),$.each($(".ball-item"),function(t,e){let n=Number(t+S),r=o[n].url;$(e).on("click",function(){n!=O&&(O=n,U(r))})}),$(I).addClass("active"),U(D+O+".html"),$(".header_titulo_modulo").html(e["modulo-nome"]),$(".header_numero_modulo").html(e["modulo-numero"]),$(".header_numero_modulo_resumido").html(e["modulo-resumido"]),$("#backward_arrow").css("visibility","hidden"),$("#backward_arrow").on("click",function(){U(D+(O=O>S?O-1:0)+".html")}),$("#forward_arrow").on("click",function(){U(D+(O=O<A?O+1:A)+".html")}),$("#content-next-mod-bt").on("click",function(){U(D+(O=O<A?O+1:A)+".html")})})});