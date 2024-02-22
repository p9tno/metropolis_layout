window.onload = function () {
    const dataProject =
        {
            // cat: 'Kitchen Remodeling',
            title: '1208 N. Lima St.',
            location: 'Thousand Oaks',
            text: '<p>Like most homes that were built as part of a development project in Thousand oaks the kitchen in this home was extremely small and enclosed from all sides with only 2 small pathways leading to it. The first think on the list was to remove the largest wall and opening the spaceto the living area.</p><p>Like most homes that were built as part of a development project in Thousand oaks the kitchen in this home was extremely small and enclosed from all sides with only 2 small pathways leading to it. The first think on the list was to remove the largest wall and opening the spaceto the living area.</p>',
            link: 'http://frontendie.ru',
            images: ([
                ['', '../../img/preview_1.webp'],
                ['before', '../../img/preview_2.webp'],
                ['after', '../../img/preview_3.webp'],
            ]),
        };

    const cat = dataProject.cat;
    const title = dataProject.title;
    const location = dataProject.location;
    const text = dataProject.text;
    const link = dataProject.link;
    const images = dataProject.images;

    images.forEach(function(item) {
  // ... делать что-то с item

        console.log(item[0]);
        console.log(item[1]);

    });


    console.log(images);


    const project = $('.portfolio__item');
    const modalBody = $('#modalbody');


    project.on('click', function (event) {
        event.preventDefault();

        let id  = $(this).attr('href');
        console.log(id);


        // modalBody.html(id);
        modalBody.html(setModalContent(dataProject.cat, title, location, text, link, images));

        initProjectSlider();

        // $(id).modal('show');
        $('#project').modal('show');



    });

    $('.modal').on('hide.bs.modal', () => {
        console.log('hide modal');
        modalBody.html('');
    });





    function setModalContent(cat, title, location, text, link, images) {
        let slides = '';
        images.forEach((data) => {
            slides += `<div class="swiper-slide">
                <div class="project__img img ${data[0]}">
                    <img
                        src="${data[1]}"
                        alt="image"
                        loading="lazy"
                    />
                </div>
            </div>`;
        });

        let recalContent = `<div class="project__recall">
          <div class="recall__box">
            <div class="recall__title">client testimonial</div>
            <div class="recall__text">
              <p>Jonathan is everything you should be looking for in a general contractor: He listens to what you you want from your project, he has a keen sense of design and aesthetics, he has a stellar collection of subcontractors, and he is responsive with knowledgeable advice for your inevitable mid-project questions. We are now enjoying our small but gem-like kitchen remodel with nothing but good thoughts on the road  the got us here.</p>
            </div>
            <div class="recall__person">
              <div class="person">
                <div class="person__img img"><img src="../../img/person.webp" alt="image" loading="lazy"/></div>
                <div class="person__info">
                  <div class="person__title">Leor & Gordon Ownby</div>
                  <div class="person__desc">3715 Los Olivos Ln. Glendale Angeles, CA</div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

        return `<div class="project__wrap">

            <div class="project__content mobile">
              <div class="project__cat">${cat}</div>
              <div class="project__title">${title}</div>
              <div class="project__location">${location}</div>
            </div>

            <div class="project__slider">
              <div class="project__fraction desktop">
                <div class="fraction"><span class="fraction__current fraction_current_js">01</span>
                  <div class="fraction__line"></div><span class="fraction__all fraction_all_js">03</span>
                </div>
              </div>
              <div class="swiper project_js">
                <div class="swiper-wrapper">
                    ${slides}
                </div>
                <div class="project__control swiper-control dark"><i class="swiper-arrow icon_arrow_left"></i>
                  <div class="swiper-pagination"></div><i class="swiper-arrow icon_arrow_right"> </i>
                </div>
              </div>
            </div>

            <div class="project__content">
              <div class="project__scrolled">
                <div class="project__cat desktop">${cat}</div>
                <div class="project__title desktop">${title}</div>
                <div class="project__location desktop">${location}</div>
                <div class="project__text">${text}</div>

                ${recalContent}

                <div class="project__bottom">
                    <a class="btn" href="${link}"><span>FREE ESTIMATE</span></a>
                </div>

              </div>
            </div>
          </div>
        `;
    }


    function initProjectSlider() {
        console.log('init slider project');
        const project = new Swiper(".project_js", {
            slidesPerView: 1,
            allowTouchMove: false,
            clickable: false,
            // loop: true,
            speed: 2000,

            // autoplay: {
            //   delay: 5000,
            // },

            navigation: {
                nextEl: '.icon_arrow_right',
                prevEl: '.icon_arrow_left',
            },

            breakpoints: {
                768: {
                   // loop: false,
                   grid: {
                       rows: 2,
                   },
                },

            },

            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },

            on: {
                init: function (e) {
                    $('.fraction_current_js').text(pad(e.realIndex + 1));
                    $('.fraction_all_js').text(pad(Math.ceil(e.imagesToLoad.length / 2)));
                },
            },

        });

        project.on('slideChange', function (e) {
            let currentSlide = e.realIndex;
            $('.project__fraction').addClass('active');

            setTimeout(()=>{
                $('.project__fraction').removeClass('active');
                $('.fraction_current_js').text(pad(currentSlide + 1));
            },1000);
        });

        function pad(n) {
            return (n < 10) ? ("0" + n) : n;
        }
    }


}

document.addEventListener('DOMContentLoaded', () => {


    // const project = document.querySelector('.portfolio__item');
    // // const markClose = document.querySelector('.mark__close');
    // const modalContent = document.querySelector('.mark__content');
    //
    // project.addEventListener('click', () => {
    //     console.log('click');
    //     // mark.classList.remove('open');
    // });

    // async function initMap() {
    //     const { Map } = await google.maps.importLibrary('maps');
    //
    //     const bounds = new google.maps.LatLngBounds();
    //     mapMarkers.forEach((marker) => {
    //         bounds.extend(new google.maps.LatLng(marker.position.lat, marker.position.lng));
    //     });
    //
    //     map = new Map(document.getElementById('map'), {
    //         center: { lat: 34.053, lng: -118.362 },
    //         zoom: 11,
    //         disableDefaultUI: true,
    //         mapId: 'e87a5ee68e47b684',
    //     });
    //
    //     map.fitBounds(bounds);
    //
    //     mapMarkers.forEach(({ title, position, place, text, link, images, icon }, i) => {
    //         const addMarker = () => {
    //             const marker = new google.maps.Marker({
    //                 icon: icon,
    //                 position,
    //                 animation: google.maps.Animation.DROP,
    //                 map,
    //                 title,
    //                 optimized: false,
    //             });
    //
    //             marker.addListener('click', (e) => {
    //                 if (!mark.classList.contains('open')) {
    //                     markContent.innerHTML = setMarkerContent(title, place, text, link, images);
    //                     initSlider();
    //                     mark.classList.add('open');
    //                 } else {
    //                     mark.classList.remove('open');
    //                     setTimeout(() => {
    //                         markContent.innerHTML = setMarkerContent(title, place, text, link, images);
    //                         initSlider();
    //                         mark.classList.add('open');
    //                     }, 600);
    //                 }
    //             });
    //         };
    //
    //         setTimeout(addMarker, 500 * i);
    //     });
    //
    // }





});
