"use strict";
const System = require("system");
const core_keyboard = require("core/keyboard");

class SKeyboard extends System {
	constructor() {
		super();
	}

	run() {
		if (core_keyboard.isDown(13)) {
			console.log("OK");
		}
	}
}
module.exports = SKeyboard;
