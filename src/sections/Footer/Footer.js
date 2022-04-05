import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaLinkedinIn } from "react-icons/fa";


import './Footer.styles.scss';

function Footer() {
  return (
    <div className="foot">
      <div className='guide'>
          <p className="subHeading">Home</p>
          <ul>
              <li><a href="/">About us</a></li>
              <li><a href="/">Places</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Destination</a></li>
              <li><a href="/">Terms</a></li>
              <li><a href="/">Privacy</a></li>
            </ul>
      </div>
      <div className='activities'>
          <p className="subHeading">Practice Area</p>
          <ul>
              <li><a href="/">Travel</a></li>
              <li><a href="/">Popular Places</a></li>
              <li><a href="/">Destination</a></li>
              <li><a href="/">Tour</a></li>
              <li><a href="/">Family Vacation</a></li>
            </ul>
      </div>
      <div className='offer'>
          <p className="subHeading">Services</p>
          <ul>
              <li><a href="/">Tour</a></li>
              <li><a href="/">Swimming</a></li>
              <li><a href="/">Kayak</a></li>
              <li><a href="/">Surfing</a></li>
            </ul>
      </div>
      <div>
          
            <p className='subHeading'>Contact</p>
            <p className="address">43 Raymouth Rd. Baltemore, London 3910</p>
            <p className="address">+1(123)-456-7890</p>
            <p className="address">+1(123)-456-7890</p>
            <p className="address">info@mydomain.com</p>
          
          <div className='social'>
              <p className="subHeading">Connect</p>
              <ul>
                  <li><a href="/"><FaInstagram/></a></li>
                  <li><a href="/"><FaTwitter/></a></li>
                  <li><a href="/"><FaFacebookF/></a></li>
                  <li><a href="/"><FaLinkedinIn/></a></li>
                  <li><a href="/"><FaPinterest/></a></li>
                
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Footer
