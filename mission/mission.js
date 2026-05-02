
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let content = document.getElementById("content");
let topics = document.getElementById("topics");
let header = document.querySelector(".header");
let italics = document.querySelector(".italics");
let subtitle = document.querySelector(".subtitle");

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        content.style.color = "white";
        content.style.borderColor = "white";
        topics.style.color = "white";
        header.style.color = "white";
        document.body.style.backgroundColor = "#2e2d2d";
        subtitle.style.color = "#7fc2ef";
        italics.style.color = "white";
        logo.setAttribute("src", "byui-logo-white.png");

        // code for changes to colors and logo
    } else {
        content.style.color = "black";
        content.style.borderColor = "black";
        topics.style.color = "black";
        header.style.color = "black";
        document.body.style.backgroundColor = "white";
        subtitle.style.color = "#035f9c";
        italics.style.color = "black";
        logo.setAttribute("src", "byui-logo-blue.webp");

        // code for changes to colors and logo
    }
}           
