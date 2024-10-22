"use client";
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';
import { SiPython, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { DiJava } from 'react-icons/di';  

const skillIcons = [
    { icon: <FaHtml5 size={140} />, label: "HTML" },
    { icon: <FaCss3Alt size={140} />, label: "CSS" },
    { icon: <FaReact size={110} />, label: "React" },
    { icon: <FaJsSquare size={140} />, label: "JavaScript" },
    { icon: <SiPython size={140} />, label: "Python" },
    { icon: <SiNextdotjs size={140} />, label: "Next.js" },
    { icon: <SiTailwindcss size={140} />, label: "Tailwind CSS" },
    { icon: <DiJava size={140} />, label: "Java" },
];

const Skills = () => {
    return (
        <div className='bg-gradient-to-t from-[#0a192f] to-[#112240] py-32'>
            <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
                <h2 className='text-6xl font-bold mb-4' style={{ fontSize: "4rem" }}>Technical Skills</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {skillIcons.map((skill, index) => (
                        <div
                            key={index}
                            className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 transition-transform transform hover:scale-105'
                        >
                            {skill.icon}
                            <p className='mt-2 text-center text-[#ccd6f6]'>{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
