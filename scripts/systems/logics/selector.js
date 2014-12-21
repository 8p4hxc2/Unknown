var components = {
  "position": [],
  "size": [],
  "mouse": [],
  "graphic": []
},
  componentsLength = 0;

function initialize() {}

function run() {
  for (var i = 0; i < componentsLength; i++) {
    if (components.mouse[i].mouseDown) {
      if (!components.graphic[i].visible) {
        components.graphic[i].visible = true;
        components.position[i].x = components.mouse[i].mouseDown.global.x;
        components.position[i].y = components.mouse[i].mouseDown.global.y;
      }
      components.size[i].width = components.mouse[i].mouseDown.global.x - components.position[i].x;
      components.size[i].height = components.mouse[i].mouseDown.global.y - components.position[i].y;
    } else {
      components.position[i].x = components.position[i].y = 0;
      components.graphic[i].visible = false;
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
