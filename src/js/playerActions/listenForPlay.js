import { fetchData } from '../getData';
import { initPlayer } from './initPlayer';
import { isPlaying, isLoaded } from './playerHelpers';
import { addTrackToPlaylist } from './addTrackToPlaylist';


const playerInfo = document.querySelector('.player__info');


export async function listenForPlay(){
    const container = document.querySelector('.container');
    fetchData().then( songsArr => playSong(songsArr, container))
}

export function playSong(songsArr, container){
    
 
    container.addEventListener('click', function(e){
        e.preventDefault();

        const addPlaylistElement = e.target.classList.contains('song__playlist');
        const playSongElement = e.target.classList.contains('fa-play');

        if(playSongElement){
            const currentSongId = e.target.dataset.id
            

            if (!isLoaded()){
                initPlayer();
                DZ.ready(function(){
                    DZ.player.playTracks([currentSongId], false);
                    addListenerToXMark();
                    isPlaying ? showPlayerInfo() : hidePlayerInfo();
                });
            }   
            else {
                DZ.player.playTracks([currentSongId]);
                isPlaying ? hidePlayerInfo() : showPlayerInfo();
            } 

        }
        else if(addPlaylistElement){
            const currentSongId = e.target.dataset.id;
            const currentSongIndex = songsArr.findIndex( el => el.id === parseInt(currentSongId));
            
            const { title, artist, id } = songsArr[currentSongIndex];
            const name = `${artist} - ${title}`;

            
            isLoaded() ? addTrackToPlaylist(id, name, hidePlayerInfo, showPlayerInfo) : ''
        }
        else return;
    })
};


export function addListenerToXMark(){
    const xMark = document.querySelector('.player__info span');
    
    xMark.addEventListener('click', hidePlayerInfo);
}

function removeListenerToXMark(){
    const xMark = document.querySelector('.player__info span');
    
    xMark.removeEventListener('click', hidePlayerInfo);
}

export function hidePlayerInfo(){
    playerInfo.classList.remove('show');
    removeListenerToXMark();
}

export function showPlayerInfo(){
    playerInfo.classList.add('show');
}

