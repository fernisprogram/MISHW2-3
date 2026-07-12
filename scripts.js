/* Author:Fernanda Anahi Flores
Name File:mis3371homework2.html
Date Created:6/22/26
Date Updated:
Version:2
Description:MIS Homework Assignment 3 requiring a registration form */

const form = document.getElementById("RegistrationForm");
const useridInput = document.getElementById("userid");
const passwordInput = document.getElementById("pswd");
const letter = document.getElementById("Letter");
const capital = document.getElementById("Capital");
const number = document.getElementById("Number");
const length = document.getElementById("Length");

const rpasswordInput = document.getElementById("rpswd");
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const dobInput = document.getElementById("dob");
const ssnInput = document.getElementById("sname");
const emailInput = document.getElementById("email");

const useridError = document.getElementById("useridError");
const passError = document.getElementById("passError");
const rpassError = document.getElementById("rpassError");
const fnameError = document.getElementById("fnameError");
const lnameError = document.getElementById("lnameError");
const dobError = document.getElementById("dobError");
const snameError = document.getElementById("snameError");
const emailError = document.getElementById("emailError");



const result = document.getElementById("result");

function showError(el, message){
  el.innerHTML = message;
}

function clearError(el) {
  el.innerHTML = "";
}

function validateuserid() {
  let useridInput = "Enter Userid here";
  let useridRegex = /^[^0-9]/;
 if (!useridRegex.test(useridInput)) {
    showError(useridError, "User ID cannot start with a number");
    return false;
  }
    
  clearError(useridError);
  return true;
}


function validatepswd() {
   if (pswd !== rpswd) {
    showError(passError, "Passwords must match");
    return false;
  } 
clearError(passError);
return true;
}

function validaterpswd () {

  if (pswd === userid) {
    showError(rpassError, "Passwords cannot be the same as UserID");
    return false;
  }
  clearError(rpassError);
  return true; 
}

    const hasUpperCase = /[A-Z]/.test(pswd);
    const hasLowerCase = /[a-z]/.test(pswd);
    const hasDigit = /\d/.test(pswd);

        if (!hasUpperCase || !hasLowerCase || !hasDigit) {
          showError(passError, "password must contain at least one uppercase letter, lowercase letter, and number");
          return false;

        }

function validatefname() {
  let fnameInput = "Enter first name here";
  let fnameRegex = /^[a-zA-Z'-]{1,30}$/;
  if (!fnameRegex.test(fnameInput)) {
    showError(fnameError, "Name must be 1 to 30 chararacters and only letters, aprostrophes, and dashes are allowed");
    return false;
  }
  clearError(validatefname);
  return true;
}

function validatelname() {
  let lnameInput = "Enter last name here";
  let lnameRegex = /^[a-zA-Z'-]{1,30}$/;
  if (!lnameRegex.test(lnameInput)) {
    showError(lnameError, "Name must be 1 to 30 chararacters and only letters, aprostrophes, and dashes are allowed");
    return false;
  }
  clearError(validatelname);
  return true;
}

function validatedob(dateString) { // double check this 
  let dob = new Date(dateString);
  let currentDate = new Date();
  let minDate = new Date();
  minDate.setFullYear(currentDate.getFullYear() - 120);

  if (dob.toString() ) {
    return false; 
  }
if (dob > currentDate || dob < minDate) {
  return false;
}

return true;
}

function validatesname() {
  let value = snameInput.value.trim(); //double check this too
  if (!/^[0-9]+$/.test(value)) {
    showError(snameError, "Enter a valid SSN.");
    return false;
  }
  clearError(snameError);
  return true;
}

function validateEmail() {
  let value = emailInput.value.trim();
  if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
    showError(emailError, "Enter a valid email address.");
    return false;
  }
  clearError(emailError);
  return true;
}

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() {
  output.innerHTML = this.value;
}


//validate form// 
function validateForm() {
  let okUserid = validateuserid();
  let okpswd = validatepswd();
  let okpswd = validaterpswd();
  let okLetter = validateLetter();
  let okCapital = validaterCapital();
  let okNumber= validaterNumber();
  let okLength = validateLength();
  let okfname = validatefname();
  let oklname = validatelname();
  let okdob = validatedob();
  let oksname = validatesname();
  let okEmail = validateEmail();
  return okUserid && okpswd && okLetter && okCapital && okNumber && okLength && okrpswd && okfname && oklname && okdob && oksname && okEmail;
}

// Prevent Default Reloading
form.addEventListener("submit", function (event) {
  event.preventDefault();

// Clear Result
  result.innerHTML = "";

// Validate Form result
  if (validateForm()) {
    result.innerHTML = "Form is ready";
    result.className = "ok";
  } else {
    result.innerHTML = "Please fix any errors.";
    result.className = "error";
  }
});
