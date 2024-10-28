import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const Maxwidth = (
    {
        className,
        children
    }:{
        className?:string,
        children?:ReactNode
    }
) => {
  return (
    <div className={cn("max-w-screen-xl w-full px-5 lg:px-20 mx-auto", className)}>
        {children}
    </div>
  )
}

export default Maxwidth