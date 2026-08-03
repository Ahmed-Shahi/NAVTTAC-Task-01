import React from 'react'
import './Header.css'
import logo from "../public/maple-leaf.png"
function Header() {
  return (
    <div className='main-dev'>
        <div className='first-dev'>
            <img src={logo} className="header-image" alt="" className='logo'/>
            <h1>AWESOME APP</h1>
        </div>
        <div className='second-dev'>
            <ul className='list'>
                <li>Home</li>
                <li>Feature</li>
                <li>Pricing</li>
                <li className='last'>Download App</li>
            </ul>
        </div>
    </div>
  )
}

export default Header