"use client"

import React from 'react'
import Maxwidth from './Maxwidth'
import {  CodeXml, FileJson, Github, Layers, MonitorSmartphone, MoveRightIcon, Network } from 'lucide-react'
import Image from 'next/image'
import mor from '../public/uiiux.png'
import real from '../public/Realstate site.png'
import photo from '../public/PHOTO GALLERY.png'
import sta from '../public/stuning.png'
import car from '../public/carrent.png'
import todo from '../public/TO DO LIST.png'
import Link from 'next/link'

const page = [
  {
    title:"Responsive",
    text:"Ability to create websites that look and function well on various devices (mobile, tablet, desktop).",
    icon:<MonitorSmartphone/>
  },
  {
    title:"HTML & CSS Proficiency",
    text:" Strong foundational skills in HTML and CSS, including CSS Grid, Flexbox, and animations.",
    icon:<CodeXml/>
  },
  {
    title:"JavaScript (ES6+)",
    text:"Advanced knowledge of JavaScript for creating dynamic, interactive web applications.",
    icon:<FileJson/>
  },
  {
    title:"Frameworks & Libraries",
    text:"Experience with popular frontend frameworks like React, Next.js for building complex applications efficiently.",
    icon:<Network/>
  },
  {
    title:"UI/UX Best Practices",
    text:" Understanding of user-centered design principles for improving usability and accessibility.",
    icon:<Layers/>
  },
  {
    title:"Version Control",
    text:"Proficiency in Git and GitHub for collaboration and project management.",
    icon:<Github/>
  },
]

const Myobject = () => {
  return (
  <div id='project'> 
    <Maxwidth className='mt-72 lg:mt-10'>
        <div className="w-full max-w-7xl mx-auto space-y-8">
      {/* Second Grid - 4 Box Layout */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold py-5">My project</h2>
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
          {/* Box 1 */}
          <div className="max-w-sm max-h-min mx-auto overflow-hidden rounded-xl shadow-lg bg-white image">
            <Image className='p-2' src={mor} alt='ui'/>
            <div className="flex items-start justify-between my-2">
              <Link className='py-2 px-3 bg-gradient-to-r from-violet-800 via-yellow-800 to-red-900 text-transparent bg-clip-text flex gap-4 font-bold hover:text-black' href="https://morden-ui-xi.vercel.app/">See full web <span className='text-red-950'> <MoveRightIcon/></span></Link>
              <Link className='py-2 px-3 text-black' href="https://github.com/HumayonKabirWD/Morden-UI"><Github/> </Link>
            </div>
          </div>

          {/* Box 2 */}
          <div className="max-w-sm max-h-min mx-auto overflow-hidden rounded-xl shadow-lg bg-white image">
            <Image className='p-2' src={sta} alt='ui'/>
            <div className="flex items-start justify-between my-2 ">
            <Link className='py-2 px-3 bg-gradient-to-r from-violet-800 via-yellow-800 to-red-900 text-transparent bg-clip-text flex gap-4 font-bold hover:text-black' href="https://conva-crp.vercel.app/">See full web <span className='text-red-950'> <MoveRightIcon/></span></Link>
            <Link className='py-2 px-3 text-black' href="https://github.com/HumayonKabirWD/conva-crp"><Github/> </Link>
            </div>
          </div>

          {/* Box 3 */}
          <div className="max-w-sm max-h-min mx-auto overflow-hidden rounded-xl shadow-lg bg-white image">
            <Image className='p-2' src={real} alt='real ui'/>
            <div className="flex items-start justify-between my-2">
            <Link className='py-2 px-3 bg-gradient-to-r from-violet-800 via-yellow-800 to-red-900 text-transparent bg-clip-text flex gap-4 font-bold hover:text-black' href="https://val-realested.vercel.app/">See full web <span className='text-red-950'> <MoveRightIcon/></span></Link>
            <Link className='py-2 px-3 text-black' href="https://github.com/HumayonKabirWD/val-realested"><Github/> </Link>
            </div>
          </div>

          {/* Box 4 */}
          <div className="max-w-sm max-h-min mx-auto overflow-hidden rounded-xl shadow-lg bg-white image">
            <Image className='p-2' src={car} alt='car ui'/>
            <div className="flex items-start justify-between my-2">
            <Link className='py-2 px-3 bg-gradient-to-r from-violet-800 via-yellow-800 to-red-900 text-transparent bg-clip-text flex gap-4 font-bold hover:text-black' href="https://car-rent-delta-snowy.vercel.app/">See full web <span className='text-red-950'> <MoveRightIcon/></span></Link>
            <Link className='py-2 px-3 text-black' href="https://github.com/HumayonKabirWD/car_rent"><Github/> </Link>
            </div>
          </div>
          {/* Box 5 */}
          <div className="max-w-sm max-h-min mx-auto overflow-hidden rounded-xl shadow-lg bg-white image">
            <Image className='p-2' src={photo} alt='photo ui'/>
            <div className="flex items-start justify-between my-2">
            <Link className='py-2 px-3 bg-gradient-to-r from-violet-800 via-yellow-800 to-red-900 text-transparent bg-clip-text flex gap-4 font-bold hover:text-black' href="https://photo-gallary-lete.vercel.app/">See full web <span className='text-red-950'> <MoveRightIcon/></span></Link>
            <Link className='py-2 px-3 text-black' href="https://github.com/HumayonKabirWD/photo-gallary/tree/main?tab=readme-ov-file"><Github/> </Link>
            </div>
          </div>
          {/* Box 6 */}
          <div className="max-w-sm max-h-min mx-auto overflow-hidden rounded-xl shadow-lg bg-white image">
            <Image className='p-2' src={todo} alt='todo'/>
            <div className="flex items-start justify-between my-2">
            <Link className='py-2 px-3 bg-gradient-to-r from-violet-800 via-yellow-800 to-red-900 text-transparent bg-clip-text flex gap-4 font-bold hover:text-black' href="https://to-do-list-seven-eta-74.vercel.app/">See full web <span className='text-red-950'> <MoveRightIcon/></span></Link>
            <Link className='py-2 px-3 text-black' href="https://github.com/HumayonKabirWD/to-do-list?tab=readme-ov-file"><Github/> </Link>
            </div>
          </div>

        </div>
        <div className="flex flex-col">
          <p className='ml-3 text-5xl bg-gradient-to-tr from-white via-yellow-700 to-white text-transparent bg-clip-text md:text-6xl lg:text-6xl uppercase font-semibold'>frontend web developer </p>
          <div>

            {/* skill part  */}
            <div className="grid grid-cols-2 gap-y-8 mt-5 lg:mt-24">
              {page.map((item,i) =>(
                <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center" key={i}>
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-900">
                      {item.icon}
                    </div>
                  </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground px-5">{item.text}</p>
              </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  </Maxwidth>
  </div>  
  )
}

export default Myobject