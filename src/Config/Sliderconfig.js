export const mainSliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
};

export const gridSliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  // rows: 3,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        // slidesToScroll: 4,
        // rows: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        // slidesToScroll: 1,
        // rows: 3
      }
    }
  ]
};