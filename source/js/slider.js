import { onMenuButtonClick } from "./mobile-menu";

const hero = document.querySelector('.hero');
const sliderList = hero.querySelector('.slider-list');
const sliderButton = hero.querySelector('.slider-button-prev');

const slides = Array.from(sliderList.children);

if (sliderList.querySelector('.slider-list__item--active').indexOf(slides) === 0) {

  sliderButton.classList.add('.')
}

const setActiveSlide = () => {
  console.log('changed slider');
  sliderList.querySelector('.slider-list__item--active').classList.remove('slider-list__item--active');
  slides[2].classList.add('slider-list__item--active');
};

sliderButton.addEventListener('click', setActiveSlide);

console.log(slides);

//slide changes to next on right button click
//slide changes to previous on left button click
//slide button hides on last position
//pagination shows which slide is active
//clicking on active slide pagination doesn't do anything
//clicking on inactive slide pagination moves to that slide

