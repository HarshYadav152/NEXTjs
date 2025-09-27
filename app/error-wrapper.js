"use client";

import { useState } from "react";
const ErrorSimulator = ({message})=>{
    const [error,setError] = useState(false);
    if(error){
        throw new Error(message)
    }

    return (
        <button 
            title="Simulate an error"
            onClick={()=>setError(true)}
        >
            Simulate Error
        </button>
    )
}

export const ErrorWrapper=({children})=>{
    return(
        <div>
            <div>
                <ErrorSimulator message={"Simulate a error in root layout"}/>
            </div>
            {children}
        </div>
    )
}