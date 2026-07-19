const eraButton = document.getElementById("hello");
let newText = document.getElementById("text")

eraButton.addEventListener("click", () => {
    let eraInput = document.getElementById("era").value; 
    console.log("this works");
    // let eraQuery = eraInput.value.toLowerCase();

    if (eraInput === "1") {
        newText.innerHTML = "You chose Baroque.";}

    else if (eraInput === "2") {
            newText.innerHTML = "You chose Classical.";
        }
    else {newText.innerHTML = "You chose Romantic."; }
    }


)
