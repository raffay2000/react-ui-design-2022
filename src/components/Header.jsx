import React from 'react'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"
import "./Header.css"

function Header() {
    const iconStyles= {
      width:"41px",height:"41px"
    }
    const fontStyle={
      fontSize:"14px",
      textAlign: "left",
  }
  const logoStyle={
    width:"158px",height:"70px"
  }
    return (
      <>
      <div className="container0" style={{flex:1}}>
        <div className="header" style={{flexDirection:'row'}}>
          <div className="inner-header" style={{flex:1}}>
       <img src={img1} alt='not found' />
       <div className='icon-container'>
        <div className='info-div'>
       <img src={img2} alt='not found' style={iconStyles}/>
       <p style={fontStyle} className='fontStyle'>
       <b>
        408 N WAYNE ST #159 
        </b><br/>
        ANGOLA, IN 46703
       </p >
        </div>
        <div className='info-div'>
       <img src={img4} alt='not found' style={iconStyles}/>
       <p style={fontStyle} className='fontStyle'>
        <b>
          Monday-Friday: 9am to 5pm Saturday
        </b><br/>
           / Sunday: Closed
       </p>
        </div>
        <div className='info-div'>
       <img src={img3} alt='not found' style={iconStyles}/>
       <p style={fontStyle} >
        <b>
          877-465-8581
        </b><br/>
        renaultmchenry@hotmail.com
       </p>
        </div>
       </div>
        </div>
       </div>
      </div>
      </>
    );
  } 
  
  export default Header;