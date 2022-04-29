class Box {
  
    constructor(x,y,w,h) {
    this.x = x;
    this.y =y;
    this.w =w ;
    this.h = h;
  }

    //make the color boxes appear on canvas
    appear()

    {
      stroke("black");
      strokeWeight(6);
      fill("silver");
      rect(this.x,this.y,this.h,this.w);

    }
}

