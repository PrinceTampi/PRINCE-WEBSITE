//rest parameter bertipe array hittung angka 1 sampai 15
const funct1 = (...args) => {
    let total = 0;
    rest.forEach((item) => (total += item));
    console.log(total);
}
funct1(1, 2, 3, 4, 5);

//kegunaan spread operator pada array
//1.duplikasi array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2);

//menggabungkan array pake concat
const arr3 = [4, 5, 6];
const arr4 = arr1.concat(arr3);
console.log(arr4);

//menggabungkan array pake spread operator pada object
//1.duplikasi object
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1 };
console.log(obj2);
//2.menggabungkan object
const obj3 = { d: 4, e: 5, f: 6 };
const obj4 = { ...obj1, ...obj3 };
console.log(obj4);