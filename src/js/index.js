import '../styles/style.scss';

import renderRepeatableHtml from "./render/render";
import { getData, myData } from "./getData";
import { toggleNav } from "./helpers/nav";
import smoothscroll from 'smoothscroll-polyfill';
import { hamburgerAnimation } from "./animations/hamburgerAnimation";
import { enjoyBtnHoverAnimation } from "./animations/enjoyBtnAnimations";
import { setResponsiveNavHeight } from './helpers/setResponsiveNavHeight'
import { setCurrentClassToNavLinks } from './helpers/setCurrentClassToNavLinks';

renderRepeatableHtml();
getData();
enjoyBtnHoverAnimation();
toggleNav();
smoothscroll.polyfill();
hamburgerAnimation();
setResponsiveNavHeight();
setCurrentClassToNavLinks();

// console.log(myData);
