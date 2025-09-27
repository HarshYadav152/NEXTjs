
function getRandomInt(count){
    return Math.floor(Math.random() * count);
}

export default function ProductReview(){
    const random = getRandomInt(5);
    if(random === 1){
        throw new Error("Error leading") // this will show an runtime error which break our application for mitigating this in production we might use error.tsx / error.js wherever need and it wraps up any error occur in child components
    }
    return <h2>Review of different products</h2>
}