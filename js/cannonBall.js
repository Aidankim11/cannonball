class CannonBall {
    constructor(x, y) {
      var options = {
        restitution:1,
        friction:.5,
        density:1,
        isStatic:true
      };
      this.image = loadImage("assets/cannonball.png");
      this.r=40
      this.body = Bodies.circle(x, y, this.r, options);
    
      World.add(world, this.body);
    }
    fire(){
        var axis=p5.Vector.fromAngle(cannon.angle)
        axis.mult(20)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:axis.x,y:axis.y})
    }
    display() {
      var pos = this.body.position;
      push()
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.r, this.r);
     pop()
    }
}