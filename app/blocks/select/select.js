import $ from 'jquery';

export const select = () => {
	$('.js-select').on('click', function () {
		$('.js-select-menu').slideToggle(300);
		$('.js-select').addClass('select__field_active');
	});
	$('.js-button').on('click', function () {
		$('.js-select').html($(this).html());
		$('.js-item').attr('value', $(this).attr('id'));
		$('.js-select-menu').slideUp(300);
		$('.js-select').removeClass('select__field_active');
	});
	$(document).on('click', function (e) {
		if (!e.target.closest('.js-dropdown')) {
			$('.js-select-menu').slideUp(300);
			$('.js-select').removeClass('select__field_active');
		}
	});

};
