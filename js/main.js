console.log("Hi Girl Coder, please make sure you join our community at meetup.com/GirlCode. Boys are welcome too!");

// bounce social buttons
$(document).ready(function() {
	$('.social-button, .social-button-footer').mouseenter(function() {
		$(this).effect( 'bounce', { times: 1 }, 'slow');

	});
});

// slow scroll to content
$('.scroll').click(function(event){
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 1250);
	return false;
});

// fade in and out background image landingspage
$(function(){
    var t = setInterval(function(){
        
        $('.bg-image').last().fadeOut(2000,function(){
            $this = $(this);
            $parent = $this.parent();
            $this.remove().css('display','block');
            $parent.prepend($this);
        });
    },3500);
});

$(document).ready(function() {
	$('.contact-cta').mouseenter(function(){
		$(this).effect( 'bounce', { distance: 10, times: 1 }, 'slow');
	});
	$('.contact-social-element').children().mouseenter(function() {
		$(this).children('img').effect( 'bounce', { distance: 10, times: 1 }, 'slow');
	});
});

// CONTACT-PAGE MEETUP API REQUEST
// INPUTS
var urls = [];
urls[0] = "https://api.meetup.com/girlcode?photo-host=public&sig_id=196092929&sig=ca1b24075a0729853813027c08cb66ade21c6443"
urls[1] = 'https://api.meetup.com/ocamsterdam/events?photo-host=public&page=5&sig_id=196092929&sig=1f20a3049b0ce2de8d1341dffa1d6c32323f879e';
// capped at 5 upcoming events, edit page=5 in url for to increase/decrease.
// ALSO Show past events
// Add Konami Code funny business

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

// IF no upcoming events yet, keep checking. New ones every month.

// if (document.getElementsByClassName('calendar-container')[0]) {
	for (var x = 0, dateString = '', 
		eventLinks = document.getElementsByClassName('event-link'),
		eventNames = document.getElementsByClassName('event-name'),
		eventDays = document.getElementsByClassName('event-day'),
		eventTimes = document.getElementsByClassName('event-time'),
		eventVenueNames = document.getElementsByClassName('event-venue-name'),
		eventGoings = document.getElementsByClassName('event-going'),
		eventDates = document.getElementsByClassName('event-date'),
		eventMonths = document.getElementsByClassName('event-month');
		x < requestsJSON[1].length; x++ ) {

		dateString = String(new Date(requestsJSON[1][x]['time']));
		eventNames[x].innerHTML = requestsJSON[1][x]['name'];
		eventLinks[x].href = requestsJSON[1][x]['link'];
		eventDays[x].innerHTML = dateString.slice(0,3);
		eventTimes[x].innerHTML = dateString.slice(16,21);
		eventVenueNames[x].innerHTML = requestsJSON[1][x]['venue']['name']
		eventGoings[x].innerHTML = requestsJSON[1][x]['yes_rsvp_count'] + ' going';
		eventDates[x].innerHTML = dateString.slice(8,10);
		eventMonths[x].innerHTML = dateString.slice(4,7);
	}
// }

	// //JQUERY WAY, UNCOMPLETED.
	// var eventContainer = $('.event-container');
	// for (var x = 0, dateString = '', curEvent = ''; x < requestsJSON[1].length; x++ ) {
	// 	dateString = String(new Date(requestsJSON[1][x]['time']));
	// 	curEvent = $(eventContainer[x]).children('.event-link')[0];
	// 	curEvent.href = requestsJSON[1][x]['link'];
	// 	$(curEvent).children('.event-name')[0].innerHTML = requestsJSON[1][x]['name'];
	// 	$(curEvent).children('.event-timeplace')[0].children[0].innerHTML = 'Monday' ;
	// 	$(curEvent).children('.event-timeplace')[0].children[1].innerHTML = "09:00" ;
	// 	$(curEvent).children('.event-timeplace')[0].children[2].innerHTML = "The House";
	// 	$(curEvent).children('.event-going')[0].innerHTML = requestsJSON[1][x]['yes_rsvp_count'];
	// 	$(curEvent).children('.event-date')[0].innerHTML ='';
		
		
	// 	var day = dateString.slice(0,3);
	// 	var time = dateString.slice(16,21);
	// 	var date = dateString.slice(8,10);
	// 	var month = dateString.slice(4,7);
	// 	requestsJSON[1][x]['venue']['name'];
	// }




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