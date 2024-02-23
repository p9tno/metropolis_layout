$(document).ready(function() {
    function initPreviewSliders() {
        const speed = 2000;
        const lg = new Swiper(".preview_lg_js", {
            slidesPerView: 1,
            allowTouchMove: false,
            clickable: false,
            // loop: true,
            speed: speed,
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
                el: ".preview__control .swiper-pagination",
                type: "fraction",
            },

            thumbs: {
                swiper: sm,
            },
        });
    }
    initPreviewSliders();

    function initSingleServiceSlider() {
        const info = new Swiper(".testimonials_js", {
            slidesPerView: 1,
            allowTouchMove: false,
            clickable: false,
            loop: true,
            speed: 2000,

            autoHeight: true,

            // autoplay: {
            //   delay: 5000,
            // },


            navigation: {
                nextEl: '.testimonials__control .icon_arrow_right',
                prevEl: '.testimonials__control .icon_arrow_left',
            },
        });
    }
    initSingleServiceSlider();


    function addRecallSliders() {
        let recalls = $('.recall_js');

        recalls.each(function() {
            let options = $(this).data('options') || {};
            let $parent = $(this).parent();
            let swiperDefaults = {

                slidesPerView: 1,
                speed: 2000,
                loop: true,

                autoplay: {
                  delay: 5000,
                },

                allowTouchMove: false,
                clickable: false,



                pagination: {
                    type: "fraction",
                    el: $parent.find('.swiper-pagination')[0],
                },

                navigation: {
                    nextEl: $parent.find('.icon_arrow_right')[0],
                    prevEl: $parent.find('.icon_arrow_left')[0],
                },


            };

            let swiperOptions = $.extend(swiperDefaults, options),
            mySwiper = new Swiper(this, swiperOptions);

            // console.log($parent);
            // console.log($parent.find('.projects__dotted')[0]);
            // console.log($parent.closest('.projects__item').find('.projects-swiper-sm-js')[0]);
        });

    }
    addRecallSliders();

});
