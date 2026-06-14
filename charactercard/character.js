const healthNum = document.getElementById("health");
const levelNum = document.getElementById("level");
died = document.getElementById("death");

window.addEventListener("load", function () {
  refresh();
  render();
});

function refresh() {
  healthNum = 100;
  levelNum = 5;   
}

document.getElementById("attacking").addEventListener("click", function () {
  let health = Number(healthNum.value);
  if (health <= 0) {
    died.value = "You died.";
  } else {
    health -= 20;}
  healthNum.value = health;
});

document.getElementById("leveling").addEventListener("click", function () {
  let level = Number(levelNum.value);
  level += 1;
  levelNum.value = level;
});

