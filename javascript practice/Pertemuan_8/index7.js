// String Literals, Arrow Function, Default Parameter

// 1. String Literals
let fullName = "Jane Doe";
let age = 30;
let address = "Manado";

// Cara lama (pakai +)
let kalimat =
  "Halo, nama saya " +
  fullName +
  ", umur saya " +
  age +
  " tahun dan saya tinggal di " +
  address;
console.log(kalimat);

//  Perbaikan pakai backtick (template literals)
let kalimat2 = `Halo, nama saya ${fullName}, umur saya ${age} tahun, dan saya tinggal di ${address}`;
console.log(kalimat2);

// 2. Arrow Function
// Versi function biasa
function sayGreetings(fullName) {
  //  Harus pakai backtick
  return `Hello my name is ${fullName}`;
}
console.log(sayGreetings("Jane Doe"));

// Arrow function versi singkat
const sayGreetingsArrow = (fullName) => `Hello my name is ${fullName}`;
console.log(sayGreetingsArrow("Jane Doe"));

// 3. Arrow Function + Default Parameter
const sayGreetingsDefault = (fullName = "Anonymous") => `Hello my name is ${fullName}`;
console.log(sayGreetingsDefault()); // Output: Hello my name is Anonymous
console.log(sayGreetingsDefault("Prince")); // Output: Hello my name is Prince


let countries = [
  "Malaysia", "Thailand", "Vietnam", "Filipina", "Singapura",
  "Brunei", "Kamboja", "Laos", "Myanmar", "Timor Leste",
  "Indonesia", "India", "China", "Jepang", "Korea Selatan"
];
const cariIndonesia = countries.find(country => country === "Indonesia");
console.log(cariIndonesia); 
// Output: "Indonesia"

