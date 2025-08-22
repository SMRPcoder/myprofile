"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Sidebar() {
    const pathName = usePathname();
    const [isHidden, setIsHidden] = useState(true);
    const router = useRouter();

    const handleToggleSideBar = () => {
        setIsHidden(!isHidden);
    }

    const handleRouting = (to: string) => {
        setIsHidden(true);
        router.replace(`${to}/`);
    }
    return (
        <div className='z-40' >
            <button
                onClick={handleToggleSideBar}
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center z-40 p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                </svg>
            </button>
            <aside
                id="default-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isHidden ? "-translate-x-full sm:translate-x-0" : "translate-x-0"}`}
                aria-label="Sidebar"
            >
                <div className="sm:hidden bg-white flex justify-end p-2">
                    <button
                        onClick={handleToggleSideBar}
                        className="text-gray-500 hover:text-black focus:outline-none text-xl font-bold"
                        aria-label="Close sidebar"
                    >
                        <>
                            {/*?xml version="1.0" encoding="utf-8"?*/}
                            <svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                width={30}
                                height={40}
                                viewBox="0 0 110.395 122.88"
                                enableBackground="new 0 0 110.395 122.88"
                                xmlSpace="preserve"
                            >
                                <g>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M93.359,17.16L75.68,9.377L75.99,0h34.404v61.439v61.44H75.99l-0.311-6.835 l17.68-10.946V17.16L93.359,17.16z M82.029,79.239v-34.54H47.004V13.631L0,61.937l47.004,48.373v-31.07H82.029L82.029,79.239z"
                                    />
                                </g>
                            </svg>
                        </>

                    </button>
                </div>
                <div className="h-full flex flex-col justify-center items-center px-3 py-4 overflow-y-auto bg-gray-50">

                    <ul className="hidden sm:block space-y-2">
                        <li>
                            <Link href='/' className="font-bold text-2xl" >My Details</Link>
                        </li>
                        <li>
                            {pathName == "/" ? (<hr className='w-6 font-bold' />) : ""}
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            {pathName.includes("skills") ? (<hr className='w-6 font-bold' />) : (<></>)}
                            <Link href='/skills'>skills</Link>
                        </li>
                        <li>
                            {pathName.includes("myResume") ? (<hr className='w-6 font-bold' />) : (<></>)}
                            <Link href='/myResume'>Resume</Link>
                        </li>
                        <li>
                            {pathName.includes("projects") ? (<hr className='w-6 font-bold' />) : (<></>)}
                            <Link href='/projects'>projects</Link>
                        </li>
                        <li>
                            {pathName.includes("experience") ? (<hr className='w-6 font-bold' />) : (<></>)}
                            <Link href='/experience'>Experience</Link>
                        </li>
                        <li>
                            {pathName.includes("about") ? (<hr className='w-6 font-bold' />) : (<></>)}
                            <Link href='/about'>About</Link>
                        </li>

                    </ul>

                    <ul className="sm:hidden space-y-2">
                        <li>
                            <a onClick={() => handleRouting("/")} className="font-bold text-2xl" >My Details</a>
                        </li>
                        <li>
                            {pathName == "/" ? (<hr className='w-6 font-bold' />) : ""}
                            <a onClick={() => handleRouting("/")}>Home</a>
                        </li>
                        <li>
                            {pathName.includes("skills") ? (<hr className='w-6 font-bold' />) : (<></>)}
                            <a onClick={() => handleRouting("/skills")}>skills</a>
                        </li>
                        <li>
                            {pathName.includes("myResume") ? (<hr className='w-6 font-bold' />) : (<></>)}
                            <a onClick={() => handleRouting("/myResume")}>Resume</a>
                        </li>
                        <li>
                            {pathName.includes("projects") ? (<hr className='w-6 font-bold' />) : (<></>)}
                            <a onClick={() => handleRouting("/projects")}>projects</a>
                        </li>
                        <li>
                            {pathName.includes("experience") ? (<hr className='w-6 font-bold' />) : (<></>)}
                            <a onClick={() => handleRouting("/experience")}>Experience</a>
                        </li>
                        <li>
                            {pathName.includes("about") ? (<hr className='w-6 font-bold' />) : (<></>)}
                            <a onClick={() => handleRouting("/about")}>About</a>
                        </li>

                    </ul>
                </div>
            </aside>

        </div>
    )
}
