/*
Create a function that takes a grid of $ and - where each ($) represents a mine and each (-) represents a safe spot.
Return an array where each (-) is replaced by a digit indicating the number of immediately adjacent mines.

mineGrid([
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "$", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"]
])

Output ->[
    ["0", "0", "0", "0", "0"],
    ["0", "1", "1", "1", "0"],
    ["0", "1", "$", "1", "0"],
    ["0", "1", "1", "1", "0"],
    ["0", "0", "0", "0", "0"]
]
*/

// let grid = [];
// const gridHeight = 5;
// const gridWidth = 5;

// const createGrid = (gridHeight, gridWidth) => {
//   for (i = 0; i < gridHeight; i++) {
//     for (j = 0; j < gridWidth; j++) {
//       i == 2 && j == 2 ? grid[i][j].push("$") : grid[i][j].push("-");
//     }
//   }
//   return grid;
// };

// console.log(createGrid(gridHeight, gridWidth));

// NOTE create a grid that accepts a 2D array
const mineGrid = (arr) => {
  // NOTE Create a helper function that acess the element position (y,x) in arr. If the Y index is valid or exists
  // I want to return arr[y][x]; otherwise return null (this will prevent accessing undefined elements and avoid errors)
  const checkAccess = (y, x) => (arr[y] ? arr[y][x] : null);
  // NOTE Create a helper function that calculates the number of adjacent mines around the cell at position (y,x)
  const getMine = (y, x) => {
    // NOTE an array is constructed with elements representing the content of adjacent cells,
    // We are going to use checkAccess for each of the eight possible adjacent positions
    return [];
  };
};

/*


*/
