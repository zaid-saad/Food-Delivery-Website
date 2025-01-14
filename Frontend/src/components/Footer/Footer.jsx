import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quisquam porro dolorem magni, maiores iure doloremque non ex cum est ullam voluptate odit commodi adipisci repellat error, natus odio necessitatibus!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+923346268466</li>
                <li>zaidsaad327@gmail.com</li>
            </ul>
        </div>  
      </div>
      <hr />
    <p className='footer-copyright'>Copyright © www.Tomato.com - All Rights Reserved
 </p>
    </div>
  )
}

export default Footer
