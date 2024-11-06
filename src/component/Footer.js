import React from "react";
import './Footer.css';
import { faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Myfooter(){
    return(
        <>
         <footer class="site-footer ">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-3" style={{padding:"30px"}}>
            <h1>ZapeCode</h1><br></br>
            <p>ZapeCode PVT. LTD. is largely regarded in the assiduity and is a step ahead of the top website design and development company.</p>
          </div>
          <div class="col-sm-12 col-md-3" style={{padding:"30px"}}>
            <h5>Get In Touch</h5>
            <FontAwesomeIcon icon={faMapMarker} style = {{fontSize:"20px",  padding:" 20px 20px 50px 0",float:"left"}}/>
    
    <p> 3rd Floor, Kamla Palace Plot No 57-60, Red Square Market, Kamla Nagar Hisar,Haryana-125001
    </p><br></br>
    <FontAwesomeIcon icon={faPhone} style = {{fontSize:"20px",  padding:" 10px 20px 0 0 ",float:"left"}}/>
    
    <p> 8950-37-1557</p><br></br>
    <FontAwesomeIcon icon={faEnvelope} style = {{fontSize:"20px",  padding:" 10px 20px 0 0",float:"left"}}/>
   
   <a href = "#" style = {{textDecoration:"none",color:"black"}}>Tec.zapecode@gmail.com 
   </a><br></br>
   <a href = "#" style = {{textDecoration:"none",color:"black"}}>Zapecode28@gmail.com
</a>
          </div>

          <div class="col-xs-6 col-md-3" style={{padding:"30px"}}>
            <h5>Important Links</h5>
            <ul class="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              
            </ul>
          </div>

          <div class="col-xs-6 col-md-3" style={{padding:"30px"}}>
            <h5>Our Products</h5>
            <p>Print Bill</p>
          </div>
        </div>
        <hr/>
      </div>
      
</footer>
        </>
    )
}
export default Myfooter;