var events = require("../../../scripts/events"),
  components = {
    "position": [],
    "sprite": []
  },
  componentsLength = 0,
  sprites = [];

function initialize() {}

function run() {
  for (var i = 0; i < componentsLength; i++) {
    if (components.sprite[i].visible) {
      if (!components.sprite[i].created) {
        events.Say("createSprite", {
          id: i,
          texture: components.sprite[i].texture,
          callback: spriteCreated
        });
      }
      sprites[i].position.x = components.position[i].x;
      sprites[i].position.y = components.position[i].y;
    }
  }
}

function spriteCreated(id, sprite) {
  sprites[id] = sprite;
  components.sprite[id].created = true;
}

function registerComponent(type, component) {
  components[type][componentsLength] = component;
}

function getComponents() {
  return components;
}

function addEntity() {
  componentsLength++;
}
exports.Run = run,
exports.RegisterComponent = registerComponent,
exports.GetComponents = getComponents;
exports.AddEntity = addEntity;
exports.Initialize = initialize;
