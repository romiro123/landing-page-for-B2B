$(function () {
  $('.faq__list').accordion({
    active: true,
    icons: false,
    collapsible: true,
    heightStyle: "content",
    classes: {
      'ui-accordion': 'faq__list',
      'ui-state-default': 'btn--question::after',
    },
  });
});
