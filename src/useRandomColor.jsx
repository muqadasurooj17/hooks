import { useState } from "react";

const useRandomColor=()=>{
    
    const [color,SetColor]=useState("");
    const changecolor=()=>{
        SetColor(Math.random().toString(16).substr(-6));
    }
    return{color,changecolor};

}

export default useRandomColor;