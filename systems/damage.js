"use strict";

const System = alias.require("@system");

class Damage extends System {
  constructor() {
    super({
      "position": true
    });
  }

  process(entity) {
    entity.components.position.x += 1;
  }
}

module.exports = new Damage();
