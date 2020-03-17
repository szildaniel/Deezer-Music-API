import { addListenerToXMark } from './listenForPlay';

export function addTrackToPlaylist(id, songName, hideInfo, showInfo){
    const playerInfo = document.querySelector('.player__info');

    DZ.player.addToQueue([id]);
    showInfo();
    playerInfo.innerHTML = `<span>&#x2715;</span>You added to playlist <span class="title__info">${songName}</span>`;
    addListenerToXMark();
    setTimeout( hideInfo, 3500);
}