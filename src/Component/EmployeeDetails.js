import React from "react";
import Header2 from "./Header2";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { RadialProgress } from "react-radial-progress-indicator";
import CircleprogressBar from "./CircleprogressBar";
import { borderRadius } from "@mui/system";
import Footer from "./Footer";

function EmployeeDetails() {
  return (
    <div className="erfewf">
      <div
        className="efe"
        style={{
          border: "1px solid #C8C8C8",
          width: "80%",
          height: "106.4rem",
          margin: "4rem 12rem",
          backgroundColor: "#FFFFFF 0% 0% no-repeat padding-box",
        }}
      >
        <Header2 />
        <div className="adadad">
          <div className="row">
            <div className="col-md-8">
              <div className="fs d-flex" style={{ margin: "3rem 2rem" }}>
                <IoIosArrowDropleftCircle
                  style={{
                    fontSize: "2rem",
                    color: "#9EC2AD",
                    margin: "-0.2rem 0.5rem",
                  }}
                />
                <h5>Employee Details</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fdfs d-flex">
                <div className="dsdasd d-flex" style={{ margin: "3rem 0rem" }}>
                  <img
                    className="dadd"
                    src="./image/Icon open-document (1).svg"
                    style={{ height: "25px" }}
                  />
                  <p
                    className="fdafd"
                    style={{ color: "#00823B", margin: "0rem 1rem" }}
                  >
                    View Resume
                  </p>
                </div>
                <div
                  className="fffdqwq d-flex"
                  style={{
                    border: "1px solid #E2F0E8",
                    height: "45px",
                    width: "150px",
                    backgroundColor: "#E2F0E8",
                    borderRadius: "6px",
                    margin: "2.4rem 1rem",
                  }}
                >
                  <img
                    src="./image/Icon feather-link-2.svg"
                    style={{ height: "12px", margin: "1rem 1rem" }}
                  />
                  <p
                    className="rewfrwe"
                    style={{ fontSize: "15px", margin: "0.7rem 0rem" }}
                  >
                    <b>Portfolio</b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="dsffewgrg">
            <div className="row">
              <br></br>
              <div className="col-md-8 d-flex">
              <div className="wsdfsdsa d-flex"  style={{margin:"0rem 6rem"}}>
              <img className="ssffewfwe " src="./image/jak.png.png" style={{height:"7rem",width:"25%",margin: "0rem 0rem"}}/>
                <h6
                  className="sfhhg"
                  style={{ margin: "0rem 0.7rem", lineHeight: "2rem" }}
                >
                  <span className="fwfww" style={{ fontSize: "1.5rem" }}>
                    <b>Govarthini, 24</b>
                  </span>
                  <br />
                  Project Manager at The example company
                  <br />
                  Chennai, India
                </h6>
              </div>
              </div>
              <div className="col-md-4">
                <div className="ddxgg" style={{ margin: "0rem 0rem" }}>
                  <div className="ruu d-flex">
                    <div className="jiji">
                      <RadialProgress
                        width={70}
                        height={70}
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
                        style={{ margin: "-3.5rem 5rem", fontSize: "14px" }}
                      >
                        {" "}
                        <b> Colleague Score</b>
                      </p>
                    </div>

                    <div className="jiji">
                      <RadialProgress
                        width={70}
                        height={70}
                        steps={10}
                        fontRatio={4}
                        step={8.5}
                        ringBgColour="#E3E3E3"
                        ringFgColour="#00823B"
                        // ringIntermediateColour="#E75459"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        //   style={{height:"70%",with:"70%"}}
                        className="thrtrt"
                      />
                      <p
                        className="sdd"
                        style={{ margin: "-3rem 5rem", fontSize: "14px" }}
                      >
                        <b> Score</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="fdddsd"
          style={{
            border: "1px solid #EFF6F2",
            height: "10rem",
            width: "85%",
            backgroundColor: "#EFF6F2",
            margin: "1rem 5rem",
            borderRadius: "0.5rem",
          }}
        >
          <div className="fdfewffe d-flex" style={{ margin: "0rem 12rem" }}>
            <div className="wewgwg" style={{ margin: "1rem 2rem" }}>
              <p>
                <b>Photoshop</b>
              </p>
              <div
                className="sdasd"
                style={{
                  border: "1px solid #FFFFFF",
                  height: "4.5rem",
                  width: "90%",
                  borderRadius: "70px",
                  background: " #FFFFFF 0% 0% no-repeat padding-box",
                }}
              >
                <h5
                  className="ffeww"
                  style={{
                    textAlign: "center",
                    color: "#00823B",
                    margin: "1.3rem 0rem",
                  }}
                >
                  <b>90%</b>
                </h5>
              </div>
            </div>
            <div className="wewgwg" style={{ margin: "1rem 2rem" }}>
              <p>
                <b>Illustrator</b>
              </p>
              <div
                className="sdasd"
                style={{
                  border: "1px solid #FFFFFF",
                  height: "4.5rem",
                  width: "90%",
                  borderRadius: "70px",
                  background: " #FFFFFF 0% 0% no-repeat padding-box",
                }}
              >
                <h5
                  className="ffeww"
                  style={{
                    textAlign: "center",
                    color: "#00823B",
                    margin: "1.3rem 0rem",
                  }}
                >
                  <b>90%</b>
                </h5>
              </div>
            </div>
            <div className="wewgwg" style={{ margin: "1rem 2rem" }}>
              <p>
                <b>Premiere Pro</b>
              </p>
              <div
                className="sdasd"
                style={{
                  border: "1px solid #FFFFFF",
                  height: "4.5rem",
                  width: "75%",
                  borderRadius: "70px",
                  background: " #FFFFFF 0% 0% no-repeat padding-box",
                }}
              >
                <h5
                  className="ffeww"
                  style={{
                    textAlign: "center",
                    color: "#00823B",
                    margin: "1.3rem 0rem",
                  }}
                >
                  <b>90%</b>
                </h5>
              </div>
            </div>
            <div className="wewgwg" style={{ margin: "1rem 2rem" }}>
              <p>
                <b>After Effects</b>
              </p>
              <div
                className="sdasd"
                style={{
                  border: "1px solid #FFFFFF",
                  height: "4.5rem",
                  width: "75%",
                  borderRadius: "70px",
                  background: " #FFFFFF 0% 0% no-repeat padding-box",
                }}
              >
                <h5
                  className="ffeww"
                  style={{
                    textAlign: "center",
                    color: "#00823B",
                    margin: "1.3rem 0rem",
                  }}
                >
                  <b>90%</b>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="tewt4et" style={{ margin: "2rem 5rem", width: "85%" }}>
          <h3>Current Company</h3>
          <div className="fwefewf d-flex">
            <div
              className="fdffdsf"
              style={{
                border: "1px solid #00823B",
                height: "6.5rem",
                width: "10%",
                borderRadius: "50px",
              }}
            >
              <img
                src="./image/Image 5@2x.png"
                style={{
                  borderRadius: "50px",
                  height: "102px",
                  width: "100%",
                }}
              />
            </div>
            <h4 className="mvnvhv" style={{ margin: "1rem 1rem" }}>
              <b>The Madras Branding Company</b>
              <br />
              2022
            </h4>
          </div>
          <hr></hr>
          <div className="qwewwrh">
            <div className="row">
              <div className="col-md-9">
                <div className="fwefwgqwq d-flex">
                  <div className="wfwwfe" style={{ margin: "0rem 2.5rem" }}>
                    <RadialProgress
                      width={90}
                      height={90}
                      steps={10}
                      fontRatio={4}
                      step={8.5}
                      ringBgColour="#E3E3E3"
                      ringFgColour="#00823B"
                    
                      text={function text(steps, proportion) {
                        return "".concat(Math.floor(100 * proportion), "%");
                      }}
                      //   style={{height:"70%",with:"70%"}}
                      className="thrtrt"
                    />
                    <h5 className="ewfewfwf" style={{ margin: "0.5rem -1rem" }}>
                      Communication
                    </h5>
                  </div>
                  <div className="wfwwfe" style={{ margin: "0rem 2.5rem" }}>
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
                      //   style={{height:"70%",with:"70%"}}
                      className="thrtrt"
                    />
                    <h5 className="ewfewfwf" style={{ margin: "0.5rem 0rem" }}>
                      Attitude
                    </h5>
                  </div>
                  <div className="wfwwfe" style={{ margin: "0rem 2.5rem" }}>
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
                      //   style={{height:"70%",with:"70%"}}
                      className="thrtrt"
                    />
                    <h5 className="ewfewfwf" style={{ margin: "0.5rem 0rem" }}>
                      Ability to learn
                    </h5>
                  </div>
                  <div className="wfwwfe" style={{ margin: "0rem 2.5rem" }}>
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
                      //   style={{height:"70%",with:"70%"}}
                      className="thrtrt"
                    />
                    <h5 className="ewfewfwf" style={{ margin: "0.5rem 0rem" }}>
                      Punctuality
                    </h5>
                  </div>
                </div>
                <br></br>
                <div className="fwefwgqwq d-flex">
                  <div className="wfwwfe" style={{ margin: "0rem 2.5rem" }}>
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
                      //   style={{height:"70%",with:"70%"}}
                      className="thrtrt"
                    />
                    <h5 className="ewfewfwf" style={{ margin: "0.5rem -1rem" }}>
                      Commitment
                    </h5>
                  </div>
                  <div className="wfwwfe" style={{ margin: "0rem 2.5rem" }}>
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
                      //   style={{height:"70%",with:"70%"}}
                      className="thrtrt"
                    />
                    <h5 className="ewfewfwf" style={{ margin: "0.5rem -1rem" }}>
                      Trustworthiness
                    </h5>
                  </div>
                  <div className="wfwwfe" style={{ margin: "0rem 2.5rem" }}>
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
                      //   style={{height:"70%",with:"70%"}}
                      className="thrtrt"
                    />
                    <h5
                      className="ewfewfwf"
                      style={{ margin: "0.5rem 1.5rem" }}
                    >
                      Skill
                    </h5>
                  </div>
                  <div className="wfwwfe" style={{ margin: "0rem 2.5rem" }}>
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
                      //   style={{height:"70%",with:"70%"}}
                      className="thrtrt"
                    />
                    <h5 className="ewfewfwf" style={{ margin: "0.5rem 0rem" }}>
                      Team Player
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="weetgweg">
                <h4 className="ffff" style={{ margin: "1rem 2.5rem" }}>
                  <b>Total</b>
                </h4>
                <RadialProgress
                  width={140}
                  height={140}
                  steps={10}
                  fontRatio={4}
                  step={8.5}
                  ringBgColour="#E3E3E3"
                  ringFgColour="#00823B"
                  // ringIntermediateColour="#E75459"
                  text={function text(steps, proportion) {
                    return "".concat(Math.floor(100 * proportion), "%");
                  }}
                  //   style={{height:"70%",with:"70%"}}
                  className="thrtrt"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ffsaf"
          style={{
            border: "1px solid #C1C1C1",
            height: "8rem",
            width: "80%",
            background: " #FFFFFF 0% 0% no-repeat padding-box",
            opacity: "1",
            borderRadius: "9px",
            margin: "0rem 6rem",
          }}
        >
          <h4
            className="sfsf"
            style={{ textAlign: "center", margin: "2rem 0rem" }}
          >
            This employee is marked as a
            <span style={{ color: "#00823B" }}>
              {" "}
              <b>good employee</b>
            </span>{" "}
            by
            <b>
              {" "}
              The Madras
              <br /> Branding Company
            </b>
          </h4>
        </div>
        <div
          className="gerrtm"
          style={{
            border: "1px solid #F5F7F9",
            height: "30rem",
            width: "100%",
            background: "background: #F5F7F9 0% 0% no-repeat padding-box;",
            backgroundColor: "#F5F7F9",
            margin: "4rem 0rem",
          }}
        >
          <h3
            className="wefefe"
            style={{ color: "#00823B", margin: "3rem 6rem" }}
          >
            <b>Previous Companies</b>
          </h3>
          <div className="wefwefw" style={{ margin: "0rem 6rem" }}>
            <div className="fwefewf d-flex">
              <div
                className="fdffdsf"
                style={{
                  border: "1px solid #00823B",
                  height: "6.5rem",
                  width: "10%",
                  borderRadius: "50px",
                }}
              >
                <img
                  src="./image/Image 5@2x.png"
                  style={{
                    borderRadius: "50px",
                    height: "102px",
                    width: "100%",
                  }}
                />
              </div>
              <h4 className="mvnvhv" style={{ margin: "1rem 1rem" }}>
                <b>The Madras Branding Company</b>
                <br />
                2020
              </h4>
            </div>
            <hr></hr>
          </div>
          <div className="wefwefw" style={{ margin: "0rem 6rem" }}>
            <div className="fwefewf d-flex">
              <div
                className="fdffdsf"
                style={{
                  border: "1px solid #00823B",
                  height: "6.5rem",
                  width: "10%",
                  borderRadius: "50px",
                }}
              >
                <img
                  src="./image/Image 5@2x.png"
                  style={{
                    borderRadius: "50px",
                    height: "102px",
                    width: "100%",
                  }}
                />
              </div>
              <h4 className="mvnvhv" style={{ margin: "1rem 1rem" }}>
                <b>The Madras Branding Company</b>
                <br />
                2018
              </h4>
            </div>
          </div>
      <div className="dsgg" style={{margin:"7rem 0rem"}}>
      <Footer />
      </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
