"use client";
import React from 'react'
import Image from "next/image";
import project1 from "../assets/proj1.jpg";
import project from "../assets/project.jpg";
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Rhythm Reveal",
        desc: "Created a dynamic music analytics dashboard that gives users a comprehensive look into their personal listening habits and music preferences utilising the Spotify API to retrive user information.",
        devStack: "React, Next.js, Tailwind CSS",
        link: "#",
        git: "https://github.com/KevST14/rhythm-reveal",
        src: project1
    },
    {
        title: "Interactive E-Learning Platform",
        desc: "An innovative e-learning platform that empowers learners with interactive courses and personalised learning experiences to enhance knowledge and skills.",
        devStack: "Next.js",
        link: "#",
        git: "#",
        src: project
    },
    {
        title: "Portfolio Website",
        desc: "Created a portfolio website for a client in the SWE Industry, utilising interactive features.",
        devStack: "React, Tailwind CSS",
        link: "#",
        git: "#",
        src: project1
    },
];

const Portfolio = () => {
    return (
        <div className="text-white bg-gradient-to-b from-[#0a192f] to-[#112240] py-18 mt-52" id="portfolio">
            {/* Title */}
            <h1 className='text-[#ccd6f6] text-center font-semibold my-12' style={{ fontSize: "3.5rem" }}>
                My <span className='text-[#64ffda]' style={{ fontSize: "3.5rem" }}>Projects</span>
            </h1>

            {/* Project Cards */}
            <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-32 space-y-24'>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "flex-col md:flex-row"}`}
                    >
                        {/* Project Info */}
                        <div className='space-y-2 max-w-[550px]'>
                            <h2 className='text-7x1 my-4 text-[#ccd6f6]/70' style={{ fontSize: "4.5rem" }}>{`0${index + 1}`}</h2>
                            <h2 className='text-3x1 text-[#ccd6f6]' style={{ fontSize: "2.5rem" }}>{project.title}</h2>
                            <p className='text-lg text-[#8892b0] break-words p-4'>{project.desc}</p>
                            <p className='text-x1 text-[#64ffda] font-semibold'>{project.devStack}</p>
                            <div className='w-64 h-[1px] bg-gray-400 my-4'></div>
                            <div>
                                <a href={project.link} className='mr-6 text-[#64ffda] hover:text-white transition-colors duration-200'>Live</a>
                                <a href={project.git} className='text-[#64ffda] hover:text-white transition-colors duration-200'>GitHub</a>
                            </div>
                        </div>

                        {/* Project Image */}
                        <div className='flex justify-center items-center'>
                            <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border border-gray-700 rounded-lg" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
