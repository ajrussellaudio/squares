const squares = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(255);
  noStroke();
  colorMode(HSB);
  const size = width / 9;
  const baseHue = random(360);
  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      squares.push(new Square(size, x, y, baseHue));
    }
  }
}

function draw() {
  for(square of squares) {
    square.draw();
  }
}

class Square {
  constructor(size, x, y) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.saturation = random(40, 70);
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
    return color(0, 0, 100);
  }

  darkColor() {
    return color(0, 0, 20);
  }
}