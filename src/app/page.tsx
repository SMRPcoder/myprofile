"use client"

// import Navbar from '@/components/Navbar';
// import * as yup from "yup";
// import { Formik, Form,Field } from 'formik';
import { useEffect, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { Notify } from 'notiflix';

export default function Home() {
  // const myPics: Array<string> = ["my-pic.png", "mypic2.png"];

  // const [backgroundIndex, setBackgroundIndex] = useState(0);  

  // const valiadtionObject = yup.object().shape({
  //   firstname: yup.string().required("First Name Is Required"),
  //   lastname: yup.string(),
  //   email: yup.string().email().required("Email is Required To Contact"),
  //   subject: yup.string().required("Subject Not To Be Empty"),
  //   message: yup.string().required("Message is Required")
  // });

  // const initialvals: {
  //   firstname: string,
  //   lastname: string,
  //   email: string,
  //   subject: string,
  //   message: string
  // } = {
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   subject: "",
  //   message: ""
  // };
  // const CustomInputComponent = (props:any) => (
  //   <textarea style={{height:"121px"}} {...props} ></textarea>
  // );

  // const clickmainImage = () => {
  //   var cardItems = document.getElementsByClassName("card");
  //   Object.values(cardItems).forEach(element => {
  //     if (!element.classList.contains("hidden")) {
  //       element.classList.add("hidden");
  //       document.getElementById("main_card")?.classList.remove("hidden");
  //     }
  //   })
  // }

  // const contactme=()=>{
  //   var cardItems = document.getElementsByClassName("card");
  //   Object.values(cardItems).forEach(element => {
  //     if (!element.classList.contains("hidden")) {
  //       element.classList.add("hidden");
  //       document.getElementById("contact_card")?.classList.remove("hidden");
  //     }
  //   });
  // }

  // const clickInfo = () => {
  //   var cardItems = document.getElementsByClassName("card");
  //   Object.values(cardItems).forEach(element => {
  //     if (!element.classList.contains("hidden")) {
  //       element.classList.add("hidden");
  //       document.getElementById("info_card")?.classList.remove("hidden");
  //     }
  //   });
  // }
  // const clickStudies = () => {
  //   var cardItems = document.getElementsByClassName("card");
  //   Object.values(cardItems).forEach(element => {
  //     if (!element.classList.contains("hidden")) {
  //       element.classList.add("hidden");
  //       document.getElementById("studies_card")?.classList.remove("hidden");
  //     }
  //   });
  // }
  // const clickProject = () => {
  //   var cardItems = document.getElementsByClassName("card");
  //   Object.values(cardItems).forEach(element => {
  //     if (!element.classList.contains("hidden")) {
  //       element.classList.add("hidden");
  //       document.getElementById("project_card")?.classList.remove("hidden");
  //     }
  //   });

  // }
  // const clickResume = () => {
  //   var cardItems = document.getElementsByClassName("card");
  //   Object.values(cardItems).forEach(element => {
  //     if (!element.classList.contains("hidden")) {
  //       element.classList.add("hidden");
  //       document.getElementById("resume_card")?.classList.remove("hidden");
  //     }
  //   });
  // }

  // return (
  //   <>
  //     <Navbar {...{ backgroundIndex, 
  //                   setBackgroundIndex, 
  //                   functions: { clickmainImage, clickInfo, clickStudies, clickProject, clickResume,contactme } }} />

  //     <main id='main_container' className=' text-center md:text-center lg:items-center mt-20' >


  //       <div id="main_card" className='card '>
  //         <h1 className='text-black font-bold lg:text-4xl text-normal  left-0 dark:text-white text-ellipsis sm:text-xl' >RAJAPANDEESWARAN</h1>
  //         <h3 className="italic dark:text-white " >Full-Stack Developer</h3>
  //         <br></br>
  //         <p className='text-justify font-semibold text-ellipsis dark:text-white'>"Meet an exceptionally passionate and driven developer, fueled by an insatiable appetite for learning and a boundless enthusiasm for innovation. With an unyielding commitment to mastering the latest technologies and a relentless pursuit of excellence, I thrive on the thrill of tackling new challenges head-on. My curiosity is my guiding force, propelling me to explore uncharted territories in the ever-evolving landscape of technology. I approach each project with unwavering determination and an unquenchable thirst for knowledge, because I believe that the most exciting solutions are born from the relentless pursuit of improvement. If you're seeking a developer who not only embraces change but thrives in it, look no further. Together, we can turn every opportunity into a remarkable journey of growth and achievement."</p>

  //       </div>


  //       <div id="info_card" className=' hidden card'>
  //         <h1 className='text-black font-bold text-4xl  left-0 dark:text-white' >MY INFO</h1>
  //         <h3 className="italic dark:text-white " >Full-Stack Developer</h3>
  //         <br></br>
  //         <h1 className="italic  dark:text-white " >Professional Summary</h1>
  //         <p className='font-semibold text-ellipsis dark:text-white'>"I am a Backend Developer (software developer) who specializes in building
  //           and maintaining the server-side logic and infrastructure of web applications. I
  //           work on the "back end" of an application, which refers to the server, database,
  //           and other components that handle data processing, storage, and retrieval."</p>
  //         <br></br>
  //         <h1 className="italic dark:font-normal font-bold dark:text-white ">Node Js Express Framework</h1>
  //         <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
  //           <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "75%" }}> 75%</div>
  //         </div>
  //         <br></br>
  //         <h1 className="italic dark:font-normal font-bold dark:text-white ">Moongoose For MongoDB</h1>
  //         <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
  //           <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "65%" }}> 65%</div>
  //         </div>
  //         <br></br>
  //         <h1 className="italic dark:font-normal font-bold dark:text-white ">Sequelize For PostgreSQL</h1>
  //         <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
  //           <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "70%" }}> 70%</div>
  //         </div>
  //         <br></br>
  //         <h1 className="italic dark:font-normal font-bold dark:text-white ">React Js</h1>
  //         <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
  //           <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "50%" }}> 50%</div>
  //         </div>
  //         <br></br>
  //         <h1 className="italic dark:font-normal font-bold dark:text-white ">Next Js</h1>
  //         <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
  //           <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "50%" }}> 50%</div>
  //         </div>
  //         <br></br>
  //         <h1 className="italic dark:font-normal font-bold dark:text-white ">Tailwind css</h1>
  //         <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
  //           <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "50%" }}> 50%</div>
  //         </div>
  //         <br></br>
  //         <h1 className="italic dark:font-normal font-bold dark:text-white ">Python FastApi</h1>
  //         <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
  //           <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "50%" }}> 50%</div>
  //         </div>
  //         <br></br>
  //         <h1 className="italic dark:font-normal font-bold dark:text-white ">SQLAlchemy Framework for DataBase in Python</h1>
  //         <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
  //           <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "50%" }}> 50%</div>
  //         </div>
  //         <br></br>
  //         <h1 className="italic dark:font-normal font-bold dark:text-white ">HTML</h1>
  //         <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
  //           <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "50%" }}> 50%</div>
  //         </div>
  //         <br></br>
  //         <h1 className="italic dark:font-normal font-bold dark:text-white ">CSS</h1>
  //         <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
  //           <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "50%" }}> 50%</div>
  //         </div>

  //       </div>
  //       <div id='studies_card' className=' hidden card '>
  //         <h1 className='text-black font-bold text-4xl  left-0 dark:text-white' >My Studies Info</h1>
  //         <h3 className="italic dark:text-white " >BSC cd&ft</h3>
  //         <br></br>
  //         <hr className='dark:text-white'></hr>
  //         <br></br>

  //         <h1 className="italic dark:font-normal font-bold dark:text-white ">Bachelor of Science (BSC)
  //           2019 - 2022</h1>

  //         <p className='font-semibold text-ellipsis mt-2 dark:text-white'>Krishnasamy Arts and Sciences College, Sattur, TAMIL NADU
  //           India, Sattur</p>
  //         <p className='italic font-light mt-2 dark:text-white'>Bsc Fashion Tech</p>
  //         <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
  //           <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "73%" }}> 72%</div>
  //         </div>
  //         <br></br>
  //         <hr className='dark:text-white'></hr>

  //         <h1 className="italic dark:font-normal font-bold dark:text-white ">HSC -2018</h1>

  //         <p className='font-semibold text-ellipsis mt-2 dark:text-white'>Goverment Higher Secondary School, Sattur,
  //           TAMIL NADU</p>
  //         <p className='italic font-light mt-2 dark:text-white'>HSC</p>
  //         <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
  //           <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "72%" }}> 71.67%</div>
  //         </div>
  //         <br></br>
  //         <hr className='dark:text-white'></hr>

  //         <h1 className="italic dark:font-normal font-bold dark:text-white ">SSLC -2016</h1>
  //         <p className='font-semibold text-ellipsis mt-2 dark:text-white'>SHN Edward higher secondary school, Sattur,
  //           TAMIL NADU</p>
  //         <p className='italic font-light mt-2 dark:text-white'>SSLC</p>
  //         <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
  //           <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "89%" }}> 88.6%</div>
  //         </div>

  //       </div>
  //       <div id='project_card' className='hidden card'>
  //         <h1 className='text-black font-bold text-4xl  left-0 dark:text-white' >My Projects</h1>
  //         <h3 className="italic dark:text-white " >As A Backend Developer</h3>
  //         <br></br>
  //         <hr className='mt-2 mb-2'></hr>

  //         <h1 className='font-bold dark:text-white'>JOB PORTAL</h1>
  //         <p className='m-2 lowercase text-ellipsis dark:text-white'>
  //           - ITS A RECRUITER BASED PRODUCT , THIS GIVES AND PROGRESS
  //           A DATA OF CANDIDATES, CLIENT, SOURCE, RECRUITERS.
  //         </p>
  //         <hr className='mt-2 mb-2'></hr>
  //         <h1 className='font-bold dark:text-white'>RECRUITER COMMUNITY</h1>
  //         <p className='m-2 lowercase text-ellipsis dark:text-white'>
  //           - ITS A INTERNAL COMMUNICATION THAT WE
  //           CAN POST ,LIKE, COMMENT.
  //         </p>
  //         <hr className='mt-2 mb-2'></hr>

  //         <h1 className='font-bold dark:text-white'>RAMI</h1>
  //         <p className='m-2 lowercase text-ellipsis dark:text-white'>
  //           - ITS A ADMIN POSTING PLATFORM TO POST HTML PAGES AS A BLOG
  //           EMPLOYEES CAN VISIT AND LIKE COMMENT SHARE THE PAGE.
  //         </p>
  //       </div>
  //       <div id="resume_card" className='hidden card'>
  //         <h1 className='text-black font-bold text-4xl  left-0 dark:text-white' >My Resume</h1>
  //         <h3 className="italic dark:text-white " >Full-Stack Developer- <p className='text-sm'>If is Not loaded -</p><a className='text-sm text-blue-500 hover:underline' target='__blank' href="/RajaPandeeswaran-backendDev-1year.pdf">click here</a></h3>
  //         <br></br>
  //         <object className='w-full h-96' data='/RajaPandeeswaran-backendDev-1year.pdf' ></object>
  //       </div>
  //       <div id="contact_card" className='hidden card'>
  //         <Formik initialValues={initialvals} validationSchema={valiadtionObject} onSubmit={(value:any)=>{
  //           value["to"]="rajapandeeswarans369@gmail.com";
  //           emailjs.send("service_rulcv47","template_qk20ror",value,process.env.NEXT_PUBLIC_EMAILJS_ID).then((response)=>{
  //             Notify.success(response.text);
  //           }).catch((err)=>{
  //             console.error(err);
  //             Notify.warning("Error Happened");
  //           })

  //         }
  //           }>
  //             {({errors,touched})=>(
  //               <Form className='justify-between flex flex-col'>
  //             <label className='italic dark:text-white'>First Name:</label>
  //             <Field className={`border border-black ${errors.firstname?"border-red-500":""}`} name="firstname" />
  //             {errors.firstname && touched.firstname ? (
  //            <div className='text-lg font-semibold italic text-red-500'>{typeof errors.firstname=="string"?`*${errors.firstname}`:""}</div>
  //          ) : null}

  //             <label className='italic dark:text-white'>Last Name:</label>
  //             <Field className={`border border-black ${errors.lastname?"border-red-500":""}`} name="lastname" />
  //             {errors.lastname && touched.lastname ? (
  //            <div className='text-lg font-semibold italic text-red-500'>{typeof errors.lastname=="string"?`*${errors.lastname}`:""}</div>
  //          ) : null}

  //             <label className='italic dark:text-white'>Email:</label>
  //             <Field  className={`border border-black ${errors.email?"border-red-500":""}`} name="email" />
  //             {errors.email && touched.email ? (
  //            <div className='text-lg font-semibold italic text-red-500'>{typeof errors.email=="string"?`*${errors.email}`:""}</div>
  //          ) : null}

  //             <label className='italic dark:text-white'>Subject:</label>
  //             <Field className={`border border-black ${errors.subject?"border-red-500":""}`} name="subject" />
  //             {errors.subject && touched.subject ? (
  //            <div className='text-lg font-semibold italic text-red-500'>{typeof errors.subject=="string"?`*${errors.subject}`:""}</div>
  //          ) : null}

  //             <label className='italic dark:text-white'>Message:</label>
  //             <Field className={`border border-black ${errors.message?"border-red-500":""}`} as={CustomInputComponent} name="message" />
  //             {errors.message && touched.message ? (
  //            <div className='text-lg font-semibold italic text-red-500'>{typeof errors.message=="string"?`*${errors.message}`:""}</div>
  //          ) : null}
  //             <button type='submit' className='p-4 bg-blue-500 m-10 rounded-full border-2 border-white text-white hover:bg-blue-800 hover:border-black' >Send Mail</button>
  //           </Form>
  //             )}
            
  //         </Formik>
  //       </div>
  //       <div className='absolute'>
  //         <img className='top-[165px] left-0 relative lg:fixed xl:fixed' src="my-pic.png" alt='bg-img' />
  //       </div>
  //     </main>
  //   </>
  // )
    const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center px-2 bg-gradient-to-tr from-sky-300 via-sky-400 to-blue-500">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="py-4 px-6">
          <h2 className="text-4xl font-bold text-gray-800">Coming Soon</h2>
          <p className="mt-2 text-lg text-gray-600">
            We are working hard to bring you an amazing website. Stay tuned!
          </p>
        </div>

        <div className="py-4 px-6">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="border rounded-lg px-4 py-2">
              <div className="font-bold font-mono text-2xl text-gray-800">
                {timeLeft.days}d
              </div>
            </div>
            <div className="border rounded-lg px-4 py-2">
              <div className="font-bold font-mono text-2xl text-gray-800">
                {timeLeft.hours}h
              </div>
            </div>
            <div className="border rounded-lg px-4 py-2">
              <div className="font-bold font-mono text-2xl text-gray-800">
                {timeLeft.minutes}m
              </div>
            </div>
            <div className="border rounded-lg px-4 py-2">
              <div className="font-bold font-mono text-2xl text-gray-800">
                {timeLeft.seconds}s
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
