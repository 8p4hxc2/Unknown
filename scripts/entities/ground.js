var body = require("../components/body"),
  fixture = require("../components/fixture"),
  graphic = require("../components/graphic"),
  size = require("../components/size");

function ground() {
  this.body = new body({
      position: {
        x: 0,
        y: 650
      },
      size: {
        width: 1280,
        height: 1
      },
      type: 0
    }),
    this.fixture = new fixture({
      density: 1.0,
      friction: 1.0,
      restitution: 0.6
    }),
    this.graphic = new graphic({
      lineWeight: 3,
      lineColor: 0xFF00FF
    });
  this.size = new size({
    width: 1000,
    height: 10
  });
}
exports.ground = ground;
