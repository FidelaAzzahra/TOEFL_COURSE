$(document).ready(function () {
  "use strict";

  //banner carousel
  var slides = $(".carousel-sliders"),
    b = slides.find(".item");
  b.each(function () {
    var e = $(this),
      ocImg = e.find("img").attr("src");
    e.css({
      "background-image": "url(" + ocImg + ")",
      "background-size": "cover",
      "background-position": "center",
    });
  });

  slides.owlCarousel({
    animateOut: "fadeOut",
    animateIn: "flipInX",
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
    dots: false,
    navContainer: ".banner .custom-nav",
    items: 1,
  });

  //testimoni carousel
  $(".carousel-testimoni").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
  });
});

//slider untuk konten video
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("videoSlider");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-amber", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-amber";
}