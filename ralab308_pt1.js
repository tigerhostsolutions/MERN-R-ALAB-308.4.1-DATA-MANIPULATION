/*pt 1-Refactor Old Code*/
const csvData = `ID,Name,Occupation,Age \n
42,Bruce,Knight,41 \n
57,Bob,Fry Cook,19 \n
63,Blaine,Quiz Master,58 \n
98,Bill,Doctor’s Assistant,26`;

let row = [];
let cell = "";

for (let i = 0; i < csvData.length; i++) {

  const delimiter = csvData[i];

  switch (delimiter) {
    case ',':   row.push(cell);
                cell = "";
    break;
    case '\n':  row.push(cell);
                console.log(row);
                row = [];
                cell = "";
                i++; // Skip the '\n'
    break;
    default: cell += delimiter;
  }
}

// Handle the last cell and row if the string does not end with a newline
if (cell) {
  row.push(cell);
  console.log(row);
}
