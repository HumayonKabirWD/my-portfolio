

import About from "@/components/About";
import Hero from "@/components/Hero";
import Myproject from "@/components/Myproject";
import Skill from "@/components/Skill";
import { LoadingProvider } from "./providers/LoadingProvider";



export default function Home () {

  return (
    <div>
      <LoadingProvider>
      <Hero/>
      <Myproject/>
      <Skill/>
      <About/>
      </LoadingProvider>
    </div>
  );
};


