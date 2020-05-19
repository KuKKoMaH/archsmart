import openPopup  from '../../js/openPopup';
import initSlider from '../../js/initSlider';

initSlider('.slide__slider', {
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          true,
  wrapperClass:  'slide__items',
  slideClass:    'slide__item',
  navigation:    {
    prevEl: '.nav__button--prev',
    nextEl: '.nav__button--next',
    // prevEl: $('.slide__button--prev')[0],
    // nextEl: $('.slide__button--next')[0],
  },
  lazy:          {
    loadPrevNext: true,
  },
}, { sm: true, md: true, lg: true });

$('.slide__video').on('click', ( e ) => {
  e.preventDefault();
  e.stopPropagation();

  openPopup({
    type:  'iframe',
    items: { src: $(e.delegateTarget).attr('href') },
  });
});
