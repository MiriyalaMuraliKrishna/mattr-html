jQuery(document).ready(function(){
    jQuery('.home-featured-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        dots: false,
        arrows: true,
        prevArrow: '<span class="slick-arrow prev-arrow fa-regular fa-angle-left flex flex-center"></span>',
        nextArrow: '<span class="slick-arrow next-arrow fa-regular fa-angle-right flex flex-center"></span>',
        responsive: [
          {
            breakpoint: 767,
            settings: {
              infinite: true,
              autoplay: false,
              autoplaySpeed: 1000,
              arrows: false,
              dots: true,
            }
          },
      ]
    });
    jQuery('.featured-videos-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: false,
        speed: 1000,
        dots: false,
        arrows: true,
        prevArrow: '<span class="slick-arrow prev-arrow fa-regular fa-angle-left flex flex-center"></span>',
        nextArrow: '<span class="slick-arrow next-arrow fa-regular fa-angle-right flex flex-center"></span>',
        responsive: [
            {
              breakpoint: 1299,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1000,
                arrows: false,
                dots: true,
              }
            },
        ]
    });

    jQuery('.department-staff-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: false,
      speed: 1000,
      dots: false,
      arrows: true,
      prevArrow: '<span class="slick-arrow prev-arrow fa-regular fa-angle-left flex flex-center"></span>',
      nextArrow: '<span class="slick-arrow next-arrow fa-regular fa-angle-right flex flex-center"></span>',
      responsive: [
        {
          breakpoint: 1299,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplay: false,
              autoplaySpeed: 1000,
              arrows: false,
              dots: true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplay: false,
              autoplaySpeed: 1000,
              arrows: false,
              dots: true,
            }
          },
      ]
  });

  jQuery('.gallery-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 1000,
    dots: false,
    arrows: true,
    prevArrow: '<span class="slick-arrow prev-arrow fa-regular fa-angle-left flex flex-center"></span>',
    nextArrow: '<span class="slick-arrow next-arrow fa-regular fa-angle-right flex flex-center"></span>',
    responsive: [
        {
          breakpoint: 1299,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 1000,
            arrows: false,
            dots: true,
          }
        },
    ]
});


jQuery('.media-news-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  speed: 1000,
  dots: false,
  arrows: true,
  prevArrow: '<span class="slick-arrow prev-arrow fa-regular fa-angle-left flex flex-center"></span>',
  nextArrow: '<span class="slick-arrow next-arrow fa-regular fa-angle-right flex flex-center"></span>',

});



});