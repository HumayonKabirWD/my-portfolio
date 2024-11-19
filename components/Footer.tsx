import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear()
  
  return (
    <div>
        <div className="flex items-center justify-center h-16 text-muted-foreground border-t-2 border-dark-900">
          <p>&copy; {year} Humayon kabir </p>
        </div>
    </div>
  )
}

export default Footer