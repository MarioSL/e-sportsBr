routes = new Map();
routes["/index.html"] = "home";
routes["/times.html"] = "times";
routes["/saiba-mais.html"] = "saiba-mais";
routes["/estudio.html"] = "estudio";
routes["/contato.html"] = "contato";
routes["/sobre.html"] = "sobre";
$(function(){
  /*var pathName = "index.html";
  if (location.pathname !== "/"){
    pathName = location.pathname;
    /*if (routesForknowMore[pathName] == true)
      pathName = "#saiba-mais";
    if(routes[pathName] == undefined)
      getContent(pathName, true,"page-error.html");

    else{
      if(routes[pathName] !== history.state)
        getContent(pathName, true,routes[pathName]);

      else
        getContent(pathName, false,routes[pathName]);

    }
  }else{
    history.replaceState(routes[pathName], null,pathName);
    getContent(pathName, false,routes[pathName]);
  }*/
  activeButton(location.pathname);
  $('#box-nav a').click(function(e){
      e.preventDefault();
      var pathName = $(this).attr('href');
      getContent(pathName, true,routes[pathName]);
      activeButton(pathName);
      return false;
  });
    window.addEventListener("popstate", function(e) {
      if(routes[location.pathname] !== undefined)
        getContent(location.pathname, false,routes[location.pathname]);
      activeButton(location.pathname);
    });
});

function activeButton(pathName){
  if(pathName !== "/index.html"){
    $('a').removeClass('active');
    $('[href = "'+pathName+'"]').addClass('active');
  }else
    $('a').removeClass('active');
}

function getContent(link, addEntry, page) {
  $.ajax({
    url: link,
    dataType: "html",
    success: function(result){
      //alert(result.slice(result.search("<!--before-->"),result.search("<!--after-->")));
      $("#content").empty();
      $("#content").append(result.slice(result.search("<!--before-->"),result.search("<!--after-->")));
      if(addEntry == true)
          history.pushState(page, null, link);
      },
    beforeSend: function(){
      $('#loader').css({display:"block"});
    },
    complete: function(){
      $('#loader').css({display:"none"});
    }
  });
}
