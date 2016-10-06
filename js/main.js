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
// CONTACT-PAGE MEETUP API REQUEST
(function() {
	if (document.getElementsByClassName('contact-meetup-members')[0]) {
		var meetupData = new XMLHttpRequest ();
		meetupData.onreadystatechange = processMeetupData;
		meetupData.open ("GET", "https://api.meetup.com/girlcode?key=127665234c6233e565b1d791de6873&sign=true", false);
		meetupData.send();
		meetupData;

		function processMeetupData () {
			if (meetupData.readyState == 4 && meetupData.status == 200) {
				var meetupJSON = JSON.parse(meetupData.responseText);
				console.log(meetupJSON);
				document.getElementsByClassName('contact-meetup-members')[0].innerHTML = meetupJSON.members;
			}
		}
	}
})();

// CORS REQUEST
// // Create the XHR object.
// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//     // XHR for Chrome/Firefox/Opera/Safari.
//     xhr.open(method, url, true);
//   } else if (typeof XDomainRequest != "undefined") {
//     // XDomainRequest for IE.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);
//   } else {
//     // CORS not supported.
//     xhr = null;
//   }
//   return xhr;
// }

// // Helper method to parse the title tag from the response.
// function getTitle(text) {
//   return text.match('<title>(.*)?</title>')[1];
// }

// // Make the actual CORS request.
// function makeCorsRequest() {
//   // This is a sample server that supports CORS.
//   var url = 'https://api.meetup.com/girlcode?key=127665234c6233e565b1d791de6873&sign=true';

//   var xhr = createCORSRequest('GET', url);
//   if (!xhr) {
//     alert('CORS not supported');
//     return;
//   }

//   // Response handlers.
//   xhr.onload = function() {
//     var text = xhr.responseText;
//     var title = getTitle(text);
//     alert('Response from CORS request to ' + url + ': ' + title);
//   };

//   xhr.onerror = function() {
//     alert('Woops, there was an error making the request.');
//   };

//   xhr.send();
// }