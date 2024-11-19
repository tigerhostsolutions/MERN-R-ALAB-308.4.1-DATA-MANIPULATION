// pt3- Transforming Data
const csvData3 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry" +
    " Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26" ;

let row = csvData3.split('\n');// Split the CSV string into row
let multi_array = row.map(row => row.split(',')); // Split each row into columns
console.log(multi_array);

let header = row[0].split(',').map(header => header.toLowerCase());

let csvObject = row.slice(1).map(row => {

  let values = row.split(',');
  let obj = {};

  header.forEach((header, index) => {
    obj[header] = values[index];
  });
  return obj;
});

// pt4- Sort and Manipulating Data
csvObject.pop();
csvObject.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
csvObject.push(  { id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(csvObject);
