import { onMenuButtonClick } from './mobile-menu.js';
import { setSlider } from './slider.js';
import { setRangeSlider } from './range.js';

const menuToggle = document.querySelector('.header__navigation-toggle');

menuToggle.addEventListener('click', onMenuButtonClick);

setSlider();
setRangeSlider();
