const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

console.log(fruits.toString());
console.log(`${typeof fruits.toString()}`); // string

console.log(typeof fruits.join()); // string
console.log(fruits.join('_'));
console.log(fruits.join('*'));

fruits.push('Tomato');
console.log(fruits);
console.log(fruits.push('Melon')); // 6
console.log(fruits.pop()); // Melon
console.log(fruits.unshift('Lemon')); // 6
console.log(fruits.shift()); // Lemon

// delete fruits[3];
// console.log(fruits); // 희소배열

console.log(fruits.slice(1, 3));
console.log(fruits.slice(1));
console.log(fruits.sort());
console.log(fruits.sort().reverse());

////////////////////////////////////////
let point = [40, 100, 1, 5, 10];
console.log(point.sort()); // [1, 10, 100, 40, 5]
console.log(point.sort((a, b) => a - b)); // [1, 5, 10, 40, 100]
console.log(point.sort((a, b) => b - a)); // [100, 40, 10, 5, 1]

////////////////////////////////////////
let xData = [1, 2, 3];
let yData = [4, 5, 6];
console.log(xData.concat(yData)); // [1, 2, 3, 4, 5, 6]

let aData = [[1, 2, 3]];
let bData = [[4, 5, 6]];
console.log(aData.concat(bData)); // 0 : (3) [1, 2, 3] 1 : (3) [4, 5, 6]

////////////////////////////////////////
let arr3 = [1, 3, [[[4, 5]]], [7, 8], [[9, 10], 12]];
console.log(arr3.flat()); // [1, 3, Array(1), 7, 8, Array(2), 12]
console.log(arr3[0]); // 1
console.log(arr3[2][0]); // [4, 5]
console.log(arr3[2][0][0]); // 4 5
console.log(arr3[4][0]); // 9 10
console.log(arr3.flat(2)); // [1, 3, Array(2), 7, 8, 9, 10, 12]
console.log(arr3.flat(3)); // [1, 3, 4, 5, 7, 8, 9, 10, 12]

let kData = arr3.flat(2);
console.log(kData); // [1, 3, Array(2), 7, 8, 9, 10, 12]
console.log(kData[2][0]); // 4
