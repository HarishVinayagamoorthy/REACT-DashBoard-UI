import { useState } from 'react'



import Dashboard from './Components/Dashboard'
import Slider from './Components/Slider'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const [data, setData] = useState([{

    invoiceid:'#AHGA68',
    date:'23/09/2023',
    customer:'jacob Marcus',
    payableamount:'$100',
    paidamount:'$000',
    due:'000'




  },
  {

    invoiceid:'#AHGA68',
    date:'23/09/2023',
    customer:'jacob Marcus',
    payableamount:'$100',
    paidamount:'$000',
    due:'000'




  },
  {

    invoiceid:'#AHGA68',
    date:'23/09/2023',
    customer:'jacob Marcus',
    payableamount:'$100',
    paidamount:'$000',
    due:'000'




  },

  {

    invoiceid:'#AHGA68',
    date:'23/09/2023',
    customer:'jacob Marcus',
    payableamount:'$100',
    paidamount:'$000',
    due:'000'




  },
  {

    invoiceid:'#AHGA68',
    date:'23/09/2023',
    customer:'jacob Marcus',
    payableamount:'$100',
    paidamount:'$000',
    due:'000'




  },

  {

    invoiceid:'#AHGA68',
    date:'23/09/2023',
    customer:'jacob Marcus',
    payableamount:'$100',
    paidamount:'$000',
    due:'000'




  },

  {

    invoiceid:'#AHGA68',
    date:'23/09/2023',
    customer:'jacob Marcus',
    payableamount:'$100',
    paidamount:'$000',
    due:'000'




  },

  {

    invoiceid:'#AHGA68',
    date:'23/09/2023',
    customer:'jacob Marcus',
    payableamount:'$100',
    paidamount:'$000',
    due:'000'




  },

])
  
    
    
 


  return <>
   
  <div className="container-fluid Total-Dashboard">
  <div className="row content  ">
  {/* <BrowserRouter>
       <Slider/>
       <Routes>
       <Route path='/dashboard' element={<Dashboard data={data} setData={setData}/>}/>
      </Routes>
      </BrowserRouter> */}
 <Slider/>
<Dashboard data={data} setData={setData}/>
      </div>
      </div>
   
      
  </>
}

export default App
