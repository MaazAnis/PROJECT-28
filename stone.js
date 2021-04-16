class stone extends BaseClass {
    constructor(x,y,width,height){
      super(x,y,width,height)
      var options = {
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("stone.png")
    }
}