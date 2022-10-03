(function($) {
    "use strict";


    // meanmenu with sidebar

    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    $('.open-mobile-menu').on('click', function() {
        $('.side-info').addClass('info-open');
        $('.offcanvas-overlay').addClass('overlay-open');
    })

    $('.side-info-close,.offcanvas-overlay,.mobile_one_page li.menu-item a.nav-link').on('click', function() {
        $('.side-info').removeClass('info-open');
        $('.offcanvas-overlay').removeClass('overlay-open');
    })


    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });


    // preloader - Start
    // --------------------------------------------------
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });
    // preloader - End
    // --------------------------------------------------


    // Testimonial Slider
    // --------------------------------------------------
    $('.testimonial_carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        prevArrow: ".carousel_left",
        nextArrow: ".carousel_right",
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });



    // Case Study Slider
    // --------------------------------------------------
    // portfolio details
    if ($(".case_study_slider").length > 0) {
        let swiperrecent = new Swiper('.case_study_slider', {
            slidesPerView: 3,
            spaceBetween: 65,
            // direction: 'vertical',
            loop: true,
            centeredSlides: true,
            infinite: false,
            grabCursor: true,

            // If we need pagination
            pagination: {
                el: '.case_swiper_pagination',
                type: 'bullets',
                clickable: true
            },


            // Navigation arrows
            navigation: {
                nextEl: '.recent-swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.recent-scrollbar',
                dynamicBullets: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                1199: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                1299: {
                    slidesPerView: 2,
                    spaceBetween: 65,
                }
            }

        });
    }


    // Home-2 Feedback Slider
    // --------------------------------------------------
    if ($(".feedback_carousel").length > 0) {
        let swiperrecent = new Swiper('.feedback_carousel', {
            slidesPerView: 1,
            // direction: 'vertical',
            loop: true,
            infinite: false,
            grabCursor: true,
            autoplay: {
                delay: 5000,
            },

            // If we need pagination
            pagination: {
                el: '.feedback_swiper_pagination',
                type: 'bullets',
                clickable: true
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.recent-scrollbar',
                dynamicBullets: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
                },
                1199: {
                    slidesPerView: 1,
                },
            }

        });
    }

    // Home-3 Client Logo Slider
    // --------------------------------------------------
    if ($(".client_carousel").length > 0) {
        let swiperrecent = new Swiper('.client_carousel', {
            slidesPerView: 5,
            spaceBetween: 140,
            // direction: 'vertical',
            loop: true,
            infinite: false,
            grabCursor: false,
            autoplay: {
                delay: 3000,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 70,
                },
                1199: {
                    slidesPerView: 5,
                    spaceBetween: 90,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 140,
                },
            }

        });
    }


    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup_video').magnificPopup({
        type: 'iframe'
    });


    // Data-background
    $("[data-background]").each(function() {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
        })
        // Data-background color
    $("[data-bg-color]").each(function() {
        $(this).css("background", $(this).attr("data-bg-color"))
    })

    // Data width
    $("[data-width]").each(function() {
        $(this).css("width", $(this).attr("data-width"))
    })

    // isotop
    if (jQuery(".filter-wrapper").length > 0) {
        $('.filter-wrapper .filter-grid').imagesLoaded(function() {
            let $grid = $('.filter-wrapper .filter-grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item' // columnWidth: 1
                }
            });

            // filter items on button click
            $('.filter-nav').on('click', 'button', function() {
                let filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

        });
    }

    //for menu active class
    $('.portfolio_nav button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    // Team Activites Chart
    $('.knob').each(function() {
        var $this = $(this);
        var myVal = $this.attr("data-rel");
        $this.knob({
            "fgColor": "#C42692",
            "bgColor": "none",
            "readOnly": "disable",
            'format': function(value) {
                return value + '%';
            },
        });

        $({
            value: 0
        }).animate({
            value: myVal
        }, {
            duration: 2000,
            easing: 'swing',
            step: function() {
                $this.val(Math.ceil(this.value)).trigger('change');

            }
        })
    });


    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // WOW active
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    }


    //Adding class on visibility

    $.fn.visible = function(partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

    $.fn.visible = function(partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

    $(window).on('scroll', function(event) {

        $(".scale-img-animation-left").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("img-animation-left");
            } else {
                el.removeClass("img-animation-left");
            }
        });
        $(".scale-img-animation-right").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("img-animation-right");
            } else {
                el.removeClass("img-animation-right");
            }
        });

        $(".top_right_visible").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("top_right_visible_animation");
            } else {
                el.removeClass("top_right_visible_animation");
            }
        });

        $(".width_visible").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("width_visible_animation");
            } else {
                el.removeClass("width_visible_animation");
            }
        });

    });

    // Browser Click Disable Functions
    $(document).ready(function() {
        function disableSelection(e) {
            if (typeof e.onselectstart != "undefined") e.onselectstart = function() {
                return false
            };
            else if (typeof e.style.MozUserSelect != "undefined") e.style.MozUserSelect = "none";
            else e.onmousedown = function() {
                return false
            };
            e.style.cursor = "default"
        }
        window.onload = function() {
            disableSelection(document.body)
        };

        window.addEventListener("keydown", function(e) {
            if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 67 || e.which == 70 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) {
                e.preventDefault()
            }
        });
        document.keypress = function(e) {
            if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 70 || e.which == 67 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) {}
            return false
        };

        document.onkeydown = function(e) {
            e = e || window.event;
            if (e.keyCode == 123 || e.keyCode == 18) {
                return false
            }
        };

        document.oncontextmenu = function(e) {
            var t = e || window.event;
            var n = t.target || t.srcElement;
            if (n.nodeName != "A") return false
        };
        document.ondragstart = function() {
            return false
        };
    });


})(jQuery);