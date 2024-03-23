// 5) Escreva um programa que inverta os caracteres de uma string.
// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const string = "Nacionalmente eu estou perdido.";
let arrayDesmontada = [];
let arrayInvertido = [];

// Desmontando a string
for(i = 0; i < string.length; i++) {
  arrayDesmontada.push(string[i]);
}

// Revertendo a ordem em um novo array
for(i = arrayDesmontada.length - 1; i >= 0; i--) {
  arrayInvertido.push(arrayDesmontada[i]);
}

// Reconstruindo a string com os caracteres invertidos
const stringMontada = arrayInvertido.join('');
console.log(stringMontada);