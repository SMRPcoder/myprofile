import React from 'react'

export default function SkillTopBar({onClick,isShell}:{onClick:(key:"terminal"|"stack")=>void,isShell:boolean}) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-center mb-6 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl font-black">
                Skill Views
            </div>
            <div className="border border-gray-300 py-3 flex gap-1 shadow-xl rounded-md">
                <div className={`group relative px-4 cursor-pointer ${isShell?"border bg-white rounded":""}`}>
                    <div onClick={()=>onClick("terminal")} className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="800px"
                            height="800px"
                            viewBox="0 0 16 16"
                            fill={`#000000`}
                        >
                            <path d="M13.655 3.56L8.918.75a1.785 1.785 0 0 0-1.82 0L2.363 3.56a1.889 1.889 0 0 0-.921 1.628v5.624a1.889 1.889 0 0 0 .913 1.627l4.736 2.812a1.785 1.785 0 0 0 1.82 0l4.736-2.812a1.888 1.888 0 0 0 .913-1.627V5.188a1.889 1.889 0 0 0-.904-1.627zm-3.669 8.781v.404a.149.149 0 0 1-.07.124l-.239.137c-.038.02-.07 0-.07-.053v-.396a.78.78 0 0 1-.545.053.073.073 0 0 1-.027-.09l.086-.365a.153.153 0 0 1 .071-.096.048.048 0 0 1 .038 0 .662.662 0 0 0 .497-.063.662.662 0 0 0 .37-.567c0-.206-.112-.292-.384-.293-.344 0-.661-.066-.67-.574A1.47 1.47 0 0 1 9.6 9.437V9.03a.147.147 0 0 1 .07-.126l.231-.147c.038-.02.07 0 .07.054v.409a.754.754 0 0 1 .453-.055.073.073 0 0 1 .03.095l-.081.362a.156.156 0 0 1-.065.09.055.055 0 0 1-.035 0 .6.6 0 0 0-.436.072.549.549 0 0 0-.331.486c0 .185.098.242.425.248.438 0 .627.199.632.639a1.568 1.568 0 0 1-.576 1.185zm2.481-.68a.094.094 0 0 1-.036.092l-1.198.727a.034.034 0 0 1-.04.003.035.035 0 0 1-.016-.037v-.31a.086.086 0 0 1 .055-.076l1.179-.706a.035.035 0 0 1 .056.035v.273zm.827-6.914L8.812 7.515c-.559.331-.97.693-.97 1.367v5.52c0 .404.165.662.413.741a1.465 1.465 0 0 1-.248.025c-.264 0-.522-.072-.748-.207L2.522 12.15a1.558 1.558 0 0 1-.75-1.338V5.188a1.558 1.558 0 0 1 .75-1.34l4.738-2.81a1.46 1.46 0 0 1 1.489 0l4.736 2.812a1.548 1.548 0 0 1 .728 1.083c-.154-.334-.508-.427-.92-.185h.002z" />
                        </svg>

                    </div>
                    <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                        Terminal&nbsp;View
                    </span>
                </div>
                <div className={`group relative px-4 cursor-pointer ${!isShell?"border bg-white rounded":""}`}>
                    <div onClick={()=>onClick("stack")} className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.04582 10.8715C8.52718 10.6007 8.6979 9.99103 8.42713 9.50967C8.15637 9.02831 7.54665 8.85759 7.0653 9.12836L3.50974 11.1284C3.18725 11.3098 2.99128 11.6544 3.0003 12.0243C3.00931 12.3942 3.22184 12.7289 3.55279 12.8944L5.63258 13.9343L3.50974 15.1284C3.18725 15.3098 2.99128 15.6544 3.0003 16.0243C3.00931 16.3942 3.22184 16.7289 3.55279 16.8944L11.5528 20.8944C11.8343 21.0351 12.1657 21.0351 12.4472 20.8944L20.4472 16.8944C20.7782 16.7289 20.9907 16.3942 20.9997 16.0243C21.0087 15.6544 20.8128 15.3098 20.4903 15.1284L18.3674 13.9343L20.4472 12.8944C20.7782 12.7289 20.9907 12.3942 20.9997 12.0243C21.0087 11.6544 20.8128 11.3098 20.4903 11.1284L16.9347 9.12836C16.4533 8.85759 15.8436 9.02831 15.5729 9.50967C15.3021 9.99103 15.4728 10.6007 15.9542 10.8715L17.8679 11.948L12 14.8819L6.13213 11.948L8.04582 10.8715ZM16.2077 15.0141L12.4472 16.8944C12.1657 17.0351 11.8343 17.0351 11.5528 16.8944L7.7923 15.0141L6.13213 15.948L12 18.8819L17.8679 15.948L16.2077 15.0141Z"
                                    fill="#000000"
                                />{" "}
                                <path
                                    d="M12.4472 3.10557C12.1657 2.96481 11.8343 2.96481 11.5528 3.10557L3.55279 7.10557C3.214 7.27496 3 7.62123 3 8C3 8.37877 3.214 8.72504 3.55279 8.89443L11.5528 12.8944C11.8343 13.0352 12.1657 13.0352 12.4472 12.8944L20.4472 8.89443C20.786 8.72504 21 8.37877 21 8C21 7.62123 20.786 7.27496 20.4472 7.10557L12.4472 3.10557Z"
                                    fill="#3a3f45"
                                />{" "}
                            </g>
                        </svg>

                    </div>
                    <span className="absolute -top-8 left-[50%] -translate-x-[50%] flex z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                        Stack&nbsp;View
                    </span>
                </div>
            </div>
        </div>
    )
}
