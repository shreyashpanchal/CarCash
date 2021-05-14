import React from 'react'
import "./Card.css"
function Card(props) {
    return (
        <div className="card-container">
            <div className="card">
                <div className="image">
                    <img src={props.imgsrc} alt="ima1ge" />
                </div>
                <div className="cardcontent">
                    <h1>{props.head}</h1>
                    <p>{props.para}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
