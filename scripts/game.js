"use strict";
const STATS = require("../scripts/libs/stats");
const EventsHandler = require("eventsHandler");
const SystemsEngine = require("../scripts/core/systemsEngine");

function initialize() {
	EventsHandler.say("SystemsEngine_add", require("renderer"));
	EventsHandler.say("SystemsEngine_add", require("../scripts/systems/controllers/shortcut"));
	/*systems.push(new SpriteFactory());
	systems.push(new Shortcut());
	systems.push(new Renderer());*/
	window.requestAnimationFrame(run);
}

function run() {
	STATS.Start();
	window.requestAnimationFrame(run);
	SystemsEngine.run();
	STATS.End();
}
exports.Initialize = initialize;
