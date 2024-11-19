import Image from "next/image";
import com from "@/public/laptop.png";

const page = () => {
    return (
      <section className="bg-gray-900 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-50 mt-10">About Me</h2>
          <div className="mt-10 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-14">
            
            <div className="flex items-center justify-center">
                <Image src={com} alt="pc" className="rounded-xl"/>
            </div>
            
            <div>
                <p className="mt-4 text-slate-200 text-lg py-3 px-7">
                I{"'"}m a passionate frontend developer specializing in creating responsive, dynamic, and user-friendly web applications. With expertise in React, Next.js, and modern JavaScript, I aim to transform creative designs into seamless digital experiences. My approach combines clean code, performance optimization, and a deep understanding of user-centric design.
                <br /> <br />
                Beyond coding, I{"'"}m constantly exploring new technologies to stay ahead of trends in web development. I{"'"}m committed to crafting solutions that not only meet client goals but also delight users.
                </p>
            </div>
            
            
          </div>
          
          <div className="mt-6">
            <a
              href="#contact"
              className="bg-yellow-900 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-yellow-700 transition duration-300"
            >
              Let{"'"}s Connect
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default page;
  