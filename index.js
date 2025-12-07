const elForm = document.querySelectorAll(".intro__form");
const elClose = document.querySelector(".register__close");
const elRegister = document.querySelector(".register");
const elRegisterInput = document.querySelectorAll(".register__input");

function formEnter(index) {
  elForm[index].addEventListener("submit", (e)=> {
    e.preventDefault(); 
    elRegister.classList.toggle("none");
    elRegister.classList.toggle("show");
    
  })
}

for(var i = 0; i < elForm.length-1; i++) {
  formEnter(i);
}

elClose.addEventListener("click", ()=> {
  elRegister.classList.toggle("none");
  // elRegister.classList.toggle("show");
})

function toastify(text, color) {
    Toastify({
    text: `${text}`,
    duration: 3000, // Duration in milliseconds
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    style: {
      background: `linear-gradient(to right, ${color}, ${color})`,
      fontFamily: "sans-serif", // Apply font-family within the style object
    },
  }).showToast();
  // showToast();
}

elForm[4].addEventListener("submit" , (e)=> {
  e.preventDefault();
  if(!elRegisterInput[0].value.trim()) {
    toastify("Emailni to'ldiring!", "red");
  }else if(!elRegisterInput[1].value.trim()) {
    toastify("Telefonni to'ldiring!", "red");
  }else {
    toastify("Rahmat!", "green");
    elRegister.classList.add("none");
    elForm[4].reset();
  }

})