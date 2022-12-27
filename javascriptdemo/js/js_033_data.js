// undefined 제외한 합계와 평균 계산
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

let sum = arr.filter((e) => e);

console.log(sum.reduce((a, b) => a + b));
console.log(sum.reduce((a, b) => a + b) / sum.length);

// 2차원 배열의 합계와 평균 계산
let data = [
  ['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75],
];

// console.log(`최고점: ${Math.max(data[0][5], data[1][5])}`);

for (let i = 0; i < data.length; i++) {
  let list = data[i].filter((e) => Number(e));
  let sum = list.reduce((a, b) => a + b);
  data[i].push(sum);
  data[i].push((sum / list.length).toFixed(2));
}

// for (let i = 0; i < data.length; i++) {
//   let [fullName, ...jumsu] = data[i];
//   let sum = jumsu.reduce((a, b) => a + b);
//   data[i].push(sum);
//   data[i].push((sum / jumsu.length).toFixed(2));
// }

console.log(data);
console.log(Math.max(...data.map((e) => e[e.length - 1])));
