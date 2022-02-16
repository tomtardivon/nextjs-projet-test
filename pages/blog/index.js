import React from 'react'
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid'

export default function blog(props) {
    return (
        <div className='container px-4 py-5'>
            <div className='text-center'>
                <h1>Bienvenusur le blog</h1>
                <p>Voici les articles</p>
            </div>
            <div className="row g-3 mt-4">
                {props.articles.map(article => {
                    return (
                        <div key={uuidv4()} className="col-12 col-md-6 col-xl-4" style={{ marginBottom: "2%" }}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.body.slice(0, 20) + "..."}</p>
                                    <Link href={`blog/${article.id.toString()}`}>
                                        <a className="card-link">Lire cet article</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}



export async function getStaticProps() {

    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const articles = await data.json()

    return {
        props: {
            articles: articles
        },
    }
}