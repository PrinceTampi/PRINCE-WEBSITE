//ini untuk soal nomor 2 catch dan fetch

// export function ambildatauser() {
//   fetch("https://reqres.in/api/users")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       data.data.forEach(({ first_name, last_name }) => { //ambil nama depan dan belakang
//         console.log(`${first_name} ${last_name}`);
//       });
//     })
//     .catch((error) => {
//       // error handling
//       console.error("Terjadi error saat fetch:", error);
//     });
// }

// 1.Mengapa butuh '.json()' setelah fetch()?
//    Karena 'fetch()' hanya memberi respons mentah (Response object), dan '.json()' mengubah isi respons menjadi data JavaScript (object) yang bisa dipakai.

// 2.Jika API gagal merespons, bagaimana cara menambahkan error handling?
//    Gunakan '.catch()' pada Promise chaining atau 'try...catch' pada async/await untuk menangkap dan menampilkan error.



//ini yang versi async dan await
export async function ambildatauser() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();

    data.data.forEach(({ first_name, last_name }) => {
      console.log(`Nama Lengkap: ${first_name} ${last_name}`);
    });
  } catch (error) {
    console.error("Terjadi error saat fetch:", error);
  }
}
//tidak bisa jalan secara bersamaan jadi satu satu karna sama function


// **Promise chaining** → pakai '.then()' berlapis sehingga terlihat seperti rantai callback.
// **Async/await** → pakai 'await' sehingga kode asinkron ditulis mirip kode biasa, lebih mudah dibaca.
