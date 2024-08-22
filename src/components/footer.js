import React from 'react';
import './Footer.css';
import { faFacebook , faInstagram , faLinkedin,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>For Enquiries Contact</h3>
          <p>Dr.V Sajith, Associate Professor (MED) & Faculty Advisor</p>
          <p>Team Unwired, NIT Calicut</p>
          <p>Phone: +91 9446361125</p>
          <p>Email: <a href="mailto:sajith@nitc.ac.in">sajith@nitc.ac.in</a></p>
        </div>
        <div className="footer-section">
          <h3>For More Information</h3>
          <p>Dr.Shijo Thomas, Associate Professor (MED) & Faculty Advisor</p>
          <p>Team Unwired, NIT Calicut</p>
          <p>Phone: +91 9446276409</p>
          <p>Email: <a href="mailto:shijo@nitc.ac.in">shijo@nitc.ac.in</a></p>
        </div>
        <div className="footer-section">
          <h3>Contact Address</h3>
          <p>Team Unwired</p>
          <p>C/o Dr.V Sajith / Dr.Shijo Thomas</p>
          <p>Department of Materials Science and Engineering</p>
          <p>National Institute of Technology Calicut</p>
          <p>Kattangal, Kerala, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <a href='#'>
            <FontAwesomeIcon className='icon_color' icon={faInstagram}  size='2x'/>
        </a>
        <a href='#'>
            <FontAwesomeIcon className='icon_color' icon={faYoutube} size='2x'/>
        </a>
        <a href='#'>
            <FontAwesomeIcon className='icon_color' icon={faLinkedin} size='2x'/>
        </a>
        <a href='#'>
            <FontAwesomeIcon className='icon_color' icon={faTwitter} size='2x'/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
