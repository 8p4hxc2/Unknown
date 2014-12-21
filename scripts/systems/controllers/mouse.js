  var components = {
    "mouse": []
  },
    componentsLength = 0,
    mouseDown = null,
    mouseMove = null,
    mouseUp = null;

  function initialize(stage) {
    stage.mousedown = function(e) {
      mouseDown = e;
    };
    stage.mouseup = function(e) {
      mouseDown = null;
    };

    stage.mousemove = function(e) {
      mouseMove = e;
    };
  }

  function run() {
    for (var i = 0; i < componentsLength; i++) {
      components.mouse[i].mouseDown = mouseDown;
      components.mouse[i].mouseMove = mouseMove;
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
