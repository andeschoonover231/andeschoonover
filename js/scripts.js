console.log("Okay!");

const colorScheme = ["color0", "color1", "color2", "color3"];

let numRand;

numRand = Math.floor(Math.random() * colorScheme.length);

let pageBackground = document.querySelector("body");

pageBackground.className = colorScheme[numRand];

const gallery = document.getElementById("portfolio");

lightGallery(gallery, {
  selector: "a"
});
