!function(a){"use strict";a(function(){var e,i,t,s,o;function n(e,i,t){a.each(i,function(i,s){var o=s.columns;if(window.matchMedia(s.matchMedia).matches){var n,l,r,c=a(e[0]).length%o;return n=e,l=0===c?o:c,r=a(n[0]).slice(-l),null===n[1]?r.addClass(t):r.find(n[1]).addClass(t),!1}})}
a(document).on("click","[data-lightbox]",lity.options("template",'<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><div class="lity-close" data-lity-close aria-label="Close (Press escape to close)"><span class="btn-line"></span></div></div></div></div>')),a('.navbar .navbar-nav .nav-link[href^="#"]').each(function(){a(this).animatedModal({animatedIn:"fadeIn",animatedOut:"fadeOut",animationDuration:"0s",beforeOpen:function(){a("#overlay-effect").addClass("animate-up").removeClass("animate-down"),a("#"+this.modalTarget).css({animationDelay:".5s",animationFillMode:"both"})},afterOpen:function(){a("#"+this.modalTarget).css({animationFillMode:"none"})},beforeClose:function(){a("#overlay-effect").addClass("animate-down").removeClass("animate-up"),a("#"+this.modalTarget).css({animationDelay:".5s",animationFillMode:"both"})},afterClose:function(){a("#"+this.modalTarget).css({animationFillMode:"none"})}})}),a(".lightbox-wrapper").each(function(){a('.navbar .navbar-nav .nav-link[href^="#'+this.id+'"]').length||a(this).hide()}),a(document).on("mouseup",function(e){if(a(".navbar #navbarSupportedContent").hasClass("show")){var i=a(".navbar .navbar-menu");i.is(e.target)||0!==i.has(e.target).length||i.trigger("click")}}),s=a(".cd-headline"),o=2500,s.each(function(){var e=a(this);if(e.hasClass("clip")){var i=e.find(".cd-words-wrapper"),t=i.width()+10;i.css("width",t)}
setTimeout(function(){(function a(e){var i,t=(i=e).is(":last-child")?i.parent().children().eq(0):i.next();e.parents(".cd-headline").hasClass("clip")&&e.parents(".cd-words-wrapper").animate({width:"2px"},660,function(){var i,s;i=t,e.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible"),(s=t).parents(".cd-headline").hasClass("clip")&&s.parents(".cd-words-wrapper").animate({width:s.width()+10},660,function(){setTimeout(function(){a(s)},1500)})})})(e.find(".is-visible").eq(0))},o)}),a(".home-area").hasClass("video-variant")&&a("#homeVideo").YTPlayer(),n(["#about .services-section .single-service",null],[{matchMedia:"(max-width: 767.98px)",columns:1},{matchMedia:"(max-width: 991.98px)",columns:2},{matchMedia:"(min-width: 991.98px)",columns:3}],"rc-mb-0"),n(["#about .pricing-section .single-plan",null],[{matchMedia:"(max-width: 991.98px)",columns:1},{matchMedia:"(min-width: 991.98px)",columns:3}],"rc-mb-0"),(e=function(){a("#resume .skills-section .single-skill").each(function(){var e=Math.min(100,Math.max(0,a(this).data("percentage"))),i=a(this).find(".skill-progress").outerWidth(!0);a(this).find(".skill-percentage").text(e+"%").css("margin-right",i-i*(e/100)),a(this).find(".progress-bar").attr("aria-valuenow",e).css("width",e+"%")})})(),a(window).on("resize",function(){e()}),i=a("#portfolio .portfolio-section .portfolio-grid"),t=a("#portfolio .portfolio-section .filter-control li"),i.imagesLoaded(function(){i.isotope({itemSelector:"#portfolio .portfolio-section .single-item",masonry:{horizontalOrder:!0}}),t.on("click",function(){t.removeClass("tab-active"),a(this).addClass("tab-active");var e=a(this).data("filter");i.isotope({filter:e,transitionDuration:".25s"})})}),n(["#portfolio .portfolio-section .single-item .portfolio-item",".portfolio-wrapper"],[{matchMedia:"(max-width: 991.98px)",columns:2},{matchMedia:"(min-width: 991.98px)",columns:3}],"rc-mb-0"),n(["#blog .blog-section .single-post",null],[{matchMedia:"(max-width: 991.98px)",columns:1},{matchMedia:"(min-width: 991.98px)",columns:3}],"rc-mb-0"),a("#contact .contact-section .contact-form").on("submit",function(e){var i=a(this),t=i.find("#contact-submit"),s=t.text(),o=i.find(".contact-feedback");e.preventDefault(),t.html("Attendi...").addClass("wait").prop("disabled",!0),setTimeout(function(){a.ajax({url:i.attr("action"),type:"POST",data:i.serialize(),headers:{Accept:"application/json"}}).done(function(a){a.ok?(t.removeClass("wait").html("Ok").addClass("success"),o.addClass("success").html("Il messaggio è stato appena inviato, grazie!").fadeIn(200),setTimeout(function(){t.html(s).removeClass("success").prop("disabled",!1),o.fadeOut(200).removeClass("success").html("")},6e3),i[0].reset()):(console.log(a),t.removeClass("wait").html("Errore").addClass("error"),o.addClass("error").html("Ops! Qualcosa è andato storto... Per favore riprova più tardi.").fadeIn(200),setTimeout(function(){t.html(s).removeClass("error").prop("disabled",!1),o.fadeOut(200).removeClass("error").html("")},6e3))})},1e3)})}),a(window).on("load",function(){a(".preloader-icon").fadeOut(400),a(".preloader").delay(500).fadeOut("slow")})}(jQuery)