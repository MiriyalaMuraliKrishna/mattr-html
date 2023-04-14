window.onscroll = function(){stickyFunction();}
var menu = document.getElementById("header_top_bg");
var sticky = menu.offsetTop;
function stickyFunction(){
    if(window.pageYOffset > sticky){
        menu.classList.add("active");
    }
    else{
        menu.classList.remove("active");
    }
}

jQuery(".search_input").on("keydown", function(){
    jQuery('html, body').animate({
        scrollTop: jQuery(".custom-results-overlay").offset().top - 141
    });
    jQuery(".custom-results-overlay").fadeIn();
});
jQuery(".results_close").on("click", function(e){
    e.preventDefault();
    jQuery(".custom-results-overlay").fadeOut();
});
jQuery(document).on("click", ".search_icon", function(e){
    e.preventDefault();
    jQuery(".header-srch").slideToggle();
});

if(jQuery(window).width()>=1300){
    jQuery("ul.main_menu ul.sub-menu > li.menu-item-has-children > a").on("click", function(event){
        event.preventDefault();
        jQuery(this).toggleClass("active");
        jQuery(this).parent().siblings('li').find("a").removeClass("active");
        jQuery(this).siblings("ul").slideToggle();
        jQuery(this).parent().siblings('li').find("ul.sub-menu").slideUp();
    });
}

if(jQuery(window).width()<=1299){
    jQuery(document).on("click", ".menu_icon", function(event){
        event.preventDefault();
        jQuery(this).toggleClass("active");
        jQuery(".logo").toggleClass("logo-open");
        jQuery("nav.navigation").toggleClass("open");
    });
    jQuery("ul.main_menu > li.menu-item-has-children > a").on("click", function(event){
        event.preventDefault();
        jQuery(this).parent().siblings("li").toggleClass('sib');	
        jQuery('ul.main_menu > li.menu-item-has-children > a').not(jQuery(this)).removeClass('active');
        jQuery(this).toggleClass("active");

        jQuery(this).siblings('ul.sub-menu').slideToggle('900');
        jQuery(this).siblings('ul.sub-menu').children().find("ul.sub-menu").slideUp();
        jQuery(this).parent().siblings('li').find("ul.sub-menu").slideUp();
        
    });
    jQuery("ul.main_menu ul.sub-menu > li.menu-item-has-children > a").on("click", function(event){
        event.preventDefault();
        jQuery(this).toggleClass("active");
        jQuery(this).parent().siblings('li').find("a").removeClass("active");
        jQuery(this).siblings("ul").slideToggle();
        jQuery(this).parent().siblings('li').find("ul.sub-menu").slideUp();
    });
}

if(jQuery(window).width() <= 767) {
    jQuery(document).on("click", "span.links-menu", function(e){
        e.preventDefault();
        jQuery(this).toggleClass("active");
        jQuery(this).siblings("ul.footer-links").slideToggle('900');
        jQuery(this).parent().siblings('.footer-list').find("span.links-menu").removeClass("active");
        jQuery(this).parent().siblings('.footer-list').find("ul.footer-links").slideUp();
    });
}

jQuery('a[href*=#]:not([href=#])').click(function(){
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = jQuery(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            jQuery('html,body').animate({
                scrollTop: target.offset().top - 71
            }, 2000);
            return false;
        }
    }
});

jQuery('select').selectBox({keepInViewport: false, menuSpeed: 'slow', mobile:  true, });

