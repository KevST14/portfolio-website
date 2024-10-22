"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
    };

    return (
        <div className="text-white/70 pt-6">
            {/* Navbar Container */}
            <div className="flex items-center justify-center px-4 py-2 mx-auto max-w-[800px] bg-black rounded-md">
                <ul className="flex flex-row p-4 space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path}>
                                <p className="text-lg font-bold hover:text-[#64ffda] cursor-pointer">{link.title}</p>
                            </Link>
                        </li>
                    ))}

                    <li>
                        <a href="#contact" className="group">
                            <h1 className="text-lg font-bold text-white cursor-pointer">Contact Me</h1>
                            <div className="relative">
                                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-[#64ffda] rounded-full group-hover:w-full"></div>
                                <div className="mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-[#00bfff] rounded-full group-hover:w-full"></div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Hamburger Menu Icon */}
            <div onClick={toggleNav} className="md:hidden absolute top-5 right-5 border rounded text-white/70 border-white/70">
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {/* Mobile Navigation Menu */}
            <motion.div
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={menuVariants}
                className="fixed left-0 top-0 w-full z-40 bg-black"
            >
                <ul className="text-3xl font-semibold my-24 text-center space-y-8 text-white">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} onClick={closeNav}>
                                <p className="hover:text-[#64ffda]">{link.title}</p>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="#contact" onClick={closeNav}>
                            <p className="hover:text-[#64ffda]">Contact Me</p>
                        </Link>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
};

export default Navbar;
