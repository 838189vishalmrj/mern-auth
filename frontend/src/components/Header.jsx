import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl p-4 mx-auto'>
            <Link to={'/'}>
              <h1 className='font-bold'>Auth App</h1>
            </Link>
            <ul className='flex gap-4'>
              <Link to={'/'}>Home</Link>
              <Link to={'/about'}>About</Link>
              <Link to={'/sign-in'}>Login</Link>
            </ul>
        </div>
    </div>
  )
}
