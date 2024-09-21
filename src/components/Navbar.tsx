"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio"},
];

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    return (
        <div className="text-white/70 pt-6">
            <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path}>
                                <p>{link.title}</p>
                            </Link>
                        </li>
                   ))}

                   <li>
                    <a>
                        <h1>Contact Me</h1>
                        <div className="relative">
                            <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>

                            <div className="mt-1 absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full"></div>

                        </div>
                    </a>
                   </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
