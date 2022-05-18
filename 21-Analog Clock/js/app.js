const audios = [
  {
    name: "clap",
    id: "KeyA",
    src: "./sounds/clap.wav",
  },
  {
    name: "hihat",
    id: "KeyS",
    src: "./sounds/hihat.wav",
  },
  {
    name: "kick",
    id: "KeyD",
    src: "./sounds/kick.wav",
  },
  {
    name: "openhat",
    id: "KeyF",
    src: "./sounds/openhat.wav",
  },
  {
    name: "boom",
    id: "KeyG",
    src: "./sounds/boom.wav",
  },
  {
    name: "ride",
    id: "KeyH",
    src: "./sounds/ride.wav",
  },
  {
    name: "snare",
    id: "KeyJ",
    src: "./sounds/snare.wav",
  },
  {
    name: "tom",
    id: "KeyK",
    src: "./sounds/tom.wav",
  },
  {
    name: "tink",
    id: "KeyL",
    src: "./sounds/tink.wav",
  },
];
const keys = document.querySelectorAll(".key");

keys.forEach(function (key) {
  key.addEventListener("click", function (e) {
    key.classList.add("key-active");
    const target = e.currentTarget;
    const keyId = target.dataset.key;
    const song = audios.find(function (item) {
      if (item.id === keyId) {
        return item;
      }
    });
    let audio = new Audio(`${song.src}`);
    audio.play();
    setTimeout(function () {
      target.classList.remove("key-active");
    }, 200);
  });
});
window.addEventListener("keypress", function (e) {
  keys.forEach(function (key) {
    if (key.dataset.key === e.code) {
      key.classList.add("key-active");
      const song = audios.find(function (item) {
        if (item.id === e.code) {
          return item;
        }
      });
      let audio = new Audio(`${song.src}`);
      audio.play();
      setTimeout(function () {
        key.classList.remove("key-active");
      }, 200);
    }
  });
});
