import React,{useState} from 'react'
import './Forms.css';
import junk from './junkcar.png';
import Pulse from 'react-reveal/Pulse';
import Slide from 'react-reveal/Slide';
function Form() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [text,setText]=useState("");
  const name1=(e)=>{
   
        setName(e.target.value);
  }
  const name2=(e)=>{
   
    setEmail(e.target.value);
}
const name3=(e)=>{
   
  setPhone(e.target.value);
}
const name4=(e)=>{
   
  setText(e.target.value);
}
  const submit=()=>{

    
    if(name==="" || text==="" || phone==="" || email==="")
    {
      alert("Please Enter the Details");

    }
    else
    {
      alert("Thank You For Sumbitting Form");
    }
  }


  
    return (
        <>
        <div className="form-container">
        <Slide left>
           <img className="junkimg" src={junk} alt="junk car"></img></Slide>
           <Pulse>
            <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>GET IN TOUCH </span>
           
          </div>
          <div class="app-contact">CONTACT<br></br>INFO:+61 466 331 633</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" type="text" onChange={name1} required placeholder="NAME" 
                />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" type="email" onChange={name2} required placeholder="EMAIL"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" type="text"required onChange={name3}  placeholder="CONTACT NO"/>
            </div>
            <div class="app-form-group">
            <label for="img">Select image:</label><br></br>
  <input type="file" id="img" name="img" accept="image/*"/>
            </div>
            <div class="app-form-group message">
              <textarea class="app-form-control" id="ta" required onChange={name4} placeholder="MESSAGE"/>
            </div>
            <div class="app-form-group buttons">
              
              <button class="app-form-button" onClick={submit} id="butn">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="credits">
     
      
        
          
            <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
          
        
    
    </div>
  </div>
</div>

</Pulse>
            </div>
            
        
        </>
    )
}

export default Form
