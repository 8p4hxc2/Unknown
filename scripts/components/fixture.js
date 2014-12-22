"use strict";

function fixture(datas) {
  this.density = datas.density,
    this.friction = datas.friction,
    this.restitution = datas.restitution;
}
module.exports = fixture;
