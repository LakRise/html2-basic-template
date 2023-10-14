import { onMenuButtonClick } from './mobile-menu.js';
import { setSlider } from './slider.js';

const menuToggle = document.querySelector('.header__navigation-toggle');

menuToggle.addEventListener('click', onMenuButtonClick);
setSlider();
