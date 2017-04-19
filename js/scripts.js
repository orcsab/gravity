// Javascript 

var eventCount = 0;
var eventProperty = [];

var TrackMouse = function (mouseEvent) {
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

    var cicle = document.getElementById("circle");
    console.log("Id: " + circle.id);
    console.log("Before: " + circle.style.left + " " + circle.style.top);
    circle.style.left = mouseEvent.x + 'px';
    circle.style.top = mouseEvent.y + 'px';
    console.log("After: " + circle.style.left + " " + circle.style.top);

};

document.addEventListener('click', TrackMouse);