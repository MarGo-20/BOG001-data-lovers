const menu = document.querySelector("#menu");
const buttonPokeMenu = document.querySelector("#buttonPokeMenu");
const showSubMenu = document.querySelector(".showSubMenu");
const showAbout = document.querySelector(".showAbout");
const showContact = document.querySelector(".showContact");
const buttonMenu = document.querySelector(".buttonMenu");
const buttonAbout = document.querySelector("#buttonAbout");
const buttonContact = document.querySelector("#buttonContact");

buttonPokeMenu.addEventListener("click", showMenu);

function showMenu(){
    menu.classList.toggle("appear");
}


buttonMenu.addEventListener("click", showSubButtons);
function showSubButtons(){
    showSubMenu.classList.toggle("appearTwo");
}

 buttonAbout.addEventListener("click", showAboutMenu);
 function showAboutMenu(){
    showAbout.classList.toggle("appearThree");

 }
 buttonContact.addEventListener("click", showContactMenu);
 function showContactMenu(){
    showContact.classList.toggle("appearFour");

 }







