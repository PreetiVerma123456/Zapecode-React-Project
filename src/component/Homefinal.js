import React from "react";
import './Homefinal.css'
import image_1 from './about-img1-689x1024.webp'
import image_2 from './Untitled-design-2024-07-23T134818.465.webp'
import image_3 from './about-img2.webp'
import image_4 from './elements5.webp'
import image_5 from './service-icon2.svg'
import image_6 from './8-Years-of-Experiences-1.webp'
import image_7 from './Untitled-design-2024-07-15T125116.363.webp'

import image_10 from './7040859.jpg'
import image_11 from './Untitled-design-2024-07-12T153738.368.webp'
import ToggleParagraphs from "./para";
import MyForm from "./form";
import image_12 from './elements2.webp'
import image_13 from './header-author-img2.webp'
import image_14 from './sound-icons1.svg'
import image_15 from './elements3.webp'
import image_16 from './header-author-img1.webp'
import image_17 from './lite-icons1.svg'
import Myfooter from "./Footer";
import Carousel from "./carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaMapMarker } from "react-icons/fa";
import ImageCarousels from "./carousel";
import { Link } from "react-router-dom";

function Homefinal() {
    return (
        <>
       <div class = "container-0 container gradiant1">
<div class = "row">
    <div class = " col-lg-5 animation1  container-0-1 full-width-lg">
    
        <h6>Welcome to Zapecode Private Limited</h6>
<h1>Best IT Solution Company In Global Community</h1>
<p>Top Website Design And Development Company in Hisar, Haryana,India.</p>
<Link to="/Contact">
<button style = {{backgroundColor:"blue",color:"white",fontWeight:"500",fontSize:"17px"}}>Contact Us <FontAwesomeIcon icon={faArrowRight} style = {{margin:"0px 7px"}}/> </button>
</Link>
<Link to="/About">
<button style = {{fontWeight:"500",fontSize:"17px"}}>Know More  <FontAwesomeIcon icon={faArrowRight} style = {{margin:"0px 7px"}}/></button>
   </Link> </div>
    <div class = " col-lg-7  container-0-2 hidden-lg">
   
<img  class= "image1" src = {image_10}></img>
<img class= "image2 " src = {image_12} style = {{height:"100px",width:"130px"}}></img>
<img class= "image3  zoom-in-out-box" src = {image_13} style = {{height:"100px",width:"130px"}}></img>
<img class= "image4 zoom-in-out-box" src = {image_14} style = {{height:"100px",width:"130px"}}></img>
<img class= "image5" src = {image_15} style = {{height:"100px",width:"130px"}}></img>
<img class= "image6 zoom-in-out-box" src = {image_16} style = {{height:"220px",width:"250px"}}></img>
<img class= "image7 zoom-in-out-box" src = {image_17} style = {{height:"100px",width:"130px"}}></img>
</div>
   
</div></div> 

<div class = "container-1 gradiant2">
    <div class="container-fluid ">
  <div class="row">
    <div class="col-md-4 part-1 ">
    <img  src={image_1}></img>
    </div>
    <div class="col-md-4  part-2 ">
    <img class= "rotate linear infinite" src={image_2}></img>
                    <h1> Improve and Innovate <br></br>The ZapeCode Trends.</h1>
                    <p> We formed a website design and development company under the name of ZapeCode PVT. LTD.
                        in 2021 at Hisar( 125001), Haryana, India. ZapeCode PVT. LTD. is largely regarded in the assiduity and is
                        a step ahead of the top website design and development company. We’ve good platoon moxie in UI/ UX Design,
                        Application Development, Web Design, and Development, Digital Marketing and all other IT services.
                        Our main focus is to develop and vend your products or services which can take you to the moon.</p>
                        <Link to="/About"><button >Click Here <FontAwesomeIcon icon={faArrowRight} style = {{margin:"0px 7px", offset:"300"}}/> 
                        </button></Link>

    </div>
    <div class="col-md-4  part-3 ">
    <img src={image_4} style={{ height: "150px", display: "block",marginLeft:"20px",zIndex:"-1" }}></img>
    <img  src={image_3} style={{ marginTop: "-50px" ,zIndex:"1"}} ></img>
    </div>
    </div>
  </div>
</div>  
<div className="container-fluid  container-2 zoom-in-out-boxes">
    <div class = "row">
                <h1>Our Popular Services</h1>
                <p> We Provide Truly Prominent Technology Solutions</p>
            </div>
            </div>
            <div class= "container  container-3" style = {{ textAlign:"center", margin:"200px;"}}>
    <div class="row" >
    <div class="col-md-4 p-3 services " style = {{backgroundColor:"#FEBFDA" }}>
    <h4>Website Development</h4>
        <img src= {image_5}></img>
        <p>Website Development company in<br></br> Hisar</p>
    </div>
    <div class="col-md-4 p-3 services" style = {{backgroundColor:"#CAC6FD"}}>
    <h4>App Development</h4>
        <img src= {image_5}></img>
        <p>App Development company in<br></br> Hisar</p>
    </div>
    
    <div class="col-md-4 p-3 services"style = {{backgroundColor:"#FFE8A4"}}> 
        <h4>Digital Marketing</h4>
        <img src= {image_5}></img>
        <p>Digital Marketing company in<br></br> Hisar</p>
        </div>
   
        <div class="col-md-4 p-3 services " style = {{backgroundColor:"#D4FFD6"}}>
        <h4>SEO</h4>
        <img src= {image_5}></img>
        <p>All Types of Seo Services Company in <br></br>Hisar<br></br><br></br></p>
    </div>
    <div class="col-md-4 p-3 services" style = {{backgroundColor:"#A6C9F1"}}>
    <h4>Google Adword</h4>
        <img src= {image_5}></img>
        <p>For instant business/leads<br></br> generation we provide Google<br></br> AdWords PPC services.</p>
    </div>
    
    <div class="col-md-4 p-3  services "style = {{backgroundColor:"#D2A8F6"}}>
    <h4>Ecommerce Development</h4>
        <img src= {image_5}></img>
        <p>Provide all types of ecommerce <br></br>website development company in<br></br> Hisar.</p>
  </div>
</div>
</div>
   
<div class="container container-4">
  
  <div class="row">
    <div class="col-md-6 container-4-1 animation1  ">
    <img src = {image_6}></img>
    </div>
    <div class="col-md-6 container-4-2  ">
   
<h4 class= "animation2"> OUR SPECIALTY</h4>
<h1 >Ready Services For You</h1>
<p>We aim to meet our customer’s prospects and win the trust. therefore, our
     largely professed Web Development platoon of professionals leave no gravestone unturned to understand 
     our guests ’ Conditions and docket before proposing exclusive designing, development, 
    marketing strategies Our concentrated approach fosters innovative and sustainable service for our guests.</p>

    <div class = "container-4-2-1">
    <h1>95%</h1>
    <h3>Analytics</h3>
</div>
<div class = "container-4-2-1 ">
<h1>75%</h1>
<h3>Developement</h3>
</div>
<div class = "container-4-2-1">
<h1>80%</h1>
<h3>Solutions</h3>
</div>
</div> </div>
    </div>

    <div class="container-fluid container-5 gradiant3">
    <div class="row">
    <div class="col-lg-6 animation1 " >
    <h1>Our Some Finest Projects</h1>
        </div>
        <div class="col-lg-6 animation2 ">
        <button>Web Design</button> 
    <button >Product Design</button>
    <button>Mobile App</button>
        </div>
    </div>
    </div>
   <ImageCarousels/>
<div class="container-fluid container-6 gradiant4">
    
  <div class="row">
    <div class="col-md-6 container-6-1 animation1">
    <img src = {image_7}></img>
    </div>
    <div class="col-md-6 container-6-2 animation2">
    <h6>Customers Feedback</h6>
    <h1>What Says Our Client’s About <br></br>Zapecode</h1>
    <div class="container">
	<div class="row">
		<div class="col-md-12 col-center m-auto">
			
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
					<div class="item carousel-item active">
						
						<p class="testimonial" style={{color:"black", fontSize:"16px"}}>One of the best company for internship program, Go for it. Best android development company in hisar.</p>
						<p class="overview" style ={{textAlign:"center"}}><b style={{color:"black", fontSize:"20px"}}>Ruchi Saini</b> <br></br> <span style={{color:"rgb(20, 20, 20)"}}>Client</span></p>
					</div>
					<div class="item carousel-item">
						<p class="testimonial" style={{color:"black", fontSize:"16px"}}>One of the best software development company in hisar, amazing staff, nice people, They created our application, which is amazing in city like hisar. Now there is no need to go anywhere else.</p>
						<p class="overview" style ={{textAlign:"center"}}><b style={{color:"black", fontSize:"20px"}}>Madhukar Saini</b><br></br>  <span style={{color:"rgb(20, 20, 20)"}}>Client </span></p>
					</div>
					<div class="item carousel-item">
						<p class="testimonial" style={{color:"black", fontSize:"16px"}}>They have created our two websites and we are delighted and can say that they are the best web development company in hisar. And will definitely work in the future together.</p>
						<p class="overview" style ={{textAlign:"center"}}><b style={{color:"black", fontSize:"20px"}}>Yash Soni </b> <br></br>  <span style={{color:"rgb(20, 20, 20)"}}>Client </span></p>
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

    <ToggleParagraphs/>

    <div class=" container container-8">
     <h1>Get In Touch With Us Today</h1>
    <div class="row">
    <div class="col-md-5  container-8-1 animation1">
    <h2>Contact Us</h2>
    <FontAwesomeIcon icon={faMapMarker} style = {{fontSize:"40px",  padding:" 20px 50px 50px 20px ",float:"left"}}/>
    <h4>Our Location</h4>
    <p> 3rd Floor, Kamla Palace Plot No 57-60, Red Square Market, Kamla Nagar Hisar,Haryana-125001
    </p><br></br>
    <FontAwesomeIcon icon={faPhone} style = {{fontSize:"40px",  padding:" 17px 50px 40px 20px",float:"left"}}/>
    <h4>Phone Number</h4>
    <p> 8950-37-1557</p><br></br>
    <FontAwesomeIcon icon={faEnvelope} style = {{fontSize:"40px",  padding:" 20px 50px 50px 20px",float:"left"}}/>
    <h4>Email Address</h4>
   <a href = "#" style = {{textDecoration:"none",color:"white"}}>Tec.zapecode@gmail.com 
   </a><br></br>
   <a href = "#" style = {{textDecoration:"none",color:"white"}}>Zapecode28@gmail.com
</a>
    </div>
    <div class="col-md-5  container-8-2 animation2">
    <h6>LET’S TALK</h6>
    <h3>Speak With Engineers.</h3>
    <MyForm/>
    </div>
    </div>
    </div>
    <Myfooter/>

   


  
        </>
    )
}
export default Homefinal;