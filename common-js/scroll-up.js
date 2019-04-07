$(function () {
    "use strict";
	var $ele = $('#scroll-up');
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            $ele.show(10).animate({right: '15px'}, 10);
        } else {
            $ele.animate({right: '-80px'}, 10);
        }
    });
    $ele.click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 600);
    });
});
  
