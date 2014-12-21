var position = require("../components/position").position;
var Mouse = require("../components/mouse").Mouse;
var graphic = require("../components/graphic").graphic;
var size = require("../components/size").size;
var datas = require("../datas/mouseSelector").Datas;

function mouseSelector() {
  this.position = new position();
  this.size = new size();
  this.mouse = new Mouse();
  this.graphic = new graphic(datas.graphic);
}
exports.mouseSelector = mouseSelector;
