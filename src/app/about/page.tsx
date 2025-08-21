import AboutComponent from '@/componets/AboutComponent';
import React from 'react';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About RajaPandeeswaran",
  description: "About page of RajaPandeeswaran portfolio",
};

export default function About() {
  return (
   <AboutComponent/>
  )
}
