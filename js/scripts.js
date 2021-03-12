/*console.log("Okay!");

const backgrounds = ["bg0", "bg1", "bg2"];

let numRand;

numRand = Math.floor(Math.random() * backgrounds.length);

let pageBackground = document.querySelector("body");

pageBackground.className = backgrounds[numRand];
*/
const gallery = document.getElementById("gallery");

lightGallery(gallery, {
  selector: "a"
});
