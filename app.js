const grid = document.querySelector('.grid');
let gridValue = document.querySelector('.grid-size');
let gridSize = document.querySelector('input');
const resetBtn = document.querySelector('.reset');
const applyGridSize = document.querySelector('.apply');
let squareSize = 8;

createGrid(squareSize);

// Create Squared Divs
function createDiv(size) {
  const div = document.createElement('div');
  div.classList.add('box');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

// Creat The Grid and append it to grid
function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
  }
}

function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(squareSize);
}

// Used event delegation to target children of the grid
grid.addEventListener('mouseover', function (e) {
  // Add the "active" class to only divs with a "box" class
  if (e.target.matches('.box')) {
    e.target.classList.add('active');
  }
});

gridSize.addEventListener('input', function (e) {
  squareSize = e.target.value;
  gridValue.textContent = `${squareSize}x${squareSize}`;
});

applyGridSize.addEventListener('click', function () {
  reset();
});

resetBtn.addEventListener('click', reset);
