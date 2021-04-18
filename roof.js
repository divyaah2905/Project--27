class Roof{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.wd = width;
        this.ht = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        noStroke();
        fill("black");
        rect(pos.x,pos.y,this.wd,this.ht);
    }
}