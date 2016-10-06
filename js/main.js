console.log("Hi Girl Coder, please make sure you join our community at meetup.com/GirlCode. Boys are welcome too!");

$(document).ready(function() {
  $('.social-button, .social-button-footer').hover(function() {
    $(this).effect( 'bounce', { times: 1 }, 'slow');

  });
});

$('.scroll').click(function(event){
	event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1250);
    return false;
});