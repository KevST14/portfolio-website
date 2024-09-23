import React from 'react';
import Image from "next/image";
import mail from "../assets/mail.png";

const Contact = () => {
    return (
        <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-x-8' id="contact">
            <div className='flex justify-between items-center w-full'>
                <div className='flex items-center space-x-4'>
                    <Image src={mail} alt="mail" className='h-[110px] w-auto' />
                    <p className='text-x1'>stkevin14@gmail.com</p>
                </div>

                <a
                    href="../assets/InternshipCV.pdf"  
                    download="InternshipCV.pdf" 
                    className='bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-400 transition-colors'
                >
                    Download CV
                </a>
            </div>
        </div>
    );
}

export default Contact;
