"use strict";
const System = require("system");
const EventsHandler = require("eventsHandler");

class SystemsEngine {
	constructor() {
		this.systems = [];

		/*EVENTS*/
		var that = this;
		EventsHandler.listen("SystemsEngine_add", function(System) {
			that.systems.push(new System());
		});

		EventsHandler.listen("SystemsEngine_register", function(Entity) {
			that.register(Entity);
		});
	}

	run() {
		for (let system of this.systems) {
			system.run();
		}
	}

	register(entity) {
		/*for (var i = 0, j = systems.length; i < j; i++) {
			var systemComponents = systems[i].GetComponents();
			var blueprint = true;
			for (let systemComponent of systemComponents) {
				if (typeof(systemComponent) !== "object") {
					blueprint = false;
					break;
				}
			}
			if (blueprint) {
				for (let systemComponent in systemComponents) {
					systems[i].RegisterComponent(componentName, systemComponent);
				}
				systems[i].AddEntity();
			}
		}*/
	}
}
module.exports = new SystemsEngine();
