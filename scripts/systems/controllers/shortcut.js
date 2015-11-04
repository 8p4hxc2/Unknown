"use strict";
const System = require("system");
const Keyboard = require("keyboard");
const EventsHandler = require("eventsHandler");

class Shortcut extends System {
	constructor() {
		super();
	}

	run() {
		if (Keyboard.isDown(13)) {
			EventsHandler.say("SpriteFactory_add");
		}
	}
}
module.exports = Shortcut;
