import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'

export default function Navbar() {

    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid justify-content-center">
                <Link href={"/"}>
                    <a className='navbar-brand mx-4 White'>Accueil</a>
                </Link>
                <Link href={"/blog"}>
                    <a className='navbar-brand mx-4'>Blog</a>
                </Link>
                <Link href={"/utilisateur"}>
                    <a className='navbar-brand mx-4'>Liste</a>
                </Link>
            </div>
        </nav>
    )
}
