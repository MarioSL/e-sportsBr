var zero = function(canvas,x,y){
  palito1(canvas,x,y);
  palito2(canvas,x,y);
  palito3(canvas,x,y);
  palito4(canvas,x,y);
  palito5(canvas,x,y);
  palito6(canvas,x,y);
}
var um = function(canvas,x,y){
  palito1(canvas,x,y);
  palito2(canvas,x,y);
}
var dois = function(canvas,x,y){
  palito1(canvas,x,y);
  palito7(canvas,x,y);
  palito3(canvas,x,y);
  palito5(canvas,x,y);
  palito6(canvas,x,y);
}

var tres = function(canvas,x,y){
  palito1(canvas,x,y);
  palito7(canvas,x,y);
  palito3(canvas,x,y);
  palito2(canvas,x,y);
  palito6(canvas,x,y);
}

var quatro = function(canvas,x,y){
  palito1(canvas,x,y);
  palito7(canvas,x,y);
  palito2(canvas,x,y);
  palito4(canvas,x,y);
}

var cinco = function(canvas,x,y){
  palito6(canvas,x,y);
  palito7(canvas,x,y);
  palito2(canvas,x,y);
  palito4(canvas,x,y);
  palito3(canvas,x,y);
}

var seis = function(canvas,x,y){
  palito6(canvas,x,y);
  palito7(canvas,x,y);
  palito2(canvas,x,y);
  palito4(canvas,x,y);
  palito3(canvas,x,y);
  palito5(canvas,x,y);
}

var sete = function(canvas,x,y){
  palito6(canvas,x,y);
  palito2(canvas,x,y);
  palito1(canvas,x,y);
}
var oito = function(canvas,x,y){
  palito1(canvas,x,y);
  palito2(canvas,x,y);
  palito3(canvas,x,y);
  palito4(canvas,x,y);
  palito5(canvas,x,y);
  palito6(canvas,x,y);
  palito7(canvas,x,y);

}
var nove = function(canvas,x,y){
  palito1(canvas,x,y);
  palito2(canvas,x,y);
  palito3(canvas,x,y);
  palito4(canvas,x,y);

  palito6(canvas,x,y);
  palito7(canvas,x,y);

}

function palito1(canvas,x,y){
  canvas.fillRect(x,y,6,15);

  canvas.beginPath();

  canvas.moveTo(x+6,y-7);
  canvas.lineTo(x,y);
  canvas.lineTo(x+6,y);
  canvas.fill();

  canvas.moveTo(x+6,y+23);
  canvas.lineTo(x,y+15);
  canvas.lineTo(x+6,y+15);
  canvas.fill();
}
//------------------------------------
function palito2(canvas,x,y){
  canvas.fillRect(x,y+31,6,15);

  canvas.moveTo(x+6,y+24);
  canvas.lineTo(x,y+31);
  canvas.lineTo(x+6,y+31);
  canvas.fill();

  canvas.moveTo(x+6,y+54);
  canvas.lineTo(x,y+46);
  canvas.lineTo(x+6,y+46);
  canvas.fill();
}
//------------------------------------
function palito3(canvas,x,y){
  canvas.fillRect(x-25,y+48,20,6);

  canvas.beginPath();

  canvas.moveTo(x-5,y+54);
  canvas.lineTo(x+3,y+54);
  canvas.lineTo(x-5,y+48);
  canvas.fill();

  canvas.moveTo(x-25,y+54);
  canvas.lineTo(x-32,y+54);
  canvas.lineTo(x-25,y+48);
  canvas.fill();
}
//------------------------------------
function palito4(canvas,x,y){
  canvas.fillRect(x-35,y,6,15);

  canvas.beginPath();

  canvas.moveTo(x-35,y-7);
  canvas.lineTo(x-35,y);
  canvas.lineTo(x-29,y);
  canvas.fill();

  canvas.moveTo(x-35,y+22);
  canvas.lineTo(x-35,y+15);
  canvas.lineTo(x-29,y+15);
  canvas.fill();
}
  //------------------------------------
function palito5(canvas,x,y){

  canvas.fillRect(x-35,y+31,6,15);

  canvas.beginPath();

  canvas.moveTo(x-35,y+24);
  canvas.lineTo(x-35,y+31);
  canvas.lineTo(x-29,y+31);
  canvas.fill();

  canvas.moveTo(x-35,y+54);
  canvas.lineTo(x-35,y+46);
  canvas.lineTo(x-29,y+46);
  canvas.fill();
}
  //------------------------------------
function palito6(canvas,x,y){

  canvas.fillRect(x-25,y-8,20,6);

  canvas.beginPath();

  canvas.moveTo(x-5,y-8);
  canvas.lineTo(x+3,y-8);
  canvas.lineTo(x-5,y-2);
  canvas.fill();

  canvas.moveTo(x-25,y-8);
  canvas.lineTo(x-32,y-8);
  canvas.lineTo(x-25,y-2);
  canvas.fill();
}
  //------------------------------------
function palito7(canvas,x,y){

  canvas.fillRect(x-25,y+20,20,6);

  canvas.beginPath();

  canvas.moveTo(x-5,y+20);
  canvas.lineTo(x+3,y+23);
  canvas.lineTo(x-5,y+26);
  canvas.fill();

  canvas.moveTo(x-25,y+20);
  canvas.lineTo(x-32,y+23);
  canvas.lineTo(x-25,y+26);
  canvas.fill();
}
