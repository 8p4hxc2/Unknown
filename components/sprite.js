"use strict";

const opengl = alias.require("@opengl");
const Component = alias.require("@component");

class Sprite extends Component {
	constructor(entity, x, y, texture) {
		super("sprite", entity);

		this.ref = new opengl.Sprite(texture);
		this.ref.position.x = x;
		this.ref.position.y = y;
	}
}

module.exports = Sprite;
