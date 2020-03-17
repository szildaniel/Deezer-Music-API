export function insertPlayInfoSpan(){
    const firstSvg = document.querySelector('.svg0');

    const newSpan = document.createElement('span');
    newSpan.classList.add('play__info');
    newSpan.textContent = 'Click Play';
    const parentEl = document.querySelector('.link0');
    parentEl.insertBefore(newSpan, firstSvg);
    const infoSpan = document.querySelector('.play__info');

    infoSpan.classList.toggle('show');
    const hideInfo = setTimeout( () => {
        infoSpan.classList.toggle('show');
    }, 12000)
}