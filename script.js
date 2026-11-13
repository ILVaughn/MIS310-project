document.querySelector(".contentbox");
/*Selecting a selector in Javascript from your CSS*/

console.log("Javascript connected to HTML file!");


/*VIDEO GRID JAVASCRIPT - SHOW/HIDE DETAILS*/
const Video_Dropdown_Button = document.querySelector("#Video_Dropdown_Button");
const Video_Collection = document.querySelector("#Video_Collection");
    Video_Dropdown_Button.addEventListener("click", function () {
        Video_Collection.classList.toggle("visible");
    }); 