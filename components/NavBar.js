"use client"
import React from 'react'


const NavBar = () => {

    return (
        <header className="pt-8 pb-5">
            <nav>
                <ul className="flex items-center justify-center md:gap-[99px] gap-12">
                    <li className="nav-bar-comp">
                        <a className=" md:text-3xl  text-xl " href="#about">about</a>
                    </li>
                    <li className="nav-bar-comp">
                        <a className=" md:text-3xl  text-xl " href="#projects">projects</a>
                    </li>
                    <li className="nav-bar-comp">
                        <a className=" md:text-3xl  text-xl " href="#contact">contact</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
export default NavBar
