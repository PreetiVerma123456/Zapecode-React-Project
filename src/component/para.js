import React,{useState} from "react";
import './para.css';

const ToggleParagraphs = () => {
    const [activeParagraph, setActiveParagraph] = useState(0);

    const handleButtononClick = (index) => {
   setActiveParagraph(index);
   };
   return(
    <div class = "container-7">
        <h5>Our Working Process</h5>
        <h1>How We Work For Our Customers</h1>
        <button class = "active" onClick = {() => handleButtononClick(0) }> FIRST STEP </button>
        <button onClick = {() => handleButtononClick(1)}>SECOND STEP </button>
       
        <button onClick = {() => handleButtononClick(2)}> THIRD STEP </button>
        <button onClick = {() => handleButtononClick(3)}> FORTH STEP </button>

        {activeParagraph === 0 &&<><h3>Consultation</h3><p>Our Process begins with a detailed consultation over your requirements. Experts associated with ZapeCode consult with clients.
            </p></>}
            {activeParagraph === 1 &&<><h3>Planning</h3><p>Talks turn into plans by analyzing and planning the website/android app/digital marketing project and then a very basic draft is created to get to know what needs to be done and how it should be done.

                </p></>}
                {activeParagraph === 2 &&<><h3>Execute
                    </h3><p>ZapeCode front-end designers will craft a creative, objective-aligned as well as responsive website following the wireframe, and UI/UX design to prototype.

                    </p></>}
                    {activeParagraph === 3 &&<><h3>Deliver
                        </h3><p>Being done with testing and improvisations, the Project is finally deployed with the help of a dedicated team.

                        </p></>}
    </div>
   )
};
export default ToggleParagraphs;
