import React from 'react'
// import Table from 'react-bootstrap/Table';
import Salesinformation from './Salesinformation'



function Dashboard({data,setData}) {
      let salesinformationData = [{
   title:'Customer',
   placeholder:'Enter Costumer Name ',
    input:'text'
 },

 {
  title:'Invoice ID',
  placeholder:'Enter Invoice ID ',
   input:'number'
},

{
  title:'Start Date',
  placeholder:'Enter Start Date ',
   input:'text'
},
{
  title:'End date',
  placeholder:'Enter End date ',
   input:'text'
},
]








  return <> 
  <div className="container-fluid  col-sm-10  Dashboard ">
      
  <div className="form-outline   searchBar-total ">
  <input type="search" id="form1" className="form-control search-input-box" placeholder="  Search" aria-label="Search" />
  <i className="fa-regular fa-bell" style={{color: '#8f8f8f',
                                          BackgroundColor: '#fff'}}></i>
  </div>

 



  <h3 >Sales Information</h3>
  <div className="row sales-information">
  

     {
      salesinformationData.map((e,i)=>{
            return <div className="col-sm-3" key={i}>
            <div className="form-outline">
            <Salesinformation title={e.title}
                                     placeholder={e.placeholder}
                                     input={e.input}
                              
                                    
            
            
            />
             </div>
    </div>



      })
     }
    
   
  </div>
  
  <div className="row ">
    <table className="table table-hover px-5 ">
      <thead>
        <tr>
          <th scope="col"><input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
          <th scope="col">invoice ID</th>
          <th scope="col">Date</th>
          <th scope="col">Customer</th>
          <th scope="col">Payable Amount</th>
          <th scope="col">Paid Amount</th>
          <th scope="col">Due</th>
            
        </tr>
      </thead>
      <tbody>



        {
           data.map((e,i)=>{
           return <tr key={i}>
          <th scope="row"><input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
          <td className="text-primary">{e.invoiceid}</td>
          <td>{e.date}</td>
          <td>{e.customer}</td>
          <td>{e.payableamount}</td>
          <td>{e.paidamount}</td>
          <td>{e. due}</td>

        </tr>



           }) 
          
        }
        
      
      </tbody>
    </table>
</div>
</div>
</>
    
}

export default Dashboard