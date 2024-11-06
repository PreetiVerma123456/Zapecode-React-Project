import React from "react"
import MyForm from "./form"
import Myfooter from "./Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaMapMarker } from "react-icons/fa";


const Contact = () => {
    return(
        <>
       
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

export default Contact;