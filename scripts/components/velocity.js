"use strict";

function velocity(speed) {
  this.speed = speed || 0,
    this.direction = 1;
}
module.exports = velocity;
