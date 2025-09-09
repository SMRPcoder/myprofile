
import MyDetails from "./_components/MyDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raja Pandeeswaran Portfolio",
  description: "Raja Pandeeswaran Portfolio, Nodejs Backend Developer, Nodejs Nestjs Expressjs Postgresql MongoDb, 3years of experience",
  alternates: { canonical: '/' },
};

export default function Home() {

  return (
    <>
      <MyDetails />
    </>
  );
}
