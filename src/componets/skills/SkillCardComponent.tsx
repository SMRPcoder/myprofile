import React from 'react';


const SkillCardComponent = ({ cardsData }: { cardsData: SkillCardProps[] }) => {
    return (
        <div>
            <aside className="bg-black text-white p-6 rounded-lg w-full font-mono">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2 text-red-500">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <p className="text-sm">bash</p>
                </div>
                <div className="mt-4">
                    {cardsData.map((c,index1) => (
                        <div key={index1} >
                            <p className="text-green-400">$ {c.cmd}</p>
                            {c.processing.map((pro_cess, index2) => (
                                <p key={index2} className="text-white">{pro_cess}</p>
                            ))}
                        </div>
                    ))}
                    {/* <p className="text-green-400">$</p> */}

                </div>
            </aside>
        </div>
    );
}

export default SkillCardComponent;
