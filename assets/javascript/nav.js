var imagesArray = new Array();
for(var i = 0;i < 5;i++){
  imagesArray[i] = "assets/images/logo"+(i+1)+".png";
  var img = new Image();
  img.src = imagesArray[i];
}  // Carrega as imagens no cache
var isTrue = true;
var i = 0;
$(function(){
    var bannerHeight = $('#banner').height(); // height do banner
    if($(window).width() > 300){ // se o window tiver mais que 300 width ativa as animações.
        animateFront = function(){ // animação do logo quando passa de bannerHeight tamanho
          if($(window).scrollTop() < bannerHeight)animateBack();
          i++;
          if(i < 5){
            logo.attr("src",imagesArray[i]);
            setTimeout("animateFront()", 130);
          }
        }
        animateBack = function(){// animação do logo quando volta pra menos bannerHeight tamanho
          if($(window).scrollTop() > bannerHeight)animateFront();
          i--;
          if(i >= 0){
            logo.attr("src",imagesArray[i]);
            setTimeout("animateBack()", 130);
          }
        }
        var nav = $('#box-nav');
      	var aside = $('#games-aside');
        var logo = $("#logo");
      	$(window).scroll(function () { // evento do jquery scroll
      		if ($(this).scrollTop() > bannerHeight && isTrue){ // se o window tiver passado bannerHeight tamanho , isTrue captura a ação fazendo com que o código rode uma vez
            isTrue = false;
      			nav.addClass("nav-fixed");
            logo.removeClass("logo-absolute");
            animateFront();
      		}else if($(this).scrollTop() < bannerHeight && !isTrue){// se o window tem menos que bannerHeight tamanho
            isTrue = true
            logo.addClass("logo-absolute");
      			nav.removeClass("nav-fixed");
            animateBack();
      		}
          if ($(this).scrollTop() > bannerHeight){ // controle do nav aside da pagina saiba mais
            aside.addClass("aside-fixed");
            $('#games-aside a').removeClass('active');
            $('#games-aside a[href = #ESPN]').addClass('active')
        		if ($(this).scrollTop() > 1200){
        			$('#games-aside a').removeClass('active');
        			$('#games-aside a[href = #antidoping]').addClass('active');

              if ($(this).scrollTop() > 2400){
                $('#games-aside a').removeClass('active');
                $('#games-aside a[href = #dota-2]').addClass('active');

                if ($(this).scrollTop() > 3100){
                	$('#games-aside a').removeClass('active');
                	$('#games-aside a[href = #league-of-legends]').addClass('active');

                  if ($(this).scrollTop() > 4300){
                    $('#games-aside a').removeClass('active');
                    $('#games-aside a[href = #counter-strike]').addClass('active');

                    if ($(this).scrollTop() > 5400){
                      $('#games-aside a').removeClass('active');
                      $('#games-aside a[href = #CBLOL]').addClass('active');
                    }
                  }
              	}
              }
        		}
          }else {
              $('#games-aside a').removeClass('active');
            	aside.removeClass("aside-fixed");
          }
      	});
      }
});
