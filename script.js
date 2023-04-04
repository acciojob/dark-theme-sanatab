//your code here
const button = document.getElementById("Swap");
const main = document.getElementById("app");

function toggle(){
    main.classList.toggle("night");
    button.classList.toggle("button_night")
}

button.addEventListener('click' , toggle);
