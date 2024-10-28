import React from 'react'
import Maxwidth from './Maxwidth'
import Image from 'next/image'
import car from '../public/car-rental.png'
import mor from '../public/morden0ui.png'

const Myproject = () => {
  return (
    <div>
        <Maxwidth className='mt-0'>
        <div className="flex items-center justify-center">
            <p className='text-4xl lg:text-6xl tracking-wider -mt-2 font-bold '>My Project</p>
        </div>
        <p>hell whats happen</p>
        <div className="flex flex-col">
            <div className="grid grid-cols-2">
                <div className="">
                    <Image src={mor} alt='mordarn ui'/>
                </div>
                <div className="">
                    <Image src={car} alt='car rent app'/>
                </div>
            </div>
        </div>
    </Maxwidth>
    </div>
    
  )
}

export default Myproject