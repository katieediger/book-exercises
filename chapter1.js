let hash = '#';
while (hash.length <= 7) {
  console.log(hash);
  hash = hash + '#';
}

let number = 1;
while (number <= 100) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log('FizzBuzz');
  } else if (number % 3 == 0) {
    console.log('Fizz');
  } else if (number % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(number);
  }
  number = number + 1;
}
