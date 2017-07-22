function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(255);
  noStroke();
  drawSquares();
}

function draw() {
  // const redrawRate = round(mouseX / width * 60);
  // console.log(redrawRate);
  if (frameCount % 12 == 0) {
    drawSquares();
  }
}

function drawSquares() {
  const size = width / 12;
  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      drawSquare(size, x, y);
    }
  }
}

function drawSquare(size, x, y) {
  const darkColor = randomDarkColor();
  const lightColor = randomLightColor();
  push();
  translate(x, y);
  drawLargeSquare(size, lightColor, darkColor);
  drawSmallSquare(size, lightColor, darkColor);
  pop();
}

function drawLargeSquare(size, lightColor, darkColor) {
  fill(lightColor);
  triangle(0, 0, size, 0, 0, size);
  translate(size, size);
  fill(darkColor);
  triangle(0, 0, -size, 0, 0, -size-1);
  translate(-size, -size);
}

function drawSmallSquare(size, lightColor, darkColor) {
  size /= 3;
  translate(size, size);
  fill(darkColor);
  triangle(0, 0, size, 0, 0, size);
  translate(size, size);
  fill(lightColor);
  triangle(0, 0, -size, 0, 0, -size);
}

function randomDarkGrey() {
  // return random([0, 255])
  return round(random(128));
}

function randomLightGrey() {
  return randomDarkGrey() + 128;
}

function randomDarkColor() {
  return color(randomDarkGrey(), randomDarkGrey(), randomDarkGrey());
}

function randomLightColor() {
  return color(randomLightGrey(), randomLightGrey(), randomLightGrey());
}