AOS.init({
  offset: 0,
  duration: 300,
  once: true
});

$(window).on('load', function () {
  AOS.refresh();
});