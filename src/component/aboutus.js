import React from "react";
import './About.css'
import image_6 from './8-Years-of-Experiences-1.webp'
import image_21 from './1-4.webp'
import image_22 from './2-4.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import MyForm from "./form";
import Myfooter from "./Footer";

const About = () => {

    
    return (
        <>
           
            <div class="container container-4" style = {{marginTop:"100px"}} >

                <div class="row">
                    <div class="col-md-6 container-4-1 animation1  ">
                        <img src={image_6}></img>
                    </div>
                    <div class="col-md-6 container-4-2  ">

                        <h6>ABOUT COMPANY</h6>
                        <h1 >Zapecode Pvt. Ltd.</h1><br></br>
                        <p style={{ fontWeight: "500" }}>We give your business or portfolio a important website and online presence which not only caters to your specific business

                            requirements but helps you make better clientele and improves your visibility online. Its not just about having a good web operation,
                            its about power and we give that power to you! We’ve important structure for managing stoner identity and social graph data,
                            we’ve a solid understanding of stylish practices for adding stoner engagement, bodying point gests for individual druggies
                            and maximizing ROI for web design enterprise.
                            We conduct all that moxie into our products, but we also offer digital and social media strategists for brands</p>
                        <br></br>
                        <p style={{ fontWeight: "500" }}>We’ll work with you to completely understand your business and your target followership
                            to inform our marketing strategy. Using the issues from the Company Analysis, we will put together
                            a plan for the most effective online marketing
                            strategy to get the stylish results for your business.</p>

                    </div> </div>
            </div>
            <div class="container-4-3">
                <h1 >Zapecode Team</h1>
                <div class="container container-4 gradiant1">

                    <div class="row">

                        <div class="col-md-7 container-4-2  " style = {{padding:"50px"}}>


                            <h1 >About Pardeep Kumar</h1>
                            <p style={{ fontWeight: "500",lineHeight:"2.4rem",fontSize:"18px" }}>With over 8 years of experience,
                                Pardeep is a visionary in website development. He has a deep understanding of the latest web
                                technologies and is committed to delivering high-quality, functional websites that drive success for our clients.
                                Pardeep’s attention to detail and ability to customize solutions make him a trusted expert in the field.</p>

                        </div>
                        <div class="col-md-5 container-4-1 animation1 " style = {{padding:"30px"}} >
                            <img src={image_21} style = {{ border :"5px solid blue", margin:"5px"}}/>
                            <h2>Pardeep Kumar</h2>
                            <p>CEO & Founder</p>
                            
                        </div>
                    </div>
</div>
                    <div class="container container-4 gradiant1">

                        <div class="row">
                            <div class="col-md-5 container-4-1 animation1"  style = {{padding:"30px"}}>
                                <img src={image_22} style = {{ border :"5px solid blue", margin:"10px"}}></img>
                                <h2>Romika Saini</h2>
                             <p>CEO & Founder</p>
                            </div>
                            <div class="col-md-7 container-4-2" style = {{padding:"50px"}} >


<h1 >About Romika Saini</h1>
<p style={{ fontWeight: "500",lineHeight:"2.4rem",fontSize:"18px" }}>Romika brings 7+ years of expertise in digital marketing, 
    specializing in creating tailored strategies that connect brands with their audiences. Her data-driven approach
     ensures that every campaign is effective and aligned with client goals.
     Romika’s focus on delivering measurable results makes her a key player in the digital marketing landscape.</p>

</div>
                        </div>
                    </div>
            </div>

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
            export default About;