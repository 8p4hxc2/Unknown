"use strict";

const Entity = alias.require("@entity");

class Ship extends Entity {
	constructor(resource) {
		super("ship");

		this.addComponent("sprite", 550, 250, resource);
		this.addComponent("position", 550, 250);
	}
}

module.exports = Ship;
