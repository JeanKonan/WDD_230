let myDate = new Date();
let myYear = myDate.getFullYear();

document.querySelector(".current_year").textContent = myYear;

document.querySelector("#lastModified").textContent = myDate;
