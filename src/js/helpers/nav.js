const sidePanel = document.getElementById("mySidePanel");
const openBtn = document.querySelector(".nav__openBtn");
const main = document.querySelector("main");
const resultSection = document.querySelector('.section--blue');

function openNav() {
  sidePanel.style.left = "0";

  openBtn.style.opacity = "0";
  openBtn.style.transition = "0s";
  toggleMarginToMain();
}

function closeNav() {
  sidePanel.style.left = "-305px";

  openBtn.style.opacity = "1";
  openBtn.style.transition = "1.5s";

  toggleMarginToMain();
}

function toggleMarginToMain(){
  main.classList.toggle('navExpanded');
  resultSection.classList.toggle('navExpanded');
}

export function toggleNav() {
  const openBtn = document.querySelector(".nav__openBtn");
  const closeBtn = document.querySelector(".nav__closeBtn");

  openBtn.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);
}

