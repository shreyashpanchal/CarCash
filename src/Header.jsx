import React from 'react'
import car from './car_logo1.png'
import './Header.css';
import "animate.css/animate.min.css";

function Header() {
    return (
        <>
            <div className="cont">
                 <div>
                     

                     <img id="car" src={car}></img>
                    
                    
                </div>
                <div className="links">
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">About Us</a>
                    <a href="#">Get Quote</a>
                    <a href="#">Blogs</a>
                </div>
            </div>
        </>
    )
}

export default Header
