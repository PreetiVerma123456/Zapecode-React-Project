import { useState } from "react";
import ReactDOM from "react-dom/client";
import './MyForm.css';
function MyForm() {
 
 


  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
      <input 
        type="text" 
        name="firstname" 
        placeholder="First Name"
        value={inputs.firstname || ""} 
        onChange={handleChange}
      />
      </label>
      <label>
        <input 
          type="text" 
          name="lastname" 
          placeholder="Last Name"
          value={inputs.lastname || ""} 
          onChange={handleChange}
        />
        </label>
        <label>
      <input 
        type="email" 
        name="email" 
        placeholder="Email"
        value={inputs.email || ""} 
        onChange={handleChange}
      />
      </label>
      <label>
        <input 
          type="text" 
          name="phonenumber" 
          placeholder="Phone Number"
          value={inputs.phonenumber || ""} 
          onChange={handleChange}
        /></label>

        <input id="mes"
          type="text" 
          name="messege" 
          placeholder="Messege"
          value={inputs.messege || ""} 
          onChange={handleChange}
          
        />
        
       <input id = "sub" type = "submit"
       value = {inputs.submit || "Free Consultation"} />
    
    </form>
  )
}

export default MyForm;