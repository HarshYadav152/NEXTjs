"use client"
import { useState } from "react";

export function Counter(){
    const [count,setCount] = useState(9);

    return <>
        <h4>Counter : {count}</h4>
        <button onClick={()=>setCount(count*1232)}>Plus 1</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </>
}