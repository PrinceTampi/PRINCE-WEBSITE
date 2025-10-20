const fruits = ["Apple", "Banana", "Orange"];

// Tanpa destructuring
const first = fruits[0];
const second = fruits[1];

// Dengan destructuring
const [a, b, c] = fruits;

console.log(a); // Apple
console.log(b); // Banana
console.log(c); // Orange


const [firstFruit, , thirdFruit] = fruits;
console.log(firstFruit); // Apple
console.log(thirdFruit); // Orange

const [x, y, z = "Mango"] = ["Apple", "Banana"];
console.log(z); // Mango

const person = {
  name: "John",
  age: 25,
  city: "Manado"
};

// Tanpa destructuring
const nama = person.name;
const umur = person.age;

// Dengan destructuring
const { name: personName, age, city } = person;

console.log(personName); // John
console.log(age);  // 25
console.log(city); // Manado

const { name: fullName, age: umurSaya } = person;
console.log(fullName); // John
console.log(umurSaya); // 25

// Import biasa
import { add, pi } from './math.js';

// Import dengan nama lain (alias)
import { add as tambah } from './math.js';
console.log(tambah(10, 5)); // 15

// Import default (bebas kasih nama)
import multiply from './math.js';

console.log(add(2, 3));   // 5
console.log(pi);          // 3.14
console.log(multiply(4, 5)); // 20
