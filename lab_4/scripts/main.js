let firstname = "Intisar";
let lastname = "Muhammad";
let firstandlast = "Intisar Muhammad";
let split = firstandlast.split();
let name_length = split[0].length + split[1].length;
const header = document.querySelector('.header');
header.innerHTML = firstandlast +" 's " + name_length + "Lab 4";