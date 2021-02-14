
$(document).ready(function() {

$('.slider-record').slick({
    prevArrow: document.querySelector('.slick-prev2'),
    nextArrow: document.querySelector('.slick-next2'),
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          prevArrow: document.querySelector('.slick-prev2'),
          nextArrow: document.querySelector('.slick-next2'),
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          prevArrow: document.querySelector('.slick-prev2'),
          nextArrow: document.querySelector('.slick-next2'),
          slidesToScroll: 1
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          prevArrow: document.querySelector('.slick-prev2'),
          nextArrow: document.querySelector('.slick-next2'),
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  


  $('.two-slider').slick({
    prevArrow: document.querySelector('.slick-prev3'),
    nextArrow: document.querySelector('.slick-next3'),
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          prevArrow: document.querySelector('.slick-prev3'),
          nextArrow: document.querySelector('.slick-next3'),
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          prevArrow: document.querySelector('.slick-prev3'),
          nextArrow: document.querySelector('.slick-next3'),
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
     
    ]
  });


  $('.three-slider').slick({
    prevArrow: document.querySelector('.slick-prev4'),
    nextArrow: document.querySelector('.slick-next4'),
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          prevArrow: document.querySelector('.slick-prev4'),
          nextArrow: document.querySelector('.slick-next4'),
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          prevArrow: document.querySelector('.slick-prev4'),
          nextArrow: document.querySelector('.slick-next4'),
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


// Верхний Слайдер

  $('.slik-list').slick({
    prevArrow: document.querySelector('.slick-prev'),
    nextArrow: document.querySelector('.slick-next'),
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          prevArrow: document.querySelector('.slick-prev'),
          nextArrow: document.querySelector('.slick-next'),
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          prevArrow: document.querySelector('.slick-prev'),
          nextArrow: document.querySelector('.slick-next'),
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  });


  //  Бургер Меню

  $(document).ready(function() {
    $('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.mb__menu--nav').toggleClass('menu-active');
    });


   
});


