import React from 'react'
import Maxwidth from './Maxwidth'
import Image from 'next/image'
import pic from '../public/pngegg.png'


const Skill = () => {
  return (
    <Maxwidth className='mt-10'>
        <h3 className='text-4xl font-bold'>Workflow</h3>
        <div className="h-8 w-full rounded-2xl py-10 relative container">
            <div className="absolute h-8 text-left w-full bg-yellow-900 rounded-2xl"/>
            <div className="absolute h-8 text-left w-4/5 bg-red-700 rounded-2xl"/>
            <div className="absolute h-8 text-left w-3/5 bg-purple-500 rounded-2xl"/>
            <div className="absolute h-8 text-left w-2/5 bg-slate-300 rounded-2xl"/>
        </div>
        <div className="p-5 rounded-xl border-2 border-yellow-800 shadow-lg shadow-yellow-200 my-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="py-3">
              <Image src={pic} alt='responsive'/>
            </div>
            <div className="mt-10">
              <h3 className='text-5xl py-4 font-bold lg:text-6xl bg-gradient-to-r from-purple-500 via-red-700 to-yellow-900 text-transparent bg-clip-text'>Modern & Startling Landing page.</h3>
              <p className='text-lg text-muted-foreground mt-4'>I am a passionate frontend developer focused on building responsive and user-centered web applications. With expertise in JavaScript, React, and Next.js, I create modern, optimized websites that provide an engaging user experience. My goal is to combine functionality with beautiful, accessible design.</p>
            </div>
          </div>
        </div>
    </Maxwidth>
  )
}

export default Skill