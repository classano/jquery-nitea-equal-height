/**
 * A plugin to make elements equal height.
 * Author Nitea AB (Claes Norén) www.nitea.se
 */

(function($, window, document) {
	$.fn.nEqualHeight = function(options) {

		/**
		 * Variables for window resize
		 */
		var resizeListener;

		var settings = $.extend({
			type: 'max', // Possible values is max or min
			outerHeight: true, // Possible values is true or false
			resize: true, // Possible values is true or false
			pause: 500, // Possible values is Integer,
			ignoreMin: true, // Possible values is true or false
			ignoreMax: true // Possible values is true or false
		}, options );

		/**
		 * If resize is true then we make the call
		 */
		if(settings.resize) {	
			$(window).resize(function() {

				/**
				 * clear the timeout
				 */
				clearTimeout(resizeListener);

				/**
				 * do the function with timeout so we do not spam the browser
				 */
				resizeListener = setTimeout(function() {
					$().nEqualHeight(options);
				},settings.pause);
			});
		}

		/**
		 * For each data-attributes with name n-equal-height-rel
		 * get the unique values and save in a array
		 */
		var nEqualHeightArr = [];
		$('[data-n-equal-height-rel]').each(function(i) {
			$(this).height('');
			if($.inArray($(this).data('n-equal-height-rel'),nEqualHeightArr) < 0) {
				nEqualHeightArr[i] = $(this).data('n-equal-height-rel');
			}
		});

		/**
		 * Reverse the array so we build from the end
		 */
		nEqualHeightArr.reverse();

		/**
		 * Loop through every nEqualHeightArr..
		 */
		var equalHeight;
		$.each(nEqualHeightArr, function(i,item) {
			if(settings.type === 'max') {
				equalHeight = 0;
			}else{
				equalHeight = 9999999999999;
			}
			
			/**
			 * Reset all data-n-equal-height-rel. This shoulden't be needed, but it is......
			 */
			$('[data-n-equal-height-rel="'+item+'"]').each(function() {
				$(this).height(1);
				$(this).height('');
			});

			/**
			 * Get the current heights and compare
			 */
			$('[data-n-equal-height-rel="'+item+'"]').each(function() {

				if($(window).width() < parseInt($(this).data('n-equal-height-ignore-min')) && settings.ignoreMin === true) {
					equalHeight = 'auto';
				}
				else if($(window).width() > parseInt($(this).data('n-equal-height-ignore-max')) && settings.ignoreMin === true) {
					equalHeight = 'auto';
				} else {
					if(settings.type === 'max') {
						if(settings.outerHeight) {
							if(equalHeight < $(this).outerHeight()) {
								equalHeight = $(this).outerHeight();
							}
						}else{
							if(equalHeight < $(this).height()) {
								equalHeight = $(this).height();
							}
						}
					}else{
						if(settings.outerHeight) {
							if(equalHeight > $(this).outerHeight()) {
								equalHeight = $(this).outerHeight();
							}
						}else{
							if(equalHeight > $(this).height()) {
								equalHeight = $(this).height();
							}
						}
					}
				}
			});

			/**
			 * Set the new height
			 */
			$('[data-n-equal-height-rel="'+item+'"]').height(equalHeight);

		});

	};
}(jQuery, window, document));