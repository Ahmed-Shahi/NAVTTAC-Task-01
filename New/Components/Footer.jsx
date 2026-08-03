import React from 'react'
import "./Footer.css"
function Footer(props) {
    console.log(props);
    
    return (
    <div className='footer-main-dev'>
        <div className='footer-left'>
            <img src={props.logo} className='footer-image' alt="" />
        </div>
        <div className='footer-right'>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Footer