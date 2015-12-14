"use strict";

class Entity {
  constructor(id) {
    this.id = id + "_" + new Date().getTime();
    this.components = [];
  }

  addComponent(name, ...args) {
    var Component = require("../components/" + name);
    this.components[name] = new Component(...args);
  }
}

module.exports = Entity;
