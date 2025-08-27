// //javascript Function Program
// function greetings(){
//     console.log("hello world");
// }

// greetings();

// const greetings2 = function(){
//     console.log("hello world");
// }
// greetings2();

// function greetings3(fullname){
//     return "hello " + fullname
// }let output = greetings3("john")
// console.log(output)

// let x = 10;
// function func1(){
//     console.log(x)
//     if(true){
//         console.log(x)
//     }
// }
// func1()

function funcBMI(Berat, tinggi){
    let BMI = Berat / (tinggi * tinggi);
    console.log(BMI > 25 ? "kategori anda kelebihan berat badan" : "BMI anda adalah " + BMI)
}
let hasil = funcBMI(80, 165);