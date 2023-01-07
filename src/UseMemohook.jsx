// Returns a memoized value.

// Pass a “create” function and an array of dependencies. 
// useMemo will only recompute the memoized value when one of the dependencies has changed.
//  This optimization helps to avoid expensive calculations on every render.

// Remember that the function passed to useMemo runs during rendering.
//  Don’t do anything there that you wouldn’t normally do while rendering. 
//  For example, side effects belong in useEffect, not useMemo.

// If no array is provided, a new value will be computed on every render.



import { useState, useMemo } from "react";

export default function CalculateFactorial() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
        <h1>this is example of use memo hook</h1>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}

function factorialOf(n) {
  console.log("factorialOf(n) called!");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
