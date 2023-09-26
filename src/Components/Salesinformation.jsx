import React from 'react'

 function Salesinformation({title,placeholder,input}) {
  return <>
    <div className="form-outline">
    <label className="form-label " for="form8Example4">{title}</label>
    <input type={input} id="form8Example4"placeholder={placeholder} className="form-control" />
  </div>

 </> 
}

export default Salesinformation