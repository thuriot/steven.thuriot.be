(function(a,c){var b=a(document);b.ready(function(){var d=a(".post-content");d.fitVids();a(".scroll-down").arctic_scroll();a(".menu-button, .nav-cover, .nav-close").on("click",function(f){f.preventDefault();a("body").toggleClass("nav-opened nav-closed");});});a.fn.arctic_scroll=function(d){var e={elem:a(this),speed:500},f=a.extend(e,d);f.elem.click(function(i){i.preventDefault();var j=a(this),l=a("html, body"),k=(j.attr("data-offset"))?j.attr("data-offset"):false,h=(j.attr("data-position"))?j.attr("data-position"):false,g;if(k){g=parseInt(k);l.stop(true,false).animate({scrollTop:(a(this.hash).offset().top+g)},f.speed);}else{if(h){g=parseInt(h);l.stop(true,false).animate({scrollTop:g},f.speed);}else{l.stop(true,false).animate({scrollTop:(a(this.hash).offset().top)},f.speed);}}});};})(jQuery);