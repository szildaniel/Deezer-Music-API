export function setCurrentClassToNavLinks(){
    const allNavLinks = document.querySelectorAll('.nav__li');
    let scrolledFromTop = window.scrollY;
    
    allNavLinks.forEach( (link, i) => {
        const currentYear = 1990+i;
        const currentSection = document.querySelector(`[data-year='${currentYear}']`);
        
        if(
            currentSection.offsetTop <= scrolledFromTop + 10 &&
            currentSection.offsetTop + currentSection.offsetHeight > scrolledFromTop
        ){
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
   
    })
    
}

window.addEventListener('scroll', setCurrentClassToNavLinks, 250);