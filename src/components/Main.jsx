import React from "react";
import "./Main.css";
function Main() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>THE MAIN FEATURES</h1>
        <div style={{ height: 8, width: 100, backgroundColor: "#8B0000" }} />
      </div>
      <div className="container headings">
        <div style={{backgroundColor:"#8B0000" ,width:180,justifyContent:"center",alignItems:"center"}}>
        <h3 style={{color:"white"}}>CAPABILITIES</h3>
        </div>
        <span>
          - UP TO 20K <br />- 40 FOOT FLAT BED <br />
          - AIR RIDE <br />
          - MAJORITY OF THE U.S.
        </span>
      </div>
    </div>
  );
}

export default Main;
