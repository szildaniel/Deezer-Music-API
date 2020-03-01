export default function renderHeaders(){
    const allSections = document.querySelectorAll('[data-year]');
    
    allSections.forEach( section => {
        const sectionYear = section.dataset.year;
        const newHeader = document.createElement('h3');
        newHeader.classList.add(`section__header`)
        newHeader.textContent = `Top 10 tracks of year ${sectionYear} by Billboard`

        section.appendChild(newHeader);
    })
}