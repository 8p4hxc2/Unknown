"use strict";

const Entity = alias.require("@entity");

class Ship extends Entity {
	constructor(resource) {
		super("ship");

		this.addComponent(this, "sprite", 550, 250, resource);
	}
}

module.exports = Ship;
