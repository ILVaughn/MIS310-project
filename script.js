document.querySelector(".contentbox");
/*Selecting a selector in Javascript from your CSS*/

console.log("Javascript connected to HTML file!");


/*VIDEO GRID JAVASCRIPT - SHOW/HIDE DETAILS*/
const Video_Dropdown_Button = document.querySelector("#Video_Dropdown_Button");
const Video_Collection = document.querySelector("#Video_Collection");

if (Video_Dropdown_Button && Video_Collection) {
    console.log("Video toggle script loaded.");

    Video_Dropdown_Button.addEventListener("click", function () {
        Video_Collection.classList.toggle("visible");
        console.log("Video collection visible:", Video_Collection.classList.contains("visible"));
}); 
}

/*BOOTSTRAP AND JQUERY PRACTICE*/
const msg = document.querySelector("#message");
msg.textContent = "Hello!";

/*This is the same as $("#message").text("Hello!"); in jQuery*/ 
$("#message").text("Hello!");


/*==================================================================*/
/*JQUERY SHOW/HIDE*/
$("#details-button").on("click", function() {
   $("#details").toggle();
});
/*BUTTON FUNCTION WITH JS FROM LAST WEEK BUT WITH JQUERY, does the same thing as: */
const button = document.querySelector("#details-button");
const details = document.querySelector("#details");

button.addEventListener("click", function () {
    details.classList.toggle("visible");
});

/*=====================================================================*/
/*RESOURCE TOGGLE BUTTONS
/*=====================================================================*/

document.querySelectorAll(".resource_toggle").forEach(function (button) {
    const Resource_Collection = button.nextElementSibling;

    button.addEventListener("click", function () {
        Resource_Collection.classList.toggle("visible");
        button.setAttribute(
            "aria-expanded",
            Resource_Collection.classList.contains("visible")
        );
    });
});