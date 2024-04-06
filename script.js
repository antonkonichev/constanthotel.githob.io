$(document).ready(function () {
  var slider = $(".slider");
  slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".slider-prev").click(function () {
    slider.slick("slickPrev");
  });

  $(".slider-next").click(function () {
    slider.slick("slickNext");
  });
});

$(document).ready(function () {
  $(".lang-switch").click(function (e) {
    e.preventDefault();

    var selectedLang = $(this).data("lang");

    console.log("Выбран язык: " + selectedLang);
  });
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
