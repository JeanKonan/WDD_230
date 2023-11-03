const pwd = document.querySelector("#pwd");
const pwd2 = document.querySelector("#pwd1");
const email = document.querySelector("#email");
const rangeValue = document.querySelector("#rangevalue");
const range = document.querySelector("#rate");

pwd2.addEventListener("focusout", checkSame);
email.addEventListener("focusout", checkValid);
range.addEventListener("change", displayRate);

function checkSame() {
 if (pwd.value !== pwd2.value) {

  pwd2.style.backgroundColor = "#fff0f3";
        pwd.value = "";
  pwd2.value = "";
  pwd.focus();

 } else {
  pwd2.style.color = "#000";
 }
}

function checkValid() {
    if (!email.contains("@byui.edu")) {

        email.style.backgroundColor = "#fff0f3";
        email.value = "";
        email.focus();

    }
}

function displayRate() {

    rangeValue.textContent = range.value;
    
}