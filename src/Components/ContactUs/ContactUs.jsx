import React from 'react';
import './ContactUs.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate sending data with POST (no actual backend)
        console.log('Form submitted (POST simulation)', { name, email, message });
        alert('Form submitted successfully!'); // Replace console.log with your desired action

        form.reset();
    };

    return (
        <div id="contact" className='contactus'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>feel free to contact</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>Fawad420320@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+92 302 5848653</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Islamabad, Pakistan</p>
                        </div>
                    </div>
                </div>
                <form className='contact-right' onSubmit={handleSubmit}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' required />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' required />
                    <label htmlFor="">Your Message</label>
                    <textarea name="message" rows="5" placeholder='Enter your message' required></textarea>
                    <button type='submit' className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
