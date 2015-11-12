
function submitDate(){
    var name = document.formContact.formName.value;
    var text = document.formContact.formMenss.value;
    var mail = document.formContact.formMail.value;
    var isPoint = false;
    if(text.length < 15){
      alert("a menssagem deve ter mais de 14 caracteres");
      alert("Não Enviado");
      return false;
    }
    if(name == "" || name.length < 3){
      if(!confirm("Deseja mandar sem nome?"))
        name = document.formContact.formName.value = prompt("digite seu nome:");
      if(name == null){
        alert("Não Enviado");
        return false;
      }
    }
    if(mail == ""){
      if(confirm("Deseja mandar sem email?")){
        alert("Enviado com sucesso");
        return true;
      }
      mail = document.formContact.formMail.value = prompt("digite seu email:");
      if(mail == null){
        alert("Não Enviado");
        return false;
      }
    }
    if(mail.search('@') > 0){
      var aux = mail.slice(mail.search('@'))
      for(i = 0;i < aux.length;i++){
        if(aux.charAt(i) == '.'){
          isPoint = true;
        }
      }
      if(aux.charAt(i-1) == '.'){
        isPoint = false;
      }
    }
    while (!isPoint || mail.search('@') <= 0) {
      alert("email invalido");
      mail = document.formContact.formMail.value = prompt("digite seu email:",mail);
      if(mail == null){
        alert("Não Enviado");
        return false;
      }
      if(mail.search('@') > 0){
        var aux = mail.slice(mail.search('@'))
        for(i = 0;i < aux.length;i++){
          if(aux.charAt(i) == '.'){
            isPoint = true;
          }
        }
        if(aux.charAt(i-1) == '.'){
          isPoint = false;
        }
      }
    }
    alert("Enviado com sucesso");
    return true;
}
