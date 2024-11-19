/*pt2- Expand Functionality*/

const csvData2 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry" +
    " Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26" ;

// Create a 2-D Array
let row = csvData2.split('\n');// Split the CSV string into row
let twoDimensionalArray = row.map(row => row.split(',')); // Split each row into columns

console.log(twoDimensionalArray);


