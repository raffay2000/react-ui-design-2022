import React from 'react'
import "./Why.css"
import img from "../assets/6.png"
function Why() {
  return (
    <>
    <div className='container77' style={{display:"flex",justifyContent:"space-between"}}>
        <div>
            <h1>Why Choose Us</h1>
            <div style={{height:8,width:100,backgroundColor:"#8B0000"}}/>
            <ul style={{marginTop:30,marginLeft:30,width:"400px"}}>
                <li> EXPEDITED SHIPPING</li>
                <li> CDL OPERATOR </li>
                <li> AIR RIDE SUSPENSION</li>
                <li> "WHITE GLOVE" SERVICE UPON REQUEST* </li>
                <li> DEDICATED TRANSPORT (YOUR PRODUCT WILL NOT BE TRANSFERRED FROM ONE VEHICLE TO ANOTHER)  </li>

                 
            </ul>
            <button style={{marginTop:30,backgroundColor:"#8B0000",borderRadius:5,padding:10}}>
               <p style={{marginBottom:0,color:"white"}}>
                 Read More
                </p>
            </button>
        </div>
        <div>
            <img src={img} alt="not found" style={{width:"505px",height:"315px"}}/>
        </div>

    </div>
    {/* <div style={{height:100,backgroundColor:"#8B0000"}}/> */}
    </>
  )
}

export default Why