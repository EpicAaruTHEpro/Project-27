// class that creates the rope that links the bob to the roof
class Rope{
    // creates the rope with arguments bodyA, bodyB, offsetX, offsetY
    constructor(bodyA, bodyB, offsetX, offsetY) {
        // sets the offsets 
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        // makes the bodies thats are used to create a constraint and a point for the offset
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }

        // creates the constraint and adds it to world
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    // displays the rope
    display() {
        //stores the x and y coordinates for the bodies
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        strokeWeight(3);

        //stores x and y positions for bodyA
        var Anchor1X=pointA.x;
        var Anchor1Y=pointA.y;

        //stores x and y positions of bodyB and adds the offsets to them
        var Anchor2X=pointB.x+this.offsetX;
        var Anchor2Y=pointB.y+this.offsetY;

        //creates the displayed line showing the constraint
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }
}