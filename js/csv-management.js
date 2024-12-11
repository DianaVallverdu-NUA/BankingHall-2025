//declare file path
const fileUrl = "/droughts.csv";

//file content
let draughtInformation;

/**
 * parse csv content
 * @param {string} data in comma separated style
 */
function parseCSV(data) {
  //split by rows
  const rows = data.split("\n");
  //split by cols
  const result = rows.map((row) => row.split(","));
  //set info to result
  draughtInformation = result;
  console.log(draughtInformation);
}

/**
 * fetch csv and parse csv
 * @param {string} fileUrl url to csv file
 */
async function fetchCSV(fileUrl) {
  const response = await fetch(fileUrl);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const text = await response.text();
  parseCSV(text);
}

fetchCSV(fileUrl);