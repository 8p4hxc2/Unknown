"use strict";

const System = alias.require("@system");

class IA_merchant extends System {
  constructor() {
    super({
      "position": true,
      "engine": true
    });
  }

  process(entity) {
    entity.components.position.x += entity.components.engine.thrust;
  }
}

module.exports = new IA_merchant();
