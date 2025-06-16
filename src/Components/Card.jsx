import React from 'react'
import { Link } from 'react-router-dom'


export default function Card({text1, image, text2, text3, link, height, width, flexDirection, display, border, imageClass, text1Class, text2Class, text3Class , cardClass, linkClass  }) {

const design = {
    height : height,
    width : width,
    flexDirection : flexDirection,
    display :  display,
    border : border
}

const images = {
    
}

  return (
    <div  className={cardClass}>
   <img src= {image} alt="" className={imageClass}/>

   <p className={text1Class}>{text1}</p> 
   <Link className={linkClass}>{link}</Link>
    <p  className={text2Class}>{text2}</p>
    <p  className={text3Class}>{text3}</p>
    


    </div>
  )
}
