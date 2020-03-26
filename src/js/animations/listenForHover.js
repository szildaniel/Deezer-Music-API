import { showPlayInfo } from "./playInfo";
import { toggleHoverStyles } from "./playBtnAnimation";

export async function onHoverAddInfos(){
    const container = document.querySelector('.container');

    container.addEventListener('mouseover', toggleInfo);
    container.addEventListener('touchstart', toggleInfo);

    container.addEventListener('mouseout', toggleInfo);
    container.addEventListener('touchmove', toggleInfo);
    container.addEventListener('click', toggleInfo);
} 



function toggleInfo(e){
    if(e.target.classList.contains('song__playlist')){
        const elIndex = e.target.dataset.index;
        const el = document.querySelector(`.song__playlist__info[data-index="${elIndex}"]`);
        el.classList.toggle('show');
    }
    else if(e.target.classList.contains('fa-play')){
        const elIndex = e.target.dataset.index;
        showPlayInfo(elIndex);
        toggleHoverStyles(elIndex);

    }
    else return;
}