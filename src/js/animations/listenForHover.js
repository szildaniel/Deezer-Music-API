import { showPlayInfo } from "./playInfo";
import { toggleHoverStyles } from "./playBtnAnimation";

export async function onHoverAddInfos(){
    const container = document.querySelector('.container');

    container.addEventListener('mouseover', (e) => {
        e.preventDefault();

        if(e.target.classList.contains('song__playlist')){
            const elIndex = e.target.dataset.index;
            const el = document.querySelector(`.song__playlist__info[data-index="${elIndex}"]`)
            toggleInfo(el);
        }
        else if(e.target.classList.contains('fa-play')){
            const elIndex = e.target.dataset.index;
            showPlayInfo(elIndex);
            toggleHoverStyles(elIndex);

        }
        else return;
    });

    container.addEventListener('mouseout', (e) => {
        e.preventDefault();
        if(e.target.classList.contains('song__playlist')){
            const elIndex = e.target.dataset.index;
            const el = document.querySelector(`.song__playlist__info[data-index="${elIndex}"]`);
            toggleInfo(el);
        }
        else if(e.target.classList.contains('fa-play')){
            const elIndex = e.target.dataset.index;
            showPlayInfo(elIndex);
            toggleHoverStyles(elIndex);

        }
        else return;
    });
}

function toggleInfo(element){
    element.classList.toggle('show');
}