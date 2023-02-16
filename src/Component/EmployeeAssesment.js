import { formatCountdown } from "antd/es/statistic/utils";
import React, { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Progress } from "antd";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import { RadialProgress } from "react-radial-progress-indicator";
import CircleprogressBar from "./CircleprogressBar";
import Header2 from "./Header2";
import Footer from "./Footer";
import Header3 from "./Header3";


function EmployeeAssesment() {
  const [percentage, setPercentage] = useState(35);
  const now = 45;
  return (
    <div className="conr">
      <div
        className="efe"
        style={{
          border: "1px solid #C8C8C8",
          width: "100%",
          height: "65rem",
          // margin: "4rem 12rem",
          backgroundColor: "#F5F7F9 0% 0% no-repeat padding-box",
        }}
      >
        <Header3 />
        <div className="container">
          <br></br>

          <div className="fs d-flex">
            <IoIosArrowDropleftCircle
              style={{
                fontSize: "3rem",
                color: "#9EC2AD",
                margin: "-0.2rem 0.5rem",
              }}
            />
            <h4>Employee Assessment</h4>
          </div>
          <br></br>
          <br></br>
          <div className="row">
            <br></br>
            <div className="col-md-6 d-flex">
              <img className="sse" src="./image/pic.png" />
              <h6
                className="sf"
                style={{ margin: "1rem -3rem", lineHeight: "2rem" }}
              >
                <span style={{ fontSize: "1.5rem" }}>
                  <b>Govarthini, 24</b>
                </span>
                <br />
                Project Manager at The example company
                <br />
                Chennai, India
              </h6>
            </div>
            <div className="col-md-6">
              <div className="ddx" style={{ margin: "0rem 5rem" }}>
                <div className="ruu d-flex">
                  <div className="jiji">
                    <RadialProgress
                      width={90}
                      height={90}
                      steps={10}
                      step={7.5}
                      fontRatio={4}
                      ringBgColour="#E3E3E3"
                      ringFgColour="#E56839"
                      ringIntermediateColour="#E75459"
                      text={function text(steps, proportion) {
                        return "".concat(Math.floor(100 * proportion), "%");
                      }}
                      className="thrtrt"
                    />
                    <p
                      className="sdd"
                      style={{ margin: "-4rem 6.5rem", fontSize: "14px" }}
                    >
                      {" "}
                      <b> Colleague Score</b>
                    </p>
                  </div>

                  <div className="jiji">
                    <RadialProgress
                      width={90}
                      height={90}
                      steps={10}
                      fontRatio={4}
                      step={8.5}
                      ringBgColour="#E3E3E3"
                      ringFgColour="#00823B"
                      // ringIntermediateColour="#E75459"
                      text={function text(steps, proportion) {
                        return "".concat(Math.floor(100 * proportion), "%");
                      }}
                      className="thrtrt"
                    />
                    <p
                      className="sdd"
                      style={{ margin: "-4rem 7rem", fontSize: "14px" }}
                    >
                      <b> Score</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="container">
          <div className="eee">
            {/* <Card style={{ width: "65rem", height: "35rem", margin: "0rem 5rem" }}
           className="sfsfs"
          > */}
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <br></br>
                  <div className="sdq d-flex">
                    <p>Communication</p>
                    <div
                      className="sdgfds1 d-flex"
                      style={{ margin: "0rem 0.1rem" }}
                    >
                      <input
                        type="range"
                        min="1"
                        max="100"
                        step="1"
                        value={percentage}
                        onChange={(ev) => setPercentage(ev.target.value)}
                        style={{
                          stroke: "red",
                          margin: "0.8rem 3rem",
                          width: "15vw",
                          height: "5px",
                          height: "5px",
                        }}
                      />

                      <div
                        className="sfgdsfgds"
                        style={{ margin: "0rem 0rem" }}
                      >
                        <CircleprogressBar
                          percentage={percentage}
                          circleWidth="80"
                          className="gfgdggdg"
                          style={{ margin: "0rem 0rem" }}
                        />
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div className="sdq d-flex">
                    <p>Attitude</p>
                    <div
                      className="sdgfds2 d-flex"
                      style={{ margin: "0rem 3.5rem" }}
                    >
                      <input
                        type="range"
                        min="1"
                        max="100"
                        step="1"
                        value={percentage}
                        onChange={(ev) => setPercentage(ev.target.value)}
                        style={{
                          stroke: "red",
                          margin: "0.8rem 3rem",
                          width: "15vw",
                          height: "5px",
                          height: "5px",
                        }}
                      />

                      <div
                        className="sfgdsfgds"
                        style={{ margin: "0rem 0rem" }}
                      >
                        <CircleprogressBar
                          percentage={percentage}
                          circleWidth="80"
                          className="gfgdggdg"
                          style={{ margin: "0rem 0rem" }}
                        />
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div className="sdq d-flex">
                    <p>Ability to learn</p>
                    <div
                      className="sdgfds3 d-flex"
                      style={{ margin: "0rem 0.6rem" }}
                    >
                      <input
                        type="range"
                        min="1"
                        max="100"
                        step="1"
                        value={percentage}
                        onChange={(ev) => setPercentage(ev.target.value)}
                        style={{
                          stroke: "red",
                          margin: "0.8rem 3rem",
                          width: "15vw",
                          height: "5px",
                         
                        }}
                      />

                      <div
                        className="sfgdsfgds"
                        style={{ margin: "0rem 0rem" }}
                      >
                        <CircleprogressBar
                          percentage={percentage}
                          circleWidth="80"
                          className="gfgdggdg"
                          style={{ margin: "0rem 0rem" }}
                        />
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div className="sdq d-flex">
                    <p>Punctuality</p>
                    <div
                      className="sdgfds4 d-flex"
                      style={{ margin: "0rem 2.2rem" }}
                    >
                      <input
                        type="range"
                        min="1"
                        max="100"
                        step="1"
                        value={percentage}
                        onChange={(ev) => setPercentage(ev.target.value)}
                        style={{
                          stroke: "red",
                          margin: "0.8rem 3rem",
                          width: "15vw",
                          height: "5px",
                          height: "5px",
                        }}
                      />

                      <div
                        className="sfgdsfgds"
                        style={{ margin: "0rem 0rem" }}
                      >
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
                <div className="col-md-6">
                  <br></br>
                  <div className="sdq d-flex">
                    <p>Commitment</p>
                    <div
                      className="sdgfds5 d-flex"
                      style={{ margin: "0rem 0.8rem" }}
                    >
                      <input
                        type="range"
                        min="1"
                        max="100"
                        step="1"
                        value={percentage}
                        onChange={(ev) => setPercentage(ev.target.value)}
                        style={{
                          stroke: "red",
                          margin: "0.8rem 3rem",
                          width: "15vw",
                          height: "5px",
                          height: "5px",
                        }}
                      />

                      <div
                        className="sfgdsfgds"
                        style={{ margin: "0rem 0rem" }}
                      >
                        <CircleprogressBar
                          percentage={percentage}
                          circleWidth="80"
                          className="gfgdggdg"
                          style={{ margin: "0rem 0rem" }}
                        />
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div className="sdq d-flex">
                    <div className="sdq d-flex">
                      <p>Trustworthiness</p>
                      <div className="sdgfds6 d-flex">
                        <input
                          type="range"
                          min="1"
                          max="100"
                          step="1"
                          value={percentage}
                          onChange={(ev) => setPercentage(ev.target.value)}
                          style={{
                            stroke: "red",
                            margin: "0.8rem 3rem",
                            width: "15vw",
                            height: "5px",
                            height: "5px",
                          }}
                        />

                        <div
                          className="sfgdsfgds"
                          style={{ margin: "0rem 0rem" }}
                        >
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
                  <div className="sfsf1">
                    <div className="sdq d-flex">
                      <p>Skill</p>
                      <div
                        className="sdgfds7 d-flex"
                        style={{ margin: "0rem 5.1rem" }}
                      >
                        <input
                          type="range"
                          min="1"
                          max="100"
                          step="1"
                          value={percentage}
                          onChange={(ev) => setPercentage(ev.target.value)}
                          style={{
                            stroke: "red",
                            margin: "0.8rem 3rem",
                            width: "15vw",
                            height: "5px",
                            height: "5px",
                          }}
                        />

                        <div
                          className="sfgdsfgds"
                          style={{ margin: "0rem 0rem" }}
                        >
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
                  <div className="sdqn d-flex">
                    <p>Team Player</p>
                    <div
                      className="sdgfds8 d-flex"
                      style={{ margin: "0rem 1.2rem" }}
                    >
                      <input
                        type="range"
                        min="1"
                        max="100"
                        step="1"
                        value={percentage}
                        onChange={(ev) => setPercentage(ev.target.value)}
                        style={{
                          stroke: "red",
                          margin: "0.8rem 3rem",
                          width: "15vw",
                          height: "5px",
                          height: "5px",
                        }}
                      />

                      <div
                        className="sfgdsfgds"
                        style={{ margin: "0rem 0rem" }}
                      >
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
              </div>
              <br></br>
              <br></br>
              <div className="sdd13">
                <div
                  className="ssaas"
                  style={{
                    border: "1px solid #E2F0E8",
                    height: "2rem",
                    width: "8rem",
                    backgroundColor: "#E2F0E8",
                    borderRadius: "6rem",
                    margin: "-1rem 25rem",
                    zIndex: "999",
                    position: "absolute",
                  }}
                >
                  <p
                    className="ada"
                    style={{ color: "#00823B", textAlign: "center" }}
                  >
                    Note
                  </p>
                </div>
                <div className="wer">
                  {/* <Card
                  style={{
                    width: "50rem",
                    height: "15rem",
                    margin: "0rem 5rem",
                  }}
                > */}
                  <div className="sds d-flex justify-content-center">
                    <div className="adada">
                      <p
                        className="sfs"
                        style={{
                          textAlign: "center",
                          margin: "0.5rem 0rem",
                          fontSize: "12px",
                          color: "#434343",
                        }}
                      >
                        <b>good employee</b>
                      </p>
                    </div>
                    <div className="ab">
                      <p
                        className="sfs"
                        style={{
                          textAlign: "center",
                          margin: "0.5rem 0rem",
                          fontSize: "12px",
                          color: "#434343",
                        }}
                      >
                        <b>great employee</b>
                      </p>
                    </div>
                    <div className="bc">
                      <p
                        className="sfs"
                        style={{
                          textAlign: "center",
                          margin: "0.5rem 0rem",
                          fontSize: "12px",
                          color: "#434343",
                        }}
                      >
                        <b>poor employee</b>
                      </p>
                    </div>
                  </div>
                  <div
                    className="sdsaa d-flex justify-content-center"
                    style={{ margin: "-5rem 0rem" }}
                  >
                    <div className="adada">
                      <p
                        className="sfs"
                        style={{
                          textAlign: "center",
                          margin: "0.5rem 0rem",
                          fontSize: "12px",
                          color: "#434343",
                        }}
                      >
                        <b>good employee</b>
                      </p>
                    </div>
                    <div className="ab">
                      <p
                        className="sfs"
                        style={{
                          textAlign: "center",
                          margin: "0.5rem 0rem",
                          fontSize: "12px",
                          color: "#434343",
                        }}
                      >
                        <b>great employee</b>
                      </p>
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="container">
                    <hr></hr>
                    <p className="sv">Or</p>
                  </div>
                  <br></br>
                  <br></br>
                  <p
                    className="ert"
                    style={{
                      fontSize: "10px",
                      margin: "0rem 4rem",
                      color: "#ADADAD",
                    }}
                  >
                    enter your text assessment...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dsdsfg" style={{ margin: "4rem 0rem" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default EmployeeAssesment;
