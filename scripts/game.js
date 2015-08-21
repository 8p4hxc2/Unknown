"use strict";
const STATS = require("../scripts/libs/stats");
const Renderer = require("renderer");
const SKeyboard = require("../scripts/systems/controllers/keyboard");
let systems = [];

function initialize() {
	systems.push(new SKeyboard());
	systems.push(new Renderer(["sprite"]));
	window.requestAnimationFrame(run);
}

function initSystems() {

}

/*function registerInSystems(entity) {
	for (var i = 0, j = systems.length; i < j; i++) {
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
	}
}*/

function run() {
	STATS.Start();
	window.requestAnimationFrame(run);
	for (let system of systems) {
		system.run();
	}
	STATS.End();
}
exports.Initialize = initialize;
