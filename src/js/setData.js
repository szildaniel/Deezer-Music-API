import { fetchData } from "./getData";

let songIndex = 0;

export function setData(){
    fetchData().then( data => data.forEach( (song, i)  =>
        { 
            setSongIndex(i);
            const { title, artist, cover, link } = song;

            const currentHeader = document.querySelector(`.song__title${i}`);
            const currentImage = document.querySelector(`.cover${i}`);
            const currentLink = document.querySelector(`.link${i}`)

            currentHeader.innerHTML = `${songIndex+1}. ${artist} - ${title}`;
            currentImage.setAttribute('src', cover);
            currentImage.setAttribute('alt', title);
            currentLink.setAttribute('href', link);

        }))
}

function setSongIndex(index){
    songIndex++;
    if(index%10 === 0){
        songIndex = 0;
    }
}