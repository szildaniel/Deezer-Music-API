export function showPlayInfo(i){
    const parentDontHaveInfo = document.querySelector(`.link${i} .play__info`) === null;
    
    if(parentDontHaveInfo){
        insertInfo(i);
        const infoSpan = document.querySelector(`.info${i}`);
        infoSpan.classList.toggle('show')
    }
    else{
        const infoSpan = document.querySelector(`.info${i}`);
        infoSpan.classList.toggle('show');

    }
}

function insertInfo(i){
    const currentSvg = document.querySelector(`.svg${i}`);
    const parentEl = document.querySelector(`.link${i}`);
    const newSpan = document.createElement('span');

    newSpan.classList.add(`play__info`, `info${i}`);
    newSpan.textContent = 'Click Play';
    parentEl.insertBefore(newSpan, currentSvg);
}