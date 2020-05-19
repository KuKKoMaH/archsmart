import initSlider from '../../js/initSlider';

initSlider('.project__slider', {
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          true,
  wrapperClass:  'project__items',
  slideClass:    'project__item',
  navigation:    {
    prevEl: $('.project__nav .nav__button--prev')[0],
    nextEl: $('.project__nav .nav__button--next')[0],
  },
  // lazy:          {
  //   loadPrevNext: true,
  // },
}, { sm: true, md: true, lg: true });
