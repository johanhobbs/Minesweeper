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
    return [
      checkAccess(y + 1, x), // checks the cell directly below the current cell (y,x)
      checkAccess(y + 1, x - 1), // checks the cell diagonally below and to the left of the current cell
      checkAccess(y + 1, x + 1), // checks the cell diagonally below and to the right of the current cell
      checkAccess(y, x + 1), // checks the cell directly to the right of the current cell
      checkAccess(y, x - 1), // checks the cell directly to the left of the current cell
      checkAccess(y - 1, x), // checks the cell directly above the current cell
      checkAccess(y - 1, x + 1), // checks the cell diagonally above and to the right of the current cell
      checkAccess(y - 1, x - 1), // checks the cell diagonally above and to the left of the current cell
      // NOTE Constuct an array of values representing the contents of the cells adjacent,
      // after the contructing of the array, we will use filter method
    ]
      .filter((adjCell) => adjCell === "$")
      .length.toString();
  };
  return arr.map((r, y) => r.map((c, x) => (c === "-" ? getMine(x, y) : c)));
};

/*


*/
