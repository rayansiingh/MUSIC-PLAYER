var arr = [
  {
    songName: "Chashni",
    url: "./songs/Chashni.m4a",
    img: "./images/Chashni.jpg",
    duration: "4:26",
  },
  {
    songName: "Janiye",
    url: "./songs/Janiye.m4a",
    img: "./images/Janiye.jpg",
    duration: "3:43",
  },
  {
    songName: "Daylight",
    url: "./songs/Daylight.m4a",
    img: "./images/Daylight.jpeg",
    duration: "3:32",
  },
  {
    songName: "Formula",
    url: "./songs/formula.m4a",
    img: "./images/Formula.jpeg",
    duration: "1:31",
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

var audio = new Audio();

var currentSong = 0;

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
  albumCover.style.backgroundImage = `url(${arr[selectedSong].img})`;
}

mainFunction();

allSongs.addEventListener("click", function (details) {
  selectedSong.src = details.target.id;
  mainFunction();
  audio.play();
});
