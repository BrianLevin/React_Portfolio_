import { useState } from "react";
import emailjs from 'emailjs-com';
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_hgh6di9","template_m5cazjo",e.target,  "user_Gd9cR6GwJni38Y62QDpP3"  );
    setMessage(true);
    e.target.reset()
  };
 
  
  return (
    <div className="contact" id="contact">
      <div className="left">
        
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit} >
          <input type="text" name = "email" placeholder="Email" />
          <textarea  name= "message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP!</span>}
        </form>
      </div>
    </div>
  );
}
