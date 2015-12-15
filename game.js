"use strict";
var Alias = require('require-alias');

global.alias = new Alias({
	aliases: {
		/* LIBS */
		'@opengl': 'libs/pixi',
		/* CORE */
		'@system': 'core/system',
		'@entity': 'core/entity',
		'@component': 'core/component',
		/* REPERTOIRES */
		'@systems': 'systems/',
		'@entities': 'entities/'
	}
});

const opengl = alias.require("@opengl");
const renderer = alias.require("@systems/renderer");
const Ship = alias.require("@entities/ship");

function initialize() {
	opengl.loader.add('bunny', './ressources/bunny.png').load(function(loader, resources) {
		var tt = new Ship(resources.bunny.texture);
		//console.log(resources.bunny.texture);
		renderer.addToScreen(tt.components.sprite.ref);
		tt.components.sprite.ref.x = 0;
		console.log(tt);
		animate();
	});
}

function animate() {
	requestAnimationFrame(animate);
	renderer.run();
}

exports.Initialize = initialize;
