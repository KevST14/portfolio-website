"use client";
import React from 'react'
import Image from "next/image";
import project1 from "../assets/proj1.jpg"
import project from "../assets/project.jpg"
import { motion } from 'framer-motion';


const projects = [
    {
        title: "Eccommerce Digital Products",
        desc: "Created a website that allows customers to buy and sell digital products and allows them to favourite products, get reccomendations and more.",
        devStack: "MongoDB, Express, React, Node.js",
        link: "#",
        git: "#",
        src: project1

    },

    {
        title: "Interactive E-Learning Platform",
        desc: "An innovative e-learning platform that empowers learners with interactive courses and personalised learning experiences to enhance knowledge and skills ",
        devStack: "Next.js",
        link: "#",
        git: "#",
        src: project

    },

    {
        title: "Portfolio Website",
        desc: "Created a portfolio website for a client in the SWE Industry and utilies interactive features.",
        devStack: " React, Tailwind CSS",
        link: "#",
        git: "#",
        src: project1

    },
]





const Portfolio = () => {
    return (
        <div className="text-white bg-gradient-to-b from-black to-[#381A5F] py-18 mt-52" id="portfolio">

            <h1 className='text-white text-6x1 max-w-[320px] mx-auto font-semibold my-12' style={{ fontSize: "3.5rem" }}>
            My <span className='text-orange-400' style={{ fontSize: "3.5rem" }}>Projects</span>
            </h1>

            <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-32 space-y-24 pl-24'>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 75}}
                        whileInView={{ opacity: 1, y: 0}}
                        viewport={{ once: true}}
                        transition={{ duration: 0.5, delay: 0.25}}
                        className={`mt-12 flex flex-col ${index % 2 === 1 ?  "md:flex-row-reverse gap-12" : "flex-col md:flex-row"}`}

                    >
                        <div className='space-y-2 max-w-[550px]'>
                            <h2 className='text-7x1 my-4 text-white/70' style={{ fontSize: "4.5rem" }} >{`0${index + 1}`}</h2>
                            <h2 className='text-3x1' style={{ fontSize: "2.5rem" }} >{project.title}</h2>
                            <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                            <p className='text-x1 text-orange-400 font-semibold'>{project.devStack}</p>
                            <div className='w-64 h-[1px] bg-gray-400 my-4'>
                                <a href={project.link} className='mr-6'>Link</a>
                                <a href={project.git}>Git</a>
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border rounded border-gray-700" />

                        </div>

                    </motion.div>
                ))}

            </div>

        </div>
    )
}

export default Portfolio