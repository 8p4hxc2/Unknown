"use strict";
/*const STATS = require("../scripts/libs/stats");
const EventsHandler = require("eventsHandler");
const SystemsEngine = require("../scripts/core/systemsEngine");*/

const PIXI = require("./libs/pixi");
const Ship = require("./entities/ship");
const Ship = require("./entities/ship");
var renderer = null;
var stage = null;

function initialize() {
  renderer = new PIXI.WebGLRenderer(800, 600);

  // The renderer will create a canvas element for you that you can then insert into the DOM.
  document.body.appendChild(renderer.view);

  // You need to create a root container that will hold the scene you want to draw.
  stage = new PIXI.Container();
  //var t = new Ship();
  /*console.log(t);*/
  /*EventsHandler.say("SystemsEngine_add", require("renderer"));
  EventsHandler.say("SystemsEngine_add", require("../scripts/systems/controllers/shortcut"));*/
  //window.requestAnimationFrame(run);

  PIXI.loader.add('bunny', './ressources/bunny.png').load(function(loader, resources) {
    var tt = new Ship(resources.bunny.texture);
    //console.log(resources.bunny.texture);
    stage.addChild(tt.components.sprite.ref);
    animate();
  });
}

function animate() {
  // start the timer for the next animation loop
  requestAnimationFrame(animate);

  // each frame we spin the bunny around a bit
  //bunny.rotation += 0.01;

  // this is the main render call that makes pixi draw your container and its children.
  renderer.render(stage);
}
/*function run() {
	STATS.Start();
	window.requestAnimationFrame(run);
	//SystemsEngine.run();
	STATS.End();
}*/
exports.Initialize = initialize;
