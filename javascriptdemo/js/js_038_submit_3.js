document.log_f.onsubmit = () => {
  // alert('얏호!!!!!!');
  let idNode = document.querySelector('#my_id');
  let passNode = document.querySelector('#my_pass');

  if (idNode.value == '') {
    alert('아이디를 입력하세용');
    return false;
  }

  if (passNode.value == '') {
    alert('비밀번호를 입력하세용');
    return false;
  }

  return true;
};
