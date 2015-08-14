var mymap = null;
var miners = [];
var nbRoom = 0;
var map = [];

function addMiner(x, y) {
  miners.push({
    x: x,
    y: y,
    size: 2
  });
}
document.addEventListener("click", function() {
  document.body.innerHTML = "";
  /*map = [];
  generateC();*/
  mymap = {
    width: 1280,
    height: 1280,
    x: 0,
    y: 0
  };
  nbRoom = 0;
  var width = 1280;
  var height = 720;
  generate(mymap, 0);
  setTimeout(function() {
    dddrrraaawww(mymap.child);
  }, 2000);
});

function dddrrraaawww(mapp) {
  for (var i = 0, j = mapp.length; i < j; i++) {
    if (mapp[i].child) {
      dddrrraaawww(mapp[i].child);
    } else {
      drawBis(mapp[i]);
      /*var width = Math.floor(mapp[i].width / 10);
      var height = Math.floor(mapp[i].height / 10);
      map = new Array();
      generateC(map, width, height, {
          x: Math.floor(width / 2),
          y: Math.floor(height / 2)
        },
        50)*/
    }
  }
}

function runMiner() {
  for (var i = 0, j = miners.length; i < j; i++) {
    if (map[miners[i].y + 1][miners[i].x + 1] === 255 && map[miners[i].y - 1][miners[i].x - 1] === 255 && map[miners[i].y][miners[i].x + 1] ===
      255 &&
      map[miners[i].y + 1][miners[i].x] === 255 && map[miners[i].y - 1][miners[i].x + 1] === 255 && map[miners[i].y - 1][miners[i].x] === 255 &&
      map[miners[i].y][miners[i].x - 1] === 255 && map[miners[i].y + 1][miners[i].x - 1] === 255) {
      miners[i].inactive = true;
    }
    if (!miners[i].inactive) {
      //if (direction === 0) {
      map[miners[i].y + Math.round(Math.random() * 2 - 1)][miners[i].x + Math.round(Math.random() * 2 - 1)] = 255;
      //}
      var newMiner = Math.floor(Math.random() * 5);
      if (newMiner === 1) {
        addMiner(miners[i].x + Math.round(Math.random() * 2 - 1), miners[i].y + Math.round(Math.random() * 2 - 1));
      }
    }
  }
}

function generateC(map, width, height, center, run) {
  for (var y = 0; y < width; y++) {
    map.push([]);
    for (var x = 0; x < height; x++) {
      map[y].push(0);
    }
  }
  miners = [];
  addMiner(center.x, center.y);
  for (var i = 0; i < run; i++) {
    runMiner();
  }
  draw(width, height);
}

function generate(map, it) {
  var cutSens = Math.floor(Math.random() * 2);
  var map1 = null;
  var map2 = null;
  var cut = 0;
  if (cutSens === 0) {
    cut = Math.round(Math.random() * map.width);
    if (map.width - cut > 200) {
      map1 = {
        width: cut,
        height: map.height,
        x: map.x,
        y: map.y
      };
      map2 = {
        width: map.width - cut,
        height: map.height,
        x: map.x + cut,
        y: map.y
      };
    }
  } else {
    cut = Math.round(Math.random() * map.height);
    if (map.height - cut > 200) {
      map1 = {
        width: map.width,
        height: cut,
        x: map.x,
        y: map.y
      };
      map2 = {
        width: map.width,
        height: map.height - cut,
        x: map.x,
        y: map.y + cut
      };
    }
  }
  it++;
  if (map1 && map2) {
    map.child = [map1, map2];
    if (it < 5) {
      generate(map1, it);
      generate(map2, it);
    }
  }
  /*  it++;
    if (it < 3) {
      if (cutSens === 0) {
        generate(newMap.left, cut, height, 0, it);
        generate(newMap.right, width - cut, height, cut, it);
      } else {
        generate(newMap.top, width, cut, 0, it);
        generate(newMap.down, width, height - cut, cut, it);
      }
    } else {
      console.log(mymap);
    }*/
  /**/
}

function drawBis(drawMap) {
  /*console.log(mymap);*/
  /*var drawMap = mymap;*/
  var newItem = document.createElement("div");
  newItem.style.position = "absolute";
  newItem.style.width = Math.round(Math.random() * drawMap.width);
  newItem.style.height = Math.round(Math.random() * drawMap.height);
  /*newItem.style.width = drawMap.width;
  newItem.style.height = drawMap.height;*/
  newItem.style.left = drawMap.x; // + Math.round(Math.random() * drawMap.width);
  newItem.style.top = drawMap.y; // + Math.round(Math.random() * drawMap.height);
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  newItem.style.backgroundColor = "rgba(" + r + "," + g + "," + b + ",1)";
  document.body.appendChild(newItem);
  /*while (map.next) {
    var newItem = document.createElement("div");
    newItem.style.position = "absolute";
    newItem.style.width = map.next.cut;
    newItem.style.height = "5px";
    newItem.style.backgroundColor = "black";
    newItem.style.left = x * 5 + "px";
    newItem.style.top = y * 5 + "px";
  }*/
}

function draw(width, height) {
  for (var y = 0; y < width; y++) {
    for (var x = 0; x < height; x++) {
      var newItem = document.createElement("div");
      var color = map[y][x];
      newItem.style.position = "absolute";
      newItem.style.width = "5px";
      newItem.style.height = "5px";
      newItem.style.backgroundColor = "rgba(" + color + "," + color + "," + color + ",1)"; //"rbga(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ",1)";
      newItem.style.left = x * 5 + "px";
      newItem.style.top = y * 5 + "px";
      document.body.appendChild(newItem);
    }
  }
}
