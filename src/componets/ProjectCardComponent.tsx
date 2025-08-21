import React from 'react';


const ProjectCardComponent = ({ cardsData }: { cardsData: ProjectCardProps[] }) => {
    return (
        <div className='flex md:flex-wrap md:flex-row flex-col justify-center gap-2' >
            {cardsData.map((c, ikey) => (
                <div key={ikey} className="md:w-[40%] p-6 bg-white shadow-lg rounded-lg space-y-4 font-mono">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {c.icons.map((icon, iiKey) => (
                                <div key={iiKey} className='flex justify-center items-center' >
                                    {iiKey != 0 ? (
                                        <span className="font-bold text-xl">+</span>
                                    ) :<></>}
                                    <div className={`${iiKey == 0 ? "w-10" : "w-[38px] ml-0.5"}`} >
                                        {icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-5">
                            {
                                c.secondaryIcons.map((sIcon, sindex) => (
                                    <div key={sindex} className="w-5 fill-slate-400 hover:fill-sky-400 duration-200">
                                        {sIcon}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <h1 className="capitalize font-medium text-lg">
                        {c.title} - {c.subtitle}
                    </h1>
                    <p className="text-slate-400 text-sm">
                        {c.description}
                    </p>
                    {
                        c.link ? (
                            <a target='_blank' href={c.link} className="flex items-center gap-3 text-blue-400 hover:underline font-medium cursor-pointer">
                                <span>View Site.</span>
                            </a>
                        ) : <></>
                    }

                </div>
            ))}

        </div>

    );
}

export default ProjectCardComponent;
