// Javascript 

var eventCount = 0;
var eventProperty = [];
var circle = new Circle ('circle');

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
  circle.update();
};

document.addEventListener('click', VelocityUpdate);
setInterval (GravityUpdate, 100);