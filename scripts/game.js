"use strict";
var Alias = require('require-alias');

global.alias = new Alias({
	aliases: {
		'@root': '../',
		'@opengl': 'libs/pixi'
	}
});

const PIXI = alias.require("@opengl");
const renderer = require("./systems/renderers/pixi");
const Ship = require("./entities/ship");

function initialize() {
	/*PIXI.loader.add('bunny', './ressources/bunny.png').load(function(loader, resources) {
		var tt = new Ship(resources.bunny.texture);
		//console.log(resources.bunny.texture);
		renderer.addToScreen(tt.components.sprite.ref);
		tt.components.sprite.ref.x = 0;
		console.log(tt);
		animate();
	});*/
}

function animate() {
	requestAnimationFrame(animate);
	renderer.run();
}

exports.Initialize = initialize;
