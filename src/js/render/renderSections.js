export default function renderSections(fragment){
    
    const parentEl = fragment.querySelector('div');
    
    function renderSectionWithDividers(){
        for(let i=0; i<6; i++){
            const newSection = document.createElement('section');
            const currentDividerDown = fragment.querySelector(`[data-dividerDown-index="${i}"]`)

            newSection.classList.add('with__dividers');
            parentEl.insertBefore(newSection, currentDividerDown);
        }
    }

    function renderSectionWithoutDividers(fragment){
        const allDividerUp = fragment.querySelectorAll(`[data-dividerUp-index]`)
        allDividerUp.forEach( (el,i) => { 
            if(i!==0){
                const newSection = document.createElement('section');
                parentEl.insertBefore(newSection, el);
            }
        })
    }

    function addYearAttributeToSections(){
        const allSections = fragment.querySelectorAll('section');
        allSections.forEach( (section, i) => {
            section.setAttribute('data-year', `${1990+i}`)
            section.setAttribute('id', `${1990+i}`)
        })
    }
   
    renderSectionWithDividers();
    renderSectionWithoutDividers(fragment);
    addYearAttributeToSections();
    
    return fragment;
}

 