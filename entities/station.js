"use strict";

const Entity = alias.require("@entity");

class Ship extends Entity {
  constructor(resource, thrust) {
    super("ship");

    this.addComponent("sprite", 50, 250, resource);
    this.addComponent("position", 50, 50);
  }
}

module.exports = Ship;
