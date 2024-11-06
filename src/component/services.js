import React from "react";
import './Homefinal.css';
import image_1 from './about-img1-689x1024.webp';
import image_2 from './Untitled-design-2024-07-23T134818.465.webp';
import image_3 from './about-img2.webp'
import image_4 from './elements5.webp'
import image_5 from './service-icon2.svg';
import image_6 from './8-Years-of-Experiences-1.webp';
import image_7 from './Untitled-design-2024-07-15T125116.363.webp'
import Myfooter from "./Footer";

const Service = () => {

    return (
        <>

       
<div className="container-fluid  container-2 zoom-in-out-boxes">
    <div class = "row">
                <h1>Our Popular Services</h1>
                <p> We Provide Truly Prominent Technology Solutions</p>
            </div>
            </div>

      <div class= " container container-3" style = {{ textAlign:"center", margin:"200px;"}}>
    <div class="row" >
    <div class="col-md-4 p-3 services zoom-in-out-box1" style = {{backgroundColor:"#FEBFDA" }}>
    <h4>Website Development</h4>
        <img src= {image_5}></img>
        <p>Website Development company in<br></br> Hisar</p>
    </div>
    <div class="col-md-4 p-3 zoom-in-out-box1 services" style = {{backgroundColor:"#CAC6FD"}}>
    <h4>App Development</h4>
        <img src= {image_5}></img>
        <p>App Development company in<br></br> Hisar</p>
    </div>
    
    <div class="col-md-4 p-3 zoom-in-out-box1 services"style = {{backgroundColor:"#FFE8A4"}}> 
        <h4>Digital Marketing</h4>
        <img src= {image_5}></img>
        <p>Digital Marketing company in<br></br> Hisar</p>
        </div>
   
        <div class="col-md-4 p-3 services zoom-in-out-box1" style = {{backgroundColor:"#D4FFD6"}}>
        <h4>SEO</h4>
        <img src= {image_5}></img>
        <p>All Types of Seo Services Company in <br></br>Hisar<br></br><br></br></p>
    </div>
    <div class="col-md-4 p-3 zoom-in-out-box1 services" style = {{backgroundColor:"#A6C9F1"}}>
    <h4>Google Adword</h4>
        <img src= {image_5}></img>
        <p>For instant business/leads<br></br> generation we provide Google<br></br> AdWords PPC services.</p>
    </div>
    
    <div class="col-md-4 p-3 zoom-in-out-box1 services "style = {{backgroundColor:"#D2A8F6"}}>
    <h4>Ecommerce Development</h4>
        <img src= {image_5}></img>
        <p>Provide all types of ecommerce <br></br>website development company in<br></br> Hisar.</p>
  </div>
</div>
</div>

    <div class="container-fluid container-6 gradiant4">
    
    <div class="row">
      <div class="col-lg-6 container-6-1 animation1">
      <img src = {image_7}></img>
      </div>
      <div class="col-lg-6 container-6-2 animation2">
      <h6>Customers Feedback</h6>
      <h1>What Says Our Client’s About <br></br>Zapecode</h1>
      <div class="container">
      <div class="row">
          <div class="col-md-12 col-center m-auto">
              
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                      <div class="item carousel-item active">
                          
                          <p class="testimonial" style={{color:"black", fontSize:"16px"}}>One of the best company for internship program, Go for it. Best android development company in hisar.</p>
                          <p class="overview"  style ={{textAlign:"center"}}><b style={{color:"black", fontSize:"20px"}}>Ruchi Saini</b> <br></br> <span style={{color:"rgb(20, 20, 20)"}}>Client</span></p>
                      </div>
                      <div class="item carousel-item">
                          <p class="testimonial" style={{color:"black", fontSize:"16px"}}>One of the best software development company in hisar, amazing staff, nice people, They created our application, which is amazing in city like hisar. Now there is no need to go anywhere else.</p>
                          <p class="overview"  style ={{textAlign:"center"}}><b style={{color:"black", fontSize:"20px"}}>Madhukar Saini</b><br></br>  <span style={{color:"rgb(20, 20, 20)"}}>Client </span></p>
                      </div>
                      <div class="item carousel-item">
                          <p class="testimonial" style={{color:"black", fontSize:"16px"}}>They have created our two websites and we are delighted and can say that they are the best web development company in hisar. And will definitely work in the future together.</p>
                          <p class="overview"  style ={{textAlign:"center"}}><b style={{color:"black", fontSize:"20px"}}>Yash Soni </b> <br></br>  <span style={{color:"rgb(20, 20, 20)"}}>Client </span></p>
                      </div>
                  </div>
                  <button class="carousel-control-prev " type="button" data-bs-target="#myCarousel" data-bs-slide="prev" >
    <span class="carousel-control-prev-icon " style={{backgroundColor:"black"}}></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" style={{backgroundColor:"black"}}></span>
  </button>
  </div>
                  
              </div>
          </div>
      </div>
  </div>
      </div>
      </div>
  <Myfooter/>
        </>
    )
}
export default Service;