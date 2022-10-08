import './App.css';
import {useState} from "react";
import boxes from "./boxes";
import Box from "./Box"


/**
* Challenge part 1:
* 1. Initialize state with the default value of the
*    array pulled in from boxes.js
* 2. Map over that state array and display each one
*    as an empty square (black border, transparent bg color)
*    (Don't worry about using the "on" property yet)
*/


function App(props) {
  const [squares,setSquares]=useState(boxes)

  function toggle(id) {
    /**
     * Challenge: use setSquares to update the
     * correct square in the array.
     * 
     * Make sure not to directly modify state!
     * 
     * Hint: look back at the lesson on updating arrays
     * in state if you need a reminder on how to do this
     */
    setSquares(prevSquares => {
        const newSquares = []
        for(let i = 0; i < prevSquares.length; i++) {
            const currentSquare = prevSquares[i]
            if(currentSquare.id === id) {
                const updatedSquare = {
                    ...currentSquare,
                    on: !currentSquare.on
                }
                newSquares.push(updatedSquare)
            } else {
                newSquares.push(currentSquare)
            }
        }
        return newSquares
    })
}






  const squareElements=squares.map(square =>(
    <Box key={square.id} id={square.id} on={square.on} toggle={toggle}/>
  ))
  return (
    <>
    {squareElements}
    
        </>
  );
}

export default App;
