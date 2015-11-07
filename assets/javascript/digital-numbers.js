var zero = function(canvas,x,y){
  risk1(canvas,x,y);
  risk2(canvas,x,y);
  risk3(canvas,x,y);
  risk4(canvas,x,y);
  risk5(canvas,x,y);
  risk6(canvas,x,y);
}
var one = function(canvas,x,y){
  risk1(canvas,x,y);
  risk2(canvas,x,y);
}
var two = function(canvas,x,y){
  risk1(canvas,x,y);
  risk7(canvas,x,y);
  risk3(canvas,x,y);
  risk5(canvas,x,y);
  risk6(canvas,x,y);
}

var three = function(canvas,x,y){
  risk1(canvas,x,y);
  risk7(canvas,x,y);
  risk3(canvas,x,y);
  risk2(canvas,x,y);
  risk6(canvas,x,y);
}

var four = function(canvas,x,y){
  risk1(canvas,x,y);
  risk7(canvas,x,y);
  risk2(canvas,x,y);
  risk4(canvas,x,y);
}

var five = function(canvas,x,y){
  risk6(canvas,x,y);
  risk7(canvas,x,y);
  risk2(canvas,x,y);
  risk4(canvas,x,y);
  risk3(canvas,x,y);
}

var six = function(canvas,x,y){
  risk6(canvas,x,y);
  risk7(canvas,x,y);
  risk2(canvas,x,y);
  risk4(canvas,x,y);
  risk3(canvas,x,y);
  risk5(canvas,x,y);
}

var seven = function(canvas,x,y){
  risk6(canvas,x,y);
  risk2(canvas,x,y);
  risk1(canvas,x,y);
}
var eight = function(canvas,x,y){
  risk1(canvas,x,y);
  risk2(canvas,x,y);
  risk3(canvas,x,y);
  risk4(canvas,x,y);
  risk5(canvas,x,y);
  risk6(canvas,x,y);
  risk7(canvas,x,y);

}
var nine = function(canvas,x,y){
  risk1(canvas,x,y);
  risk2(canvas,x,y);
  risk3(canvas,x,y);
  risk4(canvas,x,y);

  risk6(canvas,x,y);
  risk7(canvas,x,y);

}

function risk1(canvas,x,y){
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
function risk2(canvas,x,y){
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
function risk3(canvas,x,y){
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
function risk4(canvas,x,y){
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
function risk5(canvas,x,y){

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
function risk6(canvas,x,y){

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
function risk7(canvas,x,y){

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
