import React from 'react'
import Head from 'next/head';

export default function userDetail(props) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{props.user.title}</title>
            </Head>

            <div className="container px-4 pt-3">
                <h2 className="text-center mb-4">
                    Nom d&apos;utilisateur : {props.user.username}
                </h2>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 col-xl-6">
                        <div className="card p-2">
                            <div className="card-body">
                                <h4 className="card-title">{props.user.name}</h4>
                                <h5 className="card-subtitle mb-2 text-muted">Username {props.user.username}</h5>
                                <ul className="list-group">
                                    <li className="list-group-item">Username {props.user.username}</li>
                                    <li className="list-group-item">Username {props.user.email}</li>
                                    <li className="list-group-item">Username {props.user.website}</li>
                                    <li className="list-group-item">Username {props.user.phone}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container px-4 pt-5'>
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <h3 className="card-title">{props.user.name}</h3>
                        <p className="card-text">Username : {props.user.username}</p>
                    </div>
                </div>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Username : {props.user.username}</td>
                        </tr>
                        <tr>
                            <td>Email : {props.user.email}</td>
                        </tr>
                        <tr>
                            <td> Site web : {props.user.website}</td>
                        </tr>
                        <tr>
                            <td>Téléphone : {props.user.phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}


export async function getStaticProps(context) {

    const id = context.params.user;

    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await data.json()

    return {
        props: {
            user: user,
        }
    }
}

export async function getStaticPaths() {


    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await data.json()

    const paths = users.map(item => ({
        params: { user: item.id.toString() }
    }))

    return {
        /*     paths: [
              { params: { liste: "words" } }
            ], */
        paths,
        fallback: false
    }
}