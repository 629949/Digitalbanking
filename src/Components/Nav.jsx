import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import{Menu, X} from 'lucide-react';


export default function Nav() {
const [isOpen, setIsOpen] = useState(false);



  return (
    <nav className=' flex justify-around w-screen h-25 items-center '>

        <div className="text-2xl"> 
           <img src="src\images\logo.svg" alt="" />
            </div>
     
     <div className="  w-[450px] flex justify-evenly items-center ">
        <ul className='flex justify-around w-96 text-2xl h-20  items-center font-normal text-gray-400 '>
        <Link
  className="relative h-20 flex items-center text-gray-700 transition duration-300"
>
  <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-green-400 after:to-blue-400 after:transition-all after:duration-300">
    Home
  </span>
</Link>

<Link
  className="relative h-20 flex items-center text-gray-700 transition duration-300"
>
  <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-green-400 after:to-blue-400 after:transition-all after:duration-300">
    About
  </span>
</Link>
<Link
  className="relative h-20 flex items-center text-gray-700 transition duration-300"
>
  <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-green-400 after:to-blue-400 after:transition-all after:duration-300">
    Contact
  </span>
</Link>
<Link
  className="relative h-20 flex items-center text-gray-700 transition duration-300"
>
  <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-green-400 after:to-blue-400 after:transition-all after:duration-300">
    Blog
  </span>
</Link>
<Link
  className="relative h-20 flex items-center text-gray-700 transition duration-300"
>
  <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-green-400 after:to-blue-400 after:transition-all after:duration-300">
    Careers
  </span>
</Link>
            
        </ul>
     </div>
{/* 
     <button className='text-2xl border h-18 rounded-4xl w-70 font-bold hover:bg-[]'>Request Invite</button> */}

<button class="bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:from-green-500 hover:to-blue-500 transition duration-300 h-[50px] w-[200px]">
  Request Invite
</button>

  <div className="sm:hidden">
    {isOpen ? (
      <X onclick={()=> setIsOpen(false)}/>
    ) : (
      <Menu onclick ={()=> setIsOpen(true)}/>
    )}

    {isOpen && (
  
  <div className="  w-[450px] flex justify-evenly items-center ">
  <ul className='flex justify-around w-96 text-2xl h-20  items-center font-normal text-gray-400 '>
  <Link
className="relative h-20 flex items-center text-gray-700 transition duration-300"
>
<span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-green-400 after:to-blue-400 after:transition-all after:duration-300">
Home
</span>
</Link>

<Link
className="relative h-20 flex items-center text-gray-700 transition duration-300"
>
<span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-green-400 after:to-blue-400 after:transition-all after:duration-300">
About
</span>
</Link>
<Link
className="relative h-20 flex items-center text-gray-700 transition duration-300"
>
<span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-green-400 after:to-blue-400 after:transition-all after:duration-300">
Contact
</span>
</Link>
<Link
className="relative h-20 flex items-center text-gray-700 transition duration-300"
>
<span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-green-400 after:to-blue-400 after:transition-all after:duration-300">
Blog
</span>
</Link>
<Link
className="relative h-20 flex items-center text-gray-700 transition duration-300"
>
<span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-green-400 after:to-blue-400 after:transition-all after:duration-300">
Careers
</span>
</Link>
      
  </ul>
</div>
    )}
  </div>

    </nav>
  )
}
