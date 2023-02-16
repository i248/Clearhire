import React from "react";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useState } from "react";
import CircleprogressBar from "./CircleprogressBar";
import { AiFillCheckCircle } from "react-icons/ai";
import { Card } from "antd";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RadialProgress } from "react-radial-progress-indicator";
import Footer from "./Footer";
import Header5 from "./Header5";

function YourProfile() {
  const [percentage, setPercentage] = useState(35);
  const now = 60;

  return (
    <div className="containe">
      <div
        className="ef54m"
        style={{
          border: "1px solid #C8C8C8",
          width: "100%",
          height: "128rem",
          // margin: "4rem 18rem",
          backgroundColor: "#F5F7F9 ",
        }}
      >
        <Header5 />

        <div className="convewf" style={{ margin: "3rem 43rem" }}>
          <img className="ffr" src="./image/pic.png" />
          <br></br>
          <br></br>
          <h2>Govarthini, 24</h2>
          <p className="gdg455" style={{fontSize:"22px"}}>Chennai, India</p>
          <br></br>
          <br></br>
          <br></br>
          <div
            className="etrerwh45"
            style={{
              border: "1px solid #00000012",
              backgroundColor: "#FFFFFF",
              width: "25rem",
              height: "7rem",
              margin: "-4rem -8rem",
              borderRadius: "50px",
              position: "absolute",
              zIndex: "999",
              boxShadow: "0px 0px 33px #00000012",
            }}
          >
            <div className="ruu341 d-flex" style={{ margin: "1rem 1rem" }}>
              <div className="jiji d-flex">
                <RadialProgress
                  width={80}
                  height={80}
                  steps={10}
                  step={7.5}
                  fontRatio={4}
                  ringBgColour="#E3E3E3"
                  ringFgColour="#E56839"
                  ringIntermediateColour="#E75459"
                  text={function text(steps, proportion) {
                    return "".concat(Math.floor(100 * proportion), "%");
                  }}
                  className="th8788rtrt"
                />
                <p className="sdd" style={{ margin: "1rem 1rem" }}>
                  <b
                    className="wqw25"
                    style={{ margin: "1rem 0rem", fontSize: "14px" }}
                  >
                    {" "}
                    Colleague Score
                  </b>
                </p>
              </div>

              <div className="jiji d-flex">
                <RadialProgress
                  width={80}
                  height={80}
                  steps={10}
                  fontRatio={4}
                  step={8.5}
                  ringBgColour="#E3E3E3"
                  ringFgColour="#00823B"
                  // ringIntermediateColour="#E75459"
                  text={function text(steps, proportion) {
                    return "".concat(Math.floor(100 * proportion), "%");
                  }}
                  className="th8788rtrt"
                />
                <p className="sdd" style={{ margin: "1rem 0rem" }}>
                  <b
                    className="ewfrwe53"
                    style={{ margin: "0rem 1rem", fontSize: "14px" }}
                  >
                    {" "}
                    Score
                  </b>
                </p>
              </div>
            </div>
          </div>

          <Card
            style={{ width: "40 rem", height: "43rem", margin: "0rem -12rem" }}
          >
            <br></br>
            <br></br>
            <br></br>
            <h1 style={{ textAlign: "center", color: "#00823B" }}>
              Current Company
            </h1>
            <br></br>
            <h5 className="da" style={{ textAlign: "center" }}>
              <b>Company</b>
            </h5>
            <h5 style={{ textAlign: "center", color: "#4F4F4F" }}>
              The Madras Branding Company
            </h5>
            <br></br>
            <h5 className="sdsd" style={{ textAlign: "center" }}>
              <b>Name</b>
            </h5>
            <h5 style={{ textAlign: "center", color: "#4F4F4F" }}>
              Sivasundar N
            </h5>
            <br></br>
            <h5 className="sdsd" style={{ textAlign: "center" }}>
              <b>Aadhar Id</b>
            </h5>
            <h5 style={{ textAlign: "center", color: "#4F4F4F" }}>
              5486 6598 6598
            </h5>
            <br></br>
            <h5 className="sdsd" style={{ textAlign: "center" }}>
              <b>Job Role</b>
            </h5>
            <h5 style={{ textAlign: "center", color: "#4F4F4F" }}>
              Graphics Designer
            </h5>
            <br></br>
            <h5 className="sdsd" style={{ textAlign: "center" }}>
              <b>Date of Joining</b>
            </h5>
            <h5 style={{ textAlign: "center", color: "#4F4F4F" }}>
              01-01-2023
            </h5>
            <br></br>
            <h5 className="sdsd" style={{ textAlign: "center" }}>
              <b>Salary</b>
            </h5>
            <h5 style={{ textAlign: "center", color: "#4F4F4F" }}>
              500,000 PA
            </h5>
          </Card>
          <br></br>
        </div>
        <div
          className="sd4654"
          style={{
            border: "1.5px solid #00823B",

            padding: "0.5rem",
            width: "35%",
            color: "#00823B",
            borderRadius: "0.4rem",
            backgroundColor: "#fff",
            margin: "0rem 31rem",
            height:"3.5rem"
          }}
        >
          <div className="wddx d-flex justify-content-center">
            <p className="sdz" style={{ margin: "0rem 1rem" }}>
              <img
                src="./image/Icon ionic-md-person-add.svg"
                style={{ margin: "0rem 1rem", height: "10px" }}
              />
              Add Resume
            </p>
          </div>
        </div>
        <br></br>
        <Form>
          <Form.Group
            className="amb-3"
            controlId="formBasicEmail"
            style={{
              width: "35%",
              // margin: "0rem -10rem",
              margin: "0rem 31rem",
              height: "3rem",
            }}
          >
            <Form.Control type="text" placeholder="Add Portfolio link...me" style={{height:"3.5rem"}}/>
          </Form.Group>
          <br></br>
          <Form.Group
            className="amb-3"
            controlId="formBasicEmail"
            style={{ width: "35%", margin: "0rem 31rem", height: "2rem" }}
          >
            <Form.Control type="text" placeholder="Add Your Aadhar Number" style={{height:"3.5rem"}}/>
          </Form.Group>
        </Form>
        <br></br>
       <div className="ff2ewf" style={{margin:"0rem 15rem"}}>
       <div>
          <br></br>
          <p className="fb" style={{ marginLeft: "16rem" }}>
            <b>Your Skills</b>
          </p>
          <div className="dds"></div>
        </div>
        <div
            className="s797ds5685"
            style={{
              border: "1px solid #fff",
              width: "20%",
              margin: "0rem 16rem",
              backgroundColor: "#fff",
              height: "4rem",
            }}
          >
            <div className="sdfg12f d-flex">
              <p className="feewf5" style={{ margin: "1rem 2rem",fontSize:"20px" }}>Photoshop</p>
              <div
                className="sdgfd545687s2 d-flex"
                style={{ margin: "0rem 3.5rem" }}
              >
                <input
                  type="range"
                  min="1"
                  max="100"
                  className="rwetwet6666646646"
                  step="1"
                  value={percentage}
                  onChange={(ev) => setPercentage(ev.target.value)}
                  style={{
                    stroke: "red",
                    margin: "2rem 1rem",
                    width: "17vw",
                    height: "5px",
                    height: "5px",
                  }}
                />

                <div className="sfgds74fgds" style={{ margin: "1rem 1.5rem" }}>
                  <CircleprogressBar
                    percentage={percentage}
                    circleWidth="100"
                    className="gfgdggdg"
                    style={{ margin: "0rem 0rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
        <br></br>
        <div
            className="s797ds5685"
            style={{
              border: "1px solid #fff",
              width: "20%",
              margin: "0rem 16rem",
              backgroundColor: "#fff",
              height: "4rem",
            }}
          >
            <div className="sdfg12f d-flex">
              <p className="feewf5" style={{ margin: "1rem 2rem",fontSize:"20px" }}>Photoshop</p>
              <div
                className="sdgfd545687s2 d-flex"
                style={{ margin: "0rem 3.5rem" }}
              >
                <input
                  type="range"
                  min="1"
                  max="100"
                  className="rwetwet6666646646"
                  step="1"
                  value={percentage}
                  onChange={(ev) => setPercentage(ev.target.value)}
                  style={{
                    stroke: "red",
                    margin: "2rem 1rem",
                    width: "17vw",
                    height: "5px",
                    height: "5px",
                  }}
                />

                <div className="sfgds74fgds" style={{ margin: "1rem 1.5rem" }}>
                  <CircleprogressBar
                    percentage={percentage}
                    circleWidth="100"
                    className="gfgdggdg"
                    style={{ margin: "0rem 0rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
        <br></br>
        <div
            className="s797ds5685"
            style={{
              border: "1px solid #fff",
              width: "20%",
              margin: "0rem 16rem",
              backgroundColor: "#fff",
              height: "4rem",
            }}
          >
            <div className="sdfg12f d-flex">
              <p className="feewf5" style={{ margin: "1rem 2rem",fontSize:"20px" }}>Photoshop</p>
              <div
                className="sdgfd545687s2 d-flex"
                style={{ margin: "0rem 3.5rem" }}
              >
                <input
                  type="range"
                  min="1"
                  max="100"
                  className="rwetwet6666646646"
                  step="1"
                  value={percentage}
                  onChange={(ev) => setPercentage(ev.target.value)}
                  style={{
                    stroke: "red",
                    margin: "2rem 1rem",
                    width: "17vw",
                    height: "5px",
                    height: "5px",
                  }}
                />

                <div className="sfgds74fgds" style={{ margin: "1rem 1.5rem" }}>
                  <CircleprogressBar
                    percentage={percentage}
                    circleWidth="100"
                    className="gfgdggdg"
                    style={{ margin: "0rem 0rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
        <br></br>
        <div
            className="s797d85s"
            style={{
              border: "1px solid #fff",
              width: "20%",
              margin: "0rem 16rem",
              backgroundColor: "#fff",
              height: "4rem",
            }}
          >
            <div className="affsart d-flex">
              <p className="feewf5" style={{ margin: "1rem 2rem",fontSize:"20px" }}>Illustrator</p>
              <div
                className="sdgfd65s2 d-flex"
                style={{ margin: "0rem 3.5rem" }}
              >
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  className="rwetwet6666666"
                  value={percentage}
                  onChange={(ev) => setPercentage(ev.target.value)}
                  style={{
                    stroke: "red",
                    margin: "2rem 2rem",
                    width: "17vw",
                    height: "5px",
                    height: "5px",
                  }}
                />

                <div className="sfgdsfgds" style={{ margin: "1rem 1rem" }}>
                  <CircleprogressBar
                    percentage={percentage}
                    circleWidth="80"
                    className="gfgdggdg"
                    style={{ margin: "0rem 0rem" }}
                  />
                </div>
                <div
                  className="fe6464ew"
                  style={{
                    border: "1px solid #00823B",
                    width: "13%",
                    height: "4rem",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "50px",
                    margin:"0rem 2rem",
                  }}
                >
                  <img
                    className="g45ds56"
                    src="./image/Icon ionic-md-person-add.svg"
                    style={{ height: "15px", margin: "1.5rem 1.5rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
        {/* <div
          className="sds646"
          style={{
            border: "1px solid #fff",
            width: "15%",
            margin: "0rem 16rem",
            backgroundColor: "#fff",
            height: "3rem",
          }}
        >
          <p style={{ margin: "0.5rem 2rem" }}>After Effects</p>
          <div className="sdgfds d-flex" style={{ margin: "-2rem 8.1rem" }}>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              className="ewew59"
              value={percentage}
              onChange={(ev) => setPercentage(ev.target.value)}
              style={{
                stroke: "red",
                margin: "0.8rem 3rem",
                width: "50vw",
                height: "5px",
              }}
            />

            <div className="sfgdsfgds" style={{ margin: "0rem 0rem" }}>
              <CircleprogressBar
                percentage={percentage}
                circleWidth="80"
                className="gfgdggdg"
                style={{ margin: "0rem 0rem" }}
              />
            </div>
          </div>
        </div> */}
       </div>

        <br></br>
        <br></br>
        <div
          className="fsf689"
          style={{
            border: "1px solid #ECEFF2",
            width: "12%",
            height: "4rem",
            backgroundColor: "#ECEFF2",
            margin: "1rem 40rem",
          }}
        >
          <div className="sdscs d-flex" style={{margin:"0rem 2rem"}}>
            <AiFillCheckCircle
              style={{
                color: "#BBC1C7",
                margin: "1rem 0.5rem",
                fontSize: "2rem",
              }}
            />
            <p
              className="sds98"
              style={{ margin: "1rem 0rem", fontSize: "1rem" }}
            >
              Update
            </p>
          </div>
        </div>
        <div className="ewfwefqw3" style={{ margin: "3rem 0rem" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default YourProfile;
