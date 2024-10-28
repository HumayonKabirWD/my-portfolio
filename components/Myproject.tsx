"use client"

import React from 'react'
import Maxwidth from './Maxwidth'
import {  BarChart3Icon, FileTextIcon, Github, MessageSquareIcon, MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import mor from '../public/morden0ui.png'
import car from '../public/car-rental.png'
import Link from 'next/link'

const Myproject = () => {
  return (
    <Maxwidth className='mt-0'>
        <div className="w-full max-w-7xl mx-auto space-y-8">
      {/* Second Grid - 4 Box Layout */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">My project</h2>
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Box 1 */}
          <div className="bg-white shadow-lg transition-all hover:shadow-xl">
            <Image className='p-2' src={mor} alt='mordarn ui'/>
            <div className="flex items-start justify-between mt-2">
              <Link className='py-2 px-3 bg-gradient-to-r from-violet-800 via-yellow-800 to-red-900 text-transparent bg-clip-text flex gap-4 font-bold' href="https://morden-ui-xi.vercel.app/">See full web <span className='text-red-950'> <MoveRightIcon/></span></Link>
              <Link className='py-2 px-3 text-black' href="https://github.com/HumayonKabirWD/Morden-UI"><Github/> </Link>
            </div>
          </div>

          {/* Box 2 */}
          <div className=" bg-white shadow-lg transition-all hover:shadow-xl">
            <Image className='p-2' src={car} alt='mordarn ui'/>
            <div className="flex items-start justify-between mt-2">
              <Link className='py-2 px-3  bg-gradient-to-r from-violet-800 via-yellow-800 to-red-900 text-transparent bg-clip-text flex gap-4 font-bold' href="https://morden-ui-xi.vercel.app/">See full web <span> <MoveRightIcon/></span></Link>
              <Link className='py-2 px-3' href="https://github.com/HumayonKabirWD/Morden-UI"><Github/> </Link>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Documents</h3>
                <p className="text-gray-600">File analytics</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-orange-500">156</span>
                  <span className="text-red-500 text-sm ml-2">-3%</span>
                </div>
              </div>
              <FileTextIcon className="h-6 w-6 text-orange-500" />
            </div>
          </div>

          {/* Box 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Statistics</h3>
                <p className="text-gray-600">Performance data</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-green-500">92%</span>
                  <span className="text-green-500 text-sm ml-2">+5%</span>
                </div>
              </div>
              <BarChart3Icon className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </div>
        <div className="">
            
        </div>
    </div>
        
      </div>
    </div>
    </Maxwidth>
    
  )
}

export default Myproject