"use strict";

function sprite(datas) {
  this.texture = datas.texture,
    this.visible = true,
    this.created = false,
    this.alpha = 1;
}
module.exports = sprite;
