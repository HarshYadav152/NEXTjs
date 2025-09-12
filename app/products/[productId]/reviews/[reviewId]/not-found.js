"use client";

import { usePathname } from "next/navigation" // since hooks only be used in client component here i have to make this client component
export default function NotFound(){
    const pathname = usePathname()
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return (
        <>
            <h2>Custom not found for review {reviewId} of product {productId}</h2>
            <div>this component cannot accept params</div>
            <div>so here use usePathname for accessing path params</div>
        </>
    )
}