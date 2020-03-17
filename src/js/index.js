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
import { listenForPlayListHover } from "./animations/listenForPlayListHover";
import { listenForSearch } from "./search/searchCore";
import { insertPlayInfoSpan } from "./animations/playInfo";

renderRepeatableHtml();
setData();
enjoyBtnHoverAnimation();
toggleNav();
smoothscroll.polyfill();
hamburgerAnimation();
setResponsiveNavHeight();
setCurrentClassToNavLinks();
listenForPlay();
listenForPlayListHover();
listenForSearch();
insertPlayInfoSpan();
