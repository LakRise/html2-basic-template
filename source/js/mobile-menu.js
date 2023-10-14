const header = document.querySelector('.header');
const nav = header.querySelector('.page-navigation');
const button = header.querySelector('.header__navigation-toggle');

const onMenuButtonClick = () => {
  if (nav.classList.contains('page-navigation--closed') &&
    button.classList.contains('header__navigation-toggle--closed')) {
    nav.classList.remove('page-navigation--closed');
    button.classList.remove('header__navigation-toggle--closed');
    nav.classList.add('page-navigation--opened');
    button.classList.add('header__navigation-toggle--opened');
  } else {
    button.classList.remove('header__navigation-toggle--opened');
    nav.classList.remove('page-navigation--opened');
    nav.classList.add('page-navigation--closed');
    button.classList.add('header__navigation-toggle--closed');
  }
};

export { onMenuButtonClick };
