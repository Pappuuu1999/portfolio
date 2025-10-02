import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Hello how are you</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img className='user_icon' src={user_icon} alt="" />
                    <input type="email" placeholder='Enter you email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
           all copy right are reserved 
        </p>
      
      <div className="footer-bottom-right">
        <p>term services</p>
        <p>privacy policy</p>
        <p>connect with me</p>
      </div>
      </div>

    </div>
  )
}

export default Footer
