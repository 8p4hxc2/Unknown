var PIXI = require("../scripts/libs/pixi.dev"),
  stats = require("../scripts/libs/stats"),
  events = require("../scripts/events"),
  entityFactory = require("../scripts/entityFactory"),
  stage, renderer, systems = [];

function init() {
  stage = new PIXI.Stage(0x66FF99);
  renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
  window.document.body.appendChild(renderer.view);
  window.document.body.appendChild(stats.domElement);
  initSystems();
  initEvents();
  for (var i = 0; i < 500; i++) {
    events.Say("create/cube");
  }
  events.Say("create/ground");
  events.Say("create/mouse");
  window.requestAnimFrame(run);
}

function initSystems() {
  var controllersMouse = require("../scripts/systems/controllers/mouse");
  controllersMouse.Initialize(stage);
  systems.push(controllersMouse);
  var logicsMouse = require("../scripts/systems/logics/mouse");
  logicsMouse.Initialize();
  systems.push(logicsMouse);
  var logicsPhysic = require("../scripts/systems/logics/physic");
  logicsPhysic.Initialize();
  systems.push(logicsPhysic);
  var renderersSprite = require("../scripts/systems/renderers/sprite");
  renderersSprite.Initialize(PIXI, stage);
  systems.push(renderersSprite);
  var renderersSpriteStatic = require("../scripts/systems/renderers/spriteStatic");
  renderersSpriteStatic.Initialize(PIXI, stage);
  systems.push(renderersSpriteStatic);
  var renderersGraphic = require("../scripts/systems/renderers/graphic");
  renderersGraphic.Initialize(PIXI, stage);
  systems.push(renderersGraphic);
}

function initEvents() {
  events.Listen("registerInSystems", registerInSystems);
  events.Listen("createSprite", createSprite);
}

function registerInSystems(entity) {
  for (var i = 0, j = systems.length; i < j; i++) {
    var systemComponents = systems[i].GetComponents();
    var blueprint = true;
    for (componentName in systemComponents) {
      if (typeof(entity[componentName]) != "object") {
        blueprint = false;
        break;
      }
    }
    if (blueprint) {
      for (componentName in systemComponents) {
        systems[i].RegisterComponent(componentName, entity[componentName]);
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
  stats.begin();
  window.requestAnimFrame(run);
  for (var i = 0, j = systems.length; i < j; i++) {
    systems[i].Run();
  }
  renderer.render(stage);
  stats.end();
}
exports.Init = init;
