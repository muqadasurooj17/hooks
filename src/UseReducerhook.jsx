// The useReducer Hook is similar to the useState Hook.

// It allows for custom state logic.

// If you find yourself keeping track 
// of multiple pieces of state that rely on complex logic, useReducer may be useful.

// useReducer(<reducer>, <initialState>)

// The reducer function contains your custom state logic and the initialStatecan
//  be a simple value but generally will contain an object.

// The useReducer Hook returns the current stateand a dispatchmethod. 
// You pass a reducer function and an initial value (initial state). 
//Your reducer receives the current state and an action, and returns the new state. 
//We could write one that works just like the summation reducer:

// useReducer((state, action) => {
//   return state + action;
// }, 0);

import { useReducer } from "react";

 function UseReducerhook(){
    const [sum, dispatch] = useReducer((state, action) => {
        return state + action;
      }, 0);
    return(
    <>
    <h1> The usereducerhook
        </h1>
      {sum}

      <button onClick={() => dispatch(1)}>
        Add 1
      </button>
</>

    )
 }
 export default UseReducerhook;