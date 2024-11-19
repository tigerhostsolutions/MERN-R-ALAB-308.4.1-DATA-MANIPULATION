/*pt 1-Refactor Old Code*/

const csvData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)," +
    "\n\n1,0.00,0.050,0.050\n\n2,0.49,0.066,0.066\n\n3,0.98,0.087,0.080" +
    "\n\n4,1.47,0.116,0.108\n\n5,1.96,0.142,0.138\n\n6,2.45,0.166,0.158" +
    "\n\n7,2.94,0.193,0.174\n\n8,3.43,0.204,0.192\n\n9,3.92,0.226,0.205\n\n10,4.41,0.238,0.23"

let row = [];
let cell = "";
for (let i = 0; i < csvData.length; i++) {
  const delimiter = csvData[i];

  if (delimiter === ',') {
    row.push(cell);
    cell = "";
  }
  else if (delimiter === '\n' && csvData[i + 1] === '\n') {
    row.push(cell);
    console.log(row);
    row = [];
    cell = "";
    i++; // Skip the '\n'
  }
  else {
    cell += delimiter;
  }
}

// Handle the last cell and row if the string does not end with a newline
if (cell) {
  row.push(cell);
  console.log(row);
}
