"use client";

import React, { useRef } from "react";
import Image from "next/image";
import profilepic from "../assets/profilepic.png";
import { motion } from "framer-motion";

const Hero = () => {
    const heroRef = useRef<HTMLDivElement | null>(null);

    return (
        <section id="hero-section" ref={heroRef} className="py-24 relative overflow-hidden bg-[#0a192f]">
            {/* Background lines */}
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* Radial background element */}
            <div className="absolute rounded-full w-[3000px] h-[1300px] top-[550px] left-1/2 transform -translate-x-1/2 
                            bg-[radial-gradient(circle, rgba(10, 25, 47, 0.8) 70%, rgba(17, 34, 64, 0.5))]"></div>

            {/* Main content */}
            <div className="relative z-10 text-center">
                {/* Title Section */}
                <h1 className="text-[#ccd6f6]" style={{ fontSize: "5rem" }}>
                    Hello, I'm
                </h1>
                <h1 className="text-[#64ffda]" style={{ fontSize: "5rem" }}>
                    Kevin Steepan
                </h1>

                {/* Profile description */}
                <p className="font-medium text-center text-lg sm:text-xl max-w-[500px] mx-auto mt-8 text-[#8892b0]">
                    I'm a passionate second-year Computer Science student at Newcastle University. With a strong interest in solving real-world problems using technology, I'm currently seeking internship opportunities in software development, particularly in the tech and finance sectors.
                </p>

                {/* Profile picture */}
                <motion.div
                    className="flex justify-center mt-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <Image
                        src={profilepic}
                        alt="Kevin Steepan's profile picture"
                        className="h-auto w-auto rounded-full shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
