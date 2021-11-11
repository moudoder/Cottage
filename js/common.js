$(document).ready(function () {
  new WOW().init();
  alert(10)
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
      $('html').addClass('html-over_2');
      waitPeriod = 500;// waiting time
          setTimeout(function() {
            counter = 1;
          }, waitPeriod);
    }
  });

  $('.contacts-block').on('click', function() {
    $(this).toggleClass('contacts-block__active');
  })
 let scrl_tr = 0;

  

  var scrollPos = 0;
  $(window).scroll(function(){
     var st = $(this).scrollTop();
     if (st > scrollPos){
       if (counter == 1 && scrl_tr == 0) {
          $('.slider').slick('slickNext');
        }
     } else {
       
     }
     scrollPos = st;
  });
  
  $('.slider').on('afterChange', function (event, slick, currentSlide) {
     if ($('.slider-slide-11').hasClass('slick-current')) {
      $('body').removeClass('body-over');
      $('html').removeClass('html-over_2');
      scrl_tr = 1;
     }

  });

  let mous_dwn_counter = 0;
  setInterval(function(){ 
      mous_dwn_counter = 1;
  }, 500);

  
  
  $(window).on('scroll', function() {
    
  }); 
  
  function doScroll(e) {
      // positive deltas are top and left
      // down and right are negative

      // horizontal offset    e.deltaX
      // vertical offset      e.deltaY

      console.log(`x:${e.deltaX} y:${e.deltaY}`);

      e.preventDefault(); // disable the actual scrolling

      if (e.deltaY > 10) {
        if (counter == 1 && mous_dwn_counter == 1 && scrl_tr == 0) {
           $('.slider').slick('slickNext');
           mous_dwn_counter = 0;
         }
      }
      if (e.deltaY < 0) {
        if (counter == 1 && mous_dwn_counter == 1 && scrl_tr == 0) {
           $('.slider').slick('slickPrev');
           mous_dwn_counter = 0;
         }
      }
  }

  window.addEventListener("wheel", doScroll, false);


  
})




  
