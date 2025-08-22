import AboutComponent from '@/componets/AboutComponent';
import React from 'react';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Raja Pandeeswaran",
  description: "About page of Raja Pandeeswaran portfolio",
};

export default function About() {
  return (
   <AboutComponent/>
  )
}
