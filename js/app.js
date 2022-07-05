// alert(1);

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  // console.log(scroll);

  var header = $("header");

  // if (scroll > 10) {
  //   header.addClass("stuck");
  // } else {
  //   header.removeClass("stuck");
  // }

  // function stuck() {
  return scroll > 20 ? header.addClass("stuck") : header.removeClass("stuck");
  // }
});

// $(".m-menu").click(() => {
//   $(".menu").toggle();
// });

$(() => {
  new WOW().init();
  var mobile = $(".menu").addClass("mob");
  $(document).on("click", ".m-menu", () => {
    $(".menu").fadeIn("fast");
    // alert(1);
  });
  $(document).on("click", ".close-btn", () => {
    $(".menu").hide();
    // alert(1);
  });

  if ($(window).width() > 768) {
    // $(".m-menu").click(() => {
    // });
  }

  const tilt = $(".js-tilt").tilt();
  tilt.on("change", callback); // parameters: event, transforms
  tilt.on("tilt.mouseLeave", callback); // parameters: event
  tilt.on("tilt.mouseEnter", callback); // parameters: event
});

//slick

$(".autoplay").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
