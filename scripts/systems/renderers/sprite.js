var events = require("../../../scripts/events"),
  components = {
    "body": [],
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
      sprites[i].position = components.body[i].objet.GetPosition();
      sprites[i].rotation = components.body[i].objet.GetAngle();
      sprites[i].alpha = components.sprite[i].alpha;
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
