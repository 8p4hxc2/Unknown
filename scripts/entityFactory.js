var events = require("../scripts/events");
events.Listen("create/ground", ground);
events.Listen("create/cube", cube);
events.Listen("create/mouse", mouse);

function cube() {
  var a = require("../scripts/entities/cube");
  var c = new a();
  events.Say("registerInSystems", c);
}

function ground() {
  var a = require("../scripts/entities/ground").ground;
  var c = new a();
  events.Say("registerInSystems", c);
}

function mouse() {
  var a = require("../scripts/entities/mouse").mouse;
  var c = new a();
  events.Say("registerInSystems", c);
}
