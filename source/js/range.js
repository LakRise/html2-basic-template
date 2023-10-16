const sliderElement = document.querySelector('.form__range');
const inputMin = document.querySelector('.form__input-min');
const inputMax = document.querySelector('.form__input-max');
const price = document.querySelector('.form__price-wrapper');

const createSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1000,
    },
    step: 1,
    format: {
      to: function (value) {
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      }
    },
    connect: true,
    start: [0, 900],
    cssPrefix: 'range-slider__element noUi-'
  });
};

const setSliderValue = () => {
  sliderElement.noUiSlider.on('update', () => {
    const value = sliderElement.noUiSlider.get();
    inputMin.value = value[0];
    inputMax.value = value[1];
  });
};

const onInputChange = () => {
  if (inputMin.value !== sliderElement.noUiSlider.get()[0]) {
    sliderElement.noUiSlider.set([inputMin.value, null]);
  }
  if (inputMax.value !== sliderElement.noUiSlider.get()[1]) {
    sliderElement.noUiSlider.set([null, inputMax.value]);
  }
};

const setRangeSlider = () => {
  createSlider();
  setSliderValue();
  price.addEventListener('change', onInputChange);
};

export { setRangeSlider };
