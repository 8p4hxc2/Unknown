"use strict";
const PIXI = require("pixi");
const System = require("system");
const EventsHandler = require("eventsHandler");

class Renderer extends System {
	constructor() {
		super();
		this.canvas = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
			backgroundColor: 0x1099bb
		});
		document.body.appendChild(this.canvas.view);
		this.screen = new PIXI.Container();

		var that = this;
		EventsHandler.listen("Renderer_add", function(sprite) {
			that.addToScreen(sprite);
		});
	}

	run() {
		this.canvas.render(this.screen);
	}

	addToScreen(sprite) {
		this.screen.addChild(sprite);
	}
}
module.exports = Renderer;
