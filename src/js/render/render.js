import renderDividers from "./renderDividers";
import renderSections from "./renderSections";
import renderHeaders from "./renderHeaders";
import renderList from "./renderList"


const main = document.querySelector('main');
const fragment = document.createDocumentFragment();


export default function renderRepeatableHtml() {
    renderDividers(fragment);
    renderSections(fragment);
    renderHeaders(fragment);
    renderList(fragment);
    main.appendChild(fragment);
  }


  