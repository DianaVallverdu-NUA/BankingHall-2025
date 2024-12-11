//let geoCode = "FR";
let year = 2022;

let countries = [];
let areas = [];
let centres = [];


function preload() {
}

function setup() {
  calculateMaximumArea();
  getAreasForYear(year);
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220);

  //get rows in current area
  // let areaRows = getRowsFromArea(geoCode);

  //get rows in current year
  // let rowFromYear = getRowFromYear(areaRows, year);

  // let area = Number(rowFromYear[8]) / maximumDraughtArea * windowHeight;

  
  for(index in countries) {
    const country = countries[index];
    const area = areas[index] / maximumDraughtArea * windowHeight;
    const centre = centres[index];
    
    //draw area
    fill(200, 100, 0, 100);
    circle(centre.x, centre.y, area);

    //write country name
    fill(255);
    text(country, centre.x, centre.y);
  }


}
