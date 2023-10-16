const hero = document.querySelector('.hero');
const sliderList = hero.querySelector('.slider-list');
const sliderButtonLeft = hero.querySelector('.slider-button-prev');
const sliderButtonRight = hero.querySelector('.slider-button-next');
const sliderPagination = hero.querySelector('.slider-pagination');

const slides = Array.from(sliderList.children);
const pagination = Array.from(sliderPagination.children);

const changeSlider = (index) => {
  sliderList.querySelector('.slider-list__item--active').classList.remove('slider-list__item--active');
  slides[index].classList.add('slider-list__item--active');
  hero.querySelector('.hero__slider-pagination-link--active').classList.remove('hero__slider-pagination-link--active');
  pagination[index].querySelector('.hero__slider-pagination-link').classList.add('hero__slider-pagination-link--active');
};

const onSlideClick = (evt) => {
  if (!evt.target.closest('.slider-button-prev')
    && !evt.target.closest('.slider-button-next')
    && !evt.target.closest('.slider-pagination')
    || evt.target.closest('.hero__slider-pagination-link--active')) {
    return;
  }

  const slideIndex = slides.indexOf(sliderList.querySelector('.slider-list__item--active'));

  if (evt.target.closest('.slider-button-next')) {
    changeSlider(slideIndex + 1);
  }
  if (evt.target.closest('.slider-button-prev')) {
    changeSlider(slideIndex - 1);
  }
  if (evt.target.closest('.hero__slider-pagination-item')) {
    const paginationIndex = pagination.indexOf(evt.target.parentNode);
    changeSlider(paginationIndex);
  }
  if (slides.indexOf(sliderList.querySelector('.slider-list__item--active')) === 0) {
    sliderButtonLeft.setAttribute('disabled', '');
  } else if (sliderButtonLeft.hasAttribute('disabled')) {
    sliderButtonLeft.removeAttribute('disabled');
  }
  if (slides.indexOf(sliderList.querySelector('.slider-list__item--active')) === (slides.length - 1)) {
    sliderButtonRight.setAttribute('disabled', '');
  } else if (sliderButtonRight.hasAttribute('disabled')) {
    sliderButtonRight.removeAttribute('disabled');
  }
};

const setSlider = () => {
  if (slides.indexOf(sliderList.querySelector('.slider-list__item--active')) === 0) {
    sliderButtonLeft.setAttribute('disabled', '');
  }
  if (slides.indexOf(sliderList.querySelector('.slider-list__item--active')) === (slides.length - 1)) {
    sliderButtonRight.setAttribute('disabled', '');
  }
  hero.addEventListener('click', onSlideClick);
};

export { setSlider };
