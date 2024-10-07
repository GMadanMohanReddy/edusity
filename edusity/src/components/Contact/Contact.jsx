import React, { useState } from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import axios from "axios";
const Contact = () => {

        const [data, setData] = useState({
          name: "",
          number: "",
          emailId: "",
          message: "",
        });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value)
        setData({ ...data, [name]: value });
      };

      const submitHandler = (event) => {
        event.preventDefault();
        
        console.log(data)
    
        axios
          .post("http://localhost:8080/submit",data, {
            
          })
          .then((response) => {
            console.log("Form Submitted successfully:", response.data);
            alert("Registered successfully");
          })
          .catch((error) => {
            console.error("Error registering:", error);
            alert("Error Registering, Please try again !");
          });
      };
 

  return (
    <div>

        <div className='contact'>
            <div className="left">
                <p className='heading'>Send us a message <img src={message_icon} alt="" className="message_icon" /></p>
            <p>Feel free to reach out through contact form or find our contact information below. 
                Your feedback, questions, and suggestions are important to us as we strive to provide exceptional
                 service to our university community.</p>
                <p><img src={mail_icon} alt="" className="mail" />Contact@madan.madanwork</p>
                <p><img src={phone_icon} alt="" className="phone" />+1 123-456-7890</p>
                <p><img src={location_icon} alt="" className="loc" />77 Massachusetts Ave, Cambridge
                MA 02139, United States</p>
            </div>
            
            <div className="right">

                <form  className='form' onSubmit={submitHandler}>
                    <label htmlFor="">Your Name</label><br />
    
                    <input type="text" name='name'  placeholder='Enter your name ' onChange={handleInputChange}/><br />
                    <label htmlFor="">Phone numner </label><br />
                    <input type="numeric" name='number'  placeholder='Enter your number ' onChange={handleInputChange}/><br />
                    <label htmlFor="">Your email</label><br />
                    <input type="email" name='emailId'  placeholder='Enter your email id ' onChange={handleInputChange}/><br />
                    <label htmlFor="">Write your message here</label><br />
                    <textarea className='message' name="message" placeholder='Write your message' onChange={handleInputChange}></textarea>
                    <button className=' submit' type="submit" >Submit now <img src={white_arrow} alt="" /></button>
                </form>
                
            </div>
        </div>
      
    </div>
  )
}

export default Contact
