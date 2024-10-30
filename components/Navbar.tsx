import React from 'react'
import Maxwidth from './Maxwidth'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Maxwidth className='t-0 h-20 z-50 pt-5 absolute'>
        <div className="flex items-center justify-between">
            <div className="font-bold text-2xl bg-gradient-to-tr from-white via-yellow-700 to-white text-transparent bg-clip-text">
                <Link href="/">Humayon kabir</Link>
            </div>
            <div className="flex gap-3 lg:gap-8  font-bold uppercase text-sm text-gray-300">
              <Link href="/">home</Link>
              <Link href="/">project</Link>
              <Link href="/">about</Link>
            </div>
        </div>
    </Maxwidth>
  )
}

export default Navbar