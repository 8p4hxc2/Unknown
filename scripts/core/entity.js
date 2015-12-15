"use strict";

class Entity {
	constructor(id) {
		this.id = id + "_" + new Date().getTime();
		this.components = [];
	}

	addComponent(entity, name, ...args) {
		var Component = require("../components/" + name);
		this.components[name] = new Component(entity, ...args);
	}
}

module.exports = Entity;
