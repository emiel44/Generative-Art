var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var size = 320;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);
context.lineWidth = 2;

function kleur(max){
    return Math.floor(Math.random()*(max+1));
  }
  
  document.body.style.backgroundColor = `rgb(`+ kleur(255) + `,`+ kleur(255) + `,` + kleur(255) + `)`;
  
  red = kleur(200);
  green = kleur(200);
  blue = kleur(200);
  var kleur1 = `rgb(${red}, ${green}, ${blue})`;

var randomDisplacement = 15;
var rotateMultiplier = 20;
var offset = 10;
var squareSize = 30;
context.strokeStyle = kleur1;

function draw(width, height) {
  context.beginPath();
  context.rect(-width/2, -height/2, width, height);
  context.stroke(); 
}

for(var i = squareSize; i <= size - squareSize; i += squareSize) {
  for(var j = squareSize; j <= size - squareSize; j+= squareSize) {
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    var rotateAmt = j / size * Math.PI / 180 * plusOrMinus * Math.random() * rotateMultiplier;

    plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    var translateAmt = j / size * plusOrMinus * Math.random() * randomDisplacement;
      
    context.save();
    context.translate(i + translateAmt + offset, j + offset);
    context.rotate(rotateAmt);
    draw(squareSize, squareSize);
    context.restore();
  }
}
