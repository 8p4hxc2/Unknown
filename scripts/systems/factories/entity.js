"use strict";
const PIXI = require("pixi");
const Renderer = require("renderer");
const System = require("system");
const EventsHandler = require("eventsHandler");

class EntityFactory extends System {
	constructor() {
		super();
		this.entities = [];
		var that = this;
		EventsHandler.listen("EntitiesFactory_add", function(Entity) {
			that.entities.push(new Entity());
		});
	}

	run() {
		for (let entity of this.entities) {
			this.register(entity);
		}

		this.clear();
	}

	register(sprite) {

	}

	clear() {
		this.sprites = [];
	}
}
module.exports = EntityFactory;
