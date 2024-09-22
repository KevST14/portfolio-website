"use client";
import React from 'react'
import Image from "next/image";
import aboutImg from "../assets/profilepic.png"
import book from "../assets/book.png"
import pc from "../assets/pc.png"
import card from "../assets/card.png"
import finance from "../assets/finance.png"

const About = () => {
    return (
        <div className='max-w-[1200px] mx-auto' id="about">
            <div className='grid grid-cols-8 gap-6 place-items-center'>

                <div className='w-full col-span-5 relative bg-white/10 backdrop-blur-1g border border-white/20 rounded-x1 overflow-hidden'>
                    <div className='flex flex-row p-6'>
                      <Image src={book} alt="book" className="w-auto h-[130px]"/>
                      <div className='flex flex-col mt-4'>
                        <h2 className='text-2x1 font-bold text-white/80' style={{ fontSize: "1.75rem" }}>Education</h2>
                        <p className='text-lg text-white/70 mt-2'>I am currently in the second year of my Computer Science degree from Newcastle University and I am focusing on using technologies like React, Next.js Tailwind CSS and Python.</p>
                      </div>
                    </div>
                </div>

                <div className='w-full col-span-3 relative bg-white/10 backdrop-blur-1g border border-white/20 rounded-x1 overflow-hidden'>
                    <div className='flex flex-row p-6'>
                      <Image src={pc} alt="pc" className="w-auto h-[130px]"/>
                      <div className='flex flex-col mt-4'>
                        <h2 className='text-2x1 font-bold text-white/80' style={{ fontSize: "1.75rem" }}>xxxx</h2>
                        <p className='text-lg text-white/70 mt-2'>xxxx</p>
                      </div>
                    </div>
                </div>


                <div className='w-full col-span-3 relative bg-white/10 backdrop-blur-1g border border-white/20 rounded-x1 overflow-hidden'>
                    <div className='flex flex-row p-6'>
                      <Image src={card} alt="card" className="w-auto h-[130px]"/>
                      <div className='flex flex-col mt-4'>
                        <h2 className='text-2x1 font-bold text-white/80' style={{ fontSize: "1.75rem" }}>Experience</h2>
                        <p className='text-lg text-white/70 mt-2'></p>
                      </div>
                    </div>
                </div>


                <div className='w-full col-span-5 relative bg-white/10 backdrop-blur-1g border border-white/20 rounded-x1 overflow-hidden'>
                    <div className='flex flex-row p-6'>
                      <Image src={finance} alt="finance" className="w-auto h-[130px]"/>
                      <div className='flex flex-col mt-4'>
                        <h2 className='text-2x1 font-bold text-white/80' style={{ fontSize: "1.75rem" }}>Skills</h2>
                        <p className='text-lg text-white/70 mt-2'>I began my programming journey with Python and Java, which I have used extensively in my academic projects and coursework. Outside of my studies, I expanded my skill set by learning web development frameworks such as React, Next.js, and Tailwind CSS, allowing me to build dynamic, responsive web applications. This blend of backend and frontend technologies has helped me develop a deeper understanding of full-stack development. </p>
                      </div>
                    </div>
                </div>
                

        
            </div>
        </div>
    )
}

export default About