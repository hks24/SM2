class Box {
    constructor(x,y,width,height,options){
     var options = {
         isStatic: true,
         restitution: 0.3
     }
     this.width = width;
     this.height = height;
     this.body = Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body);
    }

    display(){
        var boxobj = this.body.position;
        push();
        translate(boxobj.x,boxobj.y);
        fill("red");
        rectMode(CENTER)
        rect(boxobj.x,boxobj.y,this.width,this.height);
        pop();
    }
}
