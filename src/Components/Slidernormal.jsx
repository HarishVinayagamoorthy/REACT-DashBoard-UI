import React from 'react'

function Slidernormal({title,icon,color2}) {
  return<> <ul className="nav nav-pills nav-stacked ">
 <li><a href="#"><i className={` ${icon} style={${color2}}`}></i> {title}</a></li>

</ul>
</> 
}

export default Slidernormal