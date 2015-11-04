function clock(){

  canvas = document.getElementById('clock');
  context = canvas.getContext('2d');
  context.fillStyle = "black";
  context.fillRect(0, 0,canvas.width,canvas.height);
  context.fillStyle = "white";
  d = new Date();
  
  hours = d.getHours();
  minutes = d.getMinutes();
  Seconds = d.getSeconds();

  context.beginPath();
  context.arc(130,45,2,0,Math.PI*2,false);
  context.fill();

  context.beginPath();
  context.arc(130,25,2,0,Math.PI*2,false);
  context.fill();

  numbers(parseInt(minutes%10),context,230,14);
  numbers(parseInt(minutes/10),context,180,14);
  numbers(parseInt(hours%10),context,100,14);
  numbers(parseInt(hours/10),context,50,14);
  t = setTimeout("clock()",100);

}

function numbers(num,canvas,x,y){
  switch (num) {
    case 0:
      zero(canvas,x,y);
      break;
    case 1:
      um(canvas,x,y);
      break;
    case 2:
      dois(canvas,x,y);
      break;
    case 3:
      tres(canvas,x,y);
      break;
    case 4:
      quatro(canvas,x,y);
      break;
    case 5:
      cinco(canvas,x,y);
      break;
    case 6:
      seis(canvas,x,y);
      break;
    case 7:
      sete(canvas,x,y);
      break;
    case 8:
      oito(canvas,x,y);
      break;
    case 9:
      nove(canvas,x,y);
  }
}
