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
    songName: "Mount Everest",
    url: "./songs/Mount_Everest.m4a",
    img: "./images/Mount_Everest.jpeg",
    duration: "2:37",
  },
  {
    songName: "Soni De Nakhre",
    url: "./songs/Soni_De_Nakhre.m4a",
    img: "./images/Soni_De_Nakhre.jpg",
    duration: "4:21",
  },
  {
    songName: "Uff Teri Adda",
    url: "./songs/Uff_Teri_Adda.m4a",
    img: "./images/Uff_Teri_Adda.jpg",
    duration: "5:04",
  },
];

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

// console.log(clutter);

document.querySelector(".all-songs").innerHTML = clutter;
