"use strict";
class Keyboard {
	constructor() {
		this.keys = [];
		var that = this;
		window.addEventListener("keydown", function(e) {
			that.downHandler(e);
		}, false);
		window.addEventListener("keyup", function(e) {
			that.upHandler(e);
		}, false);
	}

	isUp(key) {
		return !this.keys[key];
	}

	isDown(key) {
		return this.keys[key];
	}

	downHandler(event) {
		this.keys[event.keyCode] = true;
	}
	upHandler(event) {
		this.keys[event.keyCode] = false;
	}
}
module.exports = new Keyboard();
