class Ground {
    constructor(x,y,width,height){
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
        var groundobj = this.body.position;
         
        push();
        translate(groundobj.x,groundobj.y);
        fill("white");
        rectMode(CENTER);
        rect(groundobj.y,groundobj.y,width,height);
        pop();
    }
}
