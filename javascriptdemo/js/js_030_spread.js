let arr1 = [1, 2, 3];
let arr2 = arr1; // shallow copy
console.log(arr1);
console.log(arr2);

arr2.push(4);
console.log(arr1);
console.log(arr2); // 원본까지 값 변경

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // deep copy

arr4.push(4);
console.log(arr3);
console.log(arr4); // 원본 변경 X

let arr5 = [10, 20, ...arr3, 40, 50];
console.log(arr5);

let arr8 = [1, 2, 3];
let arr9 = [4, 5, 6];
let arr10 = [7, 8, 9];
let arr11 = [...arr8, ...arr9, ...arr10];
console.log(arr11); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr12 = [arr8, arr9, arr10];
console.log(arr12); // [Array(3), Array(3), Array(3)]

///////////////////////////////////////////
// 1. Rest parameter
function display(...params) {
  return params.reduce((a, b) => a + b);
}

console.log(display(1, 2)); // 3
console.log(display(1, 2, 3, 4, 5)); // 15

// 2. Argument
console.log(Math.max(1, 2, 3, 4, 5)); // 5

let arr13 = [10, 20, 30, 40, 50];
console.log(Math.max(arr13)); // NaN

console.log(Math.max(...arr13)); // 50

///////////////////////////////////////////
// 1. 객체 복사
let prevState = { name: '재준이', age: 20 };
let currentState = { ...prevState };
console.log(currentState);

currentState = { ...prevState, loc: '서울' };
console.log(currentState);

// 2. 객체 업데이트
let prevState2 = { name: '재준이', age: 20 };
// prevState2.name = '서여미';

prevState2 = { ...prevState2, name: '서여미' };
console.log(prevState2);
