'use client'

import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  children: React.ReactNode
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition duration-200 cursor-pointer'
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:opacity-90',
    outline: 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white',
  }

  const finalClass = `${baseStyles} ${variants[variant]} ${className}`
  
  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  )
}
