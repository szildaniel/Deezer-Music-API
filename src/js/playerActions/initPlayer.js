export function initPlayer() {
  let device = 'desktop';
  
  if(window.matchMedia("only screen and (max-width: 760px)").matches){
    device = 'mobile';
  }
  else if(window.matchMedia("only screen and (min-device-width: 768px) and (max-device-width: 1024px)").matches){
    device = 'tablet'
  }
    DZ.init({
      appId: "384884",
      channelUrl: "https://szildaniel.github.io/music-API/",
      player : {
        container : 'player',
        playlist : true,
        format: device === 'desktop' ? 'square' : 'classic',
        width:  device === 'desktop' ?  200 : window.innerWidth,
        height: device === 'desktop' ?  200 : 90 ,
        autoplay: false,
        layout: device === 'desktop' ? 'dark' : 'light',
        }
    });
  }