import React from 'react'
import CallSVG from './icons/CallSVG'
import GmailSVG from './icons/GmailSVG'
import Link from 'next/link'
import LinkedinSVG from './icons/LinkedinSVG'

export default function ContactCardComponent() {
    return (
        <div className='flex gap-2 items-center' >
            {/* <Link className='hover:scale-105' href={"tel:+917604827123"} ><CallSVG /></Link> */}
            <Link className='hover:scale-105' href={"mailto:rajapandeeswarans369@gmail.com"} ><GmailSVG /></Link>
            <Link className='hover:scale-105' href={"https://linkedin.com/in/rajapandeeswaran"} ><LinkedinSVG /></Link>

        </div>
    )
}
