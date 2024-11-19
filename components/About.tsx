import React from 'react'
import Maxwidth from './Maxwidth'
import Image from 'next/image'
import pad from '../public/pading.png'
import link from '../public/link.png'
import what from '../public/whatsap.png'
import git from '../public/github.png'
import emai from '../public/email.png'
import CommentBox from './CommentBox'
import Link from 'next/link'
import { Check } from 'lucide-react'


const About = () => {



  const email = "kaabir24124@gmail.com"

  const phoneNumber = "01771643034"
  const message = "Hello!"

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
  <div id='about'>  
    <Maxwidth className='mt-10 lg:mt-20 '>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
        <Image className='mt-20' src={pad} alt='last'/>
          <div className="absolute">
            <p className='text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-700 via-white to-yellow-700 text-transparent bg-clip-text w-1/2'>Let{"'"}s create something amazing together!</p>
          </div>
            <div className="">
            <CommentBox/>
            </div>
        </div>
        <p className='text-3xl font-semibold mt-10'>Get in Touch</p>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-x-10 my-10">
          <p className='mt-10 text-muted-foreground text-lg'>If you're looking for a dedicated developer to bring your vision to life, feel free to reach out. I'm always open to new opportunities and exciting collaborations.</p>
          <ul className='mt-10 gap-5 font-medium'>
            <li className='flex text-xl gap-3'><Check/> Figma to Code</li>
            <li className='flex text-xl gap-3'><Check />Scratch to Modern Web</li>
            <li className='flex text-xl gap-3'><Check />Fully Responsive Design</li>
            <li className='flex text-xl gap-3'><Check />Version control withe Git</li>
          </ul>
        </div>
        
        <div className="flex items-center justify-center gap-x-8 py-10" id='contact'>
          <Link href="https://www.linkedin.com/in/humayon-kabir-119931331">
          <Image className='h-8 w-8' src={link} alt='linked in'/>
          </Link>
          <Link href={`mailto:${email}`}>
          <Image className='h-8 w-8' src={emai} alt='email'/>
          </Link>
          <Link href={whatsappUrl} target="_blank">
          <Image className='h-8 w-8' src={what} alt='whatsapp'/>
          </Link>
          <Link href="https://github.com/HumayonKabirWD">
          <Image className='h-8 w-8' src={git} alt='github'/>
          </Link>
        </div>
        
        
    </Maxwidth>
  </div>  
  )
}

export default About