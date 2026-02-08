const hamburger = document.getElementById("hamburger");
const navbarMenu = document.querySelector("#navbar ul");

hamburger.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});
