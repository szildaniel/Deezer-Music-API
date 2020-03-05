import debounce from './debounce';

function setRootVariableVh(){
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
 
const debouncedResizeFn = debounce( setRootVariableVh, 250);

export function setResponsiveNavHeight(){
    window.addEventListener('resize', debouncedResizeFn);
}