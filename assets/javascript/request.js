routes = new Map();
routes["#page-home"] = "global/page-home.html";
routes["#times"] = "global/times.html";
routes["#saiba-mais"] = "global/saiba-mais.html";
routes["#estudio"] = "global/estudio.html";
routes["#contato"] = "global/contato.html";
routes["#sobre"] = "global/sobre.html";

routesForknowMore = new Map();
routesForknowMore["#ESPN"] = true;
routesForknowMore["#antidoping"] = true;
routesForknowMore["#dota-2"] = true;
routesForknowMore["#league-of-legends"] = true;
routesForknowMore["#counter-strike"] = true;
$(function(){
  var hash = "#page-home";
  if (location.hash !== ""){
    hash = location.hash;
    if (routesForknowMore[hash] == true)
      hash = "#saiba-mais";
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
  $('#box-nav a').click(function(e){
      e.preventDefault();
      var hash = $(this).attr('href');
      getContent(hash, true,routes[hash]);
      activeButton(hash);
  });
    window.addEventListener("popstate", function(e) {
      if(routes[location.hash] !== undefined)
        getContent(location.hash, false,routes[location.hash]);
      else
        if(routesForknowMore[location.hash] !== true)
          getContent(location.hash, false,"global/page-error.html");
      activeButton(location.hash);
    });
});

function activeButton(hash){
  if(routesForknowMore[hash]!== true){
    if(hash !== "#page-home"){
      $('a').removeClass('active');
      $('a[href = '+hash+']').addClass('active');
    }else
      $('a').removeClass('active');
  }
}

function getContent(url, addEntry, page) {
  $.ajax({
    url: page,
    dataType: "html",
    success: function(result){
      $("#content").empty();
      $("#content").append(result);
      if(addEntry == true)
          history.pushState(page, null, url);
      },
    beforeSend: function(){
      $('#loader').css({display:"block"});
    },
    complete: function(){
      $('#loader').css({display:"none"});
    }
  });
}
