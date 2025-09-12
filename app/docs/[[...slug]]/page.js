export default async function Docs({params}){
    const {slug} = await params; // slug parameter 
    if(slug?.length == 2){
        return <h2>Viewing docs for feature {slug[0]} and concept {slug[1]}</h2>
    }
    else if(slug?.length == 1){
        return <h2>Viewing docs for feature {slug[0]}</h2>
    }
    return (
        <>
            <h1>Docs Home Page , Here we using Concept catch all segments redirect all routes from /docs here</h1>
            <div>// it will redirect all path from /docs after /docs/ redirect to this but give not found on /docs for making this not happen in [[...slug]]</div>
        </>
    )
}

// it will redirect all path from /docs after /docs/ redirect to this but give not found on /docs for making this not happen in [[...slug]]