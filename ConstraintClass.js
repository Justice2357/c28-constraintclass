class Slingshot{

    constructor(bodyA, pointB){
 var options = {
    bodyA: bodyA,
    pointB: pointB,
    length: 50,
    stiffness: 0.5
 }
 this.sling = Constraint.create(options);
 World.add(world,this.sling);
    }

 fly(){

    this.sling.bodyA = null;

 }

    display(){
        if(this.sling.bodyA != null){
        strokeWeight(3);
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y, this.sling.pointB.x, this.sling.pointB.y);
        }
    }

}