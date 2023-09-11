"use client"

import Image from 'next/image'
import Notiflix, { Notify } from 'notiflix';
import React, { useState, useEffect } from 'react'

export default function Navbar(props: { backgroundIndex: number, setBackgroundIndex: any, functions: { clickmainImage: any, clickInfo: any, clickStudies: any, clickProject: any, clickResume: any, contactme: any } }) {


    const bgImages: Array<string> = ["watercolor-texture-background.jpg", "dark-bg.jpg"];
    const darkEffect: Array<string> = ["moon.png", "sun.png"];

    // useEffect(():void => {
    //     if (props.showChild) {
    //         document.getElementById("menu_div")?.classList.remove("hidden");
    //     } else {
    //         document.getElementById("menu_div")?.classList.add("hidden");
    //     }
    // }, [props.showChild]);
    useEffect(() => {
        var mytheme: any = localStorage.getItem("theme");
        if (mytheme) {
            mytheme = JSON.parse(mytheme);
            console.log(mytheme);
            var mythemevals: string[] = Object.values(mytheme);
            if (mythemevals.includes("dark") && !document.body.classList.contains("dark")) {
                document.body.classList.add("dark");
                props.setBackgroundIndex((props.backgroundIndex + 1) % bgImages.length);
                Notify.info("You Already Visited With Dark Mood so Dark Mood Enabed")
            }
        }
    }, [])

    useEffect((): void => {
        document.body.style.backgroundImage = `url("/${bgImages[props.backgroundIndex]}")`;
    }, [props.backgroundIndex]);

    const toggleBackground = (): void => {
        document.body.classList.toggle("dark");
        props.setBackgroundIndex((props.backgroundIndex + 1) % bgImages.length);
        localStorage.setItem("theme", JSON.stringify(document.body.classList));
    };


    return (
        <>
            <nav className='z-10 fixed top-0 ' >
                <div>
                    <div className='hover:cursor-pointer group flex flex-row' onClick={props.functions.clickmainImage}>
                        <Image className='navImg  m-4 dark:border-white rounded-full border-2 hover:border-[#00acf7] ' width={50} height={50} src="/rp-logo.jpg" alt='logo' />
                        <span className="invisible lg:visible xl:visible group-hover:opacity-100 transition-opacity bg-gray-200 px-1 text-sm text-black rounded-md absolute left-full
-translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Home</span>
                    </div>

                    <div id="menu_div" className="rounded-full relative z-10">

                        <div className="hover:cursor-pointer group flex relative" onClick={props.functions.clickInfo} >
                            <Image className='navImg m-4 rounded-full ease-in' width={50} height={50} src="/info.png" alt='logo' />
                            <span className="invisible lg:visible xl:visible group-hover:opacity-100 transition-opacity bg-gray-200 px-1 text-sm text-black rounded-md absolute left-full
-translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">My&nbsp;Info</span>
                        </div>
                        <div className="hover:cursor-pointer group flex relative" onClick={props.functions.clickStudies}>
                            <Image className='navImg m-4 rounded-full ease-in' width={50} height={50} src="/book.png" alt='logo' />
                            <span className="invisible lg:visible xl:visible group-hover:opacity-100 transition-opacity bg-gray-200 px-1 text-sm text-black rounded-md absolute left-full
-translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">My&nbsp;Studies</span>
                        </div>
                        <div className="hover:cursor-pointer group flex relative" onClick={props.functions.clickProject}>
                            <Image className='navImg m-4 ease-in' width={50} height={50} src="/project.png" alt='logo' />
                            <span className="invisible lg:visible xl:visible group-hover:opacity-100 transition-opacity bg-gray-200 px-1 text-sm text-black rounded-md absolute left-full
-translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">My&nbsp;Projects</span>
                        </div>
                        <div className="hover:cursor-pointer group flex relative" onClick={props.functions.clickResume}>
                            <Image className='navImg m-4 rounded-full ease-in' width={50} height={50} src="/resume.png" alt='logo' />
                            <span className="invisible lg:visible xl:visible group-hover:opacity-100 transition-opacity bg-gray-200 px-1 text-sm text-black rounded-md absolute left-full
-translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">My&nbsp;Resume</span>
                        </div>

                    </div>


                </div>
                <button onClick={props.functions.contactme} className='left-1/4 lg:left-28 px-2 m-6 fixed top-0 bg-black text-white border border-black dark:hover:bg-gray-400 dark:text-black dark:border-white dark:bg-white h-7 hover:bg-blue-500 text-sm rounded-full' >Contact Me</button>


            </nav>
            <div onClick={toggleBackground} className='z-10 fixed right-0 top-0' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} >
                <Image className='navImg m-4 relative left-0 rounded-full dark:hover:border-orange-500 border-black border-2 hover:border-white ' width={50} height={50} src={`/${darkEffect[props.backgroundIndex]}`} alt='logo' />

            </div>
        </>
    )
}
