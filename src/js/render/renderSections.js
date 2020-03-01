export default function renderSections(){
    const parentEl = document.querySelector('main');
    
    function renderSectionWithDividers(){
        for(let i=0; i<6; i++){
            const newSection = document.createElement('section');
            const currentDividerDown = document.querySelector(`[data-dividerDown-index="${i}"]`)

            newSection.classList.add('with__dividers');
            parentEl.insertBefore(newSection, currentDividerDown);
        }
    }

    function renderSectionWithoutDividers(){
        const allDividerUp = document.querySelectorAll(`[data-dividerUp-index]`)
        allDividerUp.forEach( (el,i) => { 
            if(i!==0){
                const newSection = document.createElement('section');
                parentEl.insertBefore(newSection, el);
            }
        })
    }

    function addYearAttributeToSections(){
        const allSections = document.querySelectorAll('section');
        allSections.forEach( (section, i) => {
            section.setAttribute('data-year', `${1990+i}`)
            section.setAttribute('id', `${1990+i}`)
        })
    }
   
    renderSectionWithDividers();
    renderSectionWithoutDividers();
    addYearAttributeToSections();
}

 