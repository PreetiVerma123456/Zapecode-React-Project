import React from "react";
import './Product.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import image_22 from './Untitled-design-81.webp'
import image_23 from './Untitled-design-84.webp'
function Product (){
    return(
        <>
  <div class = "Bcontainer-0 container ">
<div class = "row">
    <div class = " col-lg-5 Bcontainer-0-1 full-width-lg">
    <h1>India's Premier Inventory & Billing Software </h1>
<span><FontAwesomeIcon icon={faCheck} style = {{fontSize:"20px",float:"left" ,padding:"5px 10px ",color:"green"}}/>
<p> 100% Safe & Secure</p>
<button >Register Now</button></span>
    </div>
    <div class = " col-lg-7  Bcontainer-0-2 hidden-lg">
        <img src = {image_22}></img>
   </div>
   
</div></div>
<div class = "Bcontainer-0 container ">
<div class = "row">
    <div class = " col-lg-5 Bcontainer-0-1 full-width-lg">
    <h1>Gst Billing Software Built For Every Business Model </h1>
<p>A modern and easiest online GST billing software to take your business to next level. </p>
<button >Login</button>
    </div>
    <div class = " col-lg-7  Bcontainer-0-2 hidden-lg">
        <img src = {image_23}></img>
   </div>
   
</div></div>
        </>
    )
}
export default Product