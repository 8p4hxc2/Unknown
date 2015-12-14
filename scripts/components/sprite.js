"use strict";

const PIXI = require("../libs/pixi");
const Component = require("../core/component");

class Sprite extends Component {
  constructor(x, y, texture) {
    super("sprite");

    this.ref = new PIXI.Sprite(texture);
    this.ref.position.x = x;
    this.ref.position.y = y;
  }
}

module.exports = Sprite;
