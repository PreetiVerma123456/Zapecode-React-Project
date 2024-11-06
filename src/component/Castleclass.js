import React from 'react';
import './Castle.css';
import YouTube from 'react-youtube';
import img_1 from './Castleclass.webp';
import card_1 from './castle-1.webp';
import card_3 from './castle-2.webp';
import card_5 from './castle-3.webp';
import card_4 from './castle-4.webp';
import card_2 from './castle-6.webp';
import card_6 from './6.webp';
import card_7 from './castle-7.webp';
import card_11 from './castle-8.webp';
import card_14 from './castle-10.webp';
import card_15 from './castle-12.webp';
import card_12 from './castle-9.webp';
import card_13 from './castle-11.webp';
import card_17 from './castle-13.webp';
import card_81 from './cas-400-x-250-px-3.webp';
import card_82 from './2-2.webp';
import card_83 from './3-2.webp';
import card_84 from './4-2.webp';
import card_85 from './5-2.webp';
import card_86 from './6-2.webp';
import card_87 from './7-2.webp';
import card_88 from './8-2.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons/faMapMarker';
import { faArrowRight, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import Myfooter from './Footer';
import MyForm from './form';
import { Link } from 'react-router-dom';
const Castleclass = () => {
    return (
        <>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style = {{color:"blue"}} >Castleclass</a>
    <button class="navbar-toggler navbutton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href= "#id1">Why Choose Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#id2">Features</a>
        </li>
      </ul>
      <Link to="/Contact">
      <button  style = {{fontWeight:"500",fontSize:"17px"}}>Sign Up<FontAwesomeIcon icon={faArrowRight} style = {{margin:"0px 7px"}}/>
      </button>
      </Link>

    </div>
  </div>
</nav>
            <div class="container-fluid text-center castle-1">
                <div class="row">
                    <div class="col-12">
                        <h1><span>CASTLECLASS</span> School Management<br></br> <span>System</span></h1>
                        <img src={img_1} class="vert-move"></img>
                        <p>Castleclass is Modern and Complete School Automation Software that suites to almost
                            every school or educational institution<br></br> from student admission to
                            student leaving, from fees collection to exam results.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid castle-2">
                <div class="row ">
                    <h1>We Have Exclusive Features</h1>
                    <p>Castleclasses all in one solution for educational institutes with different types of users</p>
                </div>
            </div>

            <div className="container castle-3" style={{textAlign:"center"}}>
                <div class="row" style = {{gap:"0"}}>
                    <div class="profile-container">
                        <div class="profile-picture">
                            <img src={card_1} alt="Profile Picture" class="profile-image" />
                        </div>
                        <div class="profile-details">
                            <span class="profile-name">Admin</span>
                            <p>Manage All Activities Almost<br></br> All Features.</p>
                        </div>
                    </div>
                    <div class="profile-container">
                        <div class="profile-picture">
                            <img src={card_3} alt="Profile Picture" class="profile-image" />
                        </div>
                        <div class="profile-details">
                            <span class="profile-name">Receptionist</span>
                            <p>Manage all Fronts office <br></br>relative Activities</p>
                        </div>
                    </div>
                    <div class="profile-container">
                        <div class="profile-picture">
                            <img src={card_5} alt="Profile Picture" class="profile-image" />
                        </div>
                        <div class="profile-details">
                            <span class="profile-name">Teacher</span>
                            <p>Manage All Students And <br></br>Acadmies Activities</p>
                        </div>
                    </div>
                    <div class="profile-container">
                        <div class="profile-picture">
                            <img src={card_4} alt="Profile Picture" class="profile-image" />
                        </div>
                        <div class="profile-details">
                            <span class="profile-name">Accountant</span>
                            <p>Trace Students Fees Expenses<br></br> all at a Place</p>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="container castle-4" style={{textAlign:"center"}}>
            <div class="row">
                <div class="profile-contain">
                    <img src={card_6} alt="Profile Picture" class="profile-image-1" />
               
                <div class="profile-details">
                    <span class="profile-name">Student</span>
                    <p>Collaborate With School<br></br> Teachers and Activities at All.</p>
                </div>
                </div>
                <div class="profile-contain">
                    <img src={card_2} alt="Profile Picture" class="profile-image-1" />
               
                <div class="profile-details">
                    <span class="profile-name">Parents</span>
                    <p>Panel for parents to monitor<br></br> students performance</p>
                </div>
                </div>
                <div class="profile-contain">
                    <img src={card_7} alt="Profile Picture" class="profile-image-1" />
               
                <div class="profile-details">
                    <span class="profile-name">Librarian</span>
                    <p>Manage library books,<br></br> Generate library cards and more.</p>
                </div>
                </div>
                </div>
                </div>
            
              

            <div className=" container castle-6 gradient1" id = "id1">
        <div class="row">
        <h1>Why Castleclass School Management System</h1>
        <p>Is Most Preferred System in India?</p>
          <div class="col-lg-4 castle-6-1 ">
<h4>We Have<br></br>
<span>Lot of Sucess Story</span></h4>
<p>Castleclass is Modern and Complete School<br></br> Automation Software that suites to almost every <br></br>school
     or educational institution from student<br></br> admission to student leaving, from fees<br></br> collection
      to exam results.</p>
          </div>
          <div class="col-lg-4 castle-6-2 ">
          <div class="card mb-3 castle-features">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={card_11} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">QR Code Attendance</h5>
        <p class="card-text">Advanced QR Code attendance system</p>
       
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 castle-features">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={card_14} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Behaviour Records</h5>
        <p class="card-text">Manage student behavioural records In Smart School</p>
       
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 castle-features">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={card_15} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Google Meet</h5>
        <p class="card-text">Gmeet Live Online Classes & Meetings in Smart School</p>
       
      </div>
    </div>
  </div>
</div>



          </div>
          <div class="col-lg-4 castle-6-3 ">
          <div class="card mb-3 castle-features">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={card_12} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">CBSE Examination</h5>
        <p class="card-text">Advance examination and marksheet system with multiple exams 
            in single marksheet</p>
       
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 castle-features">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={card_13} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Two Factor Authentication</h5>
        <p class="card-text"> Add next level user login security in Smart School</p>
       
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 castle-features">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={card_17} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Zoom Live Classes</h5>
        <p class="card-text">Zoom Live Online Classes & Meetings in Smart School</p>
       
      </div>
    </div>
  </div>
</div>

          </div>
</div>
</div>

          <div className=" container-fluid castle-7">
        <div class="row">  
        <img src={img_1} class="vert-move canva"></img>
        <h1>The School Management System</h1>
        <p>For School, Collage, Institute And Any Type of Education Academy</p>
            </div>
            </div>  

            <div className="container-fluid castle-2" id = "id2">
                <div class="row ">
                    <h1>We Have Exclusive Features</h1>
                    <p>Castleclasses all in one solution for educational institutes with different types of users</p>
                </div>
            </div>
            <div className="container castle-8" style={{textAlign:"center", marginTop:"40px"}}>
                <div class="row">
                    <div class="profile-container-8">
                        <div class="profile-picture-8">
                            <img src={card_81} alt="Profile Picture" class="profile-image-8" />
                        </div>
                        <div class="profile-details-8">
                            
                            <p>State Of The Art Student<br></br> Admission Form</p>
                        </div>
                    </div>
                    <div class="profile-container-8">
                        <div class="profile-picture-8">
                            <img src={card_82} alt="Profile Picture" class="profile-image-8" />
                        </div>
                        <div class="profile-details-8">
                            
                            <p>Most Powerfull Fees<br></br> Collection Module</p>
                        </div>
                    </div>
                    <div class="profile-container-8">
                        <div class="profile-picture-8">
                            <img src={card_83} alt="Profile Picture" class="profile-image-8" />
                        </div>
                        <div class="profile-details-8">
                            
                            <p>One Click Attendance<br></br> Record</p>
                        </div>
                    </div>
                    <div class="profile-container-8">
                        <div class="profile-picture-8">
                            <img src={card_84} alt="Profile Picture" class="profile-image-8" />
                        </div>
                        <div class="profile-details-8">
                            
                            <p>Teacher Restricted Mode<br></br>  Available
                            </p>
                        </div>
                    </div>
                   
                </div>
            </div>

            <div className="container castle-8" style={{textAlign:"center", marginTop:"60px"}}>
                <div class="row">
                    <div class="profile-container-8">
                        <div class="profile-picture-8">
                            <img src={card_85} alt="Profile Picture" class="profile-image-8" />
                        </div>
                        <div class="profile-details-8">
                            
                            <p>Front CMS to manage<br></br> your school website</p>
                        </div>
                    </div>
                    <div class="profile-container-8">
                        <div class="profile-picture-8">
                            <img src={card_86} alt="Profile Picture" class="profile-image-8" />
                        </div>
                        <div class="profile-details-8">
                            
                            <p>Complete HR Module<br></br> with Payroll</p>
                        </div>
                    </div>
                    <div class="profile-container-8">
                        <div class="profile-picture-8">
                            <img src={card_87} alt="Profile Picture" class="profile-image-8" />
                        </div>
                        <div class="profile-details-8">
                            
                            <p>Front Office with Student <br></br>Admission  Management</p>
                        </div>
                    </div>
                    <div class="profile-container-8">
                        <div class="profile-picture-8">
                            <img src={card_88} alt="Profile Picture" class="profile-image-8" />
                        </div>
                        <div class="profile-details-8">
                            
                            <p>Student History with All<br></br> Student Records
                            </p>
                        </div>
                    </div>
                   
                </div>
            </div>

            <div className="container-fluid castle-2">
                <div class="row ">
                    <h1 style={{color:"black", fontWeight:"700"}}>Resource Guide on School Management</h1>

                </div>
            </div>

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style = {{marginTop:"50px"}}>
  <div class="carousel-inner">
    <div class="carousel-item active" style = {{textAlign:"center"}}>
   <YouTube videoId="_7V3xPy6l38"/>
    </div>
    <div class="carousel-item" style = {{textAlign:"center"}}>
    <YouTube videoId="_7V3xPy6l38"/>

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
<div class=" container container-8">
<h1>Get In Touch With Us Today</h1>
<div class="row">
  <div class="col-md-5 container-8-1 animation1">
    <h2>Contact Us</h2>
    <FontAwesomeIcon icon = {faMapMarker} style = {{fontSize:"40px", padding:"20px 50px 50px 20px", float:"left"}}/>
    <h4>Our Location</h4>
    <p>3rd Floor, Kamla Palace Plot No 57-60, Red Square Market, Kamla Nagar Hisar, Haryana-125001</p><br></br>
    <FontAwesomeIcon icon = {faPhone} style = {{fontSize:"40px", padding:"17px 50px 40px 20px", float:"left"}}/>
    <h4>Phone Number</h4>
    <p>8950-37-1557</p><br></br>
    <FontAwesomeIcon icon = {faEnvelope} style = {{fontSize:"40px", padding:"20px 50px 50px 20px", float:"left"}}/>
    <h4>Email Address</h4>
    <a href = "#" style = {{textDecoration:"none", color:"white"}}>ZapeCode28@gmail.com</a><br></br>
    <a href = "#" style = {{textDecoration:"none", color:"white"}}>ZapeCode28@gmail.com</a><br></br>
  </div>
  <div class="col-md-5 container-8-2 animation2">
    <h5>LET'S TALK</h5>
    <h3>Speak With Engineers.</h3>
    <MyForm/>
  </div>
</div>
</div>

           <Myfooter/> 
        </>

    )
}
export default Castleclass;