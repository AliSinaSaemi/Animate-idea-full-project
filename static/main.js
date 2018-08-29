$('#owl-one').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 10000,
  smartSpeed: 900,
  navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

$('#owl-two').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 10000,
  smartSpeed: 900,
  navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

$('#owl-three').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 900,
  navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

//open-searchbox

$(document).ready(function () {
  $('.open-searchbox').click(function (e) {
    e.preventDefault();
    $("nav > section").addClass("top-search-open");
    $("body > .page-address").addClass("page-address-down");
  });
  $('.close-search').click(function (e) {
    e.preventDefault();
    $("nav > section").removeClass("top-search-open");
    $("body > .page-address").removeClass("page-address-down");
  });
});

$(document).ready(function () {
  $(".like-news").click(function () {
    $(this).toggleClass("liked");
  });
});