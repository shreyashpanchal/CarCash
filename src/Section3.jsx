import React from 'react'
import './Section3.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Card2 from './Card2';
function Section3() {
    return (
        <div className="section3_container">
            <div className="main3">
                <div className="headsection3-1">
                    <h1>WELCOME TO AUSSIE EXPRESS CAR REMOVAL</h1>
                </div>
                <div className="headsection3-2">
                    <h3>We pay top cash for cars and scrap metal in NSW</h3>
                </div>
            </div>
          
            <div className="submain">
            
                <Card2
                cardhead="Instant Cash for Your Scrap Trucks"
                cardpara="Call now and we will remove your scrap with our same day removal service. We have a network of tow truck and vehicle removalists ready to go. We will work with you and your schedule to arrange the collection and cash transfer."
                /> 
                 
                <Card2
                cardhead="Upto $12,999 Cash for Cars Offer"
                cardpara="There are car junking services companies who claim to offer the top and best cash offers to customers but they don't commit to their commitments. But no one can match our price that's for sure. Just CALL NOW!!"
                />
               
                 <Card2
                cardhead="Free & Professional Car Removal"
                cardpara="We have all the experience and expertise to remove your car from your garage with safety and as per your satisfaction. Professionalism and safety are what our mission is. AND its totally FREE."
                />
             
                 <Card2
                cardhead="Our Awesome Customer Service"
                cardpara="Our team is just a click or phone away to provide you all the details you need about our sell junk car online service. We are the best car recycling service near you. You will surely get the best deal in the whole Newcastle."
                />
               
            </div>
           
        </div>
    )
}

export default Section3 ;
