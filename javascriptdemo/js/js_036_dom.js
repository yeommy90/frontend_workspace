let pNode = document.getElementById('wrap');
// 1 P null
console.log(`${pNode.nodeType} ${pNode.nodeName} ${pNode.nodeValue}`);

let pAttr = pNode.attributes;
// NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}
console.log(pAttr);
// id="wrap"
console.log(pAttr[0]);
console.log(pAttr.id);
console.log(pAttr['id']);
console.log(pNode.attributes.id);
// class="chk"
console.log(pAttr.class);

// chk
console.log(pNode.getAttribute('class'));
// undefined
console.log(pNode.class);
// chk (class는 js의 키워드로 사용하지 않는 것을 권장, HTML 문법에 따라 className을 사용해야함)
console.log(pNode.className);
// wrap
console.log(pNode.id);

// 2 id wrap
console.log(`${pAttr[0].nodeType} ${pAttr[0].nodeName} ${pAttr[0].nodeValue}`);

let textNode = pNode.firstChild;
console.log(textNode);
// 3 #text content
console.log(`${textNode.nodeType} ${textNode.nodeName} ${textNode.nodeValue}`);

/////////////////////////////////////////////////
let bodyNode = document.getElementsByTagName('body')[0];
console.log(bodyNode);
// content
console.log(bodyNode.innerText);
// console.log(bodyNode.innerHTML);

// bodyNode.innerText = '<p>append</p>';
// bodyNode.innerHTML = '<p>append</p>';

///////////////////////////////////////////
let fname = document.querySelector('#fname');
console.log(fname.value);
fname.value = '뇨뇨뇨';
