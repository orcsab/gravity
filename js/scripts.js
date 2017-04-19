// Javascript 

var eventCount = 0;
var eventProperty = [];
var circle = new Circle ('circle');
var mousePos = {x: -1, y: -1};

var VelocityUpdate = function (mouseEvent) {
  eventProperty[eventCount++] = {
    id: mouseEvent.toElement.id,
    type: 'mouse',
    ts: Date.now(),
    x: mouseEvent.x,
    y: mouseEvent.y
  };

  console.log("Element id: " + eventProperty[eventCount - 1].id
  		+ ", X: " + mouseEvent.x
  		+ ", Y: " + mouseEvent.y
  		+ "\n");

  circle.accelerate(mouseEvent.x, mouseEvent.y);
};

var GravityUpdate = function () {
  if (mousePos.x > 0) {
    console.log('accelerating to: ' + mousePos.x + ' ' + mousePos.y);
    circle.accelerate(mousePos.x, mousePos.y, 10);
  }
  circle.update();
};

document.addEventListener('click', VelocityUpdate);
onmousemove = function(e){mousePos.x = e.clientX; mousePos.y = e.clientY};
setInterval (GravityUpdate, 100);