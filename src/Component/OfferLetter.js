import React from "react";
import { BsCheckCircle } from "react-icons/bs";
// import React from 'react'
import { RadialProgress } from "react-radial-progress-indicator";
import Footer from "./Footer";
import Header5 from "./Header5";
// function OfferLetter() {
const OfferLetter = (props) => {
  return (
    <div className="csdgg44gs5">
      <div
        className="tree"
        style={{
          border: "1px solid #C8C8C8",
          width: "100%",
          height: "50rem",
          // margin: "4rem 12rem",
          backgroundColor: "#F5F7F9 ",
        }}
      >
        <Header5 />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <br></br>
              <br></br>
              <h2 style={{ margin: "0rem 5rem" }}>Offer Letter</h2>
              <br></br>
              <h5
                className="da"
                style={{ color: "#00823B", margin: "0rem 5rem" }}
              >
                <b>Company</b>
              </h5>
              <h5 style={{ margin: "0rem 5rem" }}>
                The Madras Branding Company
              </h5>
              <br></br>
              <h5
                className="sdsd"
                style={{ color: "#00823B", margin: "0rem 5rem" }}
              >
                <b>Name</b>
              </h5>
              <h5 style={{ margin: "0rem 5rem" }}>Sivasundar N</h5>
              <br></br>
              <h5
                className="sdsd"
                style={{ color: "#00823B", margin: "0rem 5rem" }}
              >
                <b>Aadhar Id</b>
              </h5>
              <h5 style={{ margin: "0rem 5rem" }}>5486 6598 6598</h5>
              <br></br>
              <h5
                className="sdsd"
                style={{ color: "#00823B", margin: "0rem 5rem" }}
              >
                <b>Job Role</b>
              </h5>
              <h5 style={{ margin: "0rem 5rem" }}>Graphics Designer</h5>
              <br></br>
              <h5
                className="sdsd"
                style={{ color: "#00823B", margin: "0rem 5rem" }}
              >
                <b>Date of Joining</b>
              </h5>
              <h5 style={{ margin: "0rem 5rem" }}>01-01-2023</h5>
              <br></br>
              <h5
                className="sdsd"
                style={{ color: "#00823B", margin: "0rem 5rem" }}
              >
                <b>Salary</b>
              </h5>
              <h5 style={{ margin: "0rem 5rem" }}>500,000 PA</h5>
              <br></br>
              <br></br>
              <div
                className="fss"
                style={{
                  border: "1px solid #00823B",
                  margin: "0rem 5rem",
                  height: "3.2rem",
                  width: "70%",
                  backgroundColor: "#00823B",
                  borderRadius: "5px",
                }}
              >
                <div className="ssq d-flex" style={{ margin: "1rem 7rem" }}>
                  <BsCheckCircle
                    style={{ color: "#FFFFFF", margin: "0.2rem 0.2rem" }}
                  />
                  <p
                    className="dad"
                    style={{ color: "#FFFFFF", fontSize: "14px" }}
                  >
                    Verify & Accept
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/* <p>pppppppppp</p>
                <RadialProgress
      width={100}
      height={100}
      steps={10}
      step={3}
    /> */}
            </div>
          </div>
        </div>
        <div className="fsssssss15" style={{margin:"4rem 0rem"}}>
        <Footer/>
      </div>
      </div>
     
    </div>
  );
};

export default OfferLetter;
