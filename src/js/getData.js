async function reduceData(fetchedData) {

  const fetchedTracks = fetchedData.tracks.data;
  const arrPromises = fetchedTracks.map(async song => {
    
    const id = await song.id;
    const artist = await song.artist.name;
    const title = await song.title_short;
    const cover = await song.album.cover;

    const neededData = { id, artist, title, cover };
    return neededData;
  });

  const reducedData = await Promise.all(arrPromises);
  myData = await reducedData;
  return reducedData;
}

export async function fetchData() {
  let response = await fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/playlist/6855206804",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "610f368d39msh50b77c7d51240b9p154254jsndad7a4a4048e"
      }
    }
  );

  let fetchedData = await response.json();
  return reduceData(fetchedData);
}

export let myData;


