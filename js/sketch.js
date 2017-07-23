const squares = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(255);
  noStroke();
  colorMode(HSB);
  const size = width / 12;
  const baseHue = random(360);
  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      squares.push(new Square(size, x, y, baseHue));
    }
  }
}

function draw() {
  for(square of squares) {
    square.colorShift(random([random(0.5), 1]));
    square.draw();
  }
}

function randomColor() {
  return color(round(random(360)), saturation, random(100));
} 

class Square {
  constructor(size, x, y, baseHue) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.saturation = random(40, 70);
    this.baseHue = baseHue + random(15) + random([0, 360/12, -360/12]);
  }

  draw() {
    push();
    translate(this.x, this.y);
    this.drawLargeSquare();
    this.drawSmallSquare();
    pop();
  }

  drawLargeSquare() {
    fill(this.lightColor());
    triangle(0, 0, this.size, 0, 0, this.size);
    translate(this.size, this.size);
    fill(this.darkColor());
    triangle(0, 0, -this.size, 0, 0, -this.size);
    translate(-this.size, -this.size);
  }

  drawSmallSquare() {
    size = this.size / 3;
    translate(size, size);
    fill(this.darkColor());
    triangle(0, 0, size, 0, 0, size);
    translate(size, size);
    fill(this.lightColor());
    triangle(0, 0, -size, 0, 0, -size);
  }

  lightColor() {
    return color(this.baseHue, this.saturation, 90);
  }

  darkColor() {
    return color(this.baseHue, this.saturation, 15);
  }

  colorShift(amount) {
    this.baseHue = (this.baseHue + amount) % 360;
  }
}