// import React from "react";
// import "./Grid.css"; // Import CSS file for styling

// const Grid = () => {
//   const grid = [];
//   const gridRows = 10;
//   const gridCols = 20;
//   const actualRows = Math.floor(gridRows / 3);
//   const actualCols = Math.ceil(gridCols / 3);

//   var foodcell=[]

//   for (let rowIndex = 0; rowIndex < gridRows; rowIndex++) {
//     grid.push(
//       <div key={`row${rowIndex}`} className="row">
//         {" "}
//         {rowIndex}
//         {Array.from({ length: gridCols }, (_, colIndex) => {
//           const isGreenCell =
//             rowIndex >= actualRows &&
//             rowIndex < actualRows * 2 + 1 &&
//             colIndex >= actualCols &&
//             colIndex < actualCols * 2 - 1;

//           return (
//             <div
//               key={`cell${colIndex}`}
//               className={`cell ${isGreenCell ? "green" : "blue"}`}
//             >
//               {colIndex}
//             </div>
//           );
//         })}
//       </div>
//     );
//   }



//   return <div className="grid-container">{grid}</div>;
// };

// export default Grid;






import React from "react";
import "./Grid.css"; // Import CSS file for styling

const Grid = () => {
  const grid = [];
  const gridRows = 10;
  const gridCols = 20;
  const noOfFoods=8
  const actualRows = Math.floor(gridRows / 3);
  const actualCols = Math.ceil(gridCols / 3);

  // Array to store coordinates of food cells
  const foodCells = [];

  // Function to generate random integer within a range
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Function to check if a cell is a green cell
  const isGreenCell = (rowIndex, colIndex) => {
    return (
      rowIndex >= actualRows &&
      rowIndex < actualRows * 2 + 1 &&
      colIndex >= actualCols &&
      colIndex < actualCols * 2 - 1
    );
  };

  // Generate 10 random food cells
  while (foodCells.length < noOfFoods) {
    const randomRow = randomInt(0, gridRows - 1);
    const randomCol = randomInt(0, gridCols - 1);

    // Check if the cell is not a green cell
    if (!isGreenCell(randomRow, randomCol)) {
      const cell = `${randomRow},${randomCol}`;
      // Ensure that the food cell is not already selected
      if (!foodCells.includes(cell)) {
        foodCells.push(cell);
      }
    }
  }

  for (let rowIndex = 0; rowIndex < gridRows; rowIndex++) {
    grid.push(
      <div key={`row${rowIndex}`} className="row">
        {" "}
        {rowIndex}
        {Array.from({ length: gridCols }, (_, colIndex) => {
          const isGreen = isGreenCell(rowIndex, colIndex);
          // Check if current cell is a food cell
          const isFoodCell = foodCells.includes(`${rowIndex},${colIndex}`);
          return (
            <div
              key={`cell${colIndex}`}
              className={`cell ${isGreen ? "green" : isFoodCell ? "yellow" : "blue"}`}
            >
              {colIndex}
            </div>
          );
        })}
      </div>
    );
  }

  return <div className="grid-container">{grid}</div>;
};

export default Grid;
