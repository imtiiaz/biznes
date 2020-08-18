$(function () {


    // Menufix

    $(window).bind('scroll', function () {
        if ($(window).scrollTop()) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });


    // Smooth Scroll

    // Smooth Scroll

//    $('a[href*="#"]')
    //        .not('[href="#"]')
    //        .not('[href="#0"]')
    //        .click(function (event) {
    //            if (
    //                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    //                location.hostname == this.hostname
    //            ) {
    //                var target = $(this.hash);
    //                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //                if (target.length) {
    //                    event.preventDefault();
    //                    $('html, body').animate({
    //                        scrollTop: target.offset().top
    //                    }, 1000, function () {
    //                        var $target = $(target);
    //                        $target.focus();
    //                        if ($target.is(":focus")) {
    //                            return false;
    //                        } else {
    //                            $target.attr('tabindex', '-1');
    //                            $target.focus();
    //                        };
    //                    });
    //                }
    //            }
    //        });



    // banner slider 

    $('#banner_part').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    //mixit up
    var mixer = mixitup('.gallery');


    // team slider

    $('.team_slider').slick({
        autoplay: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    });

    // partner slider

    $('.client').slick({
        autoplay: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    });


});
