//conditional and loop
let suhu = 80;
if (suhu < 70) {
    console.log("dingin");
} else if (suhu >= 70 && suhu <= 80) {
    console.log("sedang");
} else {
    console.log("panas");
}


//cek grade mahasiswa berdasarkan nilai
let nilai = 85;
if (nilai >= 90 && nilai <= 100) {
    console.log("A");
} else if (nilai >= 80 && nilai < 90) {
    console.log("B");
}
else if (nilai >= 70 && nilai < 80) {
    console.log("C");
}
else if (nilai >= 60 && nilai < 70) {
    console.log("D");
}
else if (nilai >= 0 && nilai < 60) {
    console.log("E");
} else {
    console.log("nilai invalid");
}

//switch - case
let hari = 3;
switch (hari) {
    case 1:
        console.log("senin");
        break;
    case 2:
        console.log("selasa");
        break;
    case 3:
        console.log("rabu");
        break;
    case 4:
        console.log("kamis");
        break;
    case 5:
        console.log("jumat");
        break;
    case 6:
        console.log("sabtu");
        break;
    case 7:
        console.log("minggu");
        break;
    default:
        console.log("hari invalid");
        break;
}

//loop
//for loop
for (let i = 1; i <= 10; i++) {
    console.log("perulangan ke-" + i);
}

//do - while loop
let j = 1;
do {
    console.log("perulangan ke-" + j);
    j++;
} while (j <= 10);
//while loop
let k = 1;
while (k <= 10) {
    console.log("perulangan ke-" + k);
    k++;
}

//if array
let buah = ["apel", "jeruk", "mangga"];
for (let l = 0; l < buah.length; l++) {
    console.log(buah[l]);
}

//for each
let angka = [1, 2, 3, 4, 5];
angka.forEach(function (item) {
    console.log(item);
});

//map
let angka2 = [1, 2, 3, 4, 5];
let angka3 = angka2.map(function (item) {
    return item * 2;
}
);
console.log(angka3);

//filter
let angka4 = [1, 2, 3, 4, 5];
let angka5 = angka4.filter(function (item) {
    return item > 2;
}
);
console.log(angka5);