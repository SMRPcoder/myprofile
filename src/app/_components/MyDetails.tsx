import Image from 'next/image'
import React from 'react'

export default function MyDetails() {
    return (
        <div className='flex justify-center items-center sm:h-screen w-full' >
            <div className='bg-white flex justify-center items-center text-center flex-col md:flex-row border rounded-2xl gap-2 right-0' >
                <Image className='rounded-l-2xl rounded-r-2xl sm:rounded-r-none' src="/img/pic1.jpeg" alt='Raja.jpeg' width={200} height={200} />
                <div className='text-center' >
                    <div className='flex md:flex-row flex-col gap-2 justify-center text-center' >                        
                    <h1 className='font-extrabold text-5xl text-center' >Raja</h1>
                    <h1  className='font-extrabold text-5xl text-center'>pandeeswaran</h1>
                    </div>
                    <p className='text-center mt-2 p-2' >
                        I’m a Nodejs Backend Developer with a passion for building dynamic, scalable applications using modern frameworks
                        like NestJS, ExpressJS and React, Next.js. Skilled in designing efficient backends, integrating APIs, and working
                        with databases like PostgreSQL,MongoDB, along with ORMs like Sequelize. A clean-code enthusiast who thrives
                        under pressure and enjoys solving complex problems with practical, high-impact solutions.
                    </p>
                </div>
            </div>
        </div>
    )
}
