var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

var size = 320;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr,dpr);
context.lineWidth = 2;

var step = 16;
var lines = [];

function kleur(max){
  return Math.floor(Math.random()*(max+1));
}

document.body.style.backgroundColor = `rgb(`+ kleur(255) + `,`+ kleur(255) + `,` + kleur(255) + `)`;

red = kleur(200);
green = kleur(200);
blue = kleur(200);
var kleur1 = `rgb(${red}, ${green}, ${blue})`;
context.strokeStyle = kleur1;

for(var i = step; i <= size - step; i += step) {

    var line = [];
    for(var j = step; j <=size - step; j+= step) {
      var distanceToCenter = Math.abs(j - size / 2);
      var variance = Math.max(size / 2 - 50 - distanceToCenter, 0);
      var random = Math.random() * variance / 2 * -1;
        var point = {x: j, y: i + random};
        line.push(point);
    }
    lines.push(line)
}

for(var i = 2; i < lines.length; i++) {

    context.beginPath();
    context.moveTo(lines[i][0].x, lines[i][0].y);
    
    for(var j = 0; j < lines[i].length - 2; j++) {
      var xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
      var yc = (lines[i][j].y + lines[i][j + 1].y) / 2;
      context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);
    }
    
    context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, lines[i][j + 1].x, lines[i][j + 1].y);
    
    
  context.save();
  context.globalCompositeOperation = 'destination-out';
  context.fill();
  context.restore();
  context.stroke();
  }