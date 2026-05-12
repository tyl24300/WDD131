let menuButton = document.getElementsByClassName("menu-btn") [0];

console.log (menuButton);

// event listener to listen for when button is clicked

menuButton.addEventListener("click", handleMenuButtonClick);

function handleMenuButtonClick(event) {
    console.log (event);
    let nav = document.querySelector("nav");
    nav.classList.toggle("hide");
    menuButton.classList.toggle("change");


    // menuButton.classList.toggle("nav");

    // turn the menu on and off
}

        // <nav>
        //     <a href="#">Home</a>
        //     <a href="#">Scriptures</a>
        //     <a href="#">Favorites</a>
        //     <a href="#">About</a>
        // </nav>

