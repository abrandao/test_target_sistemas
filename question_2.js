let firstNumber = 0;
let secondNumber = 1;
let number = 34; // True

function fiboTest(number, firstNumber, secondNumber) {
  if(number == 0 || number == 1) {
    return true;
  }

  let sequence = firstNumber + secondNumber;

  if(sequence === number) {
    return `O número ${number} pertence a sequência Fibonacci.`;
  }
  else if(sequence > number) {
    return `O número ${number} não pertence a sequência Fibonacci.`;
  }

 return fiboTest(number, secondNumber, sequence);
}

console.log(fiboTest(number, firstNumber, secondNumber));