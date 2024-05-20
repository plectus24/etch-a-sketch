console.log("hi");
// create 16 divs by default
function createDivs(size = 16) {
  const container = document.querySelector(".container");
  const canvasRow = document.createElement("div");
  // const row = document.createElement("div");
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.className = "canvas-row";
    container.appendChild(row);
  }
  const allRows = [...document.querySelectorAll(".canvas-row")];
  allRows.forEach((item) => {
    for (let i = 0; i < size; i++) {
      const div = document.createElement("div");
      div.className = "canvas";
      div.style.width = (window.innerWidth * 2) / 3 / size + "px";
      div.style.height = (window.innerHeight * 2) / 3 / size + "px";
      item.appendChild(div);
    }
  });

  // console.log(canvasRow);

  // for (let j = 0; j < size; j++) {
  //   // const canvasRow = document.createElement("div");
  //   canvasRow.className = "canvas-row";
  //   container.appendChild(canvasRow);
  // }
}
//clear canvas
function clearCanvas() {
  const tile = [...document.querySelectorAll(".canvas-row")];
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
    while (size <= 0 || size > 100) {
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
