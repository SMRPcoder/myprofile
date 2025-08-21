
import MyDetails from "./_components/MyDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RajaPandeeswaran Portfolio",
  description: "RajaPandeeswaran Portfolio",
};

export default function Home() {

  return (
    <>
      <MyDetails />
    </>
  );
}
