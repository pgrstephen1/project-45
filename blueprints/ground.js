class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.widht = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
    }
}