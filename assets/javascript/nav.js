$(function(){
	var nav = $('#box-nav');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500){
			nav.addClass("nav-fixed");
		} else {
			nav.removeClass("nav-fixed");
		}
	});
});
