import React from 'react'
import './Section1.css'

import "animate.css/animate.min.css";

import ScrollAnimation from 'react-animate-on-scroll';
import Slide from 'react-reveal/Slide';
import car1 from './car_logo12.png'
function Section1() {
    return (
        <div className="section1">
            <div className="left1">
           <Slide left>
                  <img src={car1} alt="car1"/></Slide>
            </div>
            <div className="right1">
           
            
                   
                <ScrollAnimation animateIn="animate__slideInLeft"  animateOut="animate__slideOutRight">
   <div><span id="sp1">WE PAY INSTANT CASH</span><span id="sp2"><br></br>FOR YOUR</span><span id="sp3"><br></br>JUNK CARS</span></div>
</ScrollAnimation>
              

            </div>
        </div>
    );
}

export default Section1
