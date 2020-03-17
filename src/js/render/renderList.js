const renderElementsInsideLi = (fragment) => {
  const allLi = fragment.querySelectorAll('ol > li');

    allLi.forEach( (li, i) => {
        const liElements = `
                <div class="song__container">
                    <img class="cover${i}" src="" alt="album-cover">
                    <h3 class="song__title song__title${i}">Loading data ... </h3>
                    <div class="deezer deezer${i}" >
                    <span class="song__playlist song__playlist${i}" data-index="${i}"></span>
                    <span class="song__playlist__info" data-index="${i}">Add to playlist</span>
                        <a href="" class="deezer__link link${i}"><i class="fa fa-play play${i}" data-index="${i}"></i>
                        <svg id="svg2" class="svg${i}" data-index="${i}" 
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.9 24.5" width="100" height="52">
                                <style> .st0 {fill: #b1e3fa} .st1 {fill: #f7bacf} .st2 {fill: #e7ee9f} .st3 {fill: #feea3a}
                                 .st4 {fill: #fe9d7f} .st5 {fill: #4ec2f6} .st6 {fill: #ccdb38} .st7 {fill: #fe3f80} .st8 {fill: #fe3d02}
                                </style>
                                <path id="path59" class="st0" d="M38.3 13.9v-1h8.6v2h-8.6v-1zm0-3.2v-1h8.6v2h-8.6v-1zm0-3.2v-1h8.6v2h-8.6v-1zm0-3.3v-1h8.6v2.1h-8.6V4.2zm0-3.1V0h8.6v2.2h-8.6V1.1z" />
                                <path id="path57" class="st1" d="M19.1 13.9v-1h8.6v2h-8.6v-1zm0-3.2v-1h8.6v2h-8.6v-1zm0-3.2v-1h8.6v2h-8.6v-1zm0-3.3v-1h8.6v2.1h-8.6V4.2z" />
                                <path id="path55" class="st2" d="M28.7 13.9v-1h8.6v2h-8.6v-1zm0-3.2v-1h8.6v2h-8.6v-1z" />
                                <path id="path53" class="st3" d="M9.6 23.5v-1H18v2H9.6v-1zm0-3.3v-1H18v2H9.6v-1zm0-3.2v-1H18v2H9.6v-1z" />
                                <path id="path51" class="st4" d="M0 13.9v-1h8.4v2H0v-1zm0-3.2v-1h8.4v2H0v-1z" />
                                <path id="path49" class="st5" d="M38.4 23.5v-1h8.4v2h-8.4v-1zm0-3.3v-1h8.4v2h-8.4v-1zm0-3.2v-1h8.4v2h-8.4v-1z" />
                                <path id="path47" class="st6" d="M28.8 23.5v-1h8.4v2h-8.4v-1zm0-3.3v-1h8.4v2h-8.4v-1zm0-3.2v-1h8.4v2h-8.4v-1z" />
                                <path id="path45" class="st7" d="M19.2 23.5v-1h8.4v2h-8.4v-1zm0-3.3v-1h8.4v2h-8.4v-1zm0-3.2v-1h8.4v2h-8.4v-1z" />
                                <path id="path43" class="st8" d="M0 23.5v-1h8.4v2H0v-1zm0-3.3v-1h8.4v2H0v-1zM0 17v-1h8.4v2H0v-1z" />
                            </svg>
                        </a>
                    </div>
                </div>`

        li.innerHTML = liElements;
    })

}

const renderLi = (parentEl) => {
    for(let i=0; i<10; i++){
        const newLi = document.createElement('li');
        parentEl.appendChild(newLi);
    }
}


export default function renderList(fragment){
    const allSections = fragment.querySelectorAll('section');
    
    allSections.forEach( (section, i) => {
        const newOl = document.createElement('ol');
        const year = 1990+i;
    
        newOl.classList.add('songs__ol', `s${year}`);
        section.appendChild(newOl);

        renderLi(newOl);
        renderElementsInsideLi(fragment);

    })
    return fragment;
}
