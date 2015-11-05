imagesArray = new Array();
for(var i = 0;i < 5;i++){
  imagesArray[i] = "assets/images/logo"+(i+1)+".png";
  var img = new Image();
  img.src = imagesArray[i];
}
var isTrue = true;
var i = 0;
$(function(){
	var nav = $('#box-nav');
	var aside = $('#games-aside');
  var logo = $("#logo");
  animateFront = function(){
    if($(window).scrollTop() < 500)animateBack();
    i++;
    if(i < 5){
      logo.attr("src",imagesArray[i]);
      setTimeout("animateFront()", 130);
    }
  }
  animateBack = function(){
    if($(window).scrollTop() > 500)animateFront();
    i--;
    if(i >= 0){
      logo.attr("src",imagesArray[i]);
      setTimeout("animateBack()", 130);
    }
  }

	$(window).scroll(function () {
		if ($(this).scrollTop() > 500 && isTrue){
      isTrue = false;
			nav.addClass("nav-fixed");
			aside.addClass("aside-fixed");
      logo.removeClass("logo-absolute");
			$('#games-aside a').removeClass('active');
	    $('#games-aside a[href = #ESPN]').addClass('active');
      animateFront();
		}else if($(this).scrollTop() < 500 && !isTrue){
      isTrue = true
      logo.addClass("logo-absolute");
			nav.removeClass("nav-fixed");
			aside.removeClass("aside-fixed");
			$('#games-aside a').removeClass('active');
      animateBack();
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
