"use strict";
const PIXI = require("pixi");
const Renderer = require("renderer");
const System = require("system");
const EventsHandler = require("eventsHandler");

class SpriteFactory extends System {
	constructor() {
		super();
		this.sprites = [];
		var that = this;
		EventsHandler.listen("SpriteFactory_add", function() {
			that.sprites.push({
				texture: "bunny.png"
			});
		});
	}

	run() {
		for (let sprite of this.sprites) {
			this.add(sprite);
		}

		this.clear();
	}

	add(sprite) {
		// create a texture from an image path
		var texture = PIXI.Texture.fromImage('ressources/' + sprite.texture);

		// create a new Sprite using the texture
		var bunny = new PIXI.Sprite(texture);

		// center the sprite's anchor point
		bunny.anchor.x = 0.5;
		bunny.anchor.y = 0.5;

		// move the sprite to the center of the screen
		bunny.position.x = Math.random() * 500;
		bunny.position.y = Math.random() * 500;

		console.log("ADD IN FACTORIES");
		EventsHandler.say("Renderer_add", bunny);
	}

	clear() {
		this.sprites = [];
	}
}
module.exports = SpriteFactory;
