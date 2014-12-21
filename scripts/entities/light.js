var position = require("../components/position").position;
var sprite = require("../components/sprite").sprite;

function light() {
  this.position = new position();
  this.sprite = new sprite({
    texture: "light.png"
  });
}
exports.light = light;
