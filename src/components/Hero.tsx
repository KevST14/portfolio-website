"use client";

import React, { useState, useEffect, useRef } from "react";
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

    // Titles to cycle through in the typewriter effect
    const titles = ["Avid Coder", "Active Lifestyle", "University Student", "Cooking Enthusiast", "Driven Developer"];
    const [currentTitle, setCurrentTitle] = useState("");
    const [index, setIndex] = useState(0); // To track which title is being typed
    const [isDeleting, setIsDeleting] = useState(false); // To track typing or deleting state
    const [typingSpeed, setTypingSpeed] = useState(150); // Speed of typing and deleting

    // Typewriter Effect Logic
    useEffect(() => {
        const handleTyping = () => {
            const current = titles[index % titles.length]; // Get the current title to type

            if (isDeleting) {
                // If deleting characters
                setCurrentTitle((prev) => prev.substring(0, prev.length - 1));
                setTypingSpeed(50); // Faster deleting
            } else {
                // Typing characters
                setCurrentTitle((prev) => current.substring(0, prev.length + 1));
                setTypingSpeed(150); // Normal typing speed
            }

            // When typing is done
            if (!isDeleting && currentTitle === current) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause before starting to delete
            } else if (isDeleting && currentTitle === "") {
                setIsDeleting(false);
                setIndex((prev) => prev + 1); // Move to next title
            }
        };

        const typingTimer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimer); // Cleanup the timer on unmount
    }, [currentTitle, isDeleting, typingSpeed, index, titles]);

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
            </div>

            {/* Radial background element */}
            <div className="absolute rounded-full w-[3000px] h-[1300px] top-[550px] left-1/2 transform -translate-x-1/2 
                            bg-[radial-gradient(circle, rgba(10, 25, 47, 0.8) 70%, rgba(17, 34, 64, 0.5))]"></div>

            {/* Main content */}
            <div className="relative z-10 text-center">
                {/* Title Section */}
                <h1 className="text-[#ccd6f6]" style={{ fontSize: "6rem" }}>
                    Hello, I'm
                </h1>
                <h1 className="text-[#64ffda]" style={{ fontSize: "6rem" }}>
                    Kevin Steepan
                </h1>

                {/* Typewriter effect for changing titles */}
                <h2 className={`${spaceMono.className} text-[#64ffda]`} style={{ fontSize: "3rem", textShadow: "2px 2px 10px rgba(100, 255, 218, 0.7)" }}>
                    {currentTitle}
                    <span className="blinking-cursor">|</span> {/* Add blinking cursor */}
                </h2>

                <p className="font-medium text-center text-lg sm:text-xl max-w-[500px] mx-auto mt-8 text-[#8892b0]">
                    I&apos;m a passionate second-year Computer Science student at Newcastle University...
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
