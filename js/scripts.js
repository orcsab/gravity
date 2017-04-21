// Javascript 

var eventCount = 0;
var eventProperty = [];
var circles = [];
var circleCount = 0;
var mousePos = {x: -1, y: -1};
var clickTime = 0;

// not in use. historical
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

var MouseDownHandler = function (mouseEvent) {
  clickTime = Date.now();
  console.log("click down at " + clickTime);
};

var MouseUpHandler = function (mouseEvent) {
  var clickUp = Date.now();
  var ms = clickUp - clickTime;
  console.log("click down (recorded) = " + clickTime);
  console.log("click up at " + clickUp);
  console.log("click up after" + ms);
  console.log("creating circle " + circleCount + " " + mouseEvent.x + " " + mouseEvent.y + " " + ms);
  var circle = new Circle (circleCount, mouseEvent.x, mouseEvent.y, ms);
  circles[circleCount++] = circle;
};

var GravityUpdate = function () {
  var massCenter = MassCenter(circles);
  for (i = 0; i < circleCount; i++) {
    circles[i].accelerate(massCenter);
    circles[i].update();
  };
};

document.addEventListener('mousedown', MouseDownHandler);
document.addEventListener('mouseup', MouseUpHandler);
onmousemove = function(e){mousePos.x = e.clientX; mousePos.y = e.clientY};
setInterval (GravityUpdate, 3000);