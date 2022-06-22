import React from "react";
import "./Main.css";
import img8 from "../assets/8.png"
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
        <h1 style={{ textAlign: "center", marginTop: "86px" }}>
          THE MAIN FEATURES
        </h1>
        <div style={{ height: 8, width: 100, backgroundColor: "#8B0000" }} />
      </div>
      <div className="headings" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        {/* heading starts from here */}
        <div>
        <div
          style={{
            backgroundColor: "#8B0000",
            width: 180,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <h3 style={{ color: "white", marginBottom: 0 }}>CAPABILITIES</h3>
        </div>
        {/* heading item lists starts from here */}
       <div style={{ marginLeft: "60px" }}>
        {/* another div starts from here */}
          <div style={{ display: "flex" }}>

            <div
              style={{
                height: 2,
                width: 10,
                backgroundColor: "#8B0000",
                marginTop: 12,
                marginRight: 10,
              }}
            />
            UP TO 20K <br />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: 2,
                width: 10,
                backgroundColor: "#8B0000",
                marginTop: 12,
                marginRight: 10,
              }}
            />
            40 FOOT FLAT BED <br />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: 2,
                width: 10,
                backgroundColor: "#8B0000",
                marginTop: 12,
                marginRight: 10,
              }}
            />
            AIR RIDE <br />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: 2,
                width: 10,
                backgroundColor: "#8B0000",
                marginTop: 12,
                marginRight: 10,
              }}
            />
            MAJORITY OF THE U.S <br />
          </div>
        </div>
        {/* div starts from here */}
        <div
          style={{
            backgroundColor: "#8B0000",
            width: 180,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop:"20px"
          }}
        >
          <h3 style={{ color: "white", marginBottom: 0 }}>PRODUCTS</h3>
        </div>
        {/* inner div is here */}
       <div style={{ marginLeft: "60px" }}>
        {/* this is most inner div */}
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: 2,
                width: 10,
                backgroundColor: "#8B0000",
                marginTop: 12,
                marginRight: 10,
              }}
            />
            RAW MATERIALS <br />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: 2,
                width: 10,
                backgroundColor: "#8B0000",
                marginTop: 12,
                marginRight: 10,
              }}
            />
             HEAVY DUTY EQUIPMENT <br />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: 2,
                width: 10,
                backgroundColor: "#8B0000",
                marginTop: 12,
                marginRight: 10,
              }}
            />
             VEHICLES <br />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: 2,
                width: 10,
                backgroundColor: "#8B0000",
                marginTop: 12,
                marginRight: 10,
              }}
            />
             FARMING EQUIPMENT <br />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: 2,
                width: 10,
                backgroundColor: "#8B0000",
                marginTop: 12,
                marginRight: 10,
              }}
            />
             AND MORE... <br />
          </div>
        </div>
        {/* this is outter div */}
        <div
          style={{
            backgroundColor: "#8B0000",
            width: 180,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop:"20px"
          }}
        >
          <h3 style={{ color: "white", marginBottom: 0 }}>INDUSTRIES</h3>
        </div>
        {/* this inner div */}
       <div style={{ marginLeft: "60px" }}>
        {/* this inner most div */}
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: 2,
                width: 10,
                backgroundColor: "#8B0000",
                marginTop: 12,
                marginRight: 10,
              }}
            />
            UP TO 20K <br />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: 2,
                width: 10,
                backgroundColor: "#8B0000",
                marginTop: 12,
                marginRight: 10,
              }}
            />
            AGRICULTURE <br />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: 2,
                width: 10,
                backgroundColor: "#8B0000",
                marginTop: 12,
                marginRight: 10,
              }}
            />
             AUTOMOBILE <br />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: 2,
                width: 10,
                backgroundColor: "#8B0000",
                marginTop: 12,
                marginRight: 10,
              }}
            />
             CONSTRUCTION <br />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: 2,
                width: 10,
                backgroundColor: "#8B0000",
                marginTop: 12,
                marginRight: 10,
              }}
            />
              MANUFACTURING <br />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: 2,
                width: 10,
                backgroundColor: "#8B0000",
                marginTop: 12,
                marginRight: 10,
              }}
            />
             AND MORE... <br />
          </div>
        </div>
        </div>
        <div className="img-div">
      <img src={img8} alt="not found" style={{height:"450px"}} />
        </div>
      </div>
    </div>
  );
}

export default Main;
