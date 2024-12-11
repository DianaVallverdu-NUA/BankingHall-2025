let geoCode = "BE";
let year = 2011;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220);

  //get rows in current area
  let areaRows = getRowsFromArea(geoCode);

  //get rows in current year
  let rowFromYear = getRowFromYear(areaRows, year);

  let area = Number(rowFromYear[8]);

  console.log(area);

  fill(200, 100, 0);
  square(windowWidth * 0.5 - area * 0.5, windowWidth * 0.5 - area * 0.5, area);
}
