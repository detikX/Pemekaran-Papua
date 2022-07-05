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
});
