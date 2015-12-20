"use strict";

const Component = alias.require("@component");

class Engine extends Component {
  constructor(thrust) {
    super("engine");

    this.thrust = thrust || 0;
  }
}

module.exports = Engine;
