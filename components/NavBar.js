"use client"
import React from 'react'

const NavBar = () => {

    return (
        <header className="pt-8 pb-5">
            <nav>
                <ul className="flex items-center justify-center gap-12">
                    <li className="nav-bar-comp">
                        <a href="#about">about</a>
                    </li>
                    <li className="nav-bar-comp">
                        <a href="#projects">projects</a>
                    </li>
                    <li className="nav-bar-comp">
                        <a href="#contact">contact</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
export default NavBar
