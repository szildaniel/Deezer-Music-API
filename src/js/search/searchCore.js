import debounce from '../helpers/debounce';
import { myData } from '../getData';

import {playSong} from '../playerActions/listenForPlay';


const resultSection = document.querySelector('.result__section');
const input = document.getElementById('site-search')

let searchedText = '';
let findedSongs = [];

const getSearchText = e => { 
    const container = document.querySelector('.container');

    resultSection.innerHTML = ''
    searchedText = e.target.value.toLowerCase();
    e.target.value === '' ? showDefaultSongs(container) : getResultOfSearch();
}

function displayResultOnPage(){
    if(findedSongs.length === 0) {
        wrongSearch()
    }
    else createDocumentFragment(findedSongs);
}

async function getResultOfSearch(){
    const container = document.querySelector('.container');
    

    findedSongs = await myData.filter(filterSongs(searchedText)) 
    hideDefaultSongs(container);
    showResultContainer(resultSection);
    displayResultOnPage();
}


const hideDefaultSongs = container => container.style.display = 'none';
const showDefaultSongs = container => container.style.display = 'block';

const showResultContainer = result => result.style.opacity = "1";
const hideResultContainer = result => result.style.opacity = "0";

function createDocumentFragment(result){
    const fragment = document.createDocumentFragment();

    const newDiv = document.createElement('div');
    newDiv.classList.add('.resultt');

    const newH = document.createElement('h3');
    newH.classList.add('section__header');
    newH.innerHTML = `That's list of songs that match to your phrase - <em>"${searchedText}"</em>: `;
    newDiv.appendChild(newH);

    const newOl = document.createElement('ol');
    newOl.classList.add('.songs__ol');
    newDiv.appendChild(newOl);
    
    result.forEach( song => {
        const { id, title, artist, cover } = song;

        const newLi = document.createElement('li');
        newLi.innerHTML = `
            <div class="song__container">
                <img class="cover" src="${cover}" alt="${title}" />
                <h3 class="song__title">${artist} - ${title}</h3>
                <div class="deezer">
                    <span class="song__playlist" data-id="${id}"></span>
                    <span class="song__playlist__info" data-info-id="${id}">Add to playlist</span>
                    <a href="" class="deezer__link"><i class="fa fa-play" data-id="${id}"></i>
                        <svg id="svg2" class="svg" data-id="${id}" 
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
            </div>    
        `
        
        newOl.appendChild(newLi);
    })
    fragment.appendChild(newDiv);
    resultSection.appendChild(fragment);
    playSong(myData, resultSection);
}


function wrongSearch(){
    return resultSection.innerHTML = `<h3>The given phrase -  <b>${searchedText}</b> is not found. </h3>
    <p>Please:</p>
    <ul>
        <li>Check spelling of your phrase. </li>
        <li>Try to use another artist name or title.</li>
    </ul>`;
}

function filterSongs(searchedText){
    return function(song){ 
        return ( song.artist.toLowerCase().includes(searchedText) 
                || song.title.toLowerCase().includes(searchedText))
    };
}


export function listenForSearch(){
    input.addEventListener('input', debouncedGetSearchText);
}

const debouncedGetSearchText = debounce(getSearchText, 450);

