$(document).ready(function () {
  
  $('.next').click(nextSlide);
  $('.prev').click(prevSlide);

});

// functions
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