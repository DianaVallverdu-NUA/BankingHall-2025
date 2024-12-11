let geoCode = "FR";
let year = 2022;

function preload() {
}

function setup() {
  calculateMaximumArea();
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220);

  //get rows in current area
  let areaRows = getRowsFromArea(geoCode);

  //get rows in current year
  let rowFromYear = getRowFromYear(areaRows, year);

  let area = Number(rowFromYear[8]) / maximumDraughtArea * windowHeight;

  fill(200, 100, 0);
  circle(windowWidth * 0.5, windowHeight * 0.5, area);
}
