let myDate = new Date();
let myYear = myDate.getFullYear();

document.querySelector(".current_year").textContent = myYear;

document.querySelector("#lastModified").textContent = `Last updated on ${myDate.getMonth()+1}/${myDate.getDate()}/${myDate.getFullYear()} at ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`;
