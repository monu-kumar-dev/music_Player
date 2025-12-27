console.log("Welcome to Spotify");

// initialize the varibles
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = document.getElementsByClassName("songItem");
let songItemPlay = document.getElementsByClassName("songItemPlay");
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");

let songs = [
  {
    songname: "Let Me Love You",
    filePath: "./songs/1.mp3",
    coverpath: "covers/1.jpg",
    timeStamp: "02:43",
  },
  {
    songname: "Tum Hi Ho",
    filePath: "./songs/2.mp3",
    coverpath: "covers/2.jpg",
    timeStamp: "04:22",
  },
  {
    songname: "Raabta",
    filePath: "./songs/3.mp3",
    coverpath: "covers/3.jpg",
    timeStamp: "03:50",
  },
  {
    songname: "Kesariya",
    filePath: "./songs/4.mp3",
    coverpath: "covers/4.jpg",
    timeStamp: "04:28",
  },
  {
    songname: "Apna Bana Le",
    filePath: "./songs/5.mp3",
    coverpath: "covers/5.jpg",
    timeStamp: "03:24",
  },
  {
    songname: "Khairiyat",
    filePath: "./songs/6.mp3",
    coverpath: "covers/6.jpg",
    timeStamp: "04:41",
  },
  {
    songname: "Agar Tum Saath Ho",
    filePath: "./songs/7.mp3",
    coverpath: "covers/7.jpg",
    timeStamp: "05:41",
  },
  {
    songname: "Aaj kl",
    filePath: "./songs/8.mp3",
    coverpath: "covers/8.jpg",
    timeStamp: "04:08",
  },
  {
    songname: "Lollipop",
    filePath: "./songs/9.mp3",
    coverpath: "covers/9.jpg",
    timeStamp: "03:58",
  },
  {
    songname: "Bekhali",
    filePath: "./songs/10.mp3",
    coverpath: "covers/10.jpg",
    timeStamp: "03:56",
  },
];

Array.from(songItems).forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
  element.getElementsByClassName("timeStamp")[0].innerText = songs[i].timeStamp;
});

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

const makeAllPlays = () => {
  Array.from(songItemPlay).forEach((element) => {
    element.classList.add("fa-play");
    element.classList.remove("fa-pause");
  });
};

Array.from(songItemPlay).forEach((element) => {
  element.addEventListener("click", (e) => {
    const clickedIndex = parseInt(e.target.id);

    // SAME SONG → TOGGLE PLAY / PAUSE
    if (songIndex === clickedIndex && !audioElement.paused) {
      audioElement.pause();
      e.target.classList.remove("fa-pause");
      e.target.classList.add("fa-play");
      masterPlay.classList.remove("fa-pause");
      masterPlay.classList.add("fa-play");
      gif.style.opacity = 0;
    }
    //  NEW SONG OR PAUSED SONG
    else {
      makeAllPlays();
      songIndex = clickedIndex;
      audioElement.src = `./songs/${songIndex}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();

      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");

      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
      gif.style.opacity = 1;
      songInfoName.innerText = songs[songIndex - 1].songname;
    }
  });
});

forward.addEventListener("click", (e) => {
  if (songIndex > 10) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }

  audioElement.src = `./songs/${songIndex}.mp3`;
  songInfoName.innerText = songs[songIndex - 1].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  gif.style.opacity = 1;
});

backward.addEventListener("click", (e) => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }

  audioElement.src = `./songs/${songIndex}.mp3`;
  songInfoName.innerText = songs[songIndex - 1].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  gif.style.opacity = 1;
});
