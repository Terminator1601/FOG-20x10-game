import React from 'react';
import './Grid.css'; // Import CSS file for styling

const Grid = () => {

  const greengrid= Array.from({length:4},(_, rowIndex)=>(
    <div key={rowIndex} className='row'>
      {Array.from({length :7},(_,colIndex)=>(
        <div key={colIndex} className='cell blue'></div>
      ))}
      {Array.from({length :6},(_,colIndex)=>(
        <div key={colIndex} className='cell green'></div>
      ))}
      {Array.from({length :7},(_,colIndex)=>(
        <div key={colIndex} className='cell blue'></div>
      ))}

    </div>
  ));


  // Create an array to represent rows
  const rows = Array.from({ length: 3 }, (_, rowIndex) => (
    // Create an array to represent columns
    <div key={rowIndex} className="row">
      {Array.from({ length: 20 }, (_, colIndex) => (
        // Create a cell with blue background color
        <div key={colIndex} className="cell blue"></div>
      ))}
    </div>
  ));

  return (
    <div className="grid-container">
      {rows}
      {greengrid}
      {rows}
    </div>
  );
};

export default Grid;
