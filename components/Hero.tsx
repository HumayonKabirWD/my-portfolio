"use client"

import React from 'react'
import Maxwidth from './Maxwidth'
import Image from 'next/image'
import kabir from '../public/kabir.jpg'
import react from '../public/react.svg'
import git from '../public/github.svg'
import next from '../public/next-js-svgrepo-com.svg'
import css from '../public/tailwind-svgrepo-com.svg'
import html from '../public/html-1.svg'
import java from '../public/js.png'
import bg from '../public/bg.jpg'
import Link from 'next/link'


const Hero = () => {
  return (
    <div>
        <Maxwidth className='flex flex-col'>
            <div className="object-cover relative">
                <Image className='relative' src={bg} alt='background'/>
            </div>
            <div className=" absolute mt-20 lg:mt-36 grid grid-cols-1 lg:grid-cols-2 scale-up1">
              <div>  
                <div className=" h-56 w-56 rounded-full relative overflow-hidden ml-5 shadow-2xl shadow-[#FEC88F]">
                    <Image className='scale-animation rounded-full'src={kabir} alt='profile'/>
                </div>
                <p className='mt-5 lg:mt-10 text-4xl font-bold uppercase '>devloper</p>
                <div className="flex gap-10 font-bold mt-5 lg:mt-16 w-full">
                    <Link href="#project" className='px-5 py-2 rounded-[8px] bg-gradient-to-tr from-black via-yellow-900 to-black uppercase text-gray-300 hover:text-white text-sm'>project</Link>
                    <Link href="#contact" className='px-6 py-2 rounded-[8px] border-2 border-yellow-900 uppercase hover:text-white text-gray-300 text-sm'>contact me</Link>
                </div>
              </div> 
                {/* the tecnology section */}

              <div className="hidden ml-20 lg:grid md:grid-cols-3 pr-10 pt-10 md:mt-56 lg:mt-64 gap-8 items-center scale-up3">
                <Link href="https://www.w3schools.com/html/html_computercode_elements.asp" className='hover:scale-105'>
                    <Image className='h-10 w-10' src={html} alt='react'/>
                    <p className='font-semibold py-3'>HTML</p>
                </Link>
                <Link href="https://www.javascript.com/" className='hover:scale-105'>
                    <Image className='h-10 w-10 ml-4' src={java} alt='javascript'/>
                    <p className='font-semibold py-3'>javaScript</p>
                </Link>
                <Link href="https://tailwindcss.com/" className='hover:scale-105'>
                    <Image className='h-10 w-10 ml-6' src={css} alt='react'/>
                    <p className='font-semibold py-3'>Tailwind CSS</p>
                </Link>
                <Link href="https://react.dev/" className='hover:scale-105'>
                    <Image className='h-10 w-10'src={react} alt='react'/>
                    <p className='font-semibold py-3'>React</p>
                </Link>
                <Link href="https://nextjs.org/" className='hover:scale-105'>
                    <Image className='h-10 w-10 ml-2' src={next} alt='react'/>
                    <p className='font-semibold py-3'>Next JS</p>
                </Link>
                <Link href="https://github.com/" className='hover:scale-105'>
                    <Image className='h-10 w-10 ml-3' src={git} alt='react'/>
                    <p className='font-semibold py-3'>Git Hub</p>
                </Link>
              </div>
        </div>
        </Maxwidth>
    </div>
  )
}

export default Hero