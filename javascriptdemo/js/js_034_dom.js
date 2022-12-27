let hNode = document.getElementById('selector');
console.log(hNode, typeof hNode);

let hId = document.querySelector('#selector');
console.log(hId, typeof hId);

let hClass = document.querySelector('.choice');
console.log(hClass, typeof hClass);

// HTMLCollection(4)
let pNode = document.getElementsByTagName('p');
console.log(pNode);
console.log(pNode.length);
console.log(pNode.item(0));
console.log(pNode[0].innerText);
pNode[0].style.color = 'blue';
pNode[0].style.backgroundColor = 'red';

function process() {
  let fname = document.frm.fname;
  console.log('fname:', fname);
  console.log(fname.value);
  console.log(fname.defaultValue);

  return false;
}
