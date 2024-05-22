console.log("hi"); //// currently commenting
// create 16 divs by default
// function createDivs(size = 16) {
//   const container = document.querySelector(".container");
//   const canvasRow = document.createElement("div");
//   // const row = document.createElement("div");
//   for (let i = 0; i < size; i++) {
//     const row = document.createElement("div");
//     row.className = "canvas-row";
//     container.appendChild(row);
//   }
//   const allRows = [...document.querySelectorAll(".canvas-row")];
//   allRows.forEach((item) => {
//     for (let i = 0; i < size; i++) {
//       const div = document.createElement("div");
//       div.className = "canvas";
//       div.style.width = (window.innerWidth * 2) / 3 / size + "px";
//       div.style.height = (window.innerHeight * 2) / 3 / size + "px";
//       item.appendChild(div);
//     }
//   });

//   // console.log(canvasRow);

//   // for (let j = 0; j < size; j++) {
//   //   // const canvasRow = document.createElement("div");
//   //   canvasRow.className = "canvas-row";
//   //   container.appendChild(canvasRow);
//   // }
// }

function createDivs(size = 16) {
  const container = document.querySelector(".container");
  container.innerHTML = ""; // Clear existing content

  // Calculate width and height of each div based on container size and number of divs
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const divWidth = containerWidth / size;
  const divHeight = containerHeight / size;

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");

    // console.log(COLORS[tileColor]);
    row.className = "canvas-row";
    row.style.height = divHeight + "px"; // Set row height
    for (let j = 0; j < size; j++) {
      // Generate random RGB colors
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);

      const div = document.createElement("div");
      div.className = "canvas";

      //set tile color
      div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      console.log(div.style.backgroundColor);
      div.style.width = divWidth + "px"; // Set div width
      div.style.height = divHeight + "px"; // Set div height
      row.appendChild(div);
    }
    container.appendChild(row);
  }
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
      let currentColor = getComputedStyle(item).backgroundColor;
      let newColor = darkenTile(currentColor);
      item.style.backgroundColor = newColor;
      // item.style.backgroundColor = "grey";
      // let computedStyle = window.getComputedStyle(item);
      // let colorString = computedStyle.backgroundColor;
      // console.log(colorString);
      // if (tileBgColor) item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  });
}

function darkenTile(color) {
  //This extracts the rgb values from the color
  let colorValues = color.match(/\d+/g).map(Number);

  //this darkens each rgb by 10%
  let darkenedValues = colorValues.map((value) => {
    return Math.max(0, value - Math.round(value * (10 / 100)));
  });

  return `rgb(${darkenedValues.join(",")})`;
}

createDivs();
canvasHover();
createCanvas();
