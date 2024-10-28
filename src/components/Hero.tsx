"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import profilepic from "../assets/profilepic.png";
import { motion } from "framer-motion";
import { Space_Mono } from 'next/font/google';

// Define font
const spaceMono = Space_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const Hero = () => {
    const heroRef = useRef<HTMLDivElement | null>(null);

    // Wrap titles in useMemo to avoid dependency warning
    const titles = useMemo(() => [
        "Avid Coder",
        "Active Lifestyle",
        "University Student",
        "Cooking Enthusiast",
        "Driven Developer"
    ], []);

    const [currentTitle, setCurrentTitle] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const current = titles[index % titles.length];

            if (isDeleting) {
                setCurrentTitle((prev) => prev.substring(0, prev.length - 1));
                setTypingSpeed(50);
            } else {
                setCurrentTitle((prev) => current.substring(0, prev.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && currentTitle === current) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && currentTitle === "") {
                setIsDeleting(false);
                setIndex((prev) => prev + 1);
            }
        };

        const typingTimer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(typingTimer);
    }, [currentTitle, isDeleting, typingSpeed, index, titles]);

    return (
        <section id="hero-section" ref={heroRef} className="py-24 relative overflow-hidden bg-[#0a192f]">
            <div className="lines">
                {/* Background lines here */}
            </div>

            <div className="absolute rounded-full w-[3000px] h-[1300px] top-[550px] left-1/2 transform -translate-x-1/2 
                            bg-[radial-gradient(circle, rgba(10, 25, 47, 0.8) 70%, rgba(17, 34, 64, 0.5))]"></div>

            <div className="relative z-10 text-center">
                <h1 className="text-[#ccd6f6]" style={{ fontSize: "6rem" }}>
                    Hello, I'm
                </h1>
                <h1 className="text-[#64ffda]" style={{ fontSize: "6rem" }}>
                    Kevin Steepan
                </h1>

                <h2 className={`${spaceMono.className} text-[#64ffda]`} style={{ fontSize: "3rem", textShadow: "2px 2px 10px rgba(100, 255, 218, 0.7)" }}>
                    {currentTitle}
                    <span className="blinking-cursor">|</span>
                </h2>

                <p className="font-medium text-center text-lg sm:text-xl max-w-[500px] mx-auto mt-8 text-[#8892b0]">
                    I&apos;m a passionate second-year Computer Science student at Newcastle University, driven by my passion for technology and innovation. With a strong foundation in software development and data visualisation, I thrive on solving complex problems and creating impactful solutions. As I look ahead to summer 2025, I am actively seeking internships and placements that will allow me to apply my skills in real-world projects, collaborate with industry professionals, and further my understanding of the tech landscape.
                </p>

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
