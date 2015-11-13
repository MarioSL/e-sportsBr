
$(function() {
  var featured = $("#img-featured");
    $('#gallery > img').click(function(){
      featured.attr('src',$(this).attr('src'));
      featured.attr('alt',$(this).attr('alt'));
      $('#CBLOL > a').attr('href',$(this).attr('src'));
    });
});
