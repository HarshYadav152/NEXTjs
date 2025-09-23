import Link from "next/link";

export default function Products() {
    const productId = 2;
    return (
        <>
            <h2>Products listing</h2>
            <li>One</li>
            <li>
                <Link href={`/products/${productId}`} replace> // replace removes link history even it create new url history in stack
                    Two
                </Link>
            </li>
            <li>Three</li>
            <Link href="/">Home</Link>
        </>
    )
}