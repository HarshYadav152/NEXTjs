import Link from "next/link"

export const metadata = {
    title: {
        absolute: "Profile" // absolute title which override parent component title
    }
}

export default function Profile() {
    return (
        <>
            <h2>Profile page using file based routing</h2>
            <Link href="/">Go to home</Link>
            <br></br>
            <Link href="/products">products</Link>
        </>
    )
}