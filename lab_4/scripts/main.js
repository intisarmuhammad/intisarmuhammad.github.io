const myHeading = document.querySelector('.header');
myHeading.textContent = "Intisar Muhammad's Lab 4";

var p1 = document.createElement("P");
var txt1 = document.createTextNode("My name has 15 characters");
p1.appendChild(txt1);
document.querySelector('.content').appendChild(p1);