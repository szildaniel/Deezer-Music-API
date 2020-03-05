export function enjoyBtnHoverAnimation() {
  const headerBtn = document.querySelector(".header__button");
  const headerPlayIcon = document.querySelector(".landing_icon");
  const exclaMark = document.querySelector(".header__excla");

  headerBtn.addEventListener("mouseover", () => {
    headerPlayIcon.style.color = "#4489b6";
    headerPlayIcon.style.textShadow = "0 0 1px black";
    headerPlayIcon.style.transform = "rotate(360deg) translate(6px)";
    exclaMark.style.color = "#4489b6";
  });

  headerBtn.addEventListener("mouseleave", () => {
    headerPlayIcon.style.color = "white";
    headerPlayIcon.style.textShadow = "0 0 4px black";
    headerPlayIcon.style.transform = "rotate(-360deg) translate(0)";
    exclaMark.style.color = "white";
  });
}

