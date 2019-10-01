import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import {select}from '../blocks/select/select.js';
import {mobileMenu}from '../blocks/mobile-menu/mobile-menu.js';

$(() => {
	svg4everybody();
	select();
	mobileMenu();
});
