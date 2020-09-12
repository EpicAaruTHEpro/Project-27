// creates the class for the roof
class Roof{
    // creates the roof with arguments x, y, width, and height
    constructor(x,y,width,height) {
        //sets the body as static
        var options ={
            isStatic:true
        }
        //creates the body and sets its x, y, width, height, and static
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //adds body to world
        World.add(world, this.body);
    }

    //displays the body
    display() {
        //stores the position of the body
        var pos = this.body.position;
        //centers the rectangle and colors it purple
        rectMode(CENTER);
        fill("purple");
        //creates the displayed body as a rectangle
        rect(pos.x, pos.y, this.width, this.height);
    }
}