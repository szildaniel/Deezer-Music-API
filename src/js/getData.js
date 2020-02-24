export function getData(){
    DZ.init({
        appId: "384884",
        channelUrl: "https://szildaniel.github.io/music-API/"
      });
    
      DZ.api("/playlist/6855206804", function(response) {
        
        const fetchedData = response.tracks.data;
         let neededData = fetchedData.map( (song, i) => {
    
          const id = song.id;
          const artist = song.artist.name;
          const title = song.title_short;
          const link = song.link;
          const img = song.album.cover_small;
          const pos = i+1;
          
           const necc = {id, artist, title, link, img } 
         return necc;
        })
        console.log(neededData)
       
      });
}