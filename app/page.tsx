
import About from "@/components/About";
import Hero from "@/components/Hero";
import Myobject from "@/components/Myobject";
import Skill from "@/components/Skill";
import { LoadingProvider } from "./providers/LoadingProvider";
import { Suspense } from "react";



export default function Home () {

  return (
    <div>
      <Suspense fallback= {<div>loading...</div>}>

      <LoadingProvider>
        <Hero/>
        <Myobject/>
        <Skill/>
        <About/>
      </LoadingProvider>

      </Suspense>
    </div>
  );
};


