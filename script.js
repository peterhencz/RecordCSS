const tiles = [
  {
    artist: "Mars Volta",
    album: "Noctourniquet",
    bgColor: "#dedede",
    textColor: "#9a9692",
  },
  {
    artist: "Mount Kimbie",
    album: "Cold Spring Fault Less Youth",
    bgColor: "#3648d0",
    textColor: "#9a9692",
  },
  {
    artist: "Jon Hopkins",
    album: "Remixes",
    bgColor: "#bdc6c9",
    textColor: "#9a9692",
  },
  {
    artist: "Four Tet",
    album: "Beautiful Rewind",
    bgColor: "#acbda8",
    textColor: "#9a9692",
  },
];

const createCards = () => {
  console.table(tiles);
  Object.values(tiles).forEach(function(item) {
    const main = document.querySelector(".main-container");
    const tile = document.createElement("div");
    const coverArt = document.createElement("div");
    const coverText = document.createElement("div");
    const tileH1 = document.createElement("h1");
    const tileH2 = document.createElement("h2");
    const close = document.createElement("div");

    tile.classList.add("cover-tile");
    tile.style.backgroundColor = item.bgColor;

    coverArt.classList.add("cover-art");
    coverArt.style.backgroundColor = "tomato";
    coverText.classList.add("cover-text");

    tileH1.innerHTML = item.artist;
    tileH1.style.color = item.textColor;

    tileH2.innerHTML = item.album;
    tileH2.style.color = item.textColor;

    coverText.appendChild(tileH1);
    coverText.appendChild(tileH2);
    tile.appendChild(coverArt);
    tile.appendChild(coverText);
    main.appendChild(tile);

    coverArt.addEventListener("click", () => {
      tile.classList.add("tile-full-size");
      tile.classList.remove("cover-tile");
      close.classList.add("cover-close");

      close.innerHTML = "Close";
      close.style.display = "block";
      close.style.color = item.textColor;
      coverArt.style.height = coverArt.style.width;
      const tilesToHide = document.querySelectorAll(".cover-tile");

      tilesToHide.forEach(element => {
        element.style.display = "none";
      });

      tile.appendChild(close);
    });

    close.addEventListener("click", () => {
      const tilesToHide = document.querySelectorAll(".cover-tile");
      tilesToHide.forEach(element => {
        element.style.display = "flex";
      });
      tile.classList.remove("tile-full-size");
      tile.classList.add("cover-tile");
      close.style.display = "none";
    });
  });
};
