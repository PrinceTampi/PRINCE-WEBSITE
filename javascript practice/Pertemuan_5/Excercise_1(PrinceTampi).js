//Menghitung BMI menggunakan IILIFE dan CallBack Function
// Nama: Tampi, Prince Azarya Timothy


//IILFE
(function(Berat, tinggi){
    let BMI = Berat / (tinggi * tinggi);
    console.log(BMI > 25 ? "kategori anda kelebihan berat badan" : "BMI anda adalah " + BMI)
})(80, 165);

//CallBack
function Sapa(nama, callback){
    console.log("Hallo " + nama);
    callback() //di panggil mulai dari sini
}
function BMI(Berat, tinggi){
    let BMI = Berat / (tinggi * tinggi);
    console.log(BMI > 25 ? "kategori anda kelebihan berat badan" : "BMI anda adalah " + BMI)
}
//gunakan IILIFE untuk memanggil fungsi ke-2
Sapa('Prince', function(){
BMI(80,165)
});
