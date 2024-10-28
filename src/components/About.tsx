"use client";
import React from 'react';
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
    return (
        <div className='relative max-w-[1200px] mx-auto' id="about">
            {/* Space Background */}
            <div className='space'></div>

            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4' style={{ fontSize: "3.5rem" }}>
                About <span className='text-blue-400' style={{ fontSize: "3.5rem" }}>Me</span>
            </h1>

            <div className='px-6 grid md:grid-cols-8 gap-6 place-items-center'>
                <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#4c6ef5] via-[#007bff] to-[#3a6ea5] opacity-20 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={book} alt="book" className="w-auto h-[130px]" />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80' style={{ fontSize: "1.75rem" }}>Interests</h2>
                            <p className='text-lg text-white/70 mt-2'>Beyond my passion for software engineering, I am committed to maintaining a healthy lifestyle. I believe in the importance of consistency and discipline, which I practice through regular gym sessions and running. I also focus on building healthy habits to enhance my overall well-being. In my free time, I enjoy reading, traveling, gaming and exploring new places, which gives me fresh perspectives and inspiration.</p>
                        </div>
                    </div>
                </div>

                <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#4c6ef5] via-[#007bff] to-[#3a6ea5] opacity-20 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={pc} alt="pc" className="w-auto h-[130px]" />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80' style={{ fontSize: "1.75rem" }}>Education</h2>
                            <p className='text-lg text-white/70 mt-2'>I am currently in the second year of my BSc in Computer Science with Industrial Placement (Software Engineering) from Newcastle University and managed to receive a first-class in year 1.</p>
                        </div>
                    </div>
                </div>

                <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#4c6ef5] via-[#007bff] to-[#3a6ea5] opacity-20 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={card} alt="card" className="w-auto h-[130px]" />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80' style={{ fontSize: "1.75rem" }}>Experience</h2>
                            <p className='text-lg text-white/70 mt-2'>I’ve developed a range of projects, applying many technologies as well as leading the development of a Java application for generating and taking quizzes interactively, where I created the User class to manage core user functionality.</p>
                        </div>
                    </div>
                </div>

                <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#4c6ef5] via-[#007bff] to-[#3a6ea5] opacity-20 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={finance} alt="finance" className="w-auto h-[130px]" />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80' style={{ fontSize: "1.75rem" }}>Skills</h2>
                            <p className='text-lg text-white/70 mt-2'>I began my programming journey with Python and Java, which I have used extensively in my academic projects and coursework. Outside of my studies, I expanded my skill set by learning web development frameworks such as React, Next.js, and Tailwind CSS, allowing me to build dynamic, responsive web applications. This blend of backend and frontend technologies has helped me develop a deeper understanding of full-stack development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
