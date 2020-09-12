//creates the class for the bob object  
class Bob{
    //creates the bob with arguments x and y
    constructor(x,y) {
        //sets the body's restitution, fricion, density, and static
        var options={
            isStatic:false,
            restitution:1.1,
            friction:0,
            density:1.2
        }

        // creates the body and adds it to world
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        World.add(world, this.body);
    }

    display(){
        //stores the position and angle of the body
        var pos = this.body.position;
        var angle = this.body.angle;
        // translates the postition of the body
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //centers the ellipse
        ellipseMode(RADIUS);
        //creates the body as an ellipse
        ellipse(0,0,this.radius);
        pop();
    }
}