let copyText = document.querySelector(".copy-text"); // div
let textInput =document.getElementById('inp'); 
let testCopy =document.getElementById('testCopy'); 
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  btn.style.border = '2px solid rgb(97, 93, 93)'
  textInput.select(); // select value 
  testCopy.style.border = '2px solid rgb(97, 93, 93)'
  document.execCommand('copy');
  copyText.classList.add('active');
}) 
