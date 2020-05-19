import initSlider from '../../js/initSlider';

initSlider('.info__advantages-slider', {
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          true,
  wrapperClass:  'info__advantages-items',
  slideClass:    'info__advantages-item',
  pagination:    {
    el:        '.info__advantages-pagination',
    clickable: true,
  },
}, { sm: true, md: true, lg: true });
