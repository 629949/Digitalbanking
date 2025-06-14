import React from 'react'

export default function Nav() {
  return (
    <div className=' flex justify-around w-screen h-25 items-center'>

        <div className="text-2xl"> 
           <img src="src\images\logo.svg" alt="" />
            </div>
     
     <div className="">
        <ul className='flex justify-around w-96 text-2xl h-20  items-center'>
            <li>Home</li>
            <li> About</li>
            <li>Contact</li>
            <li>Blog </li>
            <li>Careers </li>
            
        </ul>
     </div>

     <button className='text-2xl border h-18 rounded-4xl w-70'>Request Invite</button>
    </div>
  )
}
