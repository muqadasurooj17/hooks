import { useState } from "react";

function UseStateHook() {
    const [count,setCount]=useState(0);
    return (
      <div> 
        <h1>the usestate hook</h1>  
       <h1>You clicked my {count} Times</h1>
       <button onClick={()=>setCount(count+1)}>
        Click me
       </button>
      </div>
    );
  }
  export default UseStateHook;