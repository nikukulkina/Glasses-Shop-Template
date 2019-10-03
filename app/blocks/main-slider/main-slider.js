import Swiper from 'swiper';

export const initialMainSlider = () => {
	const mainSlider = new Swiper('.swiper-container', {slidesPerColumn: 1, slidesPerGroup: 1, slidesPerView: 1, spaceBetween: 20, loop: true,
		navigation: {
			nextEl: '.main-slider__btn-next',
			prevEl: '.main-slider__btn-prev'}
	});
};
