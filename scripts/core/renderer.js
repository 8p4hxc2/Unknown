"use strict";
const PIXI = require("pixi");

class Renderer {
	constructor() {
		this.canvas = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
			backgroundColor: 0x1099bb
		});
		document.body.appendChild(this.canvas.view);
		this.screen = new PIXI.Container();
	}

	run() {
		this.canvas.render(this.screen);
	}

	addToScreen(sprite) {
		this.screen.addChild(sprite);
	}
}
module.exports = Renderer;
