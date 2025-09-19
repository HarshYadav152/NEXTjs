
export const generateMetadata = async({params})=>{
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
        </>
    )
}