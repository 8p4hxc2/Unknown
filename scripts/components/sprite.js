"use strict";

const PIXI = global.alias.require("@libs/pixi");
const Component = require("../core/component");

class Sprite extends Component {
	constructor(entity, x, y, texture) {
		super("sprite", entity);

		this.ref = new PIXI.Sprite(texture);
		this.ref.position.x = x;
		this.ref.position.y = y;
	}
}

module.exports = Sprite;
