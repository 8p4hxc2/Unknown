var events = [];

function say(what, config) {
  events[what](config);
}

function listen(toWhat, callback) {
  events[toWhat] = callback;
}
exports.Say = say;
exports.Listen = listen;
