import "../styles/style.scss";

import renderRepeatableHtml from "./render/render";
import { setData } from "./setData";
import { toggleNav } from "./helpers/nav";
import smoothscroll from "smoothscroll-polyfill";
import { hamburgerAnimation } from "./animations/hamburgerAnimation";
import { enjoyBtnHoverAnimation } from "./animations/enjoyBtnAnimations";
import { setResponsiveNavHeight } from "./helpers/setResponsiveNavHeight";
import { setCurrentClassToNavLinks } from "./helpers/setCurrentClassToNavLinks";
import { listenForPlay } from "./playerActions/listenForPlay"
import { onHoverAddInfos } from "./animations/listenForHover";
import { listenForSearch } from "./search/searchCore";

function initApp(){
    renderRepeatableHtml();
    setData();
    enjoyBtnHoverAnimation();
    toggleNav();
    smoothscroll.polyfill();
    hamburgerAnimation();
    setResponsiveNavHeight();
    setCurrentClassToNavLinks();
    listenForPlay();
    onHoverAddInfos();
    listenForSearch();
}

initApp();


