"use client"

import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router = useRouter();
    const handleClick=()=>{
        console.log("Placing order..");
        router.push("/?order=true")
    }

    return (
        <>
            <h2>Order Product page</h2>
            <button onClick={handleClick}>Order</button>
        </>
    )
}