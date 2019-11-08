var imgArray = ['<img src="assets/img/st-1.jpg">', '<img src="assets/img/st-2.jpg">', '<img src="assets/img/st-3.jpg">', '<img src="assets/img/st-4.jpg">'];

$(document).ready(function () {
  
  // eseguo funzione per inserire le immagini
  insertImg(imgArray);

  // assegno le classi first, last e active alle immagini inserite
  $('.carousel .images img:first-child').addClass('first active');
  $('.carousel .images img:last-child').addClass('last');

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
  keyboard();

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
function keyboard() {
  $('body').keydown(function(e) {
    if ((e.keyCode == 39) && ($('.carousel').hasClass('mouse-in'))) {
      nextSlide();
    }
    if ((e.keyCode == 37) && ($('.carousel').hasClass('mouse-in'))) {
      prevSlide();
    }
  });
}

// funzione per inserire le immagini in pagina
function insertImg(array) {
  for (var i=0; i<array.length; i++) {
    $('.carousel .images').append(array[i]);
  }
}