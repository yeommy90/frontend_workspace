let dateButton = document.querySelector('button');

dateButton.onclick = () => {
  let pNode = document.querySelector('p');

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  pNode.innerText = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
  // pNode.innerHTML = today.toLocaleString;
};
