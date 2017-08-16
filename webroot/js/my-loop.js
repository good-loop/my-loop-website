// The disappearing navbar
(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	$(".navbar").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});

	
	});

});
  }(jQuery));
// 

// The 'Learn More' Jumbotron Button
$(document).ready(function (){
	$('#btn-learnmore').click(function() {
		$('html, body').animate( {
			scrollTop: $("#ourvision").offset().top
		}, 2000);
	});
});
// 

//  The Navlink "Home" AKA "My Loop" function
$(document).ready(function (){
	$('#navhome').click(function() {
		$('html, body').animate( {
			scrollTop: $("#top").offset().top
		}, 2000);
	});
});
// 

// The Navlink "About" function
$(document).ready(function (){
	$('#navabout').click(function() {
		$('html, body').animate( {
			scrollTop: $("#ourvision").offset().top
		}, 2000);
	});
});
// 

// The Navlink "How" function
$(document).ready(function (){
	$('#navhow').click(function() {
		$('html, body').animate( {
			scrollTop: $("#how").offset().top
		}, 2000);
	});
});
// 

// The Navlink "Contact Us" function
$(document).ready(function (){
	$('#navcontact').click(function() {
		$('html, body').animate( {
			scrollTop: $("#contact").offset().top
		}, 2000);
	});
});
// 

// ContactUs formsubmission creates a "thank you" section
$(document).ready(function (){
	$('#sendcontactform').click(function () {
		$('#sendclickresult').empty().html("Thank you for your interest in My-Loop");
		var delay=5000; // 5 seconds
		setTimeout(function() {
		document.getElementById("namefield").value = "";
		document.getElementById("emailfield").value = "";
		document.getElementById("messagefield").value = "";
	}, delay);
	});
});

