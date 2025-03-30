import React from 'react'

export default function Header() {
  return (
    <div className='bg-red-400 text-white p-10 flex justify-between items-center'>
      <h1 className='font-bold text-3xl'>HM Store</h1>
      <ul className='flex gap-6'>
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}