import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import image_22 from './Untitled-design-81.webp'
import './Product.css';
import image_23 from './Untitled-design-84.webp'
import image_24 from './Untitled-design-78-1536x884.webp'
import image_25 from './Untitled-design-80.webp'
import image_26 from './Untitled-design-81.webp'
import image_27 from './Untitled-design-65.webp'
import image_28 from './1.webp'
import image_29 from './2.webp'
import image_30 from './3.webp'
import image_31 from './4.webp'
import image_32 from './5.webp'
import image_33 from './6-3.webp'
import image_34 from './2-1-1.webp'
import image_35 from './5-1.webp'
import image_36 from './4-1.webp'
import image_37 from './1-1.webp'
import image_38 from './2-1.webp'
import image_39 from './3-1.webp'
import { aliases } from "@fortawesome/free-brands-svg-icons/fa42Group";
import Flush from "./flush";
import YouTube from "react-youtube";
import Card from "./card";
import { FaWeight } from "react-icons/fa";
function ProductFinal(){
    return(
        <>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class = "Bcontainer-0 container ">
<div class = "row">
    <div class = " col-lg-5 Bcontainer-0-1 full-width-lg">
    <h1>India's Premier Inventory & Billing Software </h1>
<span><FontAwesomeIcon icon={faCheck} style = {{fontSize:"20px",float:"left" ,padding:"5px 10px ",color:"green"}}/>
<p> 100% Safe & Secure</p>
<button >Register Now</button></span>
    </div>
    <div class = " col-lg-7  Bcontainer-0-2 ">
        <img src = {image_22}></img>
   </div>
   
</div></div>
    </div>
    <div class="carousel-item">
    <div class = "Bcontainer-0 container ">
<div class = "row">
    <div class = " col-lg-5 Bcontainer-0-1 full-width-lg">
    <h1>Gst Billing Software Built For Every Business Model </h1>
<p>A modern and easiest online GST billing software to take your business to next level. </p>
<button >Login</button>
    </div>
    <div class = " col-lg-7  Bcontainer-0-2 ">
        <img src = {image_23}></img>
   </div>
</div></div>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
    <span class="carousel-control-prev-icon" aria-hidden="true" style= {{backgroundColor:"black"}}></span>
    <span class="visually-hidden" >Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true" style= {{backgroundColor:"black"}}></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class = " container BContainer-1">
    <div class = "row">
    <h1><span style ={{color:"blue"}}>One </span> Comprehensive Solution for
<span style ={{color:"blue"}}>All </span> your business needs
</h1>
<p>An All-in-One GST Billing and Business Management Software, Crafted for the Remarkable Small and Medium Businesses of India! </p>
</div>
</div>

<div class="container BContainer-2">
   
        <img class = "image_24" src={image_24} ></img>
        <img  class = "image_25 vert-move" src ={image_25} style = {{height:"400px",width:"350px"}}></img>
        <img  class = "image_26 vert-move" src ={image_25} style = {{height:"400px",width:"350px"}}></img>
    </div>
    <div class = " container BContainer-3 card-data" style={{marginTop:"60px"}}>
    
    <h1 style={{fontWeight:"600", marginLeft:"70px", marginBottom:"60px"}}>Master your billing processes.<br></br>
    Optimize your finances.</h1>


    <Card />
    </div>

    <div class = " container BContainer-3">
    
    <h1>Features you need in a<br></br>
  Billing Software</h1>
  
  <div class = "row">
  <div class = "col-lg-4 Bcontainer-3-1">
  <img src = {image_27}></img>
  
  </div>
  <div class = "col-lg-4">
  <div class="card Bcontainericons" style={{border:"none"}}>
    <div class="row g-0">
      <div class="col-md-3">
        <img src={image_28} class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-9">
        <div class="card-body" style = {{margin:"0px"}}>
          <p class="card-text"> WhatsApp & SMS Notification</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="card Bcontainericons" style={{border:"none"}}>
    <div class="row g-0">
      <div class="col-md-3">
        <img src={image_29} class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-9">
        <div class="card-body" style = {{margin:"0px"}}>
          <p class="card-text"> Digital Catalogue</p>
        </div>
      </div>
    </div>
    
  </div>
  <div class="card Bcontainericons" style={{border:"none"}}>
    <div class="row g-0">
      <div class="col-md-3">
        <img src={image_31} class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-9">
        <div class="card-body" style = {{margin:"0px"}}>
          <p class="card-text"> Service Reminders</p>
        </div>
      </div>
    </div>
  </div>
  
  </div>
  
  <div class = "col-lg-4">
  
  <div class="card Bcontainericons" style={{border:"none"}}>
    <div class="row g-0">
      <div class="col-md-3">
        <img src={image_30} class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-9">
        <div class="card-body" style = {{margin:"0px"}}>
          <p class="card-text"> Loyalty & Rewards Program</p>
        </div>
      </div>
    </div>
  </div>
  <div class="card Bcontainericons" style={{border:"none"}}>
    <div class="row g-0">
      <div class="col-md-3">
        <img src={image_33} class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-9">
        <div class="card-body" style = {{margin:"0px"}}>
          <p class="card-text"> Personalised Greetings</p>
        </div>
      </div>
    </div>
  </div>
  <div class="card Bcontainericons" style={{border:"none"}}>
    <div class="row g-0">
      <div class="col-md-3">
        <img src={image_32} class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-9">
        <div class="card-body" style = {{margin:"0px"}}>
          <p class="card-text"> Professional Business Cards</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  </div>
  </div>
  
  <div class = " container-fluid Bcontainer4">
  <div class = "container">
    <h1>Far more than you could ever expect <br></br>from billing software.</h1>
</div>


<div class = " container" style={{backgroundColor:"rgb(204, 210, 210)"}}>
<div class = " container Bcontainer5" >
    <div class = "row" >
      <div class = "col-md-4">
       <div class="card"  >
  <img src={image_34} class="card-img-top" alt="..." style = {{width:"60px",height:"60px",margin:"0px 20px"}}/>
  <div class="card-body">
    <p class="card-text" style = {{fontSize:"20px",fontWeight:"500"}}>Available in both English and Hindi.</p>
    
  </div>
</div>
</div>
<div class = "col-md-4">
<div class="card"  >
  <img src={image_37} class="card-img-top" alt="..." style = {{width:"60px",height:"60px",margin:"0px 20px"}}/>
  <div class="card-body">
    <p class="card-text" style = {{fontSize:"20px",fontWeight:"500"}}>Customer Support  And Training </p><br></br>
    
  </div>
</div></div>
<div class = "col-md-4">
            <div class="card"  >
  <img src={image_38} class="card-img-top" alt="..." style = {{width:"60px",height:"60px",margin:"0px 20px"}}/>
  <div class="card-body">
    <p class="card-text" style = {{fontSize:"20px",fontWeight:"500"}}>24x7 Call, WhatsApp,chat And  Email Support</p>
    
  </div>
</div></div>
</div>
<div class = "row">
  <div class = "col-md-4">
<div class="card"  >
  <img src={image_39} class="card-img-top" alt="..." style = {{width:"60px",height:"60px",margin:"0px 20px"}}/>
  <div class="card-body">
    <p class="card-text" style = {{fontSize:"20px",fontWeight:"500"}}>Safe cloud storage featuring .</p><br></br>
    </div>
  </div>
</div>
<div class = "col-md-4">
<div class="card"  >
  <img src={image_36} class="card-img-top" alt="..." style = {{width:"60px",height:"60px",margin:"0px 20px"}}/>
  <div class="card-body">
    <p class="card-text" style = {{fontSize:"20px",fontWeight:"500"}}>Clear policies with no hidden fees.</p><br></br>
    </div>  
  </div>
</div>
<div class = "col-md-4">
<div class="card"  >
  <img src={image_35} class="card-img-top" alt="..." style = {{width:"60px",height:"60px",margin:"0px 20px"}}/>
  <div class="card-body">
    <p class="card-text" style = {{fontSize:"20px",fontWeight:"500"}}>Regular Software And Updates</p><br></br>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>

<div class = "container-fluid Bcontainer6 ">
  <h1>Packages</h1>
</div>
<div class = "container-fluid">
<div class = "container Bcontainer7">
  <div class="row">
    <div class = "col md-4">
<div class="card" >
  <div style = {{backgroundColor:"rgb(3, 225, 250)"}}>
<h4 >1 MONTH</h4></div>
<div style = {{height:"100px",backgroundColor:"rgb(22, 203, 226)"}}></div>
  <div class= "pricecircle">
    <h5 >RS.899/-</h5>
  </div>
  
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-center">Business Locations</li>
    <li class="list-group-item text-center">Unlimited Users</li> 
    <li class="list-group-item text-center">Unlimited Products</li>
     <li class="list-group-item text-center">Unlimited Invoices</li>
     <li class="list-group-item text-center">15 days money back guarantee</li>
  </ul>
  <div class="card-body" style = {{textAlign:"center"}}>
  <button style = {{backgroundColor:"rgb(122, 203, 226)",padding:"15px 10px"}} >
    <a href="#" class="card-link" style = {{fontSize:"16px"}}>Register & Subscribe</a>
    </button>
  </div>
</div></div>
<div class = "col md-4">
<div class="card" >
  <div style = {{backgroundColor:"rgb(19, 241, 160)"}}>
<h4 >3 MONTH</h4></div>
<div style = {{height:"100px",backgroundColor:"rgb(123, 237, 195)",border:"none"}}></div>
  <div class= "pricecircle" style = {{backgroundColor:"rgb(19, 241, 160)"}}>
    <h5  >RS.2499/-</h5>
  </div>
  
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-center">Business Locations</li>
    <li class="list-group-item text-center">Unlimited Users</li> 
    <li class="list-group-item text-center">Unlimited Products</li>
     <li class="list-group-item text-center">Unlimited Invoices</li>
     <li class="list-group-item text-center">15 days money back guarantee</li>
  </ul>
  <div class="card-body" style = {{textAlign:"center"}}>
  <button style = {{backgroundColor:"rgb(123, 237, 195)",padding:"15px 10px"}} >
    <a href="#" class="card-link" style = {{fontSize:"16px"}}>Register & Subscribe</a>
    </button>
  </div>
  </div></div>
  <div class = "col md-4">
  <div class="card" >
  <div style = {{backgroundColor:"rgb(48, 131, 233)"}}>
<h4 >6 MONTH</h4></div>
<div style = {{height:"100px",backgroundColor:"rgb(81, 150, 233)"}}></div>
  <div class= "pricecircle" style = {{backgroundColor:"rgb(48, 131, 233)"}}>
    <h5 >RS.4499/-</h5>
  </div>
  
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-center">Business Locations</li>
    <li class="list-group-item text-center">Unlimited Users</li> 
    <li class="list-group-item text-center">Unlimited Products</li>
     <li class="list-group-item text-center">Unlimited Invoices</li>
     <li class="list-group-item text-center">15 days money back guarantee</li>
  </ul>
  <div class="card-body" style = {{textAlign:"center"}}>
  <button style = {{backgroundColor:"rgb(81, 150, 233)",padding:"15px 10px"}} >
  <a href="#" class="card-link" style = {{fontSize:"16px"}}>Register & Subscribe</a>
    </button>
  </div>
  </div>
  </div>
  <div class = "col md-4">
  <div class="card" >
  <div style = {{backgroundColor:"rgb(223, 74, 28)"}}>
<h4 >12 MONTH</h4></div>
<div style = {{height:"100px",backgroundColor:"rgb(216, 118, 88)"}}></div>
  <div class= "pricecircle" style = {{backgroundColor:"rgb(223, 74, 28)"}}>
    <h5 >RS.7999/-</h5>
  </div>
  
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-center">Business Locations</li>
    <li class="list-group-item text-center">Unlimited Users</li> 
    <li class="list-group-item text-center">Unlimited Products</li>
     <li class="list-group-item text-center">Unlimited Invoices</li>
     <li class="list-group-item text-center">15 days money back guarantee</li>
  </ul>
  <div class="card-body" style = {{textAlign:"center"}}>
    <button style = {{backgroundColor:"rgb(216, 118, 88)",padding:"15px 10px"}} >
    <a href="#" class="card-link" style = {{fontSize:"16px"}}>Register & Subscribe</a>
    </button>
  </div>
  </div>
  </div></div>
</div></div>

<div className="container-fluid castle-2">
                <div class="row ">
                    <h1 style={{color:"black", fontWeight:"700"}}>Resource Guide on School Management</h1>

                </div>
            </div>

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style = {{marginTop:"50px"}}>
  <div class="carousel-inner">
    <div class="carousel-item active" style = {{textAlign:"center"}}>
   <YouTube videoId="rz3grC87DSs"/>
    </div>
    <div class="carousel-item" style = {{textAlign:"center"}}>
    <YouTube videoId="6EVQzUmA91A"/>

    </div></div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class = "container-fluid Bcontainer8">
  <div class="row">
<h1>Specifically designed for small and medium businesses in <span style = {{color:"rgb(130, 165, 196)"}}>India</span></h1>
</div>
  </div> 

  <div class = "container Bcontainer9">
  <div class="row">
<h1>Frequently Asked Questions</h1>
<p style={{textAlign:"center",padding:"30px"}}>Quick answers to all the questions you may have on Billing Software.</p>
</div>
  </div> 
  <Flush/>
 
        </>
    )
}
export default ProductFinal;