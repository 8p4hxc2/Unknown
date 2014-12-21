var position = require("../components/position").position;
var sprite = require("../components/sprite").sprite;
var mouse2 = require("../components/mouse").Mouse;

function mouse() {
  this.position = new position();
  this.sprite = new sprite({
    texture: "ressources/cursor.png"
  });
  this.mouse = new mouse2();
}
exports.mouse = mouse;
