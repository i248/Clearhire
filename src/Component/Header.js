import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      className="wfwfv"
      style={{
        border: "1px solid #C8C8C8",
        width: "100%",
        height: "6rem",
        margin: "0rem 0rem",
        backgroundColor: "#FFFFFF ",
        // boxShadow: " 0px 3px 6px #00000029",
        opacity: "1",
      }}
    >
      <div className="faag d-flex">
       <Link to="/home">
       <img className="afsef"
          src="./image/Group 2@2x.png"
          style={{ height: "2rem", width: "40%", margin: "2rem 10rem" }}
        />
       </Link>
        <div
          className="wdvnm d-flex justify-content-center"
          style={{ margin: "0rem 0rem" }}
        >
       <Link to="/home" style={{textDecoration:"none",color:"black"}}>
       <p
            className="fhh1"
            style={{ margin: "2rem 2rem", fontSize: "18px" }}
          >
            Home
          </p>
       </Link>
          <p
            className="fhh2"
            style={{ margin: "2rem 1rem", fontSize: "18px" }}
          >
            How it works
          </p>
          <p
            className="fhh3"
            style={{ margin: "2rem 1rem", fontSize: "18px" }}
          >
            Support
          </p>
        </div>
        <div
          className="fhjm"
          style={{
            margin: "1.5rem 1rem",
            border: "1px solid #00823B",
            height: "3rem",
            width: "8%",
            backgroundColor: "#00823B",
            color: "#FFFFFF",
          }}
        >
         <Link to="/welcomepage" style={{textDecoration:"none",color:"White"}}> <p
            className="dsav"
            style={{
              textAlign: "center",
              fontSize: "15px",
              margin: "0.5rem 0rem",
            }}
          >
            Login
          </p></Link>
        </div>
        <div
          className="fhrtm"
          style={{
            margin: "1.5rem 1rem",
            border: "1px solid #000000",
            height: "3rem",
            width: "8%",
            backgroundColor: "#000000",
            color: "#FFFFFF",
          }}
        >
        <Link to="/welcomeloginPage" style={{textDecoration:"none",color:"White"}}>
        <p className="ffef546"
            style={{
              textAlign: "center",
              fontSize: "15px",
              margin: "0.5rem 0rem",
            }}
          >
            Signup
          </p>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
