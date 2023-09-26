import React from 'react'
import SliderIcons from './SliderIcons'
import Slidernormal from './Slidernormal'
function Slider() {

  let slidericons =[{

    // logo:'Medico Sales',
    title:'Dashboard',
     icon:'fa-brands fa-microsoft',
     color: '#ffffff',
    color2:'#0a0a0a'


  },
{
  
  title:'Lab Test',
  icon:' fa-regular fa-clipboard',
  color: '#ffffff',
  
},
{
  
  title:'Appointment',
  icon:'fa-solid  fa-calendar-days',
  color: '#ffffff',
  


},
{
  
  title:'Medicine Order',
  icon:'fa-solid  fa-bag-shopping',
  color: '#ffffff',
  


},
{
  
  title:'Message',
  icon:' fa-solid fa-message',
  color: '#ffffff',
  


},
{
  
  title:'Payment',
  icon:'fa-solid fa-wallet',
  color: '#ffffff',
  


},
{
  
  title:'Settings',
  icon:'fa-solid  fa-gear',
  color: '#ffffff',
  


},]





  return <>
   <nav className="navbar navbar-inverse visible-xs">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>

      
      <a className="navbar-brand logo " href="#">Medico Sales</a>
    </div>

    <div className="collapse navbar-collapse" id="myNavbar"  >
      <ul className="nav navbar-nav navbar-inxs " >

    {

   slidericons.map((e,i)=>{

      return <SliderIcons 
              // logo={e.logo}
              title={e.title}
              icon={e.icon}
              color={e.color}
              key={i}
            />
      
      



   }) 

  


    }

</ul>
   </div>
   
  </div>
</nav>


    <div className="col-sm-2 sidenav hidden-xs ">
      <h2 className="logo ">Medico Sales</h2>
    

      {

slidericons.map((e,i)=>{

   return <Slidernormal 
           // logo={e.logo}
           title={e.title}
           icon={e.icon}
           color={e.color}
           key={i}
         />
   
   



}) 




 }




   </div>
  </>
}

export default Slider