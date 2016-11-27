// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
		var name = $anchor.attr('href');
		name = name.substr(1);
		var current = $('.section-div:visible');
		if (current.attr('id') != name) {
			$('.section-div').hide("slow");
			$('#'+name).show("fast");
			/*$('html, body').stop(true, false).animate({
				scrollTop: ($($anchor.attr('href')).offset().top)
			}, 1250, 'easeInOutExpo');*/
		}
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    /*$('body').scrollspy({
        target: '.navbar-top',
        offset: 100
    });*/

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: $('header').height()
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });
	
	// Change PDF files for writing assignment
	$('.pdf-switch').click(function() {
		var pdf_url = $(this).attr('data-url');
		pdf_url = "files/" + pdf_url;
		$('.main-frame').attr('data', pdf_url);
	});
	
	$('#scroll-contact').click(function() {
		$('html,body').animate({
			scrollTop: $('.contact-footer').offset().top
		});
	});

})(jQuery); // End of use strict