let hash = "#";
while (hash.length <= 7) {
  console.log(hash);
  hash = hash + "#";
}

let number = 1;
while (number <= 100) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
  number = number + 1;
}

let board = "";
let size = 8

for (let y = 0; y < size; y++) { //This is the outer loop that creates new rows
  for (let x = 0; x < size; x++) { //This is the inner loop that determines what is displayed in each line
    if ((x+y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
