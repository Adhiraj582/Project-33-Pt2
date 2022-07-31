class Divisions {
  constructor(x, y, w, h) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  display() {
    var colors = ["red", "blue", "green", "purple", "orange", "pink", "cyan"];
    let c = colors[Math.floor(Math.random() * colors.length)];
    var pos = this.body.position;
    rectMode(CENTER);
    fill(c);
    rect(pos.x, pos.y, this.w, this.h);
  }
}
