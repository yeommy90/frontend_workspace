/* <input type="button" value="login" id="btn" /> */

let btn = document.querySelector('#btn');

btn.onclick = () => {
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

  document.log_f.submit();
  // document.log_f.action='#'; (tag내에 없으면 해야함)
};
