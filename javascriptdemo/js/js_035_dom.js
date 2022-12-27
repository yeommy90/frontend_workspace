let myNode = document.getElementById('p2');
// <p id="p2">content2</p>
console.log(myNode);
// myNode: [object HTMLParagraphElement]
console.log(`myNode: ${myNode}`);
myNode.style.color = 'pink';
myNode.parentNode.style.color = 'blue';

//////////////////////////////////////
// previousSibling/nextSibling : 모든 노드 검색 (이전/다음)
let prevNode = myNode.previousSibling;
// #text (공백)
console.log(prevNode);
let nextNode = myNode.nextSibling;
// #text (공백)
console.log(nextNode);

prevNode = prevNode.previousSibling;
// <p id="p1">content1</p>
console.log(prevNode);
nextNode = nextNode.nextSibling;
// <p id="p3">content3</p>
console.log(nextNode);

// previousElementSibling/nextElementSibling : element node만 검색 (이전/다음)
let prevElementNode = myNode.previousElementSibling;
// <p id="p1">content1</p>
console.log(prevElementNode);
let nextElementNode = myNode.nextElementSibling;
// <p id="p3">content3</p>
console.log(nextElementNode);

//////////////////////////////////////////
let divNode = document.getElementById('wrap');

let divChildNode = divNode.childNodes;
// NodeList(9) [text, p#p1, text, p#p2, text, p#p3, text, p#p4, text]0: text1: p#p12: text3: p#p24: text5: p#p36: text7: p#p48: textlength: 9[[Prototype]]: NodeList
console.log(divChildNode);

let divChildren = divNode.children;
// HTMLCollection(4) [p#p1, p#p2, p#p3, p#p4, p1: p#p1, p2: p#p2, p3: p#p3, p4: p#p4]0: p#p11: p#p22: p#p33: p#p4p1: p#p1p2: p#p2p3: p#p3p4: p#p4length: 4[[Prototype]]: HTMLCollection
console.log(divChildren);

//////////////////////////////////////////////////
let aNode = document.getElementById('p4').firstElementChild;
console.log(aNode);

let aAttriNode = aNode.getAttribute('src');
// ./images/cb.png
console.log(aAttriNode);

aAttriNode = aNode.src;
// http://127.0.0.1:5500/javascriptdemo/images/cb.png
console.log(aAttriNode);

aNode.setAttribute('title', '춘배에용');

aNode.id = 'imgCb';

let aAttriList = aNode.attributes;
// 0: src, 1: alt, 2: title, 3: id
console.log(aAttriList.length);
console.log(aAttriList);
