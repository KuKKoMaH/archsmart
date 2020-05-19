import 'mark.js/dist/jquery.mark';

const $search = $('.search__items');
if (window.SEARCH_TERM && $search.length) {
  $search.mark(window.SEARCH_TERM);
}
