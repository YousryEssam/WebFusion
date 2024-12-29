const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("transparent-nav");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("transparent-nav");
  }
});

function side_menu() {
  const toggler = document.querySelector(".navbar-toggler");
  if (toggler.getAttribute("aria-expanded") === "true") {
    let show = (document.querySelector(".opn-button").style.display = "none");
    let hide = (document.querySelector(".cls-button").style.display =
      "inline-block");
  } else {
    let show = (document.querySelector(".opn-button").style.display =
      "inline-block");
    let hide = (document.querySelector(".cls-button").style.display = "none");
  }
  console.log("Hello");
}
document.getElementById('currentYear').textContent = new Date().getFullYear();

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});