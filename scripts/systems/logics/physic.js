var Box2D = require("box2dweb"),
  b2Vec2 = Box2D.Common.Math.b2Vec2,
  b2BodyDef = Box2D.Dynamics.b2BodyDef,
  b2Body = Box2D.Dynamics.b2Body,
  b2FixtureDef = Box2D.Dynamics.b2FixtureDef,
  b2Fixture = Box2D.Dynamics.b2Fixture,
  b2World = Box2D.Dynamics.b2World,
  b2MassData = Box2D.Collision.Shapes.b2MassData,
  b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
  b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
  b2DebugDraw = Box2D.Dynamics.b2DebugDraw,
  world = null,
  components = {
    "body": [],
    "fixture": []
  },
  componentsLength = 0;

function initialize() {
  world = new b2World(new b2Vec2(0, 9.8), true);
}

function run() {
  world.Step(1 / 60, 10, 10);
  world.ClearForces();
}

function registerComponent(type, component) {
  components[type][componentsLength] = component;
}

function getComponents() {
  return components;
}

function addEntity() {
  var bodyDef = new b2BodyDef();
  bodyDef.position = new b2Vec2(components.body[componentsLength].position.x, components.body[componentsLength].position.y);
  if (components.body[componentsLength].type === 1) {
    bodyDef.type = b2Body.b2_dynamicBody;
  } else {
    bodyDef.type = b2Body.b2_staticBody;
  }
  var bodyFix = new b2FixtureDef();
  bodyFix.density = components.fixture[componentsLength].density;
  bodyFix.friction = components.fixture[componentsLength].friction;
  bodyFix.restitution = components.fixture[componentsLength].restitution;
  bodyFix.shape = new b2PolygonShape();
  bodyFix.shape.SetAsBox(components.body[componentsLength].size.width, components.body[componentsLength].size.height);
  var body = world.CreateBody(bodyDef);
  body.CreateFixture(bodyFix);
  components.body[componentsLength].objet = body;
  componentsLength++;
}
exports.Initialize = initialize,
exports.Run = run,
exports.RegisterComponent = registerComponent,
exports.GetComponents = getComponents;
exports.AddEntity = addEntity;
