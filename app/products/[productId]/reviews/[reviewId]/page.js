export default async function ProductReviewDetails({ params }) {
    const { productId, reviewId } = await params
    return (
        <>
            <h2>Reviews details of the particular products</h2>
            <div>In this case Product is {productId} and reivew is {reviewId}</div>
        </>
    )
}