import Swiper from 'swiper';

export const auxiliarySlider = () => {
	const slider = new Swiper('.auxiliary-slider__slider-container', {slidesPerColumn: 1, slidesPerGroup: 1, slidesPerView: 1, spaceBetween: 20, loop: true});
	const dots = document.querySelectorAll('.auxiliary-slider__dot');

	slider.on('slideChange', () => {
		const d = document.querySelector('.auxiliary-slider__dot_active');
		d.classList.remove('auxiliary-slider__dot_active');
		dots[slider.realIndex].classList.add('auxiliary-slider__dot_active');
	});

	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener('click', function () {
			slider.slideTo(i + 1);
		});
	}
};
