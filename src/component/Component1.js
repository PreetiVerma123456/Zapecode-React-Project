import React from 'react'
import './component1.css'
import data1 from './Untitled-design-95-1536x702.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Component1 = () => {
  return (
    <div className='comp-container'>
     <div class="card" style={{width: "45rem"}}>
  <img src={data1} class="card-img-top" alt="..." style={{height:"350px"}}/>
  <div class="card-body">
    
    <p class="card-text">Export your GSTR1 data in JSON format for seamless GST return filing.
       Access GSTR-2 and GSTR-3B reports to simplify GST tax filing for you or your CAs.</p>
    <a href="#" class="btn btn-primary">Get Started Now<FontAwesomeIcon icon ={faArrowRight} style={{marginLeft:"10px"}}></FontAwesomeIcon></a>
  </div>
</div>
    </div>
  )
}

export default Component1
