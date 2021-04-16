class Mango extends BaseClass {
    constructor(x,y,r){
     super(x,y,r);
     this.r = r
     this.image = loadImage("mango.png")
    }
    display() {
      image(this.image, this.body.position.x, this.body.position.y, this.r, this.r);
    }
}