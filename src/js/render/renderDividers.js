
export default function renderDividers(fragment) {
    const div = document.createElement('div');

    const sectionDividerUp = `<svg id="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0 100 C 20 0 50 0 100 100 Z" />
                              </svg>`;

    const sectionDividerDown = `<svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                                     <path d="M0 0 C 50 100 80 100 100 0 Z" />
                                </svg>`;

    for(let i=0; i<=5; i++){
      div.innerHTML += `${sectionDividerUp}${sectionDividerDown}`;
    }
    fragment.appendChild(div);
    div.classList.add('container');
    setDataIndex(fragment);
    return fragment;
  }

  function setDataIndex(fragment){
    const allDividersDown = fragment.querySelectorAll('#curveDownColor');
    const allDividersUp = fragment.querySelectorAll('#curveUpColor');
  
    allDividersUp.forEach( (divider, i) => {
      divider.setAttribute('data-dividerUp-index', i);
    })
  
    allDividersDown.forEach( (divider, i) => {
      divider.setAttribute('data-dividerDown-index', i);
    })
  
  }