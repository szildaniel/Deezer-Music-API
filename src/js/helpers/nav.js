const sidePanel = document.getElementById("mySidePanel");
const openBtn = document.querySelector(".nav__openBtn");

function openNav() {
  sidePanel.style.left = "0";
  openBtn.style.opacity = "0";
  openBtn.style.transition = "0s";
}

function closeNav() {
  sidePanel.style.left = "-305px";
  openBtn.style.opacity = "1";
  openBtn.style.transition = "1.5s";
}

export function navListeners() {
  const openBtn = document.querySelector(".nav__openBtn");
  const closeBtn = document.querySelector(".nav__closeBtn");

  openBtn.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);
}

