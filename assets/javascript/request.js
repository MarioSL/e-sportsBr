routes = new Map(); // rotas do site , controla o titulo e history state da pagina
routes["/index.html"] = "E-sports";
routes["/times.html"] = "Times";
routes["/saiba-mais.html"] = "Saiba mais";
routes["/estudio.html"] = "Estudio";
routes["/contato.html"] = "Contato";
routes["/sobre.html"] = "Sobre";
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
  if (location.pathname == "/"){ // se a pagina tiver no inicio muda o link para domino + /index.html para controle do popstate
    history.replaceState("home", null, "/index.html");
  }

  activeButton(location.pathname); // ativa o botão para links direto

  $('#box-nav a').click(function(e){ // evento click do jquery
      e.preventDefault(); // retira o evento do click (não adiciona no link)
      var pathName = $(this).attr('href');// capitura o href do botão
      document.title = routes[pathName];// muda o titulo da pagina
      getContent(pathName, true,routes[pathName]); // renderiza o conteudo
      activeButton(pathName); //ativa o botão
      return false;
  });

    window.addEventListener("popstate", function(e){ // capitura o evento popstate
      if(routes[location.pathname] !== undefined)
        getContent(location.pathname, false,routes[location.pathname]);
      activeButton(location.pathname);
      document.title = routes[location.pathname];
    });
});

function activeButton(pathName){ // ativa o botão
  if(pathName !== "/index.html"){
    $('a').removeClass('active');
    $('[href = "'+pathName+'"]').addClass('active');
  }else
    $('a').removeClass('active');
}

function getContent(link, addEntry, page) { // renderiza o link
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
  /*  beforeSend: function(){
      $('#loader').css({display:"block"});
    },
    complete: function(){
      $('#loader').css({display:"none"});
    }*/
  });
}
