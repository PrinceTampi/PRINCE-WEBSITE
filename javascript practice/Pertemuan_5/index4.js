// // function sapa(nama, callback) {
// //   console.log('Halo, ' + nama);
// //   // Di sini, kita akan memanggil "callback" setelah tugas selesai
// //   callback();
// // }

// // function panggilBalik() {
// //   console.log('Fungsi ini dipanggil kembali!');
// // }
// // sapa('Budi', panggilBalik);


(function() {
  var pesan = "Ini pesan rahasia di dalam IIFE!";
  console.log(pesan); // "Ini pesan rahasia di dalam IIFE!"
})();

// console.log(pesan); // Error: pesan is not defined