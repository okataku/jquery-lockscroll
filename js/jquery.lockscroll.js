/*jQuery LockScroll v1.0.0
* https://github.com/okataku/jquery-lockscroll
* Copyright (c) 2015 Takuya Okada;
*/
;(function ($) {

	$.fn.lockscroll = function(lock, direction) {
		var eventName = 'scroll.lockscroll';
		this.each(function(i, el) {
			var $el = $(this);
			var pos = { x: $el.scrollLeft(), y: $el.scrollTop() };

			if(lock) {
				$el.off(eventName);
				$el.on(eventName, function() {
					if (direction === 'horizontal') {
						$el.scrollLeft(pos.x);
					} else if (direction === 'vertical') {
						$el.scrollTop(pos.y);
					} else {
						$el.scrollLeft(pos.x);
						$el.scrollTop(pos.y);
					}
				});
			} else {
				$el.off(eventName);
			}
		});

		return this;
	};
})(jQuery);
