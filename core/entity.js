"use strict";

class Entity {
	constructor(id) {
		this._id = id + "_" + new Date().getTime();
		this.components = [];
	}

	get id() {
		return this._id;
	}

	set id(value) {
		this._id = value;
	}

	addComponent(name, ...args) {
		var Component = require("../components/" + name);
		this.components[name] = new Component(...args);
	}

	contain(component) {
		return typeof(this.components[component]) !== "undefined";
	}
}

module.exports = Entity;
