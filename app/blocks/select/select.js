import $ from 'jquery';

export const select = () => {
	$('.js-select').on('click', function () {
		$('.js-select-menu').slideUp(300);
		$('.js-select').removeClass('select__field_active');
		const $dropdown = $(this).parent('.js-dropdown');
		$dropdown.find('.js-select-menu').slideToggle(300);
		$dropdown.find('.js-select').toggleClass('select__field_active');
	});
	$('.js-button').on('click', function () {
		const $dropdown = $(this).closest('.js-dropdown');
		$dropdown.find('.js-select').html($(this).html());
		$dropdown.find('.js-item').attr('value', $(this).attr('id'));
		$dropdown.find('.js-select-menu').slideUp(300);
		$dropdown.find('.js-select').removeClass('select__field_active');
	});
	$(document).on('click', function (e) {
		if (!e.target.closest('.js-dropdown')) {
			const $dropdown = $('.js-dropdown');
			$dropdown.find('.js-select-menu').slideUp(300);
			$dropdown.find('.js-select').removeClass('select__field_active');
		}
	});
};
