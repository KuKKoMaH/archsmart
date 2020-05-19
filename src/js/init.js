import Breakpoints  from 'breakpoints-js';
import SmoothScroll from 'smooth-scroll';

Breakpoints({
  sm: {
    min: 0,
    max: 767,
  },
  md: {
    min: 768,
    max: 1299,
  },
  lg: {
    min: 1300,
    max: Infinity,
  },
});

// $('.select').selectize({ maxItems: 1 });

window.smoothscroll = new SmoothScroll('a[href*="#"]', { /*header: '.header__container'*/ });

$('.scroll').on('click', ( e ) => {
  e.preventDefault();
  const $el = $(e.delegateTarget);
  window.smoothscroll.animateScroll($el.parents('.scroll__parent').next()[0]);
});


$('.file').each(( i, el ) => {
  const $el = $(el);
  const $name = $el.find('.file__name');
  const originalText = $name.text();
  $el.find('input[type="file"]').on('change', function () {
    const files = $(this)[0].files;
    $name.text(files.length ? files[0].name : originalText);
  });
});

$('.input input').on('input keypress blur focus', ( e ) => {
  setTimeout(() => {
    const { target } = e;
    const $parent = $(e.target).parents('.input');
    if (target.value) {
      $parent.addClass('input--full');
    } else {
      $parent.removeClass('input--full');
    }
  });
});

$('input[type="tel"]').mask("+7 (999) 999-99-99");

$('.popup__close').on('click', (e) => {
  $.magnificPopup.close();
  return false;
});
