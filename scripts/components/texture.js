"use strict";

const Component = require("../core/component");

class Texture extends Component {
  constructor(url) {
    super("texture");

    this.url = url;
  }
}

module.exports = Texture;
