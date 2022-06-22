import React from 'react'
import "./NavBar.css"
import fb from '../assets/fb.png'
import tw from '../assets/tw.png'
import insta from "../assets/insta.png"
import linkedin from '../assets/linkedin.png'
function NavBar() {
  // let test = document.getElementsByClassName(".container2 ul li");
  return (
    <>
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
    <div className='drop-down-1' style={{height:"291px",width:"386px",backgroundColor:"ButtonHighlight",borderWidth:"2px",borderColor:"ActiveCaption",position:"absolute",left:"170px"}}>
    </div>
    </>
  )
}

export default NavBar