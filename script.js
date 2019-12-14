const tiles = [
  {
    artist: "Mars Volta",
    album: "Noctourniquet",
    bgColor: "#dedede",
    textColor: "#14375A",
  },
  {
    artist: "Mount Kimbie",
    album: "Cold Spring Fault Less Youth",

    bgColor: "#99B239",
    textColor: "#F6F6F6",
  },
  {
    artist: "Jon Hopkins",
    album: "Remixes",
    bgColor: "#3648d0",
    textColor: "#D4D6D9",
  },
  {
    artist: "Four Tet",
    album: "Beautiful Rewind",
    bgColor: "#bdc6c9",
    textColor: "#B23939",
  },
];

const createCards = () => {
  console.table(tiles);
  Object.values(tiles).forEach(function(item) {
    const main = document.querySelector(".main-container");
    const tileContainer = document.createElement("div");
    const tile = document.createElement("div");
    const coverArt = document.createElement("div");
    const coverText = document.createElement("div");
    const tileH1 = document.createElement("h1");
    const tileH2 = document.createElement("h2");
    const close = document.createElement("div");
    let depth = 0;

    tileContainer.classList.add("tile-container");
    tile.classList.add("cover-tile");
    tile.style.backgroundColor = item.bgColor;

    coverArt.classList.add("cover-art");
    coverArt.style.backgroundColor = "#262C2E";
    coverText.classList.add("cover-text");

    tileH1.innerHTML = item.artist;
    tileH1.style.color = item.textColor;

    tileH2.innerHTML = item.album;
    tileH2.style.color = item.textColor;

    coverText.appendChild(tileH1);
    coverText.appendChild(tileH2);
    tile.appendChild(coverArt);
    tile.appendChild(coverText);
    tileContainer.appendChild(tile);
    main.appendChild(tileContainer);

    coverArt.addEventListener("click", () => {
      tile.classList.add("tile-full-size");
      tile.style.zIndex = depth;
      depth = depth + 1;
      close.classList.add("cover-close");

      close.innerHTML = "Close";
      close.style.display = "block";
      close.style.color = item.textColor;
      coverArt.style.height = coverArt.style.width;
      console.log(depth);
      tile.appendChild(close);
    });

    close.addEventListener("click", () => {
      tile.classList.remove("tile-full-size");
      close.style.display = "none";
    });
  });
};
