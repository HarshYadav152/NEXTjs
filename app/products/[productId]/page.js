export default async function ProductsDetails({params}){
    const {productId} = await params;
    return (
        <>
            <h2>Product details page</h2>
            <div>For {productId}</div>
        </>
    )
}