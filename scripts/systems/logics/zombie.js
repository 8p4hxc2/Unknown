var components = {
  "position": [],
  "velocity": [],
  "sprite": []
},
  componentsLength = 0;

function initialize() {}

function run() {
  for (var i = 0; i < componentsLength; i++) {
    components.position[i].x += components.velocity[i].speed;
    components.position[i].y += components.velocity[i].speed;
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
