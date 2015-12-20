"use strict";

const System = alias.require("@system");

class Movement_engine extends System {
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

module.exports = new Movement_engine();
