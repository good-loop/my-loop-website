// The disappearing navbar
$(function(){
    
	// hide .navbar first
	$(".navbar").hide();
	
	// fade in .navbar
	$(window).scroll(function () {
		// set distance user needs to scroll before we fadeIn navbar
		if ($(this).scrollTop() > 100) {
			$('.navbar').fadeIn();
		} else {
			$('.navbar').fadeOut();
		}
	});

});
// 

// Animated scroll-to anchor
$(function () {
	$('a').click(function(e) {
		let href = $(e.target).attr('href');
		if ( ! href || href[0] !== '#') return;
		let targeta = $('a[name="'+href.substr(1)+'"]');
		console.log("scroll-to", href, targeta);
		if ( ! targeta.length) return;
		$('html, body').animate( {
			scrollTop: targeta.offset().top
		}, 1000);
		e.preventDefault();
	});
});
// 


// ContactUs formsubmission creates a "thank you" section
// TODO replace with a My-Loop form
$(function (){
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

