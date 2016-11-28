// Main JavaScript
(function($) {
    "use strict"; // Start of use strict
	
	var header_off = $('header').height();


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

})(jQuery); // End of use strict