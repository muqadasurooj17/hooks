import { useState } from "react";
import { useEffect } from "react";

function UseEffectHooks(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`you clicked me ${count} times`;
    });

    // useEffect(() => {
    //     setTimeout(() => {
    //       setCount((count) => count + 1);
    //     }, 1000);
    //   }, []); // <- add empty brackets here


    return (
        <>
        <h1> the use effect hook</h1>
         {/* <h1>I've rendered {count} times!</h1> */}
        <h1>The use Effect hooks</h1>
<h1>you clicked me {count } times</h1>
<button onClick={()=>setCount(count+1)}>
        Click me
       </button>

       
        </>
    )};
export default UseEffectHooks;
