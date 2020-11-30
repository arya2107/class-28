class Slingshot{
    constructor(bodyA, ptB){
        var options = {
            bodyA: bodyA,
            pointB: ptB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.ptB=ptB;
        World.add(world, this.sling);
    }
fly(){
    this.sling.bodyA=null;
}
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.ptB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}