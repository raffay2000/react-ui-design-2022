import React from 'react'
import "./About.css"
import img from "../assets/6.png"
function About() {
  return (
    <>
    <div className='container' style={{display:"flex",justifyContent:"space-between",marginTop:60,marginBottom:60}}>
        <div>
            <h1>About Us</h1>
            <div style={{height:8,width:100,backgroundColor:"#8B0000"}}/>
            <ul style={{marginTop:30,marginLeft:30}}>
                <li>U.S. Expedite Service </li>
                <li>Located in the Midwest </li>
                <li>Family-Owned Business </li>
                <li>Focused on Rural Areas </li>
            </ul>
            <button style={{marginTop:30,backgroundColor:"#8B0000",borderRadius:5,padding:10}}>
               <p style={{marginBottom:0,color:"white"}}>
                 Read More
                </p>
            </button>
        </div>
        <div>
            <img src={img} alt="not found" style={{width:"505px",height:"270px"}}/>
        </div>

    </div>
    <div style={{height:100,backgroundColor:"#8B0000"}}/>
    </>
  )
}

export default About