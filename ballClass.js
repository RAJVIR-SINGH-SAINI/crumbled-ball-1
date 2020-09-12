class ball{

constructor(x,y,width,){

var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
 this.body = Bodies.circle(x,y,width,20,options);
 this.width = width;
 World.add(world,this.body);
}
 
display(){
var pos = this.body.position;
fill("white");
ellipseMode(CENTER);
ellipse(pos.x,pos.y,this.width,20);

}



}