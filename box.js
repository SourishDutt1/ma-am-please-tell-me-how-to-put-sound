class Box{
  constructor(x, y, width, height) {

      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      this.color = color(random(10,255), random(10,255), random(10,255))
      World.add(world, this.body);
    }
    display(){

      push();
      translate(this.body.position.x, this.body.position.y);
     fill(this.color);
      rectMode(CENTER);
      rect( 0, 0, this.width, this.height);
      pop();
    }
}