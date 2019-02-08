/*Scroll para as divs!*/
//Make array for the Navigation elements
const navArray= jQuery.makeArray($('#navigator li'));
const dropArray= jQuery.makeArray($('#dropnav li'));

    $('header ul li').click(function() {
    if (this == $('navArray[0]')){
      $('html, body').animate({
          scrollTop: 600
        }, 1000);
      };
    if (this == $('navArray[1]')){
      $('html, body').animate({
            scrollTop: 900
          }, 1000);
      };
    });
    // $('.link2').click(function (){
    //   $('html, body').animate({
    //     scrollTop: $(".area2").offset().top-85
    //   }, 1000)
    // }),
    // $('.link3').click(function (){
    //   $('html, body').animate({
    //     scrollTop: $(".area3").offset().top-85
    //   }, 1000)
    // })
    // $('.link4').click(function (){
    //     $('html, body').animate({
    //       scrollTop: $(".area4").offset().top-85
    //     }, 1000)
    // })
    // $('.link0').click(function (){
    //   $('html, body').animate({
    //       scrollTop: $(".home").offset().top-85
    //   }, 1000)
    //   })
    
    // $('.link5').click(function() {
    //   $('html, body').animate({
    //     scrollTop: $(".area1").offset().top-85
    //   }, 1000)
    // }), 

/*Toggle pra classe "active" entre elementos!*/
  $(document).on('click', '.nav-item', function() {
      $(".nav-item").removeClass("active");
      $(this).addClass("active");
    });
/*Fade in hero*/
    $(".hero-text").fadeIn(800) .removeClass('hidden');

//Get the current year
const d = new Date();
const date = d.getFullYear()
//Print current year in copyright footer
$('.copyright').text('@'+date+' ESPAÇO QUATTRO - TODOS OS DIREITOS RESERVADOS')

//If toggleNav is clicked, execute the function
$('#toggleNav').click(function(){
  toggleNav();
});

//If window is resized, execute the function
$(window).resize(function(){
  if ($(window).width() >= 780){
    $('header').css('height','5em');
    $('#dropnav').css('display','none');
    $('#toggleNav').addClass('fa-bars');
    $('#toggleNav').removeClass('fa-times');
  }
});

//If a dropNav link is clicked, call toggleNav
$('#dropnav a').click(function(){
  toggleNav();
});

function toggleNav(){
  //if toggleNav as the fa-bars class, open the div
  if ($('#toggleNav').hasClass('fa-bars')) {
      //raise dropNav height to 25em
      $('header').animate({
          height:'25em',
      },1000);
      //Change class to fa-times, while removing fa-bars
      $('#toggleNav').addClass('fa-times');
      $('#toggleNav').removeClass('fa-bars');
      //Show hidden elements
      $('#dropnav').css('display','block');
      //End the code
      return;
  }
  //if toggleNav as the fa-times class, close the div
  if ($('#toggleNav').hasClass('fa-times')) {
      //Change class to fa-bars, while removing fa-times
      $('#toggleNav').addClass('fa-bars');
      $('#toggleNav').removeClass('fa-times');
      //Hides hidden elements
      $('#dropnav').animate({
          display:'none',
      }, 1000);
      //If the window is width is bigger than 720px, it becomes 5em tall
      $('header').animate({
            height:'5em',
      },1000);
      setTimeout(function(){
          $('#dropnav').css('display','none');
      }, 900);
      return;
  };
};