class Rope{

    constructor(bodyA,pointB){
var options = {
    bodyA:bodyA,
    pointB:pointB,
    stiffness:1,
    length:300
}
this.rope = Constraint.create(options)
this.pointB=pointB
World.add(world,this.rope)
    }
display(){
stroke("black")
strokeWeight(4)
line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
}
}