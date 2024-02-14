document.addEventListener('DOMContentLoaded', () => {
    let map;

    const mark = document.querySelector('.mark');
    const markClose = document.querySelector('.mark__close');
    const markContent = document.querySelector('.mark__content');

    markClose.addEventListener('click', () => {
        mark.classList.remove('open');
    });

    async function initMap() {
        //@ts-ignore
        const { Map } = await google.maps.importLibrary('maps');
        // 34.05337154967566, -118.36230308012492

        const bounds = new google.maps.LatLngBounds();

        mapMarkers.forEach((marker) => {
            bounds.extend(new google.maps.LatLng(marker.position.lat, marker.position.lng));
        });

        map = new Map(document.getElementById('map'), {
            center: { lat: 34.053, lng: -118.362 },
            zoom: 11,
            disableDefaultUI: true,
            mapId: 'e87a5ee68e47b684',
        });
        // console.log(map);
        // console.log(bounds);

        map.fitBounds(bounds);



        mapMarkers.forEach(({ title, position, place, text, link, images }, i) => {
            // console.log(title, position);

            const addMarker = () => {
                const marker = new google.maps.Marker({
                    icon: '../../img/marker.svg',
                    position,
                    animation: google.maps.Animation.DROP,
                    map,
                    title,
                    optimized: false,
                });

                marker.addListener('click', (e) => {
                    // if (!mark.classList.contains('open')) {
                    //
                    //     markContent.innerHTML = setMarkerContent(title, place, text, link, images);
                    //     mark.classList.add('open');
                    // }

                    mark.classList.remove('open');
                    markContent.innerHTML = setMarkerContent(title, place, text, link, images);
                    initSlider();

                    setTimeout(() => {
                        mark.classList.add('open');

                    }, 100);

                });
            };

            setTimeout(addMarker, 500 * i);
        });




    }

    initMap();

    // if(map) {
    //     map.setZoom(1);
    // }

    function setMarkerContent(title, place, text, link, images) {
        let slides = '';
        images.forEach((img) => {
            slides += `<div class="swiper-slide">
				<img
					src="${img}"
					alt=""
				/>
			</div>`;
        });

        return `<div class="mark__thumb">

                <div class="swiper preview_markSlider_js">
                    <div class="swiper-wrapper">
                        ${slides}
                    </div>
                </div>



				<div class="markSlider__action">
                    <div class="swiper-control">
                        <i class="swiper-arrow icon_arrow_left"></i>
                        <div class="swiper-pagination"></div>
                        <i class="swiper-arrow icon_arrow_right"></i>
                    </div>
				</div>
			</div>
			<div class="mark__body">
				<div class="mark__title">${title}</div>
				<div class="mark__place">${place}</div>
				<div class="mark__text">${text}</div>
			</div>
			<div class="mark__foot">
				<a
					href="${link}"
					class="mark__link"
					>Do you need a similar kitchen? contact us</a
				>
			</div>
		`;
    }
});


function initSlider() {
    console.log('initSlider');
    const markSlider = new Swiper('.preview_markSlider_js', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 500,
        loop: true,

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: ".markSlider__action .swiper-pagination",
            type: "fraction",
        },

    });
}
