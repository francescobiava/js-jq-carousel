$(document).ready(function () {
  
  // eseguo funzioni per slide al click
  $('.next').click(nextSlide);
  $('.prev').click(prevSlide);

  // aggiungo classe per verificare se il mouse è nel carousel
  $('.carousel').on({
    mouseenter: function() {
      $(this).addClass('mouse-in');
    }, mouseleave: function() {
      $(this).removeClass('mouse-in');
     }
  });

  // eseguo funzioni per slide da tastiera
  leftArrow();
  rightArrow();

});

// FUNCTIONS
// funzione slide next
function nextSlide() {
  
  var imgPosition = $('.carousel .images img.active');
  var navPosition = $('.carousel .nav i.active');

  imgPosition.removeClass('active');
  navPosition.removeClass('active');

  if (imgPosition.hasClass('last')) {
    $('.carousel .images img.first').addClass('active');
    $('.carousel .nav i.first').addClass('active');
  } else {
    imgPosition.next('img').addClass('active');
    navPosition.next('i').addClass('active');
  }
}

// funzione slide previous
function prevSlide() {
  
  var imgPosition = $('.carousel .images img.active');
  var navPosition = $('.carousel .nav i.active');

  imgPosition.removeClass('active');
  navPosition.removeClass('active');

  if (imgPosition.hasClass('first')) {
    $('.carousel .images img.last').addClass('active');
    $('.carousel .nav i.last').addClass('active');
  } else {
    imgPosition.prev('img').addClass('active');
    navPosition.prev('i').addClass('active');
  }
}

// funzione tastiera freccia destra
function rightArrow() {
  $('body').keydown(function(e) {
    if((e.keyCode == 39) && ($('.carousel').hasClass('mouse-in'))){
      nextSlide();
    }
  });
}

// funzione tastiera freccia sinistra
function leftArrow() {
  $('body').keydown(function(e) {
    if ((e.keyCode == 37) && ($('.carousel').hasClass('mouse-in'))){
      prevSlide();
    }
  });
}