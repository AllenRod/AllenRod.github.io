// Main JavaScript
(function($) {
    "use strict"; // Start of use strict
	
	var header_off = $('header').height();
	
	// Create tooltip and attach them to sample images
	$('.img-sample').attr({
		"data-toggle":"tooltip",
		"data-placement":"top",
		"title":"click to enlarge"});
	$('[data-toggle="tooltip"]').tooltip();
	
	// Create sample image modal and append to body
	$('body').append('<div class="modal fade bs-example-modal-lg img-enlarge-modal"><div class="modal-dialog modal-lg" role="document"><div class="modal-content"><img id="img-enlarge" src="#"></src></div></div></div>');

    // jQuery for page scrolling feature
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
		var name = $anchor.attr('href');
		name = name.substr(1);
		var current = $('.section-div:visible');
		if (current.attr('id') != name) {
			$('.section-div').hide("slow");
			$('#'+name).show("fast");
			$('.page-scroll').removeClass("active");
			$anchor.parent().addClass("active");
			/*$('html,body').animate({
				scrollTop: header_off
			});*/
		}
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    /*$('body').scrollspy({
        target: '#mainNav'
    });*/

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: header_off
        }
    })
	
	// Change PDF files for writing assignment
	$('.pdf-switch').click(function() {
		var pdf_url = $(this).attr('data-url');
		pdf_url = "files/" + pdf_url;
		$('.main-frame').attr('data', pdf_url);
	});
	
	// Scroll to contact section
	$('#scroll-contact').click(function() {
		$('html,body').animate({
			scrollTop: $('.contact-footer').offset().top
		});
	});
	
	// Click sample image to enlarge
	$('.img-sample').click(function() {
		var imgSrc = $(this).attr('src');
		$('#img-enlarge').attr('src', imgSrc);
		$('.img-enlarge-modal').modal('show');
	});

})(jQuery); // End of use strict