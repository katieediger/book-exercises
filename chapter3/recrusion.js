//Define a recursive function isEven that corresponds to the following: zero is even, one is odd, any other number N- eveness is the same as N-2

function isEven(number) {
    if (number === 0) {
      return true;
    } else if (number === 1) {
      return false;
    } else {
      return isEven(number - 2);
    }
}
console.log(isEven(75));
console.log(isEven(50));
console.log(isEven(-1));
