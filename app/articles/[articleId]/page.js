import Link from "next/link";
import { use } from "react";

export default function Articles({params,searchParams}){
    const {articleId} = use(params);
    const {lang} = use(searchParams);

    let language = null;
    if(lang == "hn"){
        language = "hindi";
    }else if(lang =="en"){
        language = "english"
    }else{
        language = lang
    }
    return (
        <>
            <h1>News Article {articleId}</h1>
            <p>Available in {language} languages.</p>
            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=hn`}>Hindi</Link>
            </div>
        </>
    )
}