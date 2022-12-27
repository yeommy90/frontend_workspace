let level = [5, 10];
let a, b;

a = level[0];
b = level[1];
console.log(`a=${a}, b=${b}`);

let c, d;
[c, d] = [5, 10];
console.log(`c=${c}, d=${d}`); // c=5, d=10

[d, c] = [c, d];
console.log(`c=${c}, d=${d}`); // c=10, d=5

let k, p, next;
// [k, p, next] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(k, p, next); // 1, 2, 3

// [k, p, ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(k, p, next); // 1 2 (6) [3, 4, 5, 6, 7, 8]

// [k, _, p, _, ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(k, p, next); // 1 3 (4) [5, 6, 7, 8]

[k, , p, , ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(k, p, next); // 1 3 (4) [5, 6, 7, 8]

let u, t, w;
[u, t, w] = [1, 2];
console.log(`u=${u}, t=${t}, w=${w}`); // 1 2 undefined

[u, t, w = 3] = [1, 2];
console.log(`u=${u}, t=${t}, w=${w}`); // 1 2 3

// 객체
const customer = { fullname: '김서영', job: '개발자' };
let fullName = customer.fullname;
let job = customer.job;
console.log(`fullname:${customer.fullname}, job:${customer.job}`);

let { fullname: fn, job: jb } = customer;
console.log(`fullname:${fn}, job:${jb}`);

let { fullname: full, job: jobn, loc = '수원' } = customer;
console.log(`fullname:${full}, job:${jobn}, loc:${loc}`);

// let {s:s, r:r} = {s:1, r:2}
let { s, r } = { s: 1, r: 2 };
console.log(s, r);

let v, q;
({ v, q } = { v: 1, q: 2 });
console.log(v, q);

/////////////////////////////////////
// true인 데이터 검색
let habits = [
  { id: 1, content: '수영', completed: false },
  { id: 2, content: '걷기', completed: true },
  { id: 3, content: '명상', completed: true },
  { id: 4, content: '독서', completed: false },
];

// for (let e of habits) {
//   // console.log(e);
//   if (e.completed) {
//     console.log(e);
//   }
// }

console.log(habits.filter((e) => e.completed));

//////////////////////////////////////////////
// 'name 고객님은 city 에 거주합니다' 출력
let member = { hname: '서여미', address: { zipCode: '526-143', city: '수원' } };
let { hname, address } = member;
console.log(`${hname} 고객님은 ${address.city}에 거주합니다.`);

let {
  name,
  address: { city },
} = member;
console.log(`${hname} 고객님은 ${city}에 거주합니다.`);
