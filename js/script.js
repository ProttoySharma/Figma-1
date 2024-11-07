$(".bannerslider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 2000,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
});

$(".reviewSlider").slick({
  slidesToShow: 3,
  prevArrow: `<i class="fa-solid fa-angle-left fa-fw prev"></i>`,
  nextArrow: `<i class="fa-solid fa-angle-right fa-fw next"></i>`,
  centerMode: true,
  centerPadding: "0px",

  responsive: [
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    }
  ],
});
