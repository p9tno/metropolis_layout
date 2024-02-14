$(document).ready(function() {
    function initPreviewSliders() {
        const speed = 2000;
        const lg = new Swiper(".preview_lg_js", {
            slidesPerView: 1,
            allowTouchMove: false,
            clickable: false,
            // loop: true,
            speed: speed,
            // effect: "creative",
            // creativeEffect: {
            //   prev: {
            //     shadow: true,
            //     translate: ["-20%", 0, -1],
            //   },
            //   next: {
            //     translate: ["100%", 0, 0],
            //     shadow: true,
            //   },
            // },

        });

        const sm = new Swiper(".preview_sm_js", {
            slidesPerView: 1,
            allowTouchMove: false,
            clickable: false,
            // loop: true,
            speed: speed,
            thumbs: {
                swiper: lg,
            },
            // effect: "creative",
            // creativeEffect: {
            //   prev: {
            //     // shadow: true,
            //     translate: ["-20%", 0, -1],
            //   },
            //   next: {
            //     translate: ["100%", 0, 0],
            //   },
            // },
        });

        const info = new Swiper(".preview_info_js", {
            slidesPerView: 1,
            allowTouchMove: false,
            clickable: false,
            // loop: true,
            speed: speed,

            autoplay: {
              delay: 5000,
            },

            effect: "fade",
            fadeEffect: {
              crossFade: true
            },

            autoHeight: true,

            navigation: {
                nextEl: '.preview__control .icon_arrow_right',
                prevEl: '.preview__control .icon_arrow_left',
            },

            breakpoints: {
                768: {
                    autoHeight: false,
                },

            },

            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },

            thumbs: {
                swiper: sm,
            },
        });
    }
    initPreviewSliders()





    // const teamPreview = new Swiper('.teamPreview-swiper-js', {
    //     slidesPerView: 1,
    //     speed: 500,
    //     loop: true,
    //     effect: "fade",
    //     fadeEffect: {
    //       crossFade: true
    //     },
    //
    //     allowTouchMove: false,
    //
    //     navigation: {
    //         nextEl: '.icon_arrow_right',
    //         prevEl: '.icon_arrow_left',
    //     },
    //     pagination: {
    //         el: '.teamSlider__dotted',
    //         clickable: true,
    //     },
    //
    //     thumbs: {
    //         swiper: teamSlider,
    //     },
    //
    //     slideToClickedSlide: true,
    //     autoHeight: true,
    //
    // });
    // teamPreview.on('slideChange', function (e) {
    //     // console.log('slide changed');
    //     // console.log(e.activeIndex);
    // });









    function addSliders() {

        let projects = $('.projects-swiper-js');

        projects.each(function() {
            let options = $(this).data('options') || {};
            let $parent = $(this).parent();
            let swiperDefaults = {

                loop: true,
                slidesPerView: 1,
                allowTouchMove: false,

                pagination: {
                    el: $parent.find('.projects__dotted')[0],
                },

                navigation: {
                    nextEl: $parent.find('.icon_arrow_right')[0],
                    prevEl: $parent.find('.icon_arrow_left')[0],
                },

                thumbs: {
                    swiper: {
                        el: $parent.closest('.projects__item').find('.projects-swiper-sm-js')[0],
                        loop: true,
                        spaceBetween: 6,
                        slidesPerView: 2,
                        centeredSlides: true,

                        freeMode: true,
                        watchSlidesProgress: true,

                        breakpoints: {
                            768: {
                                spaceBetween: 15,
                                centeredSlides: false,
                            },
                        }
                    }
                },

            };

            let swiperOptions = $.extend(swiperDefaults, options),
            mySwiper = new Swiper(this, swiperOptions);

            // console.log($parent);
            // console.log($parent.find('.projects__dotted')[0]);
            // console.log($parent.closest('.projects__item').find('.projects-swiper-sm-js')[0]);
        });

    }
    // addSliders();



});
