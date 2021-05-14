import React from 'react'
import './footer.css';
function Footer() {
    return (
        <div className="footer_container">
  <div className="wrap">
            <div className="box1">
            <div className="footlink">
                <h1>About Us</h1><hr></hr><br></br>
                <p>Welcome to Aussie Express Car Removal,
                     where we are willing to pay upto $12,999 for your scrap car and truck</p>
                   <br></br>  <p>Just Give us a call now and get rid of your scrap!</p>
            </div>
            <div className="footlink">
                <h1>Useful Links</h1><hr></hr><br></br>
                <ul>
                    <li>Anti Spam Policy</li>
                    <li>Disclaimer</li>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div className="footlink">
                <h1>Our Contacts</h1><hr></hr><br></br>
                <p>For all cash for cars give us a call or send us an email using the
                     details below.</p><br></br>
               <div> <a href="#">+61 466 331 633</a></div><br></br>
                <a href="#">newcastlemail.com</a>
            </div>
            </div>
            <div className="box2">
                <p>Copyright © 2020 - 2021. Aussie Express Car Removal. 
                    All rights reserved</p>
            </div>
            </div>
        </div>
    )
}

export default Footer
