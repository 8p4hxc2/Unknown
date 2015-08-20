"use strict";
class System {
	constructor(blueprint) {
		this.components = {};
		for (let component in blueprint) {
			this.components[component] = [];
		}
	}

	run() {
		console.log("system run");
	}

	registerComponent(type, component) {
		this.components[type][0] = component;
	}

	getComponents() {
		return this.components;
	}
}

module.exports = System;
