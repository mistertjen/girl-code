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

$(document).ready(function() {
	$('.contact-cta').mouseenter(function(){
		$(this).effect( 'bounce', { distance: 10, times: 1 }, 'slow');
	});
	$('.contact-social-element').children().mouseenter(function() {
		$(this).children('img').effect( 'bounce', { times: 1 }, 'slow');
	});
});

// CONTACT-PAGE MEETUP API REQUEST
// INPUTS
var urls = [];
urls[0] = "https://api.meetup.com/girlcode?photo-host=public&sig_id=196092929&sig=ca1b24075a0729853813027c08cb66ade21c6443"
urls[1] = 'https://api.meetup.com/ocamsterdam/events?photo-host=public&page=20&sig_id=196092929&sig=c974f71739a904b4f32f29a748e3e4635b3b885c';

// REQUESTS
for (var i = 0, requests = [], requestsJSON = []; i < urls.length; i++) {
	requests[i] = new XMLHttpRequest();
	requests[i].onreadystatechange = processMeetupData;
	requests[i].open ("GET", urls[i], false);
	requests[i].withCredentials = true;
	requests[i].send();
}

// JSON PARSING
function processMeetupData () {
	if (this.readyState == 4 && this.status == 200) {
		requestsJSON[i] = JSON.parse(this.responseText);
	}
}

// DATA TO HTML
if (document.getElementsByClassName('contact-meetup-members')[0]) {
	document.getElementsByClassName('contact-meetup-members')[0].innerHTML = requestsJSON[0].members;
}

// if (document.getElementsByClassName('calendar-container')[0]) {
	var x = 0;
	// for (var x = 0; x < requestsJSON[1].length; x++ ) {
		requestsJSON[1][x]['link'];
		requestsJSON[1][x]['name'];
		var dateString = String(new Date(requestsJSON[1][x]['time']));
		var day = dateString.slice(0,3);
		var time = dateString.slice(16,21);
		var date = dateString.slice(8,10);
		var month = dateString.slice(4,7);
		requestsJSON[1][x]['venue']['name'];
		requestsJSON[1][x]['yes_rsvp_count'];
	// }


// }

// <div class="event-container"> 
// 			<a href="{event.link"> 
// 				<h4>{event.name}</h4>
// 				<div>{event.date} & {event.venue.name}</div>
// 				<div>{event.yes_rsvp_count}</div>
// 				<div class="event-sidebar">{event.date}</div>
// 			</a>
// 		</div>




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