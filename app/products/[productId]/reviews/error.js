"use client"
import { useRouter } from "next/navigation"
import { startTransition } from "react";

 // error component must be declared as use client component
export default function ErrorBoundary({error,reset}){ // this component recieve an prop as an ovject if any error occur
    console.log("reset function : ",reset)

    const router = useRouter();
    const reload = ()=>{
        startTransition(()=>{
            router.refresh();
            reset();
        });
    };

    return (
        <>
            <h1>Error occured handled in client side and rest of our application is running successfully</h1>
            <p>{error.message}</p>
            <button className="cursor-pointer font-bold" onClick={reload}>Try Now</button>
        </>
    )
}