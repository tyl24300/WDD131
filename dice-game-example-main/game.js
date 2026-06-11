// make dice images look like they're rolling when the button is clicked

document.getElementById("rollButton").addEventListener("click", event => {
    console.log("this works");
    const images = document.querySelectorAll("#gameboard img");
    // change src
    images.forEach(image => {
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    })

    // timer

    // wait two seconds, then call this anonymous function

    setTimeout(() => {
    images.forEach(image => {
        if(isDieUnlocked(image)) {
        image.src = "assets/white_dice_" + (Math.floor(Math.random() * 6) + 1) + ".gif";
        }

    })
    }, 1000);



});

function isDieUnlocked(dieImage) {
    // retrieve list of checkboxes
    const checkboxes = document.querySelectorAll("#gameboard input")

    // filter out checked boxes/dies
    const unchecked = Array.from(checkboxes)
                            .filter(checkbox => !checkbox.checked)

    // compare list to dieImage, if match return true
    return unchecked.find(unchecked => unchecked.className === dieImage.className);

}