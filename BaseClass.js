class BaseClass{
    constructor(x,y,width,height,angle){
    var boxoptions={
        restitution:0.8,
        friction:1.0,
        density:1.0
       }
      this.boxbody = Bodies.rectangle(x,y,width,height,boxoptions)
      World.add(world,this.boxbody)
      this.width = width
      this.height = height
      this.image = loadImage("sprites/base.png")
}
display(){
    var pos = this.boxbody.position
    var angle = this.boxbody.angle
     push()
    translate(pos.x,pos.y)
    angleMode(RADIANS)
    rotate(angle)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
     pop()
}
}