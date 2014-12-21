var body = require("../components/body").body,
  fixture = require("../components/fixture").fixture,
  sprite = require("../components/sprite").sprite;

function zombie() {
  this.body = new body({
    position: {
      x: Math.random() * 1280,
      y: Math.random() * 600
    },
    size: {
      width: 13,
      height: 18
    },
    type: 1
  }),
  this.fixture = new fixture({
    density: 1.0,
    friction: 1.0,
    restitution: 0.6
  }),
  this.sprite = new sprite({
    texture: "bunny.png"
  });
}
exports.zombie = zombie;
