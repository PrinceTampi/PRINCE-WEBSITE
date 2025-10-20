import helloWorld from './hello_world.js';

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages();

// Mengapa kita perlu menambahkan await di dalam messages?
// Apa yang terjadi jika await dihapus?
// Mengapa kita perlu menggunakan export dan import di sini?

// Jawaban
//await digunakan jika pengguna ingin menciptakan delay antara satu output dengan output yang lain
//jika await di hapus maka otomatis pesan akan di tampilkan secara instant tapi tidak sesuai dengan waktu yang di inginkan
//export dan import di gunakan agar function helloWorld bisa di gunakan di file lain