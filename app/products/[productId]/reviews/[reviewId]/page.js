export default function ProductReviewDetails({ params }) {
    const { productId, reviewId } = params
    return (
        <>
            <h2>Reviews details of the particular products</h2>
            <div>In this case Product is {productId} and reivew is {reviewId}</div>
        </>
    )
}