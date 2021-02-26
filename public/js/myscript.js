// ========================banner mobile===========================
jQuery(window).load(function() {
    banner();
});

function banner() {
    if (jQuery(this).width() < 600) {
        var img_mobile = jQuery('.banner-page').find('img').attr('src');
        jQuery('.banner-page').css({
            'background-image': 'url(' + img_mobile + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'top right',
            'min-height': '43vh'
        });
        jQuery('.banner-page').find('img').css('display', 'none')
    }
}
// --------------button menu----------
jQuery(document).ready(function() {
    jQuery(".button-sticky").click(function() {
        jQuery("#header-page .sticky .wrap__menu .wrap__menu--bottom .menu__bottom--main .navbar-menu-mobile").toggleClass("active");
        jQuery("#header-page .sticky .wrap__menu .wrap__menu--bottom .menu__bottom--main .navbar-menu-mobile .navbar-sticky").toggleClass("active");
        jQuery("body").toggleClass("show-scroll");
    });
    jQuery(document).mouseup(function(e) {
        if (!jQuery(".button-sticky").is(e.target) && jQuery(".button-sticky").has(e.target).length === 0) {
            jQuery("#header-page .sticky .wrap__menu .wrap__menu--bottom .menu__bottom--main .navbar-menu-mobile").removeClass("active");
            jQuery("#header-page .sticky .wrap__menu .wrap__menu--bottom .menu__bottom--main .navbar-menu-mobile .navbar-sticky").removeClass("active");
            jQuery('body').removeClass('show-scroll');
        }
    });
});
// -------load more

// jQuery(function() {
//     var width = jQuery(window).width();
//     if (width > 600) {
//         jQuery(".more").slice(0, 16).show();
//         jQuery("#loadMore").on('click', function(e) {
//             e.preventDefault();
//             jQuery(".more:hidden").slice(0, 8).slideDown();
//             if (jQuery(".more:hidden").length == 0) {
//                 jQuery("#load").fadeOut('slow');
//             }
//             jQuery('html,body').animate({
//                 scrollTop: jQuery(this).offset().top
//             }, 1500);
//         });
//     } else {
//         jQuery(".more").slice(0, 8).show();
//         jQuery("#loadMore").on('click', function(e) {
//             e.preventDefault();
//             jQuery(".more:hidden").slice(0, 4).slideDown();
//             if (jQuery(".more:hidden").length == 0) {
//                 jQuery("#load").fadeOut('slow');
//             }
//             jQuery('html,body').animate({
//                 scrollTop: jQuery(this).offset().top
//             }, 1500);
//         });
//     }
// });

// jQuery('a[href=#top]').click(function() {
//     jQuery('body,html').animate({
//         scrollTop: 0
//     }, 600);
//     return false;
// });

// jQuery(window).scroll(function() {
//     if (jQuery(this).scrollTop() > 1200) {
//         jQuery('.totop a').fadeIn();
//     } else {
//         jQuery('.totop a').fadeOut();
//     }
// });
jQuery(document).ready(function() {
    // -------------flexslider
    jQuery('.flexslider').flexslider({
        animation: "fade",
        animationLoop: true,
        slideshowSpeed: 4000,
        animationSpeed: 1200,
        start: function(slider) {
            var next = jQuery(".flexslider ul.slides li.flex-active-slide").next().find(".img-flex img").attr("src");
            jQuery(".banner-slider .outside-slider .img-outside").css('background-image', 'url(' + next + ')');
        },
        after: function(slider) {
            if (jQuery(".flexslider ul.slides li.flex-active-slide").is(":last-child")) {
                var next = jQuery(".flexslider ul.slides li:first-child()").find(".img-flex img").attr("src");
                jQuery(".banner-slider .outside-slider .img-outside").css('background-image', 'url(' + next + ')');
            } else {

                var next = jQuery(".flexslider ul.slides li.flex-active-slide").next().find(".img-flex img").attr("src");
                jQuery(".banner-slider .outside-slider .img-outside").css('background-image', 'url(' + next + ')');
            }
        }
        // controlsContainer:jQuery(".flex-control-nav li"),
        // customDirectionNav:jQuery(".flex-control-nav li a")
    });

    // -------button flexsider
    // jQuery(".arrow-prev").on("click", function(event) {
    //     event.preventDefault();
    //     jQuery(".flexslider").flexslider("prev");
    //     return false;
    // })
    // jQuery(".arrow-next").on("click", function(event) {
    //     event.preventDefault();
    //     jQuery(".flexslider").flexslider("next");
    //     return false;
    // })
});
jQuery(document).ready(function() {
    jQuery('.intro__slide--services').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        draggable: true,
        infinite: true,
        pauseOnHover: false,
        swipe: true,
        touchMove: false,
        speed: 1500,
        autoplaySpeed: 5000,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        adaptiveHeight: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0px',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    jQuery(".btn-prev").click(function(event) {
        event.preventDefault();
        jQuery(".intro__slide--services").slick("slickPrev");
    })
    jQuery(".btn-next").click(function(event) {
        event.preventDefault();
        jQuery(".intro__slide--services").slick("slickNext");
    })
});
// --------------sticky menu--------------
// jQuery(document).ready(function() {
//     jQuery(function() {
//         var width = jQuery(window).width();
//         var header = jQuery(".sticky");
//         offset = header.offset().top;
//         jQuery(window).scroll(function() {
//             if (jQuery(this).scrollTop() > offset && width > 992) {
//                 header.addClass("fixed");
//             } else {
//                 header.removeClass("fixed");
//             }
//         })
//     })
// });