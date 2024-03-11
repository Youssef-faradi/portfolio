import React from 'react';
import "./home.scss"
import pic from "../../../assets/images/pawel-czerwinski-W10XfpqLu4Y-unsplash.jpg"
import pic2 from "../../../assets/images/1673026228828.gif"
import js from "../../../assets/images/js.jpg"
import tailwind from "../../../assets/images/tailwind.jpg"
import html from "../../../assets/images/Html.jpg"
import css from "../../../assets/images/css.jpg"
import bootstrap from "../../../assets/images/bootstrap.jpg"
import rect from "../../../assets/images/React.jpg"
import laravel from "../../../assets/images/laravel.jpg"
import sass from "../../../assets/images/sass.jpg"
import trad from "../../../assets/images/tradding.gif"
import travel from "../../../assets/images/travel.jpg"
import social from "../../../assets/images/social.jpg"
import code from "../../../assets/images/code.png"
import { TypeAnimation } from 'react-type-animation';
import me from "../../../assets/images/Linkedin.jpg";

export const FirstSectionHome = () => {
    return (
        <>
            <div className="h-screen w-full bg-cover bg-center fixed z-n1" style={{ backgroundImage: `url(${pic})` }}>

            </div>
            <div className=' w-full h-fit  text-white px-[10%]  pt-[10vh]'>
                <div id='#home' className='w-full  h-[80vh] lg:flex-row flex items-center px-5 flex-col-reverse  justify-between'>
                    <div className='lg:w-[50%] w-[100%] pt-2 lg:pt-0'>
                        <h1>Hi There</h1>
                        <h1>Im Youssef Faradi,</h1>
                        <h1 className='font-bold bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 text-transparent bg-clip-text'><span className='text-white'>A</span>
                            <TypeAnimation
                                sequence={[
                                    ' full-stack backend developer',
                                    1000,
                                    ' Software Engineer',
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                    </div>
                    <div data-aos="fade-up-left" className='pt-[10vh]'>
                        <img width={'450px'} className='pic ' src={me} alt="" />
                    </div>
                </div>
                <div id='#about' className=' flex flex-col items-center gap-5 py-5 '>
                    <div className="bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 text-transparent bg-clip-text">
                        <h1 className='font-bold text-5xl border-b-4 border-[--pink]  rounded'>About</h1>
                    </div>
                    <div className='flex w-full items-center gap-5 lg:flex-row flex-col-reverse'>
                        <img src={pic2} alt="img" className='rounded-circle lg:h-[50vh] lg:w-[25vw] w-[60vw] h-[40vh]' />
                        <h4 className='w-full lg:w-[50vw] text-center leading-loose' ><span className='font-bold bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 text-transparent bg-clip-text'>Back End Web Developer</span> passionate about software development and crafting engaging user experiences. Demonstrated expertise in client interaction and project management honed through freelancing endeavors. Committed to advancing front-end skills and staying abreast of emerging technologies to deliver exceptional digital solutions.</h4>
                    </div>
                </div>
                <div id='#skills' className=' flex flex-col  items-center gap-5 pt-5  lg:py-5 z-1'>
                    <div className="bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 text-transparent bg-clip-text">
                        <h1 className='font-bold ms-4 text-5xl border-b-4 border-[--pink]  rounded'>Skills</h1>
                    </div>
                    <div className='flex gap-5 relative w-full h-[90vh] z-n1'>
                        <div className='flex flex-col items-center absolute left-[32vw] top-0 lg:left-[37vw]'>
                            <h4 className='text-base lg:text-xl bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 text-transparent bg-clip-text'>LARAVEL</h4>
                            <img src={laravel} alt="img" className='lg:w-[100px] w-[80px] rounded-circle jump' />
                        </div>
                        <div className='flex flex-col items-center absolute top-[15%] left-[8vw]  lg:top-[13%] lg:left-[25vw]'>
                            <h4 className='text-base lg:text-xl bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 text-transparent bg-clip-text'>JAVASRIPT</h4>
                            <img src={js} alt="img" className='lg:w-[100px] w-[80px] rounded-circle jump' />
                        </div>
                        <div className='flex flex-col items-center absolute top-[35%] left-[-5vw]  lg:top-[38%] lg:left-[18vw]'>
                            <h4 className='text-base lg:text-xl bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 text-transparent bg-clip-text'>SASS</h4>
                            <img src={sass} alt="img" className='lg:w-[100px] w-[80px] rounded-circle jump' />
                        </div>
                        <div className='flex flex-col items-center absolute  top-[55%] left-[6vw] lg:top-[65%] lg:left-[25vw]'>
                            <h4 className='text-base lg:text-xl bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 text-transparent bg-clip-text'>BOOTSTRAP</h4>
                            <img src={bootstrap} alt="img" className='lg:w-[100px] w-[80px] rounded-circle jump' />
                        </div>
                        <div className='flex flex-col items-center absolute  top-[55%] right-[6vw] lg:top-[65%] lg:right-[23vw]'>
                            <h4 className='text-base lg:text-xl bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 text-transparent bg-clip-text'>CSS</h4>
                            <img src={css} alt="img" className='lg:w-[100px] w-[80px] rounded-circle jump' />
                        </div>
                        <div className='flex flex-col items-center absolute  top-[35%] right-[-5vw]  lg:top-[38%] lg:right-[17vw]'>
                            <h4 className='text-base lg:text-xl bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 text-transparent bg-clip-text'>TAILWIND</h4>
                            <img src={tailwind} alt="img" className='lg:w-[100px] w-[80px] rounded-circle jump' />
                        </div>
                        <div className='flex flex-col items-center absolute top-[15%] right-[6vw] lg:top-[13%] lg:right-[24vw]'>
                            <h4 className='text-base lg:text-xl bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 text-transparent bg-clip-text'>REACT</h4>
                            <img src={rect} alt="img" className='lg:w-[100px] w-[80px] rounded-circle jump' />
                        </div>
                        <div className='flex flex-col items-center absolute top-[72%] left-[32vw] lg:top-[85%]  lg:left-[37vw] '>
                            <h4 className='text-base lg:text-xl bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 text-transparent bg-clip-text'>HTML</h4>
                            <img src={html} alt="img" className='lg:w-[100px] w-[80px] rounded-circle jump' />
                        </div>
                        <div className='flex flex-col items-center absolute top-[25%] lg:top-[22%] left-[13vw] lg:left-[27vw] '>
                            <img src={code} alt="img" className='rounded-circle  w-[250px] lg:w-[400px]' />
                        </div>
                    </div>
                </div>
                <div id='#projects' className=' flex flex-col  items-center gap-5 pt-5'>
                    <div className="lg:pt-[12vh] bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 text-transparent bg-clip-text">
                        <h1 className='font-bold text-5xl border-b-4 border-[--pink]  rounded'>Projects</h1>
                    </div>
                    <div className='flex gap-5 flex-col lg:flex-row z-n1'>
                        <div >
                            <div className="bg-gradient-to-tr from-indigo-500 from-0% via-violet-500 via-30%   to-[--pink] rounded-2xl shadow-sm shadow-[--purple] outline outline-slate-400 -outline-offset-8">
                                <div className="group overflow-hidden  relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:bg-[--purple] after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:h-12  before:absolute   before:bg-[purple] before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-[--pink] -outline-offset-8">
                                    <div className="z-10 flex flex-col items-center gap-2">
                                        <img src={social} alt="img" className=' w-[90%]  rounded' />
                                    </div>
                                </div>
                            </div>
                            <h4 className='pt-4 text-center bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 font-bold text-transparent bg-clip-text'>Social Media App "Zaymas"</h4>
                        </div>
                        <div>
                            <div className="bg-gradient-to-tr from-indigo-500 from-0% via-violet-500 via-30%   to-[--pink] rounded-2xl shadow-sm shadow-[--purple] outline outline-slate-400 -outline-offset-8">
                                <div className="group overflow-hidden  relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:bg-[--purple] after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:h-12  before:absolute   before:bg-[purple] before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-[--pink] -outline-offset-8">
                                    <div className="z-10 flex flex-col items-center gap-2">
                                        <img src={trad} alt="img" className=' w-[85%]  rounded' />
                                    </div>
                                </div>
                            </div>
                            <h4 className='pt-4 text-center bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 font-bold text-transparent bg-clip-text'>Trading Dashboard "Zaymas"</h4>
                        </div>
                        <div>
                            <div className="bg-gradient-to-tr from-indigo-500 from-0% via-violet-500 via-30%   to-[--pink] rounded-2xl shadow-sm shadow-[--purple] outline outline-slate-400 -outline-offset-8">
                                <div className="group overflow-hidden  relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:bg-[--purple] after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:h-12  before:absolute   before:bg-[purple] before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-[--pink] -outline-offset-8">
                                    <div className="z-10 flex flex-col items-center gap-2">
                                        <img src={travel} alt="img" className=' w-[85%] bg-cover z-n1  rounded' />
                                    </div>
                                </div>
                            </div>
                            <h4 className='pt-4 text-center bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 font-bold text-transparent bg-clip-text'>Tourist Platforme "Guide'ini"</h4>
                        </div>
                    </div>
                </div>
                <div id='contact' className=' flex flex-col w-full  items-center gap-5 py-5'>
                    <div className="bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 text-transparent bg-clip-text">
                        <h1 className='font-bold text-5xl border-b-4 border-[--pink] rounded'>Contact</h1>
                    </div>
                    <div className='flex gap-5 lg:flex-row flex-col w-full'>
                        <form action="" className='flex flex-col gap-5  lg:w-[50%]'>
                            <div className="flex items-center justify-center">
                                <div className="relative w-[100%]">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        className="w-[100%] lg:w-[80%] border-b-2 border-gray-300 py-1 focus:border-b-2 focus:border-[--pink] transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    <label
                                        htmlFor="username"
                                        className="absolute left-0 top-1 cursor-text peer-focus:text-md peer-focus:font-bold peer-focus:-top-4 transition-all peer-focus:text-[--purple]"
                                    >Name</label>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative w-[100%]">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className=" w-[100%] lg:w-[80%] border-b-2 border-gray-300 py-1 focus:border-b-2 focus:border-[--pink] transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-0 top-1 cursor-text peer-focus:text-md peer-focus:font-bold peer-focus:-top-4 transition-all peer-focus:text-[--purple]"
                                    >Email</label>
                                </div>
                            </div>
                            <div className="flex items-center justify-center ">
                                <div className='relative w-[100%]'>
                                    <textarea name="message" id="message" cols="23" rows="5" className='w-[100%] lg:w-[80%] border-b-2 border-gray-300 py-1 focus:border-b-2 focus:border-[--pink] transition-colors focus:outline-none peer bg-inherit border-o outline-none'>

                                    </textarea>
                                    <label htmlFor="message" className="absolute left-0 top-1 cursor-text peer-focus:text-md peer-focus:font-bold peer-focus:-top-4 transition-all peer-focus:text-[--purple]"
                                    >Message</label>
                                </div>
                            </div>
                        </form>
                        <div className='w-[100%] lg:w-[50vw] flex flex-col gap-4 justify-center items-center'>
                            <h1 className='text-5xl bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 font-bold text-transparent bg-clip-text '>Code makes life Easier</h1>
                            <div className='flex flex-col gap-4 w-[100%] lg:w-[65%]'>
                                <h4 className='text-[--pink]'><span className='bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 font-bold text-transparent bg-clip-text font-bold'>Phone</span>  : 07 62 15 25 21</h4>
                                <h4 className='text-[--pink]'><span className='bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 font-bold text-transparent bg-clip-text'>Email</span>    : faradiyoussef1@gmail.com</h4>
                                <h4 className='text-[--pink]'><span className='bg-gradient-to-r from-indigo-500 from-0% via-violet-500 via-30%   to-rose-600 font-bold text-transparent bg-clip-text'>Location</span> : Casablanca</h4>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <p >Created by @Youssef-Faradi</p>
                    </div>
                </div>
            </div>
        </>
    );
};
