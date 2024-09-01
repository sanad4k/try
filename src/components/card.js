import React from "react";
import './card.css'
const Card = ({ src , name , details1 , details2}) => {
    // const src = {src}
    return (
        <div className="card">
            <div className="image-container">
                <img className="the_image" alt="project_image" src={src}/>
            </div>
            <div className="text_box">
                <div className="title">{name}</div>
                <div className="title details1">{details1}</div>
                <div className="details2">{details2}</div>
                <br/>   
            </div>
        </div>
        
    )
}
export default Card