import React from 'react'
import Maxwidth from './Maxwidth'
import Image from 'next/image'
import kabir from '../public/kabir.jpg'
import bg from '../public/bg.jpg'


const Hero = () => {
  return (
    <div>
        <Maxwidth className='relative flex flex-col'>
            <div className="object-cover relative">
                <Image className='relative' src={bg} alt='background'/>
            </div>
            <div className=" absolute mt-20 lg:mt-36 ">
                <Image className='object-cover rounded-full h-40 w-40 shadow-lg shadow-white' src={kabir} alt='profile'/>
                <p className='mt-5 lg:mt-10 text-4xl font-bold uppercase '>devloper</p>
                <div className="flex gap-10 font-bold mt-5 lg:mt-16">
                    <button className='px-5 py-2 rounded-[8px] bg-gradient-to-tr from-black via-yellow-900 to-black uppercase hover:text-gray-400 text-sm'>project</button>
                    <button className='px-6 py-2 rounded-[8px] border-2 border-yellow-900 uppercase hover:text-gray-400 text-sm'>about me</button>
                </div>
            </div>
        </Maxwidth>
    </div>
  )
}

export default Hero