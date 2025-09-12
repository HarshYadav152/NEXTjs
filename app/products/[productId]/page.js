export default function ProductsDetails({params}){
    const {productId} = params;
    return (
        <>
            <h2>Product details page</h2>
            <div>For {productId}</div>
        </>
    )
}