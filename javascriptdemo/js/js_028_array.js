let score = [100, 90, 100];

console.log(score.length);

let person = ['John', 'Doe', 26, true];
for (let idx in person) {
  console.log(person[idx], typeof person[idx]);
}

let cars = new Array('Sasb', 'Volov', 'BMW');

let color = [];
color[0] = 'red';
color.push(1);
color.push(759);
color[8] = 'blue';

for (let idx in color) {
  console.log(`${idx} : ${color[idx]}`);
}

let point = new Array(3);
console.log(`point length: ${point.length}`); // 3

// forEach
// array.forEach((element) => {});

const numbers = [4, 9, 16, 25];
const res = numbers.map((v) => v * 2);
console.log(res);

const sum = numbers.reduce((a, b) => a + b);
console.log(sum); // 54

const per = numbers.filter((v) => v >= 15);
console.log(per);
