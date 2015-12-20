"use strict";
var Alias = require('require-alias');

global.alias = new Alias({
  aliases: {
    /* LIBS */
    '@opengl': 'libs/pixi',
    '@stats': 'libs/stats',
    /* CORE */
    '@system': 'core/system',
    '@entity': 'core/entity',
    '@component': 'core/component',
    /* REPERTOIRES */
    '@systems': 'systems/',
    '@entities': 'entities/'
  }
});

const STATS = alias.require("@stats");
const OPENGL = alias.require("@opengl");
const renderer = alias.require("@systems/renderer");
const movement_engine = alias.require("@systems/movement/engine");
const Ship = alias.require("@entities/ship");
const Planet = alias.require("@entities/planet");

function initialize() {
  OPENGL.loader.add('ships', './ressources/ships.png').add('planet', './ressources/moon.png').load(function(loader, resources) {
    var tt = new Ship(new OPENGL.Texture(resources.ships.texture, new OPENGL.Rectangle(1, 256, 256, 256)), 2);
    var tt2 = new Planet(resources.planet.texture);
    renderer.register(tt);
    renderer.register(tt2);
    movement_engine.register(tt);
    movement_engine.register(tt2);

    //console.log(resources.bunny.texture);
    /*renderer.add(tt);
    tt.components.sprite.ref.x = 0;
    console.log(tt);*/
    animate();
  });
}

function animate() {
  STATS.Start();
  requestAnimationFrame(animate);
  movement_engine.run();
  renderer.run();
  STATS.End();
}

exports.Initialize = initialize;
