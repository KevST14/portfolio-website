import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
    </>
  );
}
