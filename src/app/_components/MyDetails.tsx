import Image from 'next/image'
import React from 'react'

export default function MyDetails() {
    return (
        <div className='flex justify-center items-center sm:h-screen w-full' >
            <div className='bg-white flex justify-center items-center text-center flex-col md:flex-row border rounded-2xl gap-2 right-0' >
                <Image className='rounded-l-2xl rounded-r-2xl sm:rounded-r-none' src="/img/pic1.jpeg" alt='Raja Pandeeswaran' width={200} height={200} />
                <div className='text-center' >
                    <div className='flex md:flex-row flex-col gap-2 justify-center text-center' >                        
                    <h1 className='font-extrabold text-5xl text-center' >Raja</h1>
                    <h1  className='font-extrabold text-5xl text-center'>pandeeswaran</h1>
                    </div>
                    <p className='text-center mt-2 p-2' >
                        Backend developer with 3.5 years of focused experience in Node.js, building production-grade REST APIs using NestJS on
both Express and Fastify adapters — not just writing code, but understanding how the pieces fit together under the hood.
Started with Node.js from day one and have gone deep on it, while actively expanding into Python for AI-driven features
and keeping a close eye on Golang as a next step. Bring a solid understanding of the full JavaScript ecosystem- from how
the browser executes JS, through React’s rendering model, to how Next.js handles server-side logic- which makes cross-team
collaboration with frontend engineers natural and effective. Driven by curiosity, not just deadlines
                    </p>
                </div>
            </div>
        </div>
    )
}
