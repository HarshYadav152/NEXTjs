import Link from "next/link";

export const generateMetadata = async({params,searchParams})=>{
    const {review} = searchParams;
    const id = (await params).productId;
    return {
        title:`Product ${id}`,
        description:`Product ${id} description`
    }
}

export default async function ProductsDetails({params}){
    const {productId} = await params;
    return (
        <>
            <h2>Product details page</h2>
            <div>For {productId}</div>

            <div>Read articles regarding this</div>
            <Link href="/articles/chatgpt?lang=en">English</Link>
            <Link href="/articles/chatgpt?lang=hn">Hindi</Link>
        </>
    )
}