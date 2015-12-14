"use strict";

class System {
  constructor(blueprint) {
    this.components = [];
    for (let name in blueprint) {
      this.components[name] = [];
    }
  }

  getComponents() {
    return this.components;
  }

  register(component) {
    this.components[component.name] = component;
  }

  run() {
    for (let component in this.components) {
      process(component);
    }
  }

  process(component) {

  }
}

module.exports = System;
