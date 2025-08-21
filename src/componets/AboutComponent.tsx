"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import LocationSVG from './icons/LocationSVG';
import ShareCard from './ShareCard';
import WhatsappSVG from './icons/WhatsappSVG';
import RedditSVG from './icons/RedditSVG';
import GithubSVG from './icons/GithubSVG';
import GmailSVG from './icons/GmailSVG';
import Link from 'next/link';
import ContactCardComponent from './ContactCardComponent';
import LinkedinSVG from './icons/LinkedinSVG';


const AboutComponent = () => {

    function isMobileDevice() {
        return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
            navigator.userAgent
        );
    }

    const allContacts = {
        whatsapp: {
            qrcode: "/whatsapp-qr.svg",
            link: isMobileDevice()?("https://web.whatsapp.com/send?phone=917604827123&text=hii%20raja"):(
                "https://api.whatsapp.com/send?phone=917604827123&text=hii%20raja"
            )
        },
        reddit: {
            qrcode: "/reddit-qr.svg",
            link: "https://reddit.com/user/rp_coder"
        },
        github: {
            qrcode: "/github-qr.svg",
            link: "https://github.com/SMRPcoder"
        },
        gmail: {
            qrcode: "/gmail-qr.svg",
            link: "mailto:rajapandeeswarans369@gmail.com"
        },
        linkedin:{
            qrcode: "/linkedin-qr.svg",
            link: "https://linkedin.com/in/rajapandeeswaran"
        }
    }
    const [qrDetails, setQrDetails] = useState<{
        qrName: keyof typeof allContacts;
        qrcode: string;
        link: string;
    }>({
        qrName: "whatsapp",
        ...allContacts["whatsapp"]
    })
    // api.whatsapp.com

    useEffect(() => {
        setQrDetails({
            qrName: "whatsapp",
            ...allContacts["whatsapp"]
        })
    }, []);

    const handleTabChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, changeTo: keyof typeof allContacts) => {
        e.preventDefault();
        setQrDetails({
            qrName: changeTo,
            ...allContacts[changeTo]
        })
    }

    const handleCopy = () => {
        if (window) {
            const text = window.location.href;
            navigator.clipboard.writeText(text)
                .then(() => alert("Link Copied to clipboard!"))
                .catch(err => console.error("Failed to copy: ", err));
        }
    }
    return (
        <div className='flex justify-center items-center lg:h-screen' >
            <div className="flex lg:flex-row flex-col p-8 w-full rounded-2xl gap-4 bg-white">
                <div className='flex-1' >
                    <div className='flex flex-col' >
                        <div className="flex flex-wrap">
                            <div className="flex gap-4 flex-wrap">
                                <Image className='rounded' src="/img/pic3.jpeg" alt='Raja Pandeeswaran' width={100} height={100} />
                                <div className="flex flex-col gap-1">
                                    <div className="flex gap-3 items-center -mt-1">
                                        <p className="md:text-4xl text-2xl font-semibold cursor-pointer">Raja Pandeeswaran</p>
                                        {/* <p className="text-sm text-[#ff6154] cursor-pointer">Follow</p> */}
                                    </div>
                                    <div className="font-light text-md text-[#4b587c]">Nodejs Backend Developer</div>
                                    <div className='font-light text-md flex items-center' >

                                        <div className="relative inline-flex">
                                            <div className="rounded-full bg-green-400 h-[8px] w-[8px] inline-block mr-2"></div>
                                            <div className="absolute animate-ping rounded-full bg-green-400 h-[8px] w-[8px] mr-2"></div>
                                        </div>
                                        <span>Actively seeking full-time backend-end roles.</span>
                                    </div>
                                    <div className="font-light text-md text-black">Mobile: <Link className='text-blue-600' href={"tel:+917604827123"} >+917604827123</Link></div>
                                    <div className="font-light text-md text-black">Mail: <Link className='text-blue-600' href={"mailto:rajapandeeswarans369@gmail.com"} >rajapandeeswarans369@gmail.com</Link></div>

                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-[#005ef6] text-xl tracking-[2px]">
                            #3 Years Of Experience
                        </div>
                        <div className="italic mt-2 flex items-center text-[18px] text-[#4b587c] font-normal">
                            <LocationSVG /> chennai
                        </div>
                        {/* <div className="italic mt-2 text-[18px] text-[#4b587c] font-normal">
                            Age: 24 (May-2001)
                        </div> */}
                        <div className="flex flex-wrap gap-6 text-[#4b587c] text-[12px] mt-4">
                            <span onClick={handleCopy} className="cursor-pointer hover:text-[#ff6154]">Share</span>
                            •
                            <Link href="/myResume" className="cursor-pointer hover:text-[#ff6154]">My Resume</Link>
                            •
                            <Link href="/projects" className="cursor-pointer hover:text-[#ff6154]">Projects</Link>
                            •
                            <Link href="/experience" className="cursor-pointer hover:text-[#ff6154]">Experience</Link>
                            •
                            <Link href="/skills" className="cursor-pointer hover:text-[#ff6154]">Skills</Link>

                        </div>
                        <div className="italic mt-2 text-[18px] text-[#4b587c] font-normal">
                            <ContactCardComponent />
                        </div>
                    </div>
                </div>
                <div className='flex-1' >
                    <div className='flex flex-col items-center justify-center' >
                        <div>
                            {/* From Uiverse.io by belmonde_4844 */}
                            <div className="flex flex-row p-2 border-y-4">
                                <button onClick={(e) => handleTabChange(e, "whatsapp")} className={`flex p-2 ${qrDetails.qrName == "whatsapp" ? "bg-gray-300 border hover:bg-white" : "hover:bg-gray-300"} rounded`}>
                                    <WhatsappSVG />
                                </button>
                                <button onClick={(e) => handleTabChange(e, "github")} className={`flex p-2 ${qrDetails.qrName == "github" ? "bg-gray-300 border hover:bg-white" : "hover:bg-gray-300"} rounded`}>
                                    <GithubSVG />
                                </button>
                                <button onClick={(e) => handleTabChange(e, "reddit")} className={`flex p-2 ${qrDetails.qrName == "reddit" ? "bg-gray-300 border hover:bg-white" : "hover:bg-gray-300"} rounded`}>
                                    <RedditSVG />
                                </button>
                                <button onClick={(e) => handleTabChange(e, "gmail")} className={`flex p-2 ${qrDetails.qrName == "gmail" ? "bg-gray-300 border hover:bg-white" : "hover:bg-gray-300"} rounded`}>
                                    <GmailSVG />
                                </button>
                                <button onClick={(e) => handleTabChange(e, "linkedin")} className={`flex p-2 ${qrDetails.qrName == "linkedin" ? "bg-gray-300 border hover:bg-white" : "hover:bg-gray-300"} rounded`}>
                                    <LinkedinSVG />
                                </button>
                            </div>
                        </div>

                        <ShareCard img={qrDetails.qrcode} link={qrDetails.link} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;
