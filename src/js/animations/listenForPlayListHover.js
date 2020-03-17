export async function listenForPlayListHover(){
    const container = document.querySelector('.container');

    container.addEventListener('mouseover', (e) => {
        e.preventDefault();

        if(e.target.classList.contains('song__playlist')){
            const elIndex = e.target.dataset.index;
            const el = document.querySelector(`.song__playlist__info[data-index="${elIndex}"]`)
            toggleInfo(el);
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
        else return;
    });
}

function toggleInfo(element){
    element.classList.toggle('show');
}