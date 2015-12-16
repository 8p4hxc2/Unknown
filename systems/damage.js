"use strict";

const System = alias.require("@system");

class Damage extends System {
	constructor() {
		super({
			"position": true
		});
	}

	process(entity) {
		console.log(entity.components.position.x);
	}
}

module.exports = new Damage();
