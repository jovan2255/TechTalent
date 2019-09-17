jQuery(document).ready(function($){
	// MENU: Close menu on anchor link click
	$('#mobile_menu_slide li a').click(function(){
		$('.et_slide_in_menu_container.et_pb_fullscreen_menu_opened').removeClass('et_pb_fullscreen_menu_opened');
	});

	// OVERLAY: Cached reference to first section (to calc its height)
	var heroSection = $('.et_pb_section_0');
	var wpAdminBarHeight = $('#wpadminbar').height();

	// OVERLAY: Debounced scroll hook to toggle class.
	var debouncedScroll = debounce(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= heroSection.height()/4 ) {
			heroSection.addClass("overlay-spread");
		} else {
			heroSection.removeClass("overlay-spread");
		}
	}, 10);
	window.addEventListener("scroll", debouncedScroll);

	// DEBOUNCE: Generic debounce function
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	// Call scroll function when page loads to fire animation.
	debouncedScroll();
});

$(document).ready(function() {
  $('.has-animation').each(function(index) {
    $(this).delay($(this).data('delay')).queue(function(){
      $(this).addClass('animate-in');
    });
  });
});
