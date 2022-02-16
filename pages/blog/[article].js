import React from 'react'
import Head from 'next/head'
import {v4 as uuidv4} from 'uuid'

export default function articlePerso(props) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.article.title}</title>
      </Head>
      <div className='container px-4 pt-5'>
      <h1 className='text-center mb-4'>{props.article.title}</h1>
        <p className='text-center'>{props.article.body}</p>
      </div>
    </>
  )
}


export async function getStaticProps(context) {

  const id = context.params.article;

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const article = await data.json()

  return {
    props: {
        article: article,
    }
  }
}

export async function getStaticPaths() {


  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  const articles = await data.json()

  const paths = articles.map(item => ({
    params: { article: item.id.toString() }
  }))

  return {
    /*     paths: [
          { params: { liste: "words" } }
        ], */
    paths,
    fallback: false
  }
}