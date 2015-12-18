"use strict";

class System {
	constructor(blueprint) {
		this.blueprint = blueprint;
		this.entities = [];
	}

	register(entity) {
		for (let component in this.blueprint) {
			if (entity.contain(component)) {
				this.entities[entity.id] = entity;
				break;
			}
		}
	}

	run() {
		for (let entity in this.entities) {
			this.process(this.entities[entity]);
		}
	}

	process(component) {

	}
}

module.exports = System;
