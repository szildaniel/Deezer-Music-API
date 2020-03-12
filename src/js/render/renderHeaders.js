export default function renderHeaders(fragment){
    const allSections = fragment.querySelectorAll('[data-year]');
    
    allSections.forEach( section => {
        const sectionYear = section.dataset.year;
        const newHeader = document.createElement('h3');
        newHeader.classList.add(`section__header`)
        newHeader.textContent = `Top 10 tracks of year ${sectionYear} by Billboard`

        section.appendChild(newHeader);
    })
    return fragment;
}