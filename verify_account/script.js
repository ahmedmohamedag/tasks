
let Verify = document.querySelector('#Verify');
let paragraph = document.querySelector('#paragraph');
let back = document.querySelector('#back');
let verifyCheck = document.querySelector('.verifyCheck');
let inpGroup = document.querySelector('.inpGroup');
let inputs = document.querySelectorAll('.code');
inputs[0].focus()
inputs.forEach((input, index) => {
  input.addEventListener('keydown', (element) => {
    if (element.key >=0 && element.key <=9 ) {
      inputs[index].value = ''; // For input takes one value
      setTimeout(() => inputs[index + 1].focus(), 10); // Focus on Next input
    };

    if (inputs[0].value != "" &&inputs[1].value != ""&&inputs[2].value != ""&&inputs[3].value != ""&&inputs[4].value != "") {
      Verify.classList.remove('btnDisabled')
    }
  });
});

Verify.addEventListener('click', ()=>{
  inpGroup.classList.add('hide')
  verifyCheck.classList.remove('hide')
  paragraph.classList.add('hide')
  Verify.classList.add('hide')
  back.style.display = "inline-block"
})
back.onclick = () => {
  window.location.reload()
}
