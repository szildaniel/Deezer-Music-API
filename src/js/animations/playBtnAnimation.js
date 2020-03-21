export function toggleHoverStyles(i){
    const currentBtn = document.querySelector(`.play${i}`);
    const currentSvg = document.querySelector(`.svg${i}`);

    currentBtn.classList.toggle('hovered');
    currentSvg.classList.toggle('grayscaled');
}
    


