import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function SignupDone() {
  return (
    <div
      className="eereeg"
      style={{
        border: "1px solid #C8C8C8",
        width: "100%",
        height: "45rem",
        margin: "0rem 0rem",
        backgroundColor: "#FFFFFF ",
      }}
    >
      <Header />
      <div className="container" >
        <div className="fsf" style={{ margin: "10rem 0rem " }}>
          <img
            className="evb"
            src="./image/Check.svg"
            style={{ margin: "1rem 37rem ", height: "80px" }}
          />

          <h2 className="ssa" style={{ textAlign: "center" }}>
            Your signup is done
            <br /> wait for approval
          </h2>
          <p style={{ textAlign: "center",fontSize:"20px" }}>
            We will intimate you via email one
            <br /> the approval process in done.
          </p>
        </div>
      </div>
    
    <div className="asfgdg" style={{margin:"12rem 0rem"}}>
    <Footer />
    </div>
    </div>
  );
}

export default SignupDone;
