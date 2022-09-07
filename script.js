const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener ("click", () =>{

    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach( n => n. 
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    })
)


function showMessage(input, message, type) {
    const msg = input.parentNode.querySelector('small');
    msg.innerText = message;
    return type;
  }
  
  function showError(input, message) {
    return showMessage(input, message, false);
  }
  
  function showSuccess(input) {
    return showMessage(input, '', true);
  }
  
  function hasValue(input, message) {
    if (input.value.trim() === '') {
      return showError(input, message);
    }
    return showSuccess(input);
  }
  
  function validateEmail(input, invalidMsg) {
    if (!hasValue(input, invalidMsg)) {
      return false;
    }
    const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  
    const email = input.value.trim();
    if (!emailRegex.test(email)) {
      return showError(input, invalidMsg);
    }
    return true;
  }
  
  const form = document.querySelector('#myForm');
  const EMAIL_INVALID = 'Please enter a correct email address format. Uppercase not allowed in this field!!';
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);
    if (emailValid) {
      form.submit();
    }
  });
  
