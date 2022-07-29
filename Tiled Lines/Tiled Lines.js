var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');


var size = 320;
var step = 40;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

function kleur(max){
  return Math.floor(Math.random()*(max+1));
}

function kleur2(max){
  return Math.floor(Math.random()*(max+1));
}
document.body.style.backgroundColor = `rgb(`+ kleur(255) + `,`+ kleur(255) + `,` + kleur(255) + `)`;

red = kleur(200);
green = kleur(200);
blue = kleur(200);
var kleur1 = `rgb(${red}, ${green}, ${blue})`;

context.lineCap = 'square';
context.lineWidth = 10;
context.strokeStyle = kleur1;

function draw(x, y, width, height) {
  var leftToRight = Math.random() >= 0.5;

  if(leftToRight) {
    context.moveTo(x, y);
    context.lineTo(x + width, y + height);    
  } else {
    context.moveTo(x + width, y);
    context.lineTo(x, y + height);
  }

  context.stroke();
}

for(var x = 0; x < size; x += step) {
  for(var y = 0; y < size; y+= step) {
    draw(x, y, step, step);    
  }
}
