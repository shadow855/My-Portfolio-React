import React, { useEffect } from 'react'
import '../Css Folder/contact.css';
import { scroll_div_contact } from '../Javascript Folder/scroll-div-contact.js';
import Icon from '../Components/Icon';
import contactIcon from '../Images/Contact.gif';

export const Contact = () => {
  useEffect(() => {
    scroll_div_contact();
  }, []);

  

  // Function to handle the "Contact Me" button click
  const handleContactButtonClick = () => {
    const externalMail = 'https://shadow855.github.io/External-Mail-Page/';
    // Open the GitHub page in a new tab
    window.location.href = externalMail;
  };

  return (
    <div>
      <div className="intro-contact-main">
        <div className="intro-contact-img">
          <img src={contactIcon} alt="introgif" id="intro-gif" />
        </div>
        <div className="intro-contact-text">
          <h1>Contact Me</h1>
          <p>You can contact me at the places mentioned below. I will try to get back to you as fast as I can.</p>
          <div className="link-icons">
            <a href="https://github.com/shadow855" target="_blank" rel="noreferrer">
              <Icon iconName="github" className="icons" />
            </a>
            <a href="https://www.linkedin.com/in/raiyan-mushtaque-110824254" target="_blank" rel="noreferrer">
              <Icon iconName="linkedin" className="icons" />
            </a>
            <a href="mailto:raiyanmushtaque@gmail.com" target="_blank" rel="noreferrer">
              <Icon iconName="gmail" className="icons" />
            </a>
            <a href="https://www.instagram.com/shadow_855/?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noreferrer">
              <Icon iconName="instagram" className="icons" />
            </a>
            <a href="https://youtube.com/@shadowgames9719" target="_blank" rel="noreferrer">
              <Icon iconName="youtube" className="icons" />
            </a>
          </div>
          <button id="contact-btn" onClick={handleContactButtonClick}>Contact Me</button>
        </div>
      </div>

      <div className="scroll-contact-div1">
        <div>
          <p className="need-help-p-1 scroll-div">Need any help with your projects?</p>
          <p className="need-help-p-2 scroll-div">Let's talk 15min. Let's establish your Action Plan.</p>
        </div>
      </div>
    </div>
  )
}
