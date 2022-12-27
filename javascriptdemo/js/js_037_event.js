let chk = true;
let btn = document.getElementsByTagName('button')[0];

btn.onclick = function () {
  // alert('얏호!');
  let divNode = document.querySelector('div');
  if (chk) {
    divNode.style.backgroundColor = 'green';
    chk = false;
  } else {
    divNode.style.backgroundColor = 'blue';
    chk = true;
  }
};
