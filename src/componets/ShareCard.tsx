import Image from 'next/image';
import React from 'react';
import LinkSVG from './icons/LinkSVG';

const ShareCard = ({img,link}:{img:string; link:string;}) => {
  return (
    <div className="bg-gray-200 w-48 h-64 rounded-lg">
      <div className="flex p-2 gap-1">
        <div>
          <span className="bg-green-500 inline-block center w-3 h-3 rounded-full" />
        </div>
        <div className="circle">
          <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full" />
        </div>
        <div className="circle">
          <span className="bg-red-500 box inline-block center w-3 h-3 rounded-full" />
        </div>
      </div>
      <div className="card__content">
        <Image className='w-full' src={img} alt='link' width={0} height={0} />
      </div>
      <a href={link} target='_blank' className='flex text-blue-400 hover:underline cursor-pointer justify-center items-center' >Open<LinkSVG/></a>
    </div>
  );
}

export default ShareCard;
