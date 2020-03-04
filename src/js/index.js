import renderRepeatableHtml from "./render/render";
import { getData, data } from "./getData";
import { headerButtonHoverAnimate } from "./helpers/hoverAnimations";
import { navListeners } from "./helpers/nav";
import smoothscroll from 'smoothscroll-polyfill';
import { hamburgerAnimation } from "./animations/hamburgerAnimation";

renderRepeatableHtml();
getData();
headerButtonHoverAnimate();
navListeners();
smoothscroll.polyfill();
hamburgerAnimation();



