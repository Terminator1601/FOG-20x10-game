import React, { useState, useEffect } from "react";
import "./Grid.css"; 

const Grid = () => {
  const [score, setScore] = useState(0);
  const [foodCells, setFoodCells] = useState([]);
  const grid = [];
  const gridRows = 10;
  const gridCols = 20;
  const noOfFoods = 8;
  const actualRows = Math.floor(gridRows / 3);
  const actualCols = Math.ceil(gridCols / 3);

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

  // Function to generate food cells
  const generateFoodCells = () => {
    const newFoodCells = [];
    while (newFoodCells.length < noOfFoods) {
      const randomRow = randomInt(0, gridRows - 1);
      const randomCol = randomInt(0, gridCols - 1);
      if (!isGreenCell(randomRow, randomCol)) {
        const cell = `${randomRow},${randomCol}`;
        if (!newFoodCells.includes(cell)) {
          newFoodCells.push(cell);
        }
      }
    }
    setFoodCells(newFoodCells);
  };

  // Effect to generate initial food cells
  useEffect(() => {
    generateFoodCells();
  }, []);

  // Event handler for clicking on a cell
  const handleCellClick = (rowIndex, colIndex) => {
    const cell = `${rowIndex},${colIndex}`;
    if (foodCells.includes(cell)) {
      // If clicked cell is a food cell
      setScore(score + 10); // Increase the score by 10
      const index = foodCells.indexOf(cell);
      const newFoodCells = [...foodCells];
      newFoodCells.splice(index, 1); // Remove the food cell from the array
      setFoodCells(newFoodCells);
      if (newFoodCells.length === 0) {
        // Generate new food cells if all food cells are consumed
        generateFoodCells();
      }
    }
  };

  for (let rowIndex = 0; rowIndex < gridRows; rowIndex++) {
    grid.push(
      <div key={`row${rowIndex}`} className="row">
        {" "}
        
        {Array.from({ length: gridCols }, (_, colIndex) => {
          const isGreen = isGreenCell(rowIndex, colIndex);
          // Check if current cell is a food cell
          const isFoodCell = foodCells.includes(`${rowIndex},${colIndex}`);
          return (
            <div
              key={`cell${colIndex}`}
              className={`cell ${
                isGreen ? "green" : isFoodCell ? "yellow" : "blue"
              }`}
              onClick={() => handleCellClick(rowIndex, colIndex)} // Attach onClick event handler
            >
              
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid-container">
      <div>Score: {score}</div>
      {grid}
    </div>
  );
};

export default Grid;
