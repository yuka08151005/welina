

var scroll = new SmoothScroll('a[href*="#"]');


document.getElementById('js-hamburger').addEventListener('click',function(){
  this.classList.toggle('active');
  document.getElementById('js-nav').classList.toggle('active');
});

$(function () {
  $(".js-title").on("click", function() {
    $(this).next().slideToggle(200);
    $(this).toggleClass("open",200);
  });
});


$(document).on('ready', function() {
  $('.slider_thumb').slick({
      arrows:false,
      asNavFor:'.thumb',
  });
  $('.thumb').slick({
      asNavFor:'.slider_thumb',
      focusOnSelect: true,
      slidesToShow:6,
      slidesToScroll:1
  });  
});