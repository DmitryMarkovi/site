
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
          dots: true
        }
      },
      {
        breakpoint: 600,
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
          dots: true
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
      {
        breakpoint: 480,
        settings: {
          prevArrow: document.querySelector('.slick-prev3'),
          nextArrow: document.querySelector('.slick-next3'),
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
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
          dots: true
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
      },
      {
        breakpoint: 480,
        settings: {
          prevArrow: document.querySelector('.slick-prev4'),
          nextArrow: document.querySelector('.slick-next4'),
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

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
          dots: true
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
      },
      {
        breakpoint: 480,
        settings: {
          prevArrow: document.querySelector('.slick-prev'),
          nextArrow: document.querySelector('.slick-next'),
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  });

  $(document).ready(function(){

    (function($) {
  
      $('#header__icon').click(function(e){
        e.preventDefault();
        $('body').toggleClass('with--sidebar');
      });
      
      $('#site-cache').click(function(e){
        $('body').removeClass('with--sidebar');
      });
  
    })(jQuery);
  
  });
