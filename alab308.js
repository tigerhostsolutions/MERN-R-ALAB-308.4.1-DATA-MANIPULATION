//pt1
// Loop through all numbers from 1 to 100
for (let i = 1; i <=100; i ++) {
  console.log(i);
}

// If a number is divisible by 3, log "Fizz."
for(let i = 0; i <= 100; i++){
  if (i % 3 === 0){
    console.log(i + " Fizz");
  }
}

// If a number is divisible by 5, log "Buzz."
for(let i = 0; i <= 100; i++){
  if (i % 5 === 0){
    console.log(i + " Buzz");
  }
}

// If a number is divisible by 3 and 5, log "Fizz Buzz."
for(let i = 0; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log(i + " Fizz Buzz");
  }
}

// If a number is not divisible by either 3 or 5, log the number.
for(let i = 0; i <= 50; i++){
  if (i % 3 !== 0 && i % 5 !== 0){
    console.log(i);
  }
}

//pt2
console.log('Part 2: Prime Time')

let max = 50;

for (let i = 2; i <= max; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

//pt3

let csvData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)," +
    "\n\n1,0.00,0.050,0.050\n\n2,0.49,0.066,0.066\n\n3,0.98,0.087,0.080" +
    "\n\n4,1.47,0.116,0.108\n\n5,1.96,0.142,0.138\n\n6,2.45,0.166,0.158" +
    "\n\n7,2.94,0.193,0.174\n\n8,3.43,0.204,0.192\n\n9,3.92,0.226,0.205\n\n10,4.41,0.238,0.23"

let row = [];
let cell = "";
for (let i = 0; i < csvData.length; i++) {
  let delimiter = csvData[i];

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
