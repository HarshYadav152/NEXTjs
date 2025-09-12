import { notFound } from "next/navigation" // for programmatically invoke notFound page also not found custom page inside this
export default async function ProductReviewDetails({ params }) {
    const { productId, reviewId } = await params
    if(parseInt(reviewId) > 1000){  // if no. of review is greater than 1000 show a custom notfound page
        notFound(); // first search for not-found.js file in current folder
    }
    return (
        <>
            <h2>Reviews details of the particular products</h2>
            <div>In this case Product is {productId} and reivew is {reviewId}</div>
        </>
    )
}