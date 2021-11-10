$(document).ready(function () {
  new WOW().init();
  
  $(".scrol-to").on("click", function (event) {
    event.preventDefault();
    $('.modal-menu').removeClass('modal-menu-active');
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });


    

  $('.homes-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: true,
    centerMode:true,
    variableWidth: true,
    prevArrow: $('.homes-arrow__prev'),
    nextArrow: $('.homes-arrow__next'),
    focusOnSelect: true
   });
  $('.slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
   });
  

  $( "body" ).on( "swipe", swipeHandler );

      
      function swipeHandler( event ){
         console.log( event );
  }

  let $element = $('.slider');
  let counter = 0;

  var h = document.getElementById('hg-wrap').scrollHeight;
  
  

  $(window).scroll(function() {
    let scroll = $(window).scrollTop() + $(window).height();
    var offset = $element.offset().top + $element.height();
   
    if (scroll > offset && counter == 0) {
      
      counter = 1;
    }
  });

  $('.contacts-block').on('click', function() {
    $(this).toggleClass('contacts-block__active');
  })


  

  var scrollPos = 0;
  $(window).scroll(function(){
     var st = $(this).scrollTop();
     if (st > scrollPos){
       if (counter == 1) {
          $('.slider').slick('slickNext');
        }
     } else {
       
     }
     scrollPos = st;
  });

  $('.slider').on('afterChange', function (event, slick, currentSlide) {
     if ($('.slider-slide-11').hasClass('slick-current')) {
      $('body').removeClass('body-over');
     }
  });

  $(document.body).on('touchmove', function() {
    if (counter == 1) {
       $('.slider').slick('slickNext');
       
     }
  }); 
  $(window).on('scroll', function() {
    
  }); 

  $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
    delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
    if (delta >= 0) {
      
    } else {
      if (counter == 1) {
         $('.slider').slick('slickNext');
         
       }
    }
  });
})




  
