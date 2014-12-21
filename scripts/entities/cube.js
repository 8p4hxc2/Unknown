var body = require("../components/body").body,
  fixture = require("../components/fixture").fixture,
  graphic = require("../components/graphic").graphic,
  size = require("../components/size").size;

function cube() {
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
  this.graphic = new graphic({
    lineWeight: 1,
    lineColor: 0x0000FF
  });
  this.size = new size({
    width: 26,
    height: 37
  });
}
exports.cube = cube;
