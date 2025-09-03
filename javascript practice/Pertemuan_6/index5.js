let array = [1, 2, 3, "hello", false, true];

// .toString()
// Mengubah semua elemen array menjadi string dan menggabungkannya dengan koma.
console.log(array.toString()); // Output: 1,2,3,hello,false,true

// .join()
// Menggabungkan semua elemen array menjadi sebuah string, dipisahkan oleh separator yang Anda tentukan.
console.log(array.join(" - ")); // Output: 1 - 2 - 3 - hello - false - true

// .pop()
// Menghapus elemen terakhir dari array dan mengembalikan elemen yang dihapus.
array.pop();
console.log(array); // Output: [1, 2, 3, "hello", false]

// .push()
// Menambahkan satu atau lebih elemen ke akhir array.
array.push("pagi ku cerah");
console.log(array); // Output: [1, 2, 3, "hello", false, "pagi ku cerah"]

// .shift()
// Menghapus elemen pertama dari array dan mengembalikan elemen yang dihapus.
array.shift();
console.log(array); // Output: [2, 3, "hello", false, "pagi ku cerah"]

// .unshift()
// Menambahkan satu atau lebih elemen ke awal array.
array.unshift("selamat pagi");
console.log(array); // Output: ["selamat pagi", 2, 3, "hello", false, "pagi ku cerah"]

// .splice()
// Mengubah isi array dengan menghapus, mengganti, atau menambahkan elemen di posisi tertentu.
// Sintaks: splice(indeks_awal, jumlah_yang_dihapus, item_baru_1, ...)
array.splice(2, 0, "new item");
console.log(array); // Output: ["selamat pagi", 2, "new item", 3, "hello", false, "pagi ku cerah"]
//concat
let array2 = [4, 5, 6];
let combinedArray = array.concat(array2);
console.log(combinedArray); // Output: ["selamat pagi", 2, "new item", 3, "hello", false, "pagi ku cerah", 4, 5, 6]



//object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "traveling", "swimming"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.firstName); // Output: John
console.log(person.hobbies[1]);
// Output: traveling
console.log(person.address.city);
// Output: Anytown
console.log(person.fullName());
// Output: John Doe

//John say hello
person.sayHello = function() {
    console.log("Hello, my name is " + this.fullName());
}
person.sayHello(); // Output: Hello, my name is John Doe

//delete property
delete person.age;
console.log(person.age); // Output: undefined

//bracket notation
console.log(person["lastName"]); // Output: Doe
let key = "firstName";
console.log(person[key]); // Output: John
//property and delete 
person.nationality = "American";
console.log(person.nationality); // Output: American
delete person.isEmployed;
console.log(person.isEmployed); // Output: undefined