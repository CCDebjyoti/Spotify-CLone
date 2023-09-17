

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressionBar');
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementsByClassName("masterSongNAme")[0];

let songs = [
    { songName: "505", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", duration: "3.25" },
    { songName: "Fluorescent ", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", duration: "3.15" },
    { songName: "Notion", filePath: "songs/3.mp3", coverPath: "covers/3.jpg", duration: "2.30" },
    { songName: "You", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", duration: "2.17" },
    { songName: "HerosT", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", duration: "3.28" },
    { songName: "Plugwalk", filePath: "songs/6.mp3", coverPath: "covers/6.jpg", duration: "4.27" },
    { songName: "Back It Up", filePath: "songs/7.mp3", coverPath: "covers/7.jpg", duration: "4.33" },
    { songName: "Beat", filePath: "songs/8.mp3", coverPath: "covers/8.jpg", duration: "3.50" },
    { songName: "Woman", filePath: "songs/9.mp3", coverPath: "covers/9.jpg", duration: "3.28" },
    { songName: "True Love", filePath: "songs/10.mp3", coverPath: "covers/10.jpg", duration: "2.33" },



]

songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].setAttribute("src", songs[i].coverPath);
    element.getElementsByClassName("songName")[0].innerHTML = "<b>" + songs[i].songName + "</b>";
    element.getElementsByTagName("span")[2].innerHTML = "<i>" + songs[i].duration + "</i>";

});



Array.from(document.getElementsByClassName("songItemplay")).forEach((element) => {

    element.addEventListener("click", function (e) {

        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = "songs/" + (songIndex + 1) + ".mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        masterSongName.innerHTML = "<i>" + songs[songIndex].songName + "</i>";
        gif.style.opacity = 1;



    })


});


document.getElementById('previous').addEventListener("click", function () {
    var current = document.getElementById(songIndex.toString());
    if (songIndex === 0)
        songIndex = 9;
    else
        songIndex--;
    var previous = document.getElementById(songIndex.toString());

    audioElement.src = "songs/" + (songIndex + 1) + ".mp3";
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    current.classList.remove("fa-circle-pause");
    current.classList.add("fa-circle-play");
    previous.classList.remove("fa-circle-play");
    previous.classList.add("fa-circle-pause");
    masterSongName.innerHTML = "<i>" + songs[songIndex].songName + "</i>";
    gif.style.opacity = 1;




})



document.getElementById('next').addEventListener("click", function () {
    var current = document.getElementById(songIndex.toString());
    if (songIndex === 9)
        songIndex = 0;
    else
        songIndex++;
    var next = document.getElementById(songIndex.toString());

    audioElement.src = "songs/" + (songIndex + 1) + ".mp3";
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    current.classList.remove("fa-circle-pause");
    current.classList.add("fa-circle-play");
    next.classList.remove("fa-circle-play");
    next.classList.add("fa-circle-pause");
    masterSongName.innerHTML = "<i>" + songs[songIndex].songName + "</i>";
    gif.style.opacity = 1;


})



function makeAllPlays() {
    Array.from(document.getElementsByClassName("songItemplay")).forEach((element) => {

        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");


    });

}










masterPlay.addEventListener("click", function () {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;

    }
})


audioElement.addEventListener("timeupdate", function () {

    progess = ((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progess;
})



myProgressBar.addEventListener("change", function () {

    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})