var arr = [
  {
    songName: "Chashni",
    url: "./songs/Chashni.m4a",
    img: "./images/Chashni.jpg",
    duration: "4:26",
  },
  {
    songName: "Daylight",
    url: "./songs/Daylight.m4a",
    img: "./images/Daylight.jpeg",
    duration: "3:32",
  },
  {
    songName: "Formula",
    url: "./songs/Formula.m4a",
    img: "./images/Formula.jpeg",
    duration: "1:13",
  },
  {
    songName: "Janiye",
    url: "./songs/Janiye.m4a",
    img: "./images/Janiye.jpg",
    duration: "3:43",
  },
  {
    songName: "Khayaal",
    url: "./songs/Khayaal.m4a",
    img: "./images/Khayaal.jpg",
    duration: "2:42",
  },
];

var allSongs = document.querySelector(".all-songs");

var albumCover = document.querySelector("#current-song-img");

var backward = document.querySelector("#backward");
var play = document.querySelector("#play");
var forward = document.querySelector("#forward");

var audio = new Audio();

var selectedSong = 0;

function mainFunction() {
  var clutter = "";

  arr.forEach(function (element, index) {
    clutter += `<div class="song-card" id=${index}>
              <div class="part1">
                <img
                  src=${element.img}
                  alt=""
                />
                <h2>${element.songName}</h2>
              </div>
              <h6>${element.duration}</h6>
            </div>`;
  });
  allSongs.innerHTML = clutter;

  audio.src = arr[selectedSong].url;
  albumCover.innerHTML = `<img
                src=${arr[selectedSong].img}
                alt="current song image"
              />`;
}

mainFunction();

allSongs.addEventListener("click", function (details) {
  selectedSong = details.target.id;
  play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
  flag = 1;
  mainFunction();
  audio.play();
});

var flag = 0;
play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    mainFunction();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
    mainFunction();
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    mainFunction();
    audio.play();
  } else {
    forward.style.opacity = 0.3;
  }
});

backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong--;
    mainFunction();
    audio.play();
  } else {
    backward.style.opacity = 0.4;
  }
});
