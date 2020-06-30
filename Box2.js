class Box2{
    constructor(x, y, width, height){
        var a = {
            restitution: 0.8, friction: 0.4, density: 2, isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,a)
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.png");
        World.add(world, this.body);
    }
    Display(){
        push();
        imageMode(CENTER);
        fill("red");
        image(this.image,this.body.position.x, this.body.position.y-125, this.width, 275);
        //rect(this.body.position.x, this.body.position.y, this.width, this.height);

    }

}