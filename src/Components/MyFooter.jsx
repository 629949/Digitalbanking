import React from 'react'
import { Link } from 'react-router-dom'

export default function MyFooter() {
  return (
    <div className='w-[100%] lg:h-72  bg-blue-950 flex flex-col justify-evenly items-center h-[500px] md:h-[450px] lg:flex-row '>
        <div className='flex flex-col gap-5'>
        <img src="src\images\logo.svg" alt="" />

        <div className="">
            <ul className='flex gap-4'>
                <Link className='hover:bg-green-400'><img src="src\images\icon-facebook.svg" alt="" /></Link>
                <Link  className='hover:bg-green-400'><img src="src\images\icon-youtube.svg" alt="" /></Link>
                <Link  className='hover:bg-green-400'><img src="src\images\icon-twitter.svg" alt="" /></Link>
                <Link  className='hover:bg-green-400'><img 
                 className='hover:bg-green-400' src="src\images\icon-pinterest.svg" alt="" /></Link>
                <Link  className='hover:text-green-400 ' ><img src="src\images\icon-instagram.svg" alt="" /></Link>
            </ul>
        </div>
        </div>

        <div className='text-white'>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                <Link className='hover:text-green-600'>About us </Link>
                <Link className='hover:text-green-600'>Careers </Link>
                <Link className='hover:text-green-600'>Contact </Link>
                <Link className='hover:text-green-600'>Support </Link>
                <Link className='hover:text-green-600'>Blog </Link>
                <Link className='hover:text-green-600'>Privacy Policy</Link>
            </ul>
        </div>

        <div className='text-white'>
        <button class="bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:from-green-500 hover:to-blue-500 transition duration-300 h-[50px] w-[200px]">
  Request Invite
</button>
            <p>@Easybank. All Rights Reserved</p>
        </div>
    </div>
  )
}
