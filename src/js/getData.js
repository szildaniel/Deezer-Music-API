const myData = {
  1990: [],
  1991: [],
  1992: [],
  1993: [],
  1994: [], 
  1995: [], 
  1996: [], 
  1997: [], 
  1998: [],
  1999: [],
  2000: [], 
}
let yearIndex = 1990;

function initDeezerApi(){
  DZ.init({
    appId: "384884",
    channelUrl: "https://szildaniel.github.io/music-API/"
  });
}

function reduceData(data){
    data.map( (song, i) => {
      
    const id = song.id;
    const artist = song.artist.name;
    const title = song.title_short;
    const link = song.link;
    const img = song.album.cover_small;
    
    const necessary = {id, artist, title, link, img } 

    if(i%10 === 0){
          yearIndex++;
    }
    pushData(yearIndex-1,necessary);
    // myData[yearIndex-1].push(necessary);
    })
}
function pushData(index, data){
  myData[index].push(data);

}
function fetchData(){
  DZ.api("/playlist/6855206804", function getDataFromPlaylist(response) {
    const fetchedData = response.tracks.data;

      reduceData(fetchedData);
    });
    
}
export function getData(){
    initDeezerApi();
    fetchData();
}

export { myData };



