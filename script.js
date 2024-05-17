console.log("hi");
// create 16 divs by default
function createDivs(size = 16) {
  const container = document.querySelector(".container");
  for (let i = 0; i < size; i++) {
    const div = document.createElement("div");
    div.className = "canvas";
    container.appendChild(div);
  }
}
//clear canvas
function clearCanvas() {
  const tile = [...document.querySelectorAll(".canvas")];
  tile.forEach((item) => {
    item.remove();
  });
}

//create canvas
function createCanvas() {
  const canvasCreate = document.querySelector(".create-canvas");
  canvasCreate.addEventListener("click", (e) => {
    let curSize = [...document.querySelectorAll(".canvas")].length;
    let size = -1;
    while (size < 0 || size > 100) {
      // Don't change anything if promt cancelled
      size = prompt("Enter a size");
      if (size === null) {
        //size = document.querySelectorAll(".canvas");
        size = curSize;
        console.log(size);
      }
      console.log("hjkiwebs");
    }
    clearCanvas();
    createDivs(size);
    canvasHover();
  });
}

// draw function
function canvasHover() {
  const tile = [...document.querySelectorAll(".canvas")];

  // leave trail on hover
  tile.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      item.style.backgroundColor = "grey";
    });
  });
}

createDivs();
canvasHover();
createCanvas();
