$(function(){
	var nav = $('#menuHeader');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			nav.addClass("menu-fixo");
		} else {
			nav.removeClass("menu-fixo");
		}
	});
});
