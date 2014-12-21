var components = {
    "position": [],
    "mouse": [],
    "sprite": []
  },
  componentsLength = 0;

function initialize() {}

function run() {
  for (var i = 0; i < componentsLength; i++) {
    if (components.mouse[i].mouseMove) {
      components.position[i].x = components.mouse[i].mouseMove.global.x;
      components.position[i].y = components.mouse[i].mouseMove.global.y;
    }
  }
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
exports.Initialize = initialize,
exports.Run = run,
exports.RegisterComponent = registerComponent,
exports.GetComponents = getComponents;
exports.AddEntity = addEntity;
