let musics = [
    {
        path: "musics/good days.mp3",
        cover: "img/playlist_albums/good days.jpg",
        name: "good days",
        artisit: "Keshi",
    },
    {
        path: "musics/Jungle.mp3",
        cover: "img/playlist_albums/jungle.jpg",
        name: "Jungle",
        artisit: "Drake",
    },
    {
        path: "musics/Like That.mp3",
        cover: "img/playlist_albums/like that.jpg",
        name: "Like That",
        artisit: "Keshi",
    },
    {
        path: "musics/Lonely (with benny blanco).mp3",
        cover: "img/playlist_albums/lonely.jpg",
        name: "Lonely (with benny blanco)",
        artisit: "Justin Bieber, benny blanco",
    },
    {
        path: "musics/Open Arms (feat. Travis Scott).mp3",
        cover: "img/playlist_albums/open arms.jpg",
        name: "Open Arms (feat. Travis Scott)",
        artisit: "SZA, Travis Scott",
    },
    {
        path: "musics/White Ferrari.mp3",
        cover: "img/playlist_albums/white ferrari.jpg",
        name: "White Ferrari",
        artisit: "Frank Ocean",
    }
    
];

const path = document.querySelector(".playlist_path");
const album = document.querySelector(".playlist_album_cover");
const playlistName = document.querySelector(".playlist_name");
const artisit = document.querySelector(".playlist_artisit");
const back = document.querySelector(".playlist_btn_prev");
const play = document.querySelector(".playlist_btn_play");
const playIcon = document.querySelector("#play");
const forw = document.querySelector(".playlist_btn_next");
let counter = 0;

function changeMusic(){
    path.src = musics[counter].path;
    album.src = musics[counter].cover;
    playlistName.innerHTML = musics[counter].name;
    artisit.innerHTML = musics[counter].artisit;
    musicPlay();
}
function clickPause(event){
    event.preventDefault();
    playIcon.classList.toggle("fa-play");
    playIcon.classList.toggle("fa-pause");
    musicPlay();
}
function musicPlay(){
    if(playIcon.className.includes("fa-pause")){
        path.play();
        album.classList.add("playlist_play-animation");
    }else{
        path.pause();
        album.classList.remove("playlist_play-animation");
    }
}
function clickForw(event){
    event.preventDefault();
    if(counter > musics.length - 2){
        counter = 0;
    }else{
        counter++;
    }
    changeMusic();
}
function clickBack(event){
    event.preventDefault();
    if(counter <= 0){
        counter = musics.length - 1;
    }else{
        counter--;
    }
    changeMusic();
}
back.addEventListener("click", clickBack);
play.addEventListener("click", clickPause);
forw.addEventListener("click", clickForw);