import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "RajaPandeeswaran Resume",
  description: "Raja Pandeeswaran Resume",
};

export default function MyResume() {
  return (
    <div className='h-screen overflow-auto' >
      {/* https://docs.google.com/gview?url=/pdf/Rajapandeeswaran_backend_developer_3yrs.pdf&embedded=true */}
      <iframe
        src="/pdf/Rajapandeeswaran_backend_developer_3yrs.pdf"
        style={{ width: "100%", height: 500 }}
      />
      <div>If the preview not available.<a target='_blank' className='text-blue-500 hover:underline' href='/pdf/Rajapandeeswaran_backend_developer_3yrs.pdf' >Click Here.</a></div>
    </div>
  )
}
