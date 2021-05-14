import React from 'react'
import './Card2.css'
function Card2(props) {
    return (
        <div className="card2">
            <div className="cards2">
                <div className="cardhead">
               <h1>{props.cardhead}</h1>
                </div>
                <div className="cardcontent">
                  <p>{props.cardpara}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Card2
