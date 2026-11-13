document.querySelector(".contentbox");
/*Selecting a selector in Javascript from your CSS*/

console.log("Javascript connected to HTML file!");

const button = document.querySelector("#details-button");
const details = document.querySelector("#details");

button.addEventListener("click", function () {
    details.classList.toggle("visible");
});
