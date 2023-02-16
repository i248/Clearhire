import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


function WelcomeLoginPage() {
  return (
    <div>
      <div
        className="ffsghmgfd"
        style={{
          border: "1px solid #C8C8C8",
          width: "100%",
          height: "50rem",
          margin: "0rem 0rem",
          backgroundColor: "#F5F7F9 ",
        }}
      >
        <Header />

        <div
          className="safsdgh"
          style={{ textAlign: "center", margin: "10rem 0rem" }}
        >
          <h1>
            Welcome to <span style={{ color: "#00823B" }}>clearhire</span>
          </h1>
          <p className="sada5" style={{fontSize:"20px"}} >
            clearhire helps you find that best employee you've been looking all
            along
          </p>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-md-6">
            <div
                className="asfsnm"
                style={{
                  border: "1px solid #00000014",
                  width: "45%",
                  height: "4rem",
                  margin:"0rem 27rem"
                }}
              >
                <div
                  className="fsshnz d-flex"
                  style={{ fontSize: "12px", margin: "0rem 3rem" }}
                >
                  <img
                    src="./image/Group 736.svg"
                    style={{ height: "30px", margin: "1rem 0.7rem" }}
                  />
               <Link to="/employersignup"  style={{textDecoration:"none",color:"black"}}>
               <p className="fet" style={{ margin: "1.3rem 0rem" }}>
                    <b>EMPLOYER SIGNUP</b>
                  </p>
               </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
            <div
                  className="asfsnm"
                  style={{
                    border: "1px solid #00000014",
                    width: "45%",
                    height: "4rem",
                    margin: "0rem 1rem",
                  }}
                >
                  <div
                    className="fsshnz d-flex"
                    style={{ fontSize: "12px", margin: "0rem 3rem" }}
                  >
                    <img
                      src="./image/Group 737.svg"
                      style={{ height: "27px", margin: "1rem 0.7rem" }}
                    />
                 <Link to="/employeeesignup"  style={{textDecoration:"none",color:"black"}}>
                 <p className="fet" style={{ margin: "1.3rem 0rem" }}>
                      <b>EMPLOYEE SIGNUP</b>
                    </p>
                 </Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="asfaio" style={{ margin: "16rem 0rem" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default WelcomeLoginPage;
