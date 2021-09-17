const contactForm = document.querySelector(".contact-form");

// Variables
let fullname = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

// Add EventListener
contactForm.addEventListener("submit", (e)=>{
  e.preventDefault();

// Store Form Data in an Object
  let formData = {

  fullname: fullname.value,
  email: email.value,
  subject: subject.value,
  message: message.value
  
  }

  let xhr =  XMLHttpRequest();
  xhr.open("POST", "/");

  xhr.setRequestHeader("content-type", "application/json");

  xhr.onload = function(){
    console.log(xhr.responseText);

    if(xhr.responseText == "success"){
      alert("Email Sent.");
      fullname.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    } else{
      alert("Something went wrong.");
    }
  }

  xhr.send(JSON.stringify(formData));

})