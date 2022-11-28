// Toggle Menu
const btn = document.getElementById("menuBtn");
const menuDiv = document.getElementById("menu");
btn.addEventListener("click", navToggle);
function navToggle() {
  btn.classList.toggle("open");
  menuDiv.classList.toggle("flex");
  menuDiv.classList.toggle("hidden");
}

// Disable Menu on Medium up Screen
function disableMenu() {
  if (window.innerWidth >= 768) {
    btn.classList.remove("open");
    menuDiv.classList.add("hidden");
    menuDiv.classList.remove("flex");
  }
}
window.onresize = disableMenu;
