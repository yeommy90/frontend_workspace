//js_027_string.js

/*
[문제1]
http://www.daum.net
ftp://ftp.microsoft.com

[출력결과]
protocal: http, domain : www.daum.net
*/

//separator() 함수정의
function separator(data) {
  const res = data.split('://');
  console.log('protocal:' + res[0] + ', ' + 'domain:' + res[1]);
}
//////////
separator('http://www.daum.net');
separator('ftp://ftp.microsoft.com');

///////////////////////////////////////////////////////////////
/*
[문제2]
let person1 = { name: '홍길동', phone: '010-1234-5678' };
let person2 = { name: '여진구', phone: '010-253-2253' };
[출력결과]
이름: 홍길동
연락처: 010-****-5678
이름: 여진구
연락처: 010-***-2253
*/

//display( )함수정의
function display(obj) {
  // phoneStr = obj['phone'].match(/\d{2,3}-\d{3,4}-\d{4}/gi);
  if (/-[0-9]{3}-/.test(obj['phone'])) {
    maskingStr = obj['phone'].replace(/-[0-9]{3}-/g, '-***-');
  } else if (/-[0-9]{4}-/.test(obj['phone'])) {
    maskingStr = obj['phone'].replace(/-[0-9]{4}-/g, '-****-');
  }
  console.log('이름:' + obj['name']);
  console.log('연락처:' + maskingStr);
}

///////////
let person1 = { name: '홍길동', phone: '010-1234-5678' };
let person2 = { name: '여진구', phone: '010-253-2253' };
display(person1);
display(person2);
