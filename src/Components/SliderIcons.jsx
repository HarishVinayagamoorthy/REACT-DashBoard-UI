import React from 'react'

function SliderIcons({title,icon,color}) {
 
  return <>
        <li><a href="#"><i className={` ${icon} style={${color}}`}></i> {title}</a></li>

      
       
      </>
}

export default SliderIcons