
import MyDetails from "./_components/MyDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raja Pandeeswaran Portfolio",
  description: "Portfolio of Raja Pandeeswaran — Backend Engineer skilled in Node.js, Next.js, NestJS, and scalable APIs. Explore my projects, resume, and experience in building modern web applications.",
  alternates: { canonical: '/' },
};

export default function Home() {

  return (
    <>
      <MyDetails />
    </>
  );
}
