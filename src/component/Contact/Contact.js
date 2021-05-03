import emailjs from 'emailjs-com';
import React from 'react';
import './Contact.css';
import github from '../../Image/Icon/giit.svg';
import gmail from '../../Image/Icon/ggg.png'
import linkidn from '../../Image/Icon/linkedin-512.png'
import Navber from '../Navber/Navber';





const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Arifullah565360', 'template_bdo9lor', e.target, 'user_nyx2anJ22xArJio4tUuoQ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div>
      <Navber></Navber>
      
    <section className="Contact" id="skills">
      <div className="max-width">
        <h2 className="title">Contact</h2>
        <div className="Contact-content">
          <div className="column left">
            <form className="contact-form" onSubmit={sendEmail}>

              <input className="inputName" placeholder="Your Name" type="text" name="name" />
              <br />

              <input className="inputemail" placeholder="Enter Your email" type="email" name="email" />
              <br />

              <textarea className="inputmessage" placeholder="Message" name="message" />
              <br />
              <input  class="btn btn-outline-danger" type="submit" value="Send" />
            </form>
          </div>

          <div className="column right">
            
            <a href={`https://github.com/arifullah565360`}><img src={github} alt="" />  </a>
            <a href={`https://github.com/arifullah565360`}><img src={gmail} alt="" />  </a>
            <a href={`https://www.linkedin.com/in/arif-ullah-5a6008211/`}><img src={linkidn} alt="" />  </a>

          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;