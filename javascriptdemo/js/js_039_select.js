document.frm.onsubmit = () => {
  let optFruit = document.querySelector('#sel');
  console.log(optFruit.value);

  let optSelect = optFruit.selectedIndex + ' ' + optFruit.value;
  console.log(optSelect);

  return false;
};
