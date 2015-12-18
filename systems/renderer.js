"use strict";

const opengl = global.alias.require("@opengl");
const System = alias.require("@system");

class Renderer extends System {
  constructor() {
    super({
      "sprite": true
    });
    this.canvas = opengl.autoDetectRenderer(window.innerWidth, window.innerHeight, {
      backgroundColor: 0x1099bb
    });
    document.body.appendChild(this.canvas.view);

    this.screen = new opengl.Container();
  }

  process(entity) {
    entity.components.position.x += 1;
    this.canvas.render(this.screen);
  }

  addToScreen(sprite) {
    this.screen.addChild(sprite);
  }
}
module.exports = new Renderer();
