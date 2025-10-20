//asynchronous javascript
console.log("script start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

//synchronous
Promise.resolve()
    .then(() => {
        console.log("promise1");
    })

//concurrency
    .then(() => {
        console.log("promise2");
    });

console.log("script end");

//api get data from JSONlaceholder
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json));

//mini exrcise
//ubah fetch menggunakan async-await tampilan field name saja

async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    // tampilkan field "name" saja
    data.forEach(user => {
      console.log(user.name);
    });
  } catch (error) {
    console.error("Terjadi error:", error);
  }
}

// jalankan function
getData();

//Asynchronous JavaScript

//Synchronous -> single thread -> blocking

// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

//Asynchrouns -> multi thread ->non blocking
//1. Parallel
// setTimeout(() => {
//   console.log("Proses 1");
// }, 1000);
// setTimeout(() => {
//   console.log("Proses 2");
// }, 2000);
// setTimeout(() => {
//   console.log("Proses 3");
// }, 5000);
// setTimeout(() => {
//   console.log("Proses 4");
// }, 4000);
//2. Concurrent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//         setTimeout(() => {
//           console.log("Proses 5");
//           setTimeout(() => {
//             console.log("Proses 6");
//           }, 1000);
//         }, 1000);
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

//Promise
let condition = true;
const newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

const newPromise2 = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

//Pakai/Consume Promise
//1. then - catch
newPromise
  .then((result) => `${result} !!!`) //Proses 1
  .then((result2) => console.log(result2)) //Proses 2
  .catch((error) => console.log(error));

//2. async - await
//Buat dalam function
// (async () => {
//   let result = await newPromise;
//   console.log(result);
// })();

//Test get data API from JSONPlaceholder
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((users) => console.log(users));

//Mini Exercise
//Ubah fetch menggunakan async-await tampilkan field name saja
// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   users.forEach((item) => console.log(item.name));
// };

// getData();