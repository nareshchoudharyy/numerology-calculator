'use client'
import React, { useState } from 'react';
import logo from '@/app/images/numrologyLogo.png';
import Link from 'next/link';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io";
import { MdOutlineContactMail } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { Roboto_Condensed } from "next/font/google"
import Image from 'next/image';

const robotaCondensed = Roboto_Condensed({
    weight: ["400", "600", "700"],
    subsets: ["latin"]
})


function Header() {
    const [menuStatus, setMenuStatus] = useState(false);

    return (
        <header className='flex justify-between items-center bg-black bg-opacity-40 backdrop-blur-sm  text-[#E0FFFF] p-3 fixed top-0 left-0 w-full z-10'>
            <Link href={'/'}>
                <div className='flex items-center gap-2'>
                    <img src={logo.src} alt="Logo" className=' w-6 h-6 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14' />
                    <div className={`${robotaCondensed.className} lora-font text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`}>Numerology Calculator</div>
                </div>
            </Link>
            <div className='text-lg lg:text-xl xl:text-3xl p-2 rounded-full bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-100 shadow-md' onClick={() => { setMenuStatus(!menuStatus) }}>
                {
                    menuStatus ? <RxCross2 /> : <IoMdMenu />
                }
            </div>
            {/* side menu  */}
            <div className={`absolute top-0 right-0 min-h-screen md:flex z-10 transform transition duration-500 ${menuStatus ? ' translate-x-[0px]' : 'translate-x-[100%]'}`}>
                <div id="" className="min-h-screen w-[100vw] sm:w-64 px-0 flex flex-col justify-between bg-gray-800 text-gray-100">
                    <div className="flex flex-col space-y-6 p-3">
                        <div className=" text-white flex items-center justify-between text-2xl md:text-xl l:text-md font-extrabold ">
                            <div className='text-md ms-4'>
                                Menubar
                            </div>
                            <div className='text-lg lg:text-xl xl:text-3xl p-2 rounded-full bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-100 shadow-md' onClick={() => { setMenuStatus(!menuStatus) }}>
                                {
                                    menuStatus ? <RxCross2 /> : <IoMdMenu />
                                }
                            </div>
                        </div>
                        <nav data-dev-hint="main navigation">
                            <Link href={'/'} className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                <IoHomeOutline />
                                <span>Home</span>
                            </Link>
                            <Link href={'/about_us'} className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                <IoMdPeople />
                                <span>About Us</span>
                            </Link>
                            <Link href={'/contact_us'} className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                <MdOutlineContactMail />
                                <span>Contact Us</span>
                            </Link>
                            <Link href={'/privacy_policy'} className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                <MdOutlinePrivacyTip />
                                <span>Privacy Policy</span>
                            </Link>
                        </nav>
                    </div>
                    <div className='text-center text-[12px]'>
                        WeCraftSoluton.com
                    </div>
                </div>
            </div>
            <div className={`fixed top-0 left-0 bg-black bg-opacity-70 w-[100vw] h-[100vh] z-3 ${menuStatus?"block":"hidden"}`} onClick={()=>{setMenuStatus(!menuStatus)}}></div>
        </header>
    );
}

export default Header;
