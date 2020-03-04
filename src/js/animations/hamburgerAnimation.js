const hamburger = document.querySelector(".nav__hamburger");
const navigation = document.querySelector("nav");

const spanBars = document.querySelectorAll(".bar");

let expanded = false;

export function hamburgerAnimation() {
  function expand() {
    expanded = !expanded;
    navigation.classList.toggle("expanded");
    spanBars.forEach(bar => bar.classList.toggle("expand"));
  }

  function closeNav() {
    if (expanded) {
      expand();
    } else {
      return;
    }
  }

  const hideMenu = () => {
    const main = document.querySelector("main");
    const header = document.querySelector("header");

    main.addEventListener("click", closeNav);
    header.addEventListener("click", closeNav);
  }
  
  hamburger.addEventListener("click", expand);
  hideMenu();
}
