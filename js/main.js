$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    // loop: true,
    nav: true,
    // dots: true,
    // center: true,
    margin: 10,
    navClass: ["slide-prev", "slide-next"],
    // navigation: true,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});
