import React from 'react'
import './component1.css'
import data2 from './Untitled-design-94-1536x702.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Component2 = () => {
  return (
    <div className='comp-container'>
       <div class="card" style={{width: "45rem"}}>
  <img src={data2} class="card-img-top" alt="..." style={{height:"350px"}}/>
  <div class="card-body">
   
    <p class="card-text">Generate e-invoices effortlessly with just one click, automatically reconcile GSTR1,
       and conveniently cancel e-invoices directly using myBillBook e-invoicing software.</p>
    <a href="#" class="btn btn-primary">Get Started Now<FontAwesomeIcon icon ={faArrowRight} style={{marginLeft:"10px"}}></FontAwesomeIcon></a>
  </div>
</div>
    </div>
  )
}

export default Component2
