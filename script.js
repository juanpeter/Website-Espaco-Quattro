/*Scroll to divs!*/
//Make array for the Navigation elements
const navArray= jQuery.makeArray($('#navigator li'));
const dropArray= jQuery.makeArray($('#dropnav li'));

$(document).ready(function(){
  scrollChecker();
});

$(window).scroll(function(){
  scrollChecker();
});
//Toggle active class on elements
    $(navArray).click(function(){
      $(navArray).removeClass("active");
      $(dropArray).removeClass("active");
      $(this).addClass("active");
    });
    $(dropArray).click(function(){
      $(navArray).removeClass("active");
      $(dropArray).removeClass("active");
      $(this).addClass("active");
    });
//Scroll animation for all nav elements
    $(navArray[0]).click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    });
    $(navArray[1]).click(function() {
      $('html, body').animate({
        scrollTop: 600
      }, 1000);
      $(this).addClass("active");
    });
    $(navArray[2]).click(function() {
      $('html, body').animate({
        scrollTop: 900
      }, 1000);
      $(this).addClass("active");
    });
    $(navArray[3]).click(function() {
      $('html, body').animate({
        scrollTop: 1700
      }, 1000);
      $(this).addClass("active");
    });
    $(navArray[4]).click(function() {
      $('html, body').animate({
        scrollTop: 1956
      }, 1000);
      $(this).addClass("active");
    });
//There IS a better way to do that, but I couldn't bother right now
    $(dropArray[0]).click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
      $(this).addClass("active");
    });
    $(dropArray[1]).click(function() {
      $('html, body').animate({
        scrollTop: 600
      }, 1000);
      $(this).addClass("active");
    });
    $('.hero-text button').click(function() {
      $('html, body').animate({
        scrollTop: 600
      }, 1000);
      $(this).addClass("active");
    });
    $(dropArray[2]).click(function() {
      $('html, body').animate({
        scrollTop: 900
      }, 1000);
      $(this).addClass("active");
    });
    $(dropArray[3]).click(function() {
      $('html, body').animate({
        scrollTop: 1700
      }, 1000);
      $(this).addClass("active");
    });
    $(dropArray[4]).click(function() {
      $('html, body').animate({
        scrollTop: 1956
      }, 1000);
      $(this).addClass("active");
    });
//On scroll, active class toggles
function scrollChecker(){
      if ($(window).scrollTop() >= 0 && $(window).scrollTop() < 600){
        $(navArray).removeClass('active');
        $(dropArray).removeClass('active');
        $(navArray[0]).addClass('active');
        $(dropArray[0]).addClass('active');
      };
      if ($(window).scrollTop() >= 600 && $(window).scrollTop() < 900){
        $(navArray).removeClass('active');
        $(dropArray).removeClass('active');
        $(navArray[1]).addClass('active');
        $(dropArray[1]).addClass('active');
      };
      if ($(window).scrollTop() >= 900 && $(window).scrollTop() < 1700){
        $(navArray).removeClass('active');
        $(dropArray).removeClass('active');
        $(navArray[2]).addClass('active');
        $(dropArray[2]).addClass('active');
      };
      if ($(window).scrollTop() >= 1700 && $(window).scrollTop() < 1956){
        $(navArray).removeClass('active');
        $(dropArray).removeClass('active');
        $(navArray[3]).addClass('active');
        $(dropArray[3]).addClass('active');
      };
      if ($(window).scrollTop() >= 1956){
        $(navArray).removeClass('active');
        $(dropArray).removeClass('active');
        $(navArray[4]).addClass('active');
        $(dropArray[4]).addClass('active');
      };
};
/*Fade in hero*/
    $(".hero-text").fadeIn(1800).removeClass('hidden');

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