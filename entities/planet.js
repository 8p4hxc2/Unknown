"use strict";

const Entity = alias.require("@entity");

class Ship extends Entity {
  constructor(resource, thrust) {
    super("ship");

    this.addComponent("sprite", 50, 250, resource);
    this.addComponent("position", Math.random() * 1280, Math.random() * 720);
  }
}

module.exports = Ship;
