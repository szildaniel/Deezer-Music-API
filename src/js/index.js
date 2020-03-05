import '../styles/style.scss';

import renderRepeatableHtml from "./render/render";
import { getData, data } from "./getData";
import { toggleNav } from "./helpers/nav";
import smoothscroll from 'smoothscroll-polyfill';
import { hamburgerAnimation } from "./animations/hamburgerAnimation";
import { enjoyBtnHoverAnimation } from "./animations/enjoyBtnAnimations";
import { setResponsiveNavHeight } from './helpers/setResponsiveNavHeight'

renderRepeatableHtml();
getData();
enjoyBtnHoverAnimation();
toggleNav();
smoothscroll.polyfill();
hamburgerAnimation();
setResponsiveNavHeight();



