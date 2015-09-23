/*jQuery LockScroll v1.0.0
* https://github.com/okataku/jquery-lockscroll
* Copyright (c) 2015 Takuya Okada;
*/
!function(o){o.fn.lockscroll=function(l,c){var r="scroll.lockscroll";return this.each(function(){var t=o(this),f={x:t.scrollLeft(),y:t.scrollTop()};l?(t.off(r),t.on(r,function(){"horizontal"===c?t.scrollLeft(f.x):"vertical"===c?t.scrollTop(f.y):(t.scrollLeft(f.x),t.scrollTop(f.y))})):t.off(r)}),this}}(jQuery);
