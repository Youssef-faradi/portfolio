import React, { useState } from "react";
import "./header.scss";
import { GoHomeFill } from "react-icons/go";
import { BsFillPersonLinesFill, BsPersonFillGear } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

import { FaGithubSquare,FaLinkedin,FaDiscord ,FaInstagramSquare  } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import code from "../assets/images/code.png"
import logo from "../assets/images/logo.png"


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const MenuToggle = () => {
        setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
        document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
    };

    return (
        <>
            <div className="h-[10vh] w-full fixed flex items-center justify-between max-[430px]:gap-5 px-[8vw] text-white bg-[#080a05] z-50">
                <div className=" flex lg:w-[30%] w-[30%] bf-[#080a05]">
                    
                    <button className=" flex items-center ">
                        <img src={code} width={"40px"} height={"10px"} alt="img" />
                        <img src={logo} width={"60px"} height={"10px"} alt="img" />
                    </button>
                </div>
                <div className={`hello max-[430px]:${isMenuOpen ? "" : "hidden"} lg:static fixed ${isMenuOpen ? "top-[10%]" : "top-[-100%]"} h-[91vh] left-0 lg:h-[100%] flex-col lg:flex-row items-center justify-center lg:justify-start  bg-[#080a05] flex w-full lg:w-[60%] gap-[8%] z-auto`}>
                    <h5 className="pt-2 ">
                        <a href="#home" className="flex gap-2 text-white no-underline  "> <GoHomeFill />Home</a>
                    </h5>
                    <h5 className="pt-2 ">
                        <a href="#about" className="flex gap-2 text-white no-underline "><BsFillPersonLinesFill />About</a>
                    </h5>
                    <h5 className="pt-2 ">
                        <a href="#skills" className="flex gap-2 text-white no-underline "><BsPersonFillGear />Skills</a>
                    </h5>
                    <h5 className="pt-2 ">
                        <a href="#projects" className="flex gap-2 text-white no-underline "><CgWebsite />Projects</a>
                    </h5>
                    <h5 className="pt-2 ">
                        <button className="flex gap-2 text-white no-underline "><MdAttachEmail />Contact</button>
                    </h5>
                </div>
                <div className="flex h-[100%] lg:w-[25%] gap-3 text-3xl items-center lg:justify-center bg-[#080a05] text-white">
                    <a href="https://github.com/Youssef-faradi" rel="noreferrer" target="_blank" className=" text-white " >
                        <FaGithubSquare className="hover:scale-125 transition-all text-2xl  hover:text-zinc-800" />
                    </a>
                    <a href="https://www.linkedin.com/in/youssef-faradi/" rel="noreferrer" target="_blank" className=" text-white">
                        <FaLinkedin  className=" hover:scale-125 transition-all text-2xl  hover:text-sky-500"/>
                    </a>
                    <a href="https://www.discord.com/YF-01/" rel="noreferrer" target="_blank" className=" text-white ">
                        <FaDiscord  className=" hover:scale-125 transition-all text-2xl  hover:text-indigo-500"/>
                    </a>
                    <a href="https://www.instagram.com/yf.001/"  rel="noreferrer" target="_blank" className=" text-white">
                        <FaInstagramSquare className="hover:scale-125 transition-all text-2xl  hover:text-rose-500"/>
                    </a>
                </div>
                <div className="flex gap-3 items-center ps-4 justify-end ">
                    <label
                        onChange={MenuToggle}
                        className="lg:hidden block hamburger"
                    >
                        <input type="checkbox" />
                        <svg viewBox="0 0 32 32">
                            <path
                                className="line line-top-bottom"
                                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                            ></path>
                            <path className="line" d="M7 16 27 16"></path>
                        </svg>
                    </label>
                </div>
            </div>
        </>
    );
};

export default Header;
