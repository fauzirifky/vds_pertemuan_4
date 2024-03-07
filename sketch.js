let walkers = [];

class Walker{
  constructor(posisiX, posisiY){
    this.x = posisiX;
    this.y = posisiY;
  }
  
  visual(){
    noStroke();
    let c = color(random(255), random(255), random(255));
    fill(c);
    ellipse(this.x, this.y, 20, 20);
  }

  jalan(){
    var stepX = int(random(-3,3));
    var stepY = int(random(-3,3));
    
    this.x = this.x + stepX;
    this.y = this.y + stepY;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i=0; i<5;i++){
    walkers[i] = new Walker(random(windowWidth), random(windowHeight))
  }
}

function draw() {
  background(220);
  for (let i=0; i<5;i++){
    walkers[i].visual();
    walkers[i].jalan();
  }
}