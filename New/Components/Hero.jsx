import React from 'react'
import phone from "../public/phone.png"
import "./Hero.css"
function Hero() {
  return (
    <div className='main-dev'>
        <div className='left-dev'>
            <div className='bold-text'><h1>AWESOME APP</h1></div>
            <br />
            <div className='bold-text'><h1>APP LANDING TEMPLETE</h1></div>
            <br />
            <p className='hero-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis possimus quam sed.Veritatis possimus quam sed.Veritatis possimus quam sed.</p>
            <br />
            <ul className='list-hero'>
                <li>Lorem ipsum dolor sit amet.</li>
                <br />
                <li>Lorem ipsum dolor sit amet.</li>
                <br />
                <li>Lorem ipsum dolor sit amet.</li>
                <br />
                <br />
                <li className='last'>DOWNLOAD APP</li>
            </ul>
        </div>
        <div className='right-dev'>
            <img className='hero-image' src={phone} alt="" />    
        </div>        

    </div>
  )
}

export default Hero