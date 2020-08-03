var myButton = document.getElementById("abt me btn")

function toggleButton(){

myButton.innerHTML=(myButton.innerHTML == "favorite superhero") ? "spiderman" :"favorite superhero";
}
myButton.addEventListener("click", toggleButton)