// Javascript 
function Circle (id) {
  this.getSpacials = function() {
    // console.log('move called with ' + centerX + ' ' + centerY);
    var rect = this.el.getBoundingClientRect();
    console.log('current left/top position is ' + rect.left + ' ' + rect.top);

    return {left: rect.left,
            top: rect.top,
            centerX: rect.left+(rect.width/2),
            centerY: rect.top+(rect.height/2),
            width: rect.width,
            height: rect.height
        };
  };

  this.update = function () {
    console.log('velocity: ' + this.xVel + ' ' + this.yVel);
    var spacials = this.getSpacials();
    this.move(spacials.left + this.xVel, spacials.top + this.yVel);
  };

  this.move = function (left, top) {
    this.el.style.left = left + 'px';
    this.el.style.top = top + 'px';
  };

  this.moveCenter = function (centerX, centerY) {
    var spacials = this.getSpacials();
    this.move(centerX - spacials.width/2, centerY - spacials.height/2);
  };

  this.accelerate = function (x, y, damp = 10) {
    console.log("accelerate: " + x + " " + y);
    var spacials = this.getSpacials();

    console.log("spacials: " + spacials.centerX + " " + spacials.centerY);
    var xDiff = x - spacials.centerX;
    var yDiff = y - spacials.centerY;

    console.log("difference: " + xDiff + " " + yDiff);
    this.xVel += (xDiff / damp);
    this.yVel += (yDiff / damp);
  }

  console.log('constructor called with ' + id);
  console.log('element = ' + document.getElementById(id));

  this.el = document.getElementById(id);
  console.log('ID = ' + this.el.id);

  this.xVel = 0;
  this.yVel = 0;
}

