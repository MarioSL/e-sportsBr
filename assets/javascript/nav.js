$(function(){
	var nav = $('#box-nav');
	var aside = $('#games-aside');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 500){
			nav.addClass("nav-fixed");
			aside.addClass("aside-fixed");
			$('#games-aside a').removeClass('active');
	    $('#games-aside a[href = #ESPN]').addClass('active');
		} else {
			nav.removeClass("nav-fixed");
			aside.removeClass("aside-fixed");
			$('#games-aside a').removeClass('active');
		}
		if ($(this).scrollTop() > 1100){
			$('#games-aside a').removeClass('active');
			$('#games-aside a[href = #antidoping]').addClass('active');
		}

		if ($(this).scrollTop() > 2300){
			$('#games-aside a').removeClass('active');
			$('#games-aside a[href = #dota-2]').addClass('active');
		}

		if ($(this).scrollTop() > 3000){
			$('#games-aside a').removeClass('active');
			$('#games-aside a[href = #league-of-legends]').addClass('active');
		}

		if ($(this).scrollTop() > 4000){
			$('#games-aside a').removeClass('active');
			$('#games-aside a[href = #counter-strike]').addClass('active');
		}
	});
});
