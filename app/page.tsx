"use client"

import About from "@/components/About";
import Hero from "@/components/Hero";
import Myproject from "@/components/Myproject";
import Skill from "@/components/Skill";



export default function Home() {

  return (
    <div>
      <Hero/>
      <Myproject/>
      <Skill/>
      <About/>
    </div>
  );
}
