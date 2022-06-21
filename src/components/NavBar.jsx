import React from 'react'
import "./NavBar.css"
import fb from '../assets/fb.png'
import tw from '../assets/tw.png'
import insta from "../assets/insta.png"
import linkedin from '../assets/linkedin.png'
function NavBar() {
  return (
    <div className='container1'>
        {/* //nav Items */}
        <div className='container2'>
            <ul>
                <li>About</li>
                <li>OUR SERVICES</li>
                <li>RLM ADVANTAGES</li>
                <li>CONTACT US</li>
            </ul>

        </div>
        {/* //social icons */}
        <div className='social-icons'>
            <img src={fb} alt="not found" />
            <img src={insta} alt="not found" />
            <img src={linkedin} alt="not found" />
            <img src={tw} alt="not found" />

        </div>
    </div>
  )
}

export default NavBar