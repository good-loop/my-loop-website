// The disappearing navbar
$(function(){   
	// fade in .navbar
	let navbarFn = function () {
		// set distance user needs to scroll before we fadeIn navbar
		if ($(this).scrollTop() > 100) {
			// $('.navbar').fadeIn();
			// TODO put a CSS transition on to fade the change
			$('.navbar').css({color:'#333', background:'white', borderWidth:'0 0 1px'}); //fadeOut();
		} else {
			$('.navbar').css({color:'white !important', background:'transparent', borderWidth:'0px'}); //fadeOut();
		}
	};
	$(window).scroll(navbarFn);
	navbarFn();
});
// 

// Animated scroll-to anchor
$(function () {
	$('a').click(function(e) {
		let href = $(e.target).attr('href');
		if ( ! href || href[0] !== '#') return;
		let targeta = $(href);
		console.log("scroll-to", href, targeta, targeta.offset());
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

	$('form#contactform').submit(function(e){
		var $f = $(this);
		var data = {};
		$("input,select,textarea", $f).each(function(){
			data[$(this).attr('name')] = $(this).val();
		});
		console.log("data", data);
		$.ajax({
			url: $f.attr('action'),
			data: data
		}).then(function(r) {
			console.log(r);
			notify("Thank you for your interest in My-Loop.");
		});
		e.preventDefault();
	});
	
	function notify(msg) {
		$('form#contactform').append("<div class='alert alert-success' role='alert'>"+msg+"</div>");
	}

});

