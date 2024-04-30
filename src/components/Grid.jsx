// import React from "react";
// import "./Grid.css"; // Import CSS file for styling

// const Grid = () => {
//   const grid = [];
//   const gridRows = 10;
//   const gridCols = 20;
//   const actualRows = Math.floor(gridRows / 3);
//   const actualCols = Math.floor(gridCols / 3);
//   console.log(actualRows);
//   console.log(actualCols);
//   for (let index = 0; index < gridRows; index++) {
//     if (index < actualRows) {
//       grid.push(
//         <div key={`blueRow${index}`} className="row">
//           {Array.from({ length: 20 }, (_, colIndex) => (
//             <div key={`blueCell${colIndex}`} className="cell blue"></div>
//           ))}
//         </div>
//       );
//     }
//     else if (index>=actualRows){
//       for (let indexCol = 0; indexCol < actualCols; indexCol++) {
//         if (indexCol < actualCols) {
//           grid.push(
//             <div key={`blueRow${indexCol}`} className="row">
//               {Array.from({ length: 20 }, (_, colIndex) => (
//                 <div key={`blueCell${colIndex}`} className="cell green"></div>
//               ))}
//             </div>
//           );

//       }
//     }
//   }

//   return (
//     <div className="grid-container">

//       {grid}
//     </div>
//   );
// };

// export default Grid;

import React from "react";
import "./Grid.css"; // Import CSS file for styling

const Grid = () => {
  const grid = [];
  const gridRows = 10;
  const gridCols = 20;
  const actualRows = Math.floor(gridRows / 3);
  const actualCols = Math.floor(gridCols / 3);

  for (let rowIndex = 0; rowIndex < gridRows; rowIndex++) {
    grid.push(
      <div key={`row${rowIndex}`} className="row">
        {Array.from({ length: gridCols }, (_, colIndex) => {
          const isGreenCell =
            rowIndex >= actualRows &&
            rowIndex < actualRows * 2 &&
            colIndex >= actualCols &&
            colIndex < actualCols * 2;

          return (
            <div
              key={`cell${colIndex}`}
              className={`cell ${isGreenCell ? "green" : "blue"}`}
            ></div>
          );
        })}
      </div>
    );
  }

  return <div className="grid-container">{grid}</div>;
};

export default Grid;
