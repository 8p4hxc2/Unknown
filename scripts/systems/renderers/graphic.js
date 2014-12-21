var components = {
  "body": [],
  "size": [],
  "graphic": []
},
  componentsLength = 0,
  graph = [],
  mpixi = null,
  mstage = null;

function initialize(PIXI, stage) {
  mpixi = PIXI, mstage = stage;
}

function run() {
  for (var i = 0; i < componentsLength; i++) {
    if (components.graphic[i].visible) {
      if (!components.graphic[i].created) {
        components.graphic[i].created = true;
        graph[i] = new mpixi.Graphics();
        mstage.addChild(graph[i]);
      }
      graph[i].clear();
      graph[i].lineStyle(components.graphic[i].lineWeight, components.graphic[i].lineColor);
      graph[i].drawRect(components.body[i].objet.GetPosition().x-13, components.body[i].objet.GetPosition().y-18, components.size[i].width, components.size[i].height);
      graph[i].rotation = components.body[i].objet.GetAngle();
    } else {
      if (components.graphic[i].created) {
        components.graphic[i].created = false;
        mstage.removeChild(graph[i]);
      }
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
exports.Run = run,
exports.RegisterComponent = registerComponent,
exports.GetComponents = getComponents;
exports.AddEntity = addEntity;
exports.Initialize = initialize;
