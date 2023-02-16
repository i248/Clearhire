import React from "react";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useState } from "react";
import CircleprogressBar from "./CircleprogressBar";
import { AiFillCheckCircle } from "react-icons/ai";
import { RadialProgress } from "react-radial-progress-indicator";
import Header5 from "./Header5";
import Footer from "./Footer";

function YourSkill() {
  const [percentage, setPercentage] = useState(35);
  const now = 45;
  return (
    <div className="cofdhiu4">
      <div
        className="rty"
        style={{
          border: "1px solid #C8C8C8",
          width: "100%",
          height: "74rem",
          // margin: "4rem 12rem",
          backgroundColor: "#F5F7F9",
        }}
      >
        <Header5 />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="coghs" style={{ margin: "0rem 43rem" }}>
          <img className="ffr" src="./image/pic.png" />
          <br></br>
          <br></br>
          <h2>Govarthini, 24</h2>
          <p className="gdg46" style={{ fontSize: "20px" }}>
            Chennai, India
          </p>
          <br></br>
        </div>
        <div
          className="imo"
          style={{
            border: "1.5px solid #00823B",

            padding: "0.5rem",
            width: "40%",
            color: "#00823B",
            borderRadius: "0.4rem",
            backgroundColor: "#fff",
            margin: "0rem 30rem",
            height: "4rem",
          }}
        >
          <div className="wddx d-flex justify-content-center">
            <p
              className="sdac"
              style={{
                margin: "0rem 1rem",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              <img
                className="efwef5454"
                src="./image/Icon ionic-md-person-add.svg"
                style={{ height: "15px" }}
              />
              Add Resume
            </p>
          </div>
        </div>
        <br></br>
        <Form>
          <Form.Group
            className="fggh"
            controlId="formBasicEmail"
            style={{ width: "40%", margin: "0rem 30rem", height: "2rem" }}
          >
            <Form.Control
              type="text"
              placeholder="Add Portfolio link...me"
              style={{ height: "4rem" }}
            />
          </Form.Group>
          <Form.Group
            className="fhfhfh justify-content-center"
            controlId="formBasicEmail"
            style={{ width: "40%", margin: "3rem 30rem" }}
          >
            <Form.Control
              type="text"
              placeholder="Add Your Aadhar Number"
              style={{ height: "4rem" }}
            />
          </Form.Group>
        </Form>
        <div className="contai4564" style={{ margin: "0rem 15rem" }}>
          <div className="werfw">
            <br></br>
            <p className="fb" style={{ marginLeft: "16rem" }}>
              <b>Your Skills</b>
            </p>
            <div className="dds"></div>
          </div>
          <div
            className="s797ds"
            style={{
              border: "1px solid #fff",
              width: "15%",
              margin: "0rem 16rem",
              backgroundColor: "#fff",
              height: "3rem",
            }}
          >
            <div className="sdfgf d-flex">
              <p style={{ margin: "0.5rem 1rem" }}>Photoshop</p>
              <div
                className="sdgfd5687s2 d-flex"
                style={{ margin: "0rem 3.5rem" }}
              >
                <input
                  type="range"
                  min="1"
                  max="100"
                  className="rwetwet6666666"
                  step="1"
                  value={percentage}
                  onChange={(ev) => setPercentage(ev.target.value)}
                  style={{
                    stroke: "red",
                    margin: "0.8rem 3rem",
                    width: "20vw",
                    height: "5px",
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
            </div>
          </div>
          <br></br>
          <div
            className="s797ds"
            style={{
              border: "1px solid #fff",
              width: "15%",
              margin: "0rem 16rem",
              backgroundColor: "#fff",
              height: "3rem",
            }}
          >
            <div className="affsart d-flex">
              <p style={{ margin: "0.5rem 1rem" }}>Illustrator</p>
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
                    margin: "0.8rem 3.5rem",
                    width: "20vw",
                    height: "5px",
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
                <div
                  className="fe6464ew"
                  style={{
                    border: "1px solid #00823B",
                    width: "12%",
                    height: "4rem",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "50px",
                    margin:"-1rem 2rem",
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

          <br></br>
          {/* <div
            className="s797ds"
            style={{
              border: "1px solid #fff",
              width: "15%",
              margin: "0rem 16rem",
              backgroundColor: "#fff",
              height: "3rem",
            }}
          >
            <div className="sdfgf d-flex">
              <p className="efefe324" style={{ margin: "0rem 1rem" }}>
                Premiere Pro
              </p>
              <div
                className="sdgf56ds2 d-flex"
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
                    margin: "0.8rem 3rem",
                    width: "20vw",
                    height: "5px",
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
            </div>
          </div>
          <br></br> */}
          {/* <div
            className="s797ds"
            style={{
              border: "1px solid #fff",
              width: "15%",
              margin: "0rem 16rem",
              backgroundColor: "#fff",
              height: "3rem",
            }}
          >
            <div className="sdf98gf d-flex">
              <p className="qwqwfq2" style={{ margin: "0rem 1rem" }}>
                After Effects
              </p>
              <div
                className="sdg5654fds2 d-flex"
                style={{ margin: "0rem 5rem" }}
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
                    margin: "0.8rem 3rem",
                    width: "20vw",
                    height: "5px",
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
            </div>
          </div> */}

          <br></br>
          <br></br>
          <div
            className="fssdfsf"
            style={{
              border: "1px solid #ECEFF2",
              width: "18%",
              height: "4rem",
              backgroundColor: "#FFFFFF",
              margin: "0rem 27rem",
            }}
          >
            <div className="sdscs d-flex" style={{ margin: "0rem 1.5rem" }}>
              <AiFillCheckCircle
                style={{
                  color: "#00823B",
                  margin: "1rem 1rem",
                  fontSize: "1.8rem",
                }}
              />
              <p
                className="s797ddhs"
                style={{
                  margin: "1rem 0rem",
                  fontSize: "1rem",
                  color: "#00823B",
                }}
              >
                Done
              </p>
            </div>
          </div>
        </div>
        <div className="esgddryn" style={{ margin: "2.5rem 0rem" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default YourSkill;
