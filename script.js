console.log("Welcome to Spotify");

// initialize the varibles
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songs = [
  {
    songname: "Dil Se",
    filePath: "./songs/1.mp3",
    coverpath: "covers/1.jpg",
  },
  {
    songname: "Tum Hi Ho",
    filePath: "./songs/2.mp3",
    coverpath: "covers/2.jpg",
  },
  {
    songname: "Raabta",
    filePath: "./songs/3.mp3",
    coverpath: "covers/3.jpg",
  },
  {
    songname: "Kesariya",
    filePath: "./songs/4.mp3",
    coverpath: "covers/4.jpg",
  },
  {
    songname: "Apna Bana Le",
    filePath: "./songs/5.mp3",
    coverpath: "covers/5.jpg",
  },
  {
    songname: "Khairiyat",
    filePath: "./songs/6.mp3",
    coverpath: "covers/6.jpg",
  },
  {
    songname: "Agar Tum Saath Ho",
    filePath: "./songs/7.mp3",
    coverpath: "covers/7.jpg",
  },
  {
    songname: "Shayad",
    filePath: "./songs/8.mp3",
    coverpath: "covers/8.jpg",
  },
  {
    songname: "Jeene Laga Hoon",
    filePath: "./songs/9.mp3",
    coverpath: "covers/9.jpg",
  },
  {
    songname: "Tera Ban Jaunga",
    filePath: "./songs/10.mp3",
    coverpath: "covers/10.jpg",
  },
];

// audioElement.play();

// Handle Play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    gif.style.opacity = 1;
    // masterPlay.classList.remove("fa-solid fa-play"); // not work because it has two class
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  } else {
    audioElement.pause();
    gif.style.opacity = 0;
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //   console.log("timeUpdate");
  //   Update seekbar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  //   console.log(progress);
  myProgressbar.value = progress;
});

myProgressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressbar.value * audioElement.duration) / 100;
});
