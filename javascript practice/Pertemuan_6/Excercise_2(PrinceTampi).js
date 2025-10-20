//Array

let people = ["Greg", "Mary", "Devon", "James"];

// 1. Gunakan for-loop untuk menampilkan semua nama di array
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 2. Gunakan forEach() untuk menampilkan semua nama di array
people.forEach(person => console.log(person));

// 3. Hapus "Greg" dari array
people.shift(); 
console.log(people); // ["Mary", "Devon", "James"]

// 4. Hapus "James" dari array
people.pop();
console.log(people); // ["Mary", "Devon"]

// 5. Tambahkan "Matt" di awal array
people.unshift("Matt");
console.log(people); // ["Matt", "Mary", "Devon"]

// 6. Tambahkan nama kamu di akhir array
people.push("Prince");
console.log(people); // ["Matt", "Mary", "Devon", "Prince"]

// 7. Gunakan for-loop, berhenti setelah menampilkan "Mary"
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") break; // keluar dari loop
}

// 8. Buat salinan array tanpa "Mary" dan "Matt"
let newPeople = people.slice(2); 
console.log(newPeople); // ["Devon", "Prince"]

// 9. Reset array, hapus "Devon" dan tambahkan "Elizabeth" & "Artie"
people = ["Matt", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie", "Prince");
console.log(people); // ["Matt", "Mary", "Elizabeth", "Artie", "Prince"]

// 10. Buat array baru dengan menambahkan "Bob" di akhir
let withBob = people.concat("Bob");
console.log(withBob); // ["Matt", "Mary", "Elizabeth", "Artie", "Prince", "Bob"]







//Object 
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. Tambahkan bahasa "Go" di akhir array languages
programming.languages.push("Go");
console.log(programming.languages); // ["JavaScript", "Python", "Ruby", "Go"]

// 2. Ubah difficulty menjadi 7 menggunakan bracket notation
programming["difficulty"] = 7;
console.log(programming.difficulty); // 7

// 3. Hapus properti jokes dari object
delete programming.jokes;
console.log(programming); 

// 4. Tambahkan properti baru isFun dengan nilai true
programming.isFun = true;
console.log(programming);

// 5. Gunakan map() untuk menampilkan format "index - nilai"
programming.languages.map((lang, index) => {
    console.log(`${index} - ${lang}`);
});
