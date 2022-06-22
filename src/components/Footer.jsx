import React from "react";
import "./Footer.css";
import img5 from "../assets/5.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div>
      {/* upper div */}
      <div className="upper-div">
        <div class="container" style={{ paddingTop: "100px" }}>
          <div class="row row-cols-4" style={{ justifyContent: "center" }}>
            <div class="col" style={{ color: "white" }}>
              <img src={img5} alt="not found" />
              <br />
              <ul style={{marginLeft:"25px",marginTop:"10px"}}>
                <li> U.S. Expedite Service </li>
                <li> Located in the Midwest </li>
                <li> Family-Owned Business </li>
                <li> Focused on Rural Areas </li>
              </ul>
              <img
                src={fb}
                alt="not found"
                style={{ marginRight: "12px", marginTop: "10px" }}
              />
              <img src={insta} alt="not found" style={{ marginTop: "10px" }} />
              <FontAwesomeIcon icon="fa-brands fa-youtube" />
            </div>
            <div class="col" style={{ color: "white" }}>
              <h6 style={{marginTop:"30px",marginBottom:"0px"}}>QUICK LINKS</h6>
              <p>Home</p>
              <p> About Us</p>
              <p>RLM Advantage</p>
              <p>Services</p>
            </div>
            <div class="col" style={{ color: "white" }}>
            <h6 style={{marginTop:"30px",marginBottom:"0px"}}>OUR SERVICES</h6>
              <p>Capabilities</p>
              <p> Products</p>
              <p>Industries</p>
            </div>
            <div class="col" style={{ color: "white" }}>
            <h6 style={{marginTop:"30px",marginBottom:"0px"}}>GET IN TOUCH</h6>
              <p>info@rlmsalesllc.com</p>
              <p>877.465.8581</p>
              <p>408 N Wayne St #159 Angola, IN 46703</p>
            </div>
          </div>
        </div>
      </div>
      {/* lower div */}
      <div
        className="lower-div"
        style={{ textAlign:"center",padding:"15px" }}
      >
        <span style={{ color: "white" }}>
          © 2021 company Name. All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
