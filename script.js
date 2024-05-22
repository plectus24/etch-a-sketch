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
