import addScrollButton from "./addScrollButton.js";
addScrollButton();

$(document).ready(function () {
  $(".reviews__carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
