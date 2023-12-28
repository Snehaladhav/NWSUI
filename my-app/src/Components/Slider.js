import React from 'react';
import OfficeClean1 from "../asset/officeClean1.jpg";
import "../App.css";

const Slider = () => {
  return (
    <div  style={{padding:"0",margin:"0",fontFamily:"sans-serif"}}>

    <div  style={{width:"100%",height:"100vh",position:"absolute",top:"0",left:"0",overflow:"hidden"}}className='hero'>
        <div className='slide1'>
        <img  style={{width:"100%",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}src={OfficeClean1} alt='officeClean1'></img>
        <div>
        <h1>Sparkle With Us</h1>
        <p>
        Sparkle is a professional Housekeeping & Specialized Cleaning company
          that understands the importance of working and living in clean
          Hygienic environment. We take short and long term housekeeping cum
          cleaning contracts for homes and Big, small, mid-sizeoffices,
          maintaining gardens; and also providing entry level manpower resource. 
        </p>
        </div>
     

        </div>
    </div>
    </div>
  )
}

export default Slider