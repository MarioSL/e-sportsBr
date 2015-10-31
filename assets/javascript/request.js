routes = new Map();
routes["page-home"] = "global/page-home.html";
routes["times"] = "global/times.html";
routes["jogos"] = "global/jogos.html";
routes["estudio"] = "global/estudio.html";
routes["contato"] = "global/contato.html";
routes["historia"] = "global/historia.html";

$(function(){
  var pathname = "page-home";
  if (location.pathname !== '/'){
    pathname = location.pathname;
    if(routes[pathname] == undefined)
      getContent(pathname, true,"global/page-error.html");

    else{
      if(routes[pathname] !== history.state)
        getContent(pathname, true,routes[pathname]);

      else
        getContent(pathname, false,routes[pathname]);

    }
  }else{
    history.replaceState(routes[pathname], null,pathname);
    getContent(pathname, false,routes[pathname]);
  }
  activeButton(pathname);
  $('a').click(function(e){
      e.preventDefault();
      var patchname = $(this).attr('href');
      getContent(patchname, true,routes[patchname]);
      activeButton(pathname);
    });
    window.addEventListener("popstate", function(e) {
      if(routes[location.pathname] !== undefined)
        getContent(location.pathname, false,routes[location.pathname]);
      else
        getContent(location.pathname, false,"global/page-error.html");
      activeButton(location.pathname);
    });
});

function activeButton(pathname){
  if(pathname !== "page-home"){
    $('a').removeClass('active');
    $('a[href = '+pathname+']').addClass('active');
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
