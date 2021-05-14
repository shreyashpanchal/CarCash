import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import './Message.css';
function Message() {
    return (
        <div className="msgcontainer">
            <div className="message">
            <ScrollAnimation animateIn="animate__slideInLeft"  animateOut="animate__slideOutRight">
           
          
              <h1>Our Reputation Precedes Us</h1><br></br>
              <p>As one of the leading vehicle removal specialists in Newcastle, Aussie Express Car Removal has a reputation to look after.
                   This is why we do everything we can to offer one time, high quality service every time.</p>
                   </ScrollAnimation>
            </div>
            
        </div>
    )
}

export default Message
