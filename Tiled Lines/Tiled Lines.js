var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var size = 640;
var step = 80;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = 'round';
context.lineWidth = 5;

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
