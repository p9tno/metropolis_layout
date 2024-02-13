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
        // console.log(mapMarkers);

        map = new Map(document.getElementById('map'), {
            center: { lat: 34.053, lng: -118.362 },
            zoom: 11,
            disableDefaultUI: true,
            mapId: 'e87a5ee68e47b684',
        });

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
                    if (!mark.classList.contains('open')) {
                        markContent.innerHTML = setMarkerContent(title, place, text, link, images);
                        mark.classList.add('open');
                    }
                });
            };

            setTimeout(addMarker, 500 * i);
        });
    }

    initMap();

    function setMarkerContent(title, place, text, link, images) {
        let slides = '';
        images.forEach((img) => {
            slides += `<div class="markSlider__slide">
				<img
					src="${img}"
					alt=""
				/>
			</div>`;
        });

        return `<div class="mark__thumb">
				<div class="markSlider">${slides}</div>
				<div class="markSlider__action">
					<div class="markSlider__next"></div>
					<div class="markSlider__count">1/${images.length}</div>
					<div class="markSlider__prev"></div>
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
