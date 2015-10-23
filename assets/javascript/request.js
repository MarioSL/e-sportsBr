
$(function() {
  var hash = "page-home";
  if (location.hash !== "") {
    hash = location.hash; 
  }
  page = $("a[href='"+ hash +"']").data('url'); // access the site for link

  goToPage(page);
  //$("a[href='page-home']").click(function(){   ####create a function for the interactive event!####
  //  page = $("a[href='page-home']").data('url');
  //  goToPage(page);
  //});
});


function goToPage(page) { // include on html
  $.ajax({
      url: page,
      dataType: "html",
      success: function(result){
          $("#page").empty();
          $("#page").append(result);
      },
      beforeSend: function(){
          $('#loading').css({display:"block"});
      },
      complete: function(msg){
          $('#loading').css({display:"none"});
      }
  });
};
