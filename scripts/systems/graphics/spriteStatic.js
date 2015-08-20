let components = {
	"position": [],
	"sprite": []
};
let componentsLength = 0;
let sprites = [];

function initialize() {}

function run() {
	for (var i = 0; i < componentsLength; i++) {
		sprites[i].position.x = components.position[i].x;
		sprites[i].position.y = components.position[i].y;
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
exports.Run = run;
exports.RegisterComponent = registerComponent;
exports.GetComponents = getComponents;
exports.AddEntity = addEntity;
exports.Initialize = initialize;
