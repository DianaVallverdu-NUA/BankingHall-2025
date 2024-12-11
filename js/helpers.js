let maximumDraughtArea = 0;

function calculateMaximumArea() {
  for(row of draughtInformation) {
    if(row[5] === "EU27_2020") continue; //ignore EU
    const draughtArea = Number(row[8]);
    if(draughtArea > maximumDraughtArea) maximumDraughtArea = draughtArea;
  }
}