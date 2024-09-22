import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio"
import Skills from "@/components/Skills"; 
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Skills/>
    </>
  );
}
