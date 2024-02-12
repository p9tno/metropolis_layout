$(document).ready(function() {
    function initPreviewSliders() {
        const speed = 1500;
        const lg = new Swiper(".preview_lg_js", {
            slidesPerView: 1,
            allowTouchMove: false,
            clickable: false,
            // loop: true,
            speed: speed,

        });

        const sm22 = new Swiper(".preview_sm_js", {
            slidesPerView: 1,
            allowTouchMove: false,
            clickable: false,
            // loop: true,
            speed: speed,
            thumbs: {
                swiper: lg,
            },
        });

        const info = new Swiper(".preview_info_js", {
            slidesPerView: 1,
            allowTouchMove: false,
            clickable: false,
            // loop: true,
            speed: speed,

            // autoplay: {
            //   delay: 5000,
            // },

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
                swiper: sm22,
            },
        });
    }
    initPreviewSliders()






    // BEGIN project

    // END project


    const certificate = new Swiper('.certificate-swiper-js', {
        slidesPerView: 2,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.certificate__dotted',
            clickable: true,
        },

        breakpoints: {
            768: {
                spaceBetween: 24,
                slidesPerView: 3,
            },

        }
    });

    const ourhouses = new Swiper('.ourhouses-swiper-js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.ourhouses__arrows .icon_arrow_right',
            prevEl: '.ourhouses__arrows .icon_arrow_left',
        },
        pagination: {
            el: '.ourhouses__dotted',
            clickable: true,
        },
        initialSlide: 0,



        breakpoints: {
            768: {
                spaceBetween: 27,
                slidesPerView: 4,
            },

        }
    });

    const data = new Swiper('.data-swiper-js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        // loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.data__dotted',
        },

        breakpoints: {
            768: {
                spaceBetween: 80,
                slidesPerView: 3,
            },

        }
    });

    const teamImgSlider = new Swiper('.teamImgSlider-swiper-js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.teamImgSlider__dotted',
        },

        breakpoints: {
            768: {
                spaceBetween: 74,
                slidesPerView: 3,
            },

        }
    });

    const blog = new Swiper('.blog-swiper-js', {
        slidesPerView: 1,
        speed: 500,
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.blog__dotted',
            // clickable: true,
        },

        spaceBetween: 10,

        breakpoints: {
            768: {
                spaceBetween: 42,
                slidesPerView: 2,
            },

        }
    });

    const singleSlider = new Swiper('.single-swiper-js', {
        slidesPerView: 1,
        speed: 500,
        // loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.singleSlider__dotted',
            clickable: true,
        },

    });

    const largeSlider = new Swiper('.largeSlider-swiper-js', {
        slidesPerView: 1,
        speed: 500,
        // loop: true,
        // autoplay: {
        //   delay: 5000,
        // },
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.largeSlider__dotted',
            clickable: true,
        },

    });

    // BEGIN TEAM
    const teamSlider = new Swiper('.team-swiper-js', {
        slidesPerView: 2,
        speed: 500,
        loop: true,
        // centeredSlides: true,
        freeMode: true,
        watchSlidesProgress: true,

        breakpoints: {
            768: {
                slidesPerView: 4,
            },
        }
    });


    const teamPreview = new Swiper('.teamPreview-swiper-js', {
        slidesPerView: 1,
        speed: 500,
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },

        allowTouchMove: false,

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.teamSlider__dotted',
            clickable: true,
        },

        thumbs: {
            swiper: teamSlider,
        },

        slideToClickedSlide: true,
        autoHeight: true,

    });
    teamPreview.on('slideChange', function (e) {
        // console.log('slide changed');
        // console.log(e.activeIndex);
    });

    // END TEAM

    const videoWork = new Swiper('.videoWork-swiper-js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.videoWork__dotted',
            clickable: true,
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 56,
            },
        }

    });

    const gifts = new Swiper('.gifts-swiper-js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.gifts__dotted',
            clickable: true,
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        }

    });

    const stages = new Swiper('.stages-swiper-js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.stages__dotted',
            clickable: true,
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 60,
            },
        }

    });

    const logos = new Swiper('.logos-swiper-js', {
        slidesPerView: 3,
        speed: 500,
        autoplay: {
          delay: 5000,
        },

        breakpoints: {
            768: {
                slidesPerView: 8,
            },
        }
    });

    // logos.on('slideChange', function () {
    //     console.log('slide changed');
    //
    //     let leftSlide = logos.activeIndex;
    //     let rightSlide = logos.activeIndex + 2;
    //     leftSlide.add('left_slide');
    //     rightSlide.add('right_slide');
    //
    //     console.log(leftSlide);
    //     console.log(rightSlide);
    //     console.log(logos.activeIndex);
    //     console.log(logos.$el);
    // });

    // let activeSlide = swiper.activeIndex;




    const otherProjects = new Swiper(".otherProjects-swiper-js", {
        slidesPerView: 1,
        allowTouchMove: false,
        loop: true,

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },

        pagination: {
            el: '.otherProjects__dotted',
        },


    });


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
    addSliders();

    function addSteps() {

        let steps = $('.steps-swiper-js');

        steps.each(function() {
            let options = $(this).data('options') || {};
            let $parent = $(this).parent().parent();
            let swiperDefaults = {

                slidesPerView: 1,
                spaceBetween: 10,
                speed: 500,
                loop: true,

                pagination: {
                    el: $parent.find('.steps__dotted')[0],
                },

                navigation: {
                    nextEl: $parent.find('.icon_arrow_right')[0],
                    prevEl: $parent.find('.icon_arrow_left')[0],
                },

                breakpoints: {
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 36,
                    },
                }


            };

            let swiperOptions = $.extend(swiperDefaults, options),
            mySwiper = new Swiper(this, swiperOptions);

            // console.log($parent);
            // console.log($parent.find('.steps__dotted')[0]);
            // console.log($parent.closest('.projects__item').find('.projects-swiper-sm-js')[0]);
        });

    }
    addSteps();

});
