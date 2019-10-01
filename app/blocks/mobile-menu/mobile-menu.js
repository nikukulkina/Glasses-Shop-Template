export const mobileMenu = () => {
	const button = document.querySelector('.js-mobile-menu-button');
	const overlay = document.querySelector('.page-main__overlay');
	const links = document.querySelectorAll('.js-mobile-menu-link');

	const moveMenu = () => {
		const menu = document.querySelector('.mobile-menu');
		menu.classList.toggle('mobile-menu_active');
		overlay.classList.toggle('page-main__overlay_active');
		if (overlay.classList.contains('page-main__overlay_active')) {
			document.body.style.overflowY = 'hidden';
		}else {
			document.body.style.overflowY = 'auto';
		}
	};
	button.addEventListener('click', e => {
		e.preventDefault();
		moveMenu();
	});
	overlay.addEventListener('click', () => {
		moveMenu();
	});
	for (const link of links) {
		link.addEventListener('click', () => {
			moveMenu();
		});
	}
};
