import React from 'react'
import './Section2.css'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import v1 from './vector1.jpg'
import v2 from './vector2.jpg'
import v3 from './vector3.jpg'
import v4 from './vector4.jpg'
import v5 from './vector5.jpg'
import v6 from './vector6.jpg'
function Section2() {
    return (
        <div className="section2">
            <div className="heading2">
               
            <ScrollAnimation animateIn="animate__slideInLeft"  animateOut="animate__slideOutRight">
            <h1>Why Aussie Express Car Removal ?</h1>
           </ScrollAnimation>
              
            </div>
           
            <div className="four">

            
             <div className="card-section1">
             <div className="card-inner-box">
             <div className="textpart">

             <div className="textcontainer">
                 <h1>Best Cash For Used Cars</h1>
                 <p>We are a registered car junking service that accepts and buys junk and used cars and assures unbelievable cash and we have the same day car removal service.
                      We offer the best deals in the town for your junk.</p>
             </div>
             </div>
                    <div className="imagepart">
                    <div className="imgcontainer">
                        <div className="imgleft">
                        <img src={v2} alt="car2"/>
                        </div>
                        <div className="imgright">
                        <img src={v1} alt="car2"/>
                        </div>
                        
                    </div>
                    </div>

                   
                </div>
                 </div>  <hr></hr>  
                 <div className="card-section1">
                <div className="card-inner-box">
                    <div className="imagepart">
                          <div className="imgcontainer">
                          <div className="imgleft1">
                        <img src={v3} alt="car2"/>
                        </div>
                        <div className="imgright1">
                        <img src={v4} alt="car2"/>
                        </div>
                          </div>
                    </div>
                    <div className="textpart">
                        <div className="textcontainer">
                            <h1>Scrap Car Recycling</h1>
                            <p>We offer a responsible car recycling service near me ensuring we reuse and recycle as much of the scrap car as possible. 
                                We use the latest method to remove any hazardous materials from the car safely.</p>
                        </div>
                    </div>
                </div>
                </div><hr></hr>   
                <div className="card-section1">
             <div className="card-inner-box">
             <div className="textpart">

             <div className="textcontainer">
                 <h1>Our Customers Love Us</h1>
                 <p>We have thousands of happy customers. If you need help to scrap your car online, our Customer Services Team is just a call away! 
                     Call now and get rid of your junked car for instant cash.</p>
             </div>
             </div>
                    <div className="imagepart">
                    <div className="imgcontainer">
                    <div className="imgleft">
                        <img src={v6} alt="car2"/>
                        </div>
                        <div className="imgright">
                        <img src={v5} alt="car2"/>
                        </div>
                        
                    </div>
                    </div>

                   
                </div>
                 </div>  <hr></hr>  
            


              </div>
           
           
        </div>
    )
}

export default Section2;
