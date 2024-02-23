var app = {
    pageScroll: '',
    lgWidth: 1200,
    mdWidth: 992,
    smWidth: 768,
    resized: false,
    iOS: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod/i );
    },
    touchDevice: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i );
    }
};

function isLgWidth() {
    return $( window ).width() >= app.lgWidth;
} // >= 1200
function isMdWidth() {
    return $( window ).width() >= app.mdWidth && $( window ).width() < app.lgWidth;
} //  >= 992 && < 1200
function isSmWidth() {
    return $( window ).width() >= app.smWidth && $( window ).width() < app.mdWidth;
} // >= 768 && < 992
function isXsWidth() {
    return $( window ).width() < app.smWidth;
} // < 768
function isIOS() {
    return app.iOS();
} // for iPhone iPad iPod
function isTouch() {
    return app.touchDevice();
} // for touch device

console.log('pathname: ', window.location.pathname);
console.log('url: ', window.location.href);
console.log('origin: ', window.location.origin);

window.onload = function () {
    console.log('onload');
    function preloader() {
        $(()=>{

            setTimeout( () => {
                let p = $('#preloader');
                p.addClass('hide');

                setTimeout( () => {
                    p.remove()
                },1000);

            },1000);
        });
    }
    preloader();
    // setTimeout( ()=> preloader(),15000 )
}

$(document).ready(function() {
    console.log('ready');
    window.addEventListener('resize', () => {
        // Запрещаем выполнение скриптов при смене только высоты вьюпорта (фикс для скролла в IOS и Android >=v.5)
        if (app.resized == screen.width) { return; }
        app.resized = screen.width;
        // console.log('resize');
        // console.log(screen.width);
        checkOnResize();
    });

    function checkOnResize() {
        if (isLgWidth()) {
            console.log('isLgWidth');
        } else {
            console.log('isLgWidth else');
        }
        // или создаем функцию
        // test();
    }

    function test() {
        if (isLgWidth()) {
            console.log('isLgWidth');
        } else {
            console.log('isLgWidth else');
        }
    }

    let mediaQuerySize = 768;
    let windowWidth = screen.width;
    if (windowWidth >= mediaQuerySize) {
        // console.log('desktop');
        scroolPreview('#preview');
        collapsedActiveOneDesktop();
    } else {
        // console.log('mobile');
        scroolPreview('#sliders', 20);
        collapsedActiveOneMobile();
    }

    function scroolPreview(to, position = 0) {
        $('.preview__control > i').on('click', function (e) {
            let top = $(to).offset().top-position;
            $('body,html').animate({scrollTop: top}, 1000);
        });
    }

    function scroolTo() {
        $(".scroll_js").on("click", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href');
            // console.log(id);

            let top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    };
    scroolTo();

    function showModal() {
        $('.show_modal_js').on('click', function (e) {
            e.preventDefault();
            let id  = $(this).attr('href');

            $(id).modal('show');
        });

        $('.modal').on('show.bs.modal', () => {
            // let openedModal = $('.modal.in:not(.popapCalc)');
            let openedModal = $('.modal');
            if (openedModal.length > 0) {
                openedModal.modal('hide');
            }
        });
    }
    // showModal();


    function openMobileNav() {
        $('.header__toggle').click(function(event) {
            // console.log('Показ меню');
            $('.header__nav').toggleClass('header__nav_open');
            $('.header__toggle').toggleClass('header__toggle_open');
            $( 'body' ).toggleClass( 'nav-open' );
        });

        $(document).mouseup(function (e) {
            let div = $(".header");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $('.header__nav').removeClass('header__nav_open');
                $('.header__toggle').removeClass('header__toggle_open');
                $('body').removeClass('nav-open');
            }
        });
    };
    openMobileNav();

    // function activeNav() {
    //     $('.menu-item').on('click', function() {
    //         $('.menu-item').removeClass('current-menu-item');
    //         $(this).addClass('current-menu-item');
    //     })
    // };
    // activeNav();

    function toggleCategory() {
        $('.category__toggle').click(function(event) {
            $('.category').toggleClass('active');
            $('.category__list').slideToggle(600)
        })

        // $('.category').on('mouseenter', function(e) {
        //     // console.log('mouse on');
        //     $('.category').addClass('active');
        //     $('.category__list').slideDown()
        // });
        //
        $('.category').on('mouseleave', function(e) {
            // console.log('mouse of');
            $('.category').removeClass( 'active' );
            $('.category__list').slideUp(600)
        });
    }
    toggleCategory();

    function showMore(classItem, btn) {
        // let classItem = '.vacancies__item';
        // let classItem = class;
        let item = $(''+ classItem +'');
        let count = item.length;
        let start = 1;
        let show = 1;

        item.addClass('d-none');
        $('' + classItem + ':lt(' + start + ')').removeClass('d-none');

        $(btn).click(function(e) {
            e.preventDefault();
            $(this).addClass('loading');

            let load = $(this).data('load');
            let more = $(this).data('more');

            start = (start + show <= count) ? start + show : count;

            $(this).text(load);

            setTimeout(() => {
                $(''+ classItem +':lt(' + start + ')').removeClass('d-none');
                if ($(''+ classItem +':not(.d-none)').length == count) {
                    $(this).parent().remove();
                }
                $(this).removeClass('loading');
                $(this).text(more);
            }, 500);
        });

    }
    // showMore('.vacancies__item', '.show_more_v_js');

    function collapsedActiveOneDesktop() {
        $('.collapse__title').on('click', function() {
            let body = $(this).parent().find('.collapse__body');
            $('.collapse__body').not(body).slideUp();
            $(body).slideToggle();

            let toggle = $(this).parent().find('.collapse__title');
            $('.collapse__title').not(toggle).removeClass('open');
            $(toggle).toggleClass('open');
        })
    }

    function collapsedActiveOneMobile() {
        $('.collapse__title').on('click', function() {
            let body = $(this).parent().find('.collapse__body');
            $('.collapse__body').not(body).slideUp();
            $(body).slideToggle();

            let toggle = $(this).parent().find('.collapse__title');
            $('.collapse__title').not(toggle).removeClass('open');
            $(toggle).toggleClass('open');

            if($(this).hasClass('open')) {

                setTimeout(() => {
                    let id  = $(this).attr('data-top');
                    let top = $(id).offset().top-20;
                    $('body,html').animate({scrollTop: top}, 1000);
                }, 610)
            }

        })
    }


    function doTabs () {
        $('.tabs__wrapper').each(function() {
            let ths = $(this);
            ths.find('.tab__item').not(':first').hide();
            ths.find('.tab').click(function() {
                ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
                ths.find('.tab__item').hide().eq($(this).index()).fadeIn()
            }).eq(0).addClass('active');
        });
    }
    doTabs();




    // Видео youtube для страницы
    function uploadYoutubeVideo() {
        if ( $( ".js-youtube" ) ) {

            // $( ".js-youtube" ).each( function () {
            //     // Зная идентификатор видео на YouTube, легко можно найти его миниатюру
            //     $( this ).css( 'background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)' );
            //
            //     // Добавляем иконку Play поверх миниатюры, чтобы было похоже на видеоплеер
            //     $( this ).append( $( '<img src="../wp-content/themes/gymn/assets/img/play.png" alt="Play" class="video__play">' ) );
            //
            // } );

            $( '.video__play, .video__prev' ).on( 'click', function () {
                // создаем iframe со включенной опцией autoplay
                let wrapp = $( this ).closest( '.js-youtube' ),
                    videoId = wrapp.attr( 'id' ),
                    iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1";

                if ( $( this ).data( 'params' ) ) iframe_url += '&' + $( this ).data( 'params' );

                // Высота и ширина iframe должны быть такими же, как и у родительского блока
                let iframe = $( '<iframe/>', {
                    'frameborder': '0',
                    'src': iframe_url,
                    'allow': "autoplay"
                } )

                // Заменяем миниатюру HTML5 плеером с YouTube
                $( this ).closest( '.video__wrapper' ).append( iframe );

            } );
        }
    };
    uploadYoutubeVideo();

    function uploadYoutubeVideoForModal() {
        if ( $( ".youtubeModal_js" ) ) {

            $( '.youtubeModal_js' ).on( 'click', function () {
                $('#modalVideo').modal('show');

                let wrapp = $( this ).closest( '.youtubeModal_js' );
                let videoId = wrapp.attr( 'id' );
                let iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1";

                // доп параметры для видоса
                // if ( $( this ).data( 'params' ) ) iframe_url += '&' + $( this ).data( 'params' );

                // Высота и ширина iframe должны быть такими же, как и у родительского блока
                let iframe = $( '<iframe/>', {
                    'frameborder': '0',
                    'src': iframe_url,
                    'allow': "autoplay"
                } )
                $(".modalVideo__wraper").append(iframe);

                $("#modalVideo").on('hide.bs.modal', function () {
                    $(".modalVideo__wraper").html('');
                });

            } );
        }
    };
    uploadYoutubeVideoForModal();


    // start onVisible
    function onVisible( selector, callback, repeat = false ) {

        let options = {
            threshold: [ 0.5 ]
        };
        let observer = new IntersectionObserver( onEntry, options );
        let elements = document.querySelectorAll( selector );

        for ( let elm of elements ) {
            observer.observe( elm );
        }

        function onEntry( entry ) {
            entry.forEach( change => {
                let elem = change.target;
                // console.log(change);
                // console.log(elem.innerHTML);
                if ( change.isIntersecting ) {
                    if ( !elem.classList.contains( 'show' ) || repeat ) {
                        elem.classList.add( 'show' );
                        callback( elem );
                    }
                }
            });
        }
    }

    onVisible( '.programsInfo__number', function ( e ) {
        // cod or function
    } );
    // end onVisible



    // --------------------------------------------------------------------
    // Деление чисел на разряды Например из строки 10000 получаем 10 000
    // Использование: thousandSeparator(1000) или используем переменную.
    // function thousandSeparator(str) {
    //     var parts = (str + '').split('.'),
    //         main = parts[0],
    //         len = main.length,
    //         output = '',
    //         i = len - 1;
    //
    //     while(i >= 0) {
    //         output = main.charAt(i) + output;
    //         if ((len - i) % 3 === 0 && i > 0) {
    //             output = ' ' + output;
    //         }
    //         --i;
    //     }
    //
    //     if (parts.length > 1) {
    //         output += '.' + parts[1];
    //     }
    //     return output;
    // };
    //
    // console.log(thousandSeparator(700));
    // --------------------------------------------------------------------



    // --------------------------------------------------------------------
    // <div class="form__row">
    //     <label class="form__file_label" data-text="Файл не выбран">
    //     <input type="file" required="required"/>
    //     <p class="form__file">Загрузить файл</p>
    //     </label>
    // </div>

    // function addNameFile() {
    //     $('input[type="file"]').change(function (e) {
    //         // console.log('change');
    //         var text = $(this).closest('label').attr('data-text');
    //         // var container = $(this).closest('.tab-item');
    //         if (typeof e.target.files[0] == 'undefined') {
    //             var fileName = text;
    //             $(this).parent().removeClass('active');
    //         } else {
    //             var fileName = e.target.files[0].name;
    //             $(this).parent().addClass('active');
    //             fileName = fileName.substring(0, 20);
    //             // console.log(fileName);
    //         }
    //         $(this).parent().find('p').text(fileName);
    //         // console.log(fileName);
    //         // container.find('[controlBtn_JS]').removeClass('disabled');
    //     });
    // }
    // addNameFile();
    // --------------------------------------------------------------------


    // function reloadPage () {
    //     if (!localStorage.getItem("reload")) {
    //         localStorage.setItem("reload", "true");
    //         location.reload();
    //     }
    //     else {
    //         localStorage.removeItem("reload");
    //     }
    // }


    // Склонение существительных после числительных. https://snipp.ru/php/word-declination
    // ['час', 'часа', 'часов']
    // ['минута', 'минуты', 'минут']
    // function numWord (value, words, show = true) {
    //     let num = value % 100;
    //     if (num > 19) {
    //         num = value % 10;
    //     }

    //     let out = (show) ?  value + ' ' : '';

    //     switch (num) {
    //         case 1:  out += words[0]; break;
    //         case 2:
    //         case 3:
    //         case 4:  out += words[1]; break;
    //         default: out += words[2]; break;

    //     }
    //     // console.log(out);
    //     return out;
    // }



})
