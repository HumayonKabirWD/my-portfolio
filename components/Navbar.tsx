import React from 'react'
import Maxwidth from './Maxwidth'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Maxwidth className='t-0 h-20 z-50 pt-5 absolute scale-up1'>
        <div className="flex items-center justify-between">
            <div className="font-bold text-2xl bg-gradient-to-tr from-white via-yellow-700 to-white text-transparent bg-clip-text">
                <Link href="/">Humayon kabir</Link>
            </div>
            <div className="flex gap-3 lg:gap-8  font-bold uppercase text-sm text-gray-300">
              <Link className='hover:scale-105' href="/">home</Link>
              <Link className='hover:scale-105' href="#project">project</Link>
              <Link className='hover:scale-105' href="#about">about</Link>
            </div>
        </div>
    </Maxwidth>
  )
}

export default Navbar