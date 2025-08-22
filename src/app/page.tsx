
import MyDetails from "./_components/MyDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raja Pandeeswaran Portfolio",
  description: "Raja Pandeeswaran Portfolio",
};

export default function Home() {

  return (
    <>
      <MyDetails />
    </>
  );
}
