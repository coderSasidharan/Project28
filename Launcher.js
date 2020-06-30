class Launcher{
    constructor(a,b){
        var options = {
            bodyA: a ,
            pointB: b ,
            length:25,
            stiffness: 0.03

        }
       this.connect =  Matter.Constraint.create(options)
       World.add(world,this.connect);
       console.log(this.connect);
    }
    view(){
        if(this.connect.bodyA!=null){
        strokeWeight(5)
        line(this.connect.bodyA.position.x,this.connect.bodyA.position.y,this.connect.pointB.x,this.connect.pointB.y);
    }
}
}