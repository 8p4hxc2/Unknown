"use strict";

class EventsHandler {
	constructor() {
		this.events = [];
	}

	say(what, config) {
		console.log("SAY " + what, this.events[what]);
		this.events[what](config);
	}

	listen(toWhat, callback) {
		console.log("LISTEN " + toWhat, this.events);
		this.events[toWhat] = callback;
	}
}

module.exports = new EventsHandler();
