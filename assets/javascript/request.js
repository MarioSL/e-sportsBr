routes = new Map();
routes["#page-home"] = "global/page-home.html";
routes["#page-1"] = "global/times.html";
routes["#page-2"] = "global/jogos.html";
routes["#page-3"] = "global/estudio.html";
routes["#page-4"] = "global/contato.html";
routes["#page-5"] = "global/historia.html";

$(function(){
  var hash = "#page-home";
  if (location.hash !== ""){
    hash = location.hash;
    if(routes[hash] == undefined)
      getContent(hash, true,"global/page-error.html");

    else{
      if(routes[hash] !== history.state)
        getContent(hash, true,routes[hash]);

      else
        getContent(hash, false,routes[hash]);

    }
  }else{
    history.replaceState(routes[hash], null,hash);
    getContent(hash, false,routes[hash]);
  }
  activeButton(hash);
  $('a').click(function(e){
      e.preventDefault();
      var hash = $(this).attr('href');
      getContent(hash, true,routes[hash]);
      activeButton(hash);
    });
    window.addEventListener("popstate", function(e) {
      if(routes[location.hash] !== undefined)
        getContent(location.hash, false,routes[location.hash]);
      else
        getContent(location.hash, false,"global/page-error.html");
      activeButton(location.hash);
    });
});

function activeButton(hash){
  if(hash !== "#page-home"){
    $('a').removeClass('active');
    $('a[href = '+hash+']').addClass('active');
  }else {
    $('a').removeClass('active');
  }
}

function getContent(url, addEntry, page) {
  $.ajax({
    url: page,
    dataType: "html",
    cache: false,
    success: function(result){
      $("#content").empty();
      $("#content").append(result);
      if(addEntry == true) {
          history.pushState(page, null, url);
      }
      },
    beforeSend: function(){
      $('#loader').css({display:"block"});
    },
    complete: function(){
      $('#loader').css({display:"none"});
    }
  });
}
