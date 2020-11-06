class Ball{

    constructor(x,y,r){
    
    var options={
    restitution:0.8,
    density:0.8,
    friction:0.8
    }
    
    this.body = Bodies.circle(x,y,r,options)
  this.r = r
    World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
    ellipseMode(RADIUS);
    fill("red")
    ellipse(0,0,this.r)
    pop()
    }
    
    }