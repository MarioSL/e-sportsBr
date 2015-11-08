function clock(){
  canvas = document.getElementById('clock');
  context = canvas.getContext('2d');
  context.fillStyle = "black";
  context.fillRect(0, 0,canvas.width,canvas.height);
  context.fillStyle = "white";
  d = new Date();

  hours = d.getHours();
  minutes = d.getMinutes();
  seconds = d.getSeconds();


  context.beginPath();
  context.arc(130,85,2,0,Math.PI*2,false);
  context.fill();

  context.beginPath();
  context.arc(130,65,2,0,Math.PI*2,false);
  context.fill();

  numbers(parseInt(minutes%10),context,230,54);
  numbers(parseInt(minutes/10),context,180,54);
  numbers(parseInt(hours%10),context,100,54);
  numbers(parseInt(hours/10),context,50,54);
  t = setTimeout("clock()",(60000 - seconds*1000));
}

function numbers(num,canvas,x,y){
  switch (num) {
    case 0:
      zero(canvas,x,y);
      break;
    case 1:
      one(canvas,x,y);
      break;
    case 2:
      two(canvas,x,y);
      break;
    case 3:
      three(canvas,x,y);
      break;
    case 4:
      four(canvas,x,y);
      break;
    case 5:
      five(canvas,x,y);
      break;
    case 6:
      six(canvas,x,y);
      break;
    case 7:
      seven(canvas,x,y);
      break;
    case 8:
      eight(canvas,x,y);
      break;
    case 9:
      nine(canvas,x,y);
  }
}
