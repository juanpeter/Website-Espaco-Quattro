$(document).ready(function () {

/*Scroll para as divs!*/
    $('.link1').click(function() {
    $('html, body').animate({
      scrollTop: $(".area1").offset().top-85
    }, 1000)
  }), 
    $('.link2').click(function (){
      $('html, body').animate({
        scrollTop: $(".area2").offset().top-85
      }, 1000)
    }),
    $('.link3').click(function (){
      $('html, body').animate({
        scrollTop: $(".area3").offset().top-85
      }, 1000)
    })
    $('.link4').click(function (){
        $('html, body').animate({
          scrollTop: $(".area4").offset().top-85
        }, 1000)
    })
    $('.link0').click(function (){
      $('html, body').animate({
          scrollTop: $(".home").offset().top-85
      }, 1000)
      })
    
    $('.link5').click(function() {
      $('html, body').animate({
        scrollTop: $(".area1").offset().top-85
      }, 1000)
    }), 

/*Toggle pra classe "active" entre elementos!*/
    $(document).on('click', '.nav-item', function() {
      $(".nav-item").removeClass("active");
      $(this).addClass("active");
    });
/*Fade in hero*/
    $(".hero-text").fadeIn(800) .removeClass('hidden');
});