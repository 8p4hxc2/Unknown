"use strict";

const Component = alias.require("@component");

class Texture extends Component {
	constructor(url) {
		super("texture");

		this.url = url;
	}
}

module.exports = Texture;
