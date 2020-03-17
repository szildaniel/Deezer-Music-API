import { fetchData } from "./getData";

let songIndex = 0;

export function setData(){
    fetchData().then( data => data.forEach( (song, i)  =>
        { 
            setSongIndex(i);
            const { title, artist, cover, id } = song;

            const currentHeader = document.querySelector(`.song__title${i}`);
            const currentImage = document.querySelector(`.cover${i}`);
            const currentPlayIcon = document.querySelector(`.play${i}`)
            const currentAddToPlaylistIcon = document.querySelector(`.song__playlist${i}`);

            currentHeader.innerHTML = `${songIndex+1}. ${artist} - ${title}`;
            currentImage.setAttribute('src', cover);
            currentImage.setAttribute('alt', title);
            currentPlayIcon.setAttribute('data-id', id);
            currentAddToPlaylistIcon.setAttribute('data-id', id);
            
        }))
}

function setSongIndex(index){
    songIndex++;
    if(index%10 === 0){
        songIndex = 0;
    }
}