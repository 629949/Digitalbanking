import React from 'react'

export default function Card({text1, image, text2, text3, link, height, width, flexDirection, display, border, imageClass, text1Class, text2Class, text3Class   }) {

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
    <div style={design} className=' flex flex-col '>
   <img src= {image} alt="" className={imageClass}/>
   <p className={text1Class}>{text1}</p> 
    <p  className={text2Class}>{text2}</p>
    <p  className={text3Class}>{text3}</p>
    
    {link}

    </div>
  )
}
