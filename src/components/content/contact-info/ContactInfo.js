import React, { Component } from 'react';
import './ContactInfo.css';

class ContactInfo extends Component {

  render() {
    return (
      <div className="contact-info-container">
        <div className="contact-info">
          <h2>EMAIL: <a href="mailto:JSuskin85@gmail.com">JSuskin85@gmail.com</a></h2>
          <h2>PHONE: <a href="tel:13478605770">(347) 860-5770</a></h2>
          <h2>LINKEDIN: <a href="https://www.linkedin.com/in/joshua-suskin/">https://www.linkedin.com/in/joshua-suskin/</a></h2>
          <h2>MY DOG'S INSTAGRAM: <a href="https://www.instagram.com/_rouseygirl/">https://www.instagram.com/_rouseygirl/</a></h2>
        </div>
      </div>
    );
  }

}

export default ContactInfo;
