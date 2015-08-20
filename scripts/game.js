"use strict";
const STATS = require("../scripts/libs/stats");
let Renderer = new require("renderer");
let systems = [];

function initialize() {
	systems.push(new Renderer(["sprite"]));
	window.requestAnimationFrame(run);
}

function initSystems() {
	/*var controllersMouse = require("../scripts/systems/controllers/mouse");
	controllersMouse.Initialize(stage);
	systems.push(controllersMouse);
	var logicsMouse = require("../scripts/systems/logics/mouse");
	logicsMouse.Initialize();
	systems.push(logicsMouse);*/
	/*let logicsPhysic = require("../scripts/systems/logics/physic");
	logicsPhysic.Initialize();
	systems.push(logicsPhysic);*/
	/*var renderersSprite = require("../scripts/systems/renderers/sprite");
	renderersSprite.Initialize(PIXI, stage);
	systems.push(renderersSprite);*/
	/*var renderersSpriteStatic = require("../scripts/systems/renderers/spriteStatic");
	renderersSpriteStatic.Initialize(PIXI, stage);
	systems.push(renderersSpriteStatic);
	var renderersGraphic = require("../scripts/systems/renderers/graphic");
	renderersGraphic.Initialize(PIXI, stage);
	systems.push(renderersGraphic);*/
}

function initEvents() {
	events.Listen("registerInSystems", registerInSystems);
	events.Listen("createSprite", createSprite);
}

function registerInSystems(entity) {
	for (var i = 0, j = systems.length; i < j; i++) {
		var systemComponents = systems[i].GetComponents();
		var blueprint = true;
		for (let systemComponent of systemComponents) {
			if (typeof(systemComponent) !== "object") {
				blueprint = false;
				break;
			}
		}
		if (blueprint) {
			for (let systemComponent in systemComponents) {
				systems[i].RegisterComponent(componentName, systemComponent);
			}
			systems[i].AddEntity();
		}
	}
}

function createSprite(config) {
	var texture = PIXI.Texture.fromImage(config.texture);
	var sprite = new PIXI.Sprite(texture);
	sprite.anchor.x = 0.5;
	sprite.anchor.y = 0.5;
	stage.addChild(sprite);
	config.callback(config.id, sprite);
}

function run() {
	STATS.Start();
	window.requestAnimationFrame(run);
	for (let system of systems) {
		system.run();
	}
	STATS.End();
}
exports.Initialize = initialize;



/*initEvents();*/
/*for (var i = 0; i < 1; i++) {
	events.Say("create/cube");
}*/
//events.Say("create/ground");
//events.Say("create/mouse");
