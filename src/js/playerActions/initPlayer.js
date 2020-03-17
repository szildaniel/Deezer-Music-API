export function initPlayer() {
  let isMobile = false;
  if(window.matchMedia("only screen and (max-width: 760px)").matches){
    isMobile = true;
  }
    DZ.init({
      appId: "384884",
      channelUrl: "https://szildaniel.github.io/music-API/",
      player : {
        container : 'player',
        playlist : true,
        format: isMobile ? 'classic': 'square',
        width:  isMobile ? window.innerWidth : 200,
        height: isMobile ? 90 : 200,
        autoplay: false,
        layout: isMobile ? 'light' : 'dark',
        }
    });
  }