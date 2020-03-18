import { hideResultContainer, showDefaultSongs } from './searchCore';

export function wrongSearch(resultSection, searchedText){
    return resultSection.innerHTML = `<div class="result__div">
                                        <h3>The given phrase <em>"${searchedText}"</em> is not found. </h3>
                                        <p>1. Please check spelling of your phrase.</p>
                                        <p>2. Try to use another artist name or title.</p>
                                        <button class="search__again">Try again</button>
                                    </div>`;
}

export function searchAgain(input){
    const btn = document.querySelector('.search__again');
    const resultSection = document.querySelector('.result__section');
    const defaultSongcContainer = document.querySelector('.container');

    btn.addEventListener('click', () => {
        input.focus();
        input.value = '';
        hideResultContainer(resultSection);
        resultSection.addEventListener('transitionend', () => {
            showDefaultSongs(defaultSongcContainer);
          });
    })
}