import React from 'react'
import { ReactComponent as MyLogo } from "./assets/airbnb.svg"
import "./Nav.css";

const Nav = () => {
  return (
    <nav className='flex flex-col bg-black text-white'>
        <div className='flex justify-between my-8 px-16'>
            
            <MyLogo className="w-[125px] h-auto fill-white" />
            <ul className='flex'>
                <li className='p-2'>Places to stay</li>
                <li className='p-2'>Experiences</li>
                <li className='p-2'>Online Experiences</li>
            </ul>
            <ul className="flex">
                <li className='p-2'>Become a host</li>
                <li className='p-2'>logo</li>
                <li className='p-2'>sign in</li>
            </ul>
        </div>
        <div className='w-full flex justify-center'>
            hello
        </div>
    </nav>
  )
}

export default Nav