import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";

import Form from "react-bootstrap/Form";
import Header2 from "./Header2";
import Footer from "./Footer";
import "react-circular-progressbar/dist/styles.css";
import { RadialProgress } from "react-radial-progress-indicator";

function EmployeeSearch() {
  return (
    <div
      className="wfef"
      style={{
        border: "1px solid #C8C8C8",
        width: "100%",
        height: "82rem",
        margin: "0rem 0rem",
        backgroundColor: "#F5F7F9 ",
      }}
    >
      <Header2 />
      <div className="row">
        <div className="col-md-4">
          <div
            className="dddaw"
            style={{
              border: "1px solid  #C8C8C8",
              height: "5rem",
              backgroundColor: "#FFFFFF",
              width: "100%",
            }}
          >
            <div className="sdsaet d-flex">
              <div className="sdfwf" style={{ margin: "1.3rem 2rem" }}>
                <Space direction="vertical">
                  <Tooltip title="search">
                    <Button type="" shape="circle" icon={<SearchOutlined />} />
                  </Tooltip>
                </Space>
              </div>
              <p
                className="wdwegeg"
                style={{
                  margin: "2rem 0rem",
                  fontSize: "12px",
                  textAlign: "center",
                  color: "#BDBDBD",
                  width: "100%",
                }}
              >
                Job title, company and keyword
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div
            className="dddaw"
            style={{
              border: "1px solid  #C8C8C8",
              height: "5rem",
              backgroundColor: "#FFFFFF",
            }}
          >
            <div className="sdsaet d-flex" style={{ width: "100%" }}>
              <div className="sdfwf" style={{ margin: "1.3rem 2rem" }}>
                <img
                  className="sf"
                  src="./image/Group 752.svg"
                  style={{ height: "20px", margin: "0.5rem 0rem" }}
                />
              </div>
              <p
                className="wdwegeg"
                style={{
                  margin: "2rem 0rem",
                  fontSize: "12px",
                  textAlign: "center",
                  color: "#BDBDBD",
                }}
              >
                Location
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div
            className="dddaw"
            style={{
              border: "1px solid  #C8C8C8",
              height: "5rem",
              backgroundColor: "#FFFFFF",
            }}
          >
            <div className="sdsaet d-flex">
              <div className="sdfwf" style={{ margin: "1.3rem 2rem" }}>
                <img
                  src="./image/Icon awesome-briefcase-medical.svg"
                  style={{ height: "20px", margin: "0.5rem 0rem" }}
                />
              </div>
              <p
                className="wdwegeg"
                style={{
                  margin: "2rem 0rem",
                  fontSize: "12px",
                  textAlign: "center",
                  color: "#BDBDBD",
                }}
              >
                Job Type
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="dddaw"
            style={{
              border: "1px solid  #C8C8C8",
              height: "5rem",
              backgroundColor: "#FFFFFF",
            }}
          >
            <div className="egsgg d-flex">
              <div
                className="aafff d-flex"
                style={{
                  fontSize: "12px",
                  height: "1rem",
                  color: "#BDBDBD",
                  margin: "2rem 2rem",
                }}
              >
                <img
                  className="sffffaaa"
                  src="./image/Icon awesome-money-bill-alt.svg"
                />
                <p className="afaf" style={{ margin: "0rem 2rem" }}>
                  Salary
                </p>
              </div>
              <div
                className="sdsaet"
                style={{
                  border: "1px solid #00823B",
                  height: "3.5rem",
                  width: "40%",
                  backgroundColor: "#00823B",
                  borderRadius: "5px",
                  margin: "1rem 2rem",
                }}
              >
                <p
                  className="dada"
                  style={{
                    textAlign: "center",
                    margin: "1rem 0rem",
                    color: "white",
                  }}
                >
                  Search
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="containe46">
        <div className="row">
          <div className="col-md-4">
            <div className="ggsf213" style={{ margin: "0rem 2rem" }}>
              <br></br>
              <h5 className="sfsff" style={{ margin: "0rem 2rem" }}>
                <b>Employee Search Settings</b>
              </h5>
              <br></br>
              <div className="afasv" style={{ margin: "0rem 2rem" }}>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: "20px" }}>
                      <b>Job Title</b>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      style={{ height: "3rem" }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: "20px" }}>
                      <b>Catagories</b>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      style={{ height: "3rem" }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: "20px" }}>
                      <b>Location</b>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      style={{ height: "3rem" }}
                    />
                  </Form.Group>
                </Form>
              </div>
              <br></br>
              <div className="wrwff" style={{ margin: "0rem 2rem" }}>
                <p className="sds" style={{ fontSize: "20px" }}>
                  <b>Type of employement</b>
                </p>
                <br></br>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Permanent Full-Time" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Part-Time" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Casual/Vacation" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Contact" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Internship/Trainee" />
                  </Form.Group>
                </Form>

                <div className="asfsgfsd">
                  <p>
                    <b>Salary Range</b>
                  </p>
                  {/* <div className="faff" style={{borderTop:"6px solid #00823B"}}>
                <img src="./image/Group 755.svg"  style={{height:"2.5rem"}}/>
                <img src="./image/Group 755.svg"  style={{height:"2.5rem", margin:"0rem 10rem"}}/>
               </div> */}
                </div>

                <br></br>
                <div className="dsd d-flex">
                  <img
                    src="./image/Icon ionic-ios-close-circle.svg"
                    style={{ height: "20px", margin: "0.2rem 0.5rem" }}
                  />
                  <p className="wdwswer">Clear all filters</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <br></br>
            <div className="afd4 d-flex">
              <Form style={{ margin: "0rem 0.5rem" }}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Assessed" />
                </Form.Group>
              </Form>
              <Form style={{ margin: "0rem 0.5rem" }}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Pending" />
                </Form.Group>
              </Form>
              <Form style={{ margin: "0rem 0.5rem" }}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="All" />
                </Form.Group>
              </Form>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div
                  className="skm1"
                  style={{
                    border: "1px solid #FFFFFF",
                    height: "14rem",
                    width: "100%",
                  }}
                >
                  <div className="ewwe602 d-flex">
                    <img
                      src="./image/360_F_316184778_9LgpM5aO70ZsO28e251mpii7irZzTN7S@2x.png"
                      style={{
                        height: "3rem",
                        width: "17%",
                        margin: "1rem 1rem",
                      }}
                    />
                    <div className="ib4551" style={{ margin: "1rem 10rem" }}>
                      <RadialProgress
                        width={55}
                        height={55}
                        steps={10}
                        fontRatio={3}
                        step={8.5}
                        ringBgColour="#E3E3E3"
                        ringFgColour="#00823B"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        //   style={{height:"70%",with:"70%"}}
                        className="thrtrt"
                      />
                    </div>
                    {/* <RadialProgress
                    width={45}
                    height={45}
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
                    style={{ma}}
                  /> */}
                  </div>
                  <div className="ddddss">
                    <p
                      className="wdsddw"
                      style={{ fontSize: "15px", margin: "0rem 1rem" }}
                    >
                      <b>Govarthini</b>
                    </p>
                    <p
                      className="sfww"
                      style={{
                        fontSize: "10px",
                        color: "#B6B6B6",
                        margin: "0rem 1rem",
                      }}
                    >
                      Chennai, India
                    </p>
                  </div>
                  <div
                    className="rrkhn"
                    style={{
                      border: "1px solid #D7F2BC",
                      fontSize: "10px",
                      width: "35%",
                      height: "25px",
                      margin: "0.5rem 1rem",
                    }}
                  >
                    <p
                      className="fsff"
                      style={{ color: "#66BC11", textAlign: "center",margin:".2rem 0rem" }}
                    >
                      <b>Project Manager</b>
                    </p>
                  </div>

                  <div
                    className="wuo"
                    style={{
                      border: "1px solid #00823B",
                      height: "32px",
                      backgroundColor: "#00823B",
                      width: "80%",
                      margin: "0.6rem 1rem",
                      borderRadius: "5px",
                    }}
                  >
                    <p
                      className="wwwdww"
                      style={{
                        fontSize: "15px",
                        color: "#FFFFFF",
                        textAlign: "center",
                      }}
                    >
                      Assess Colleague
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="skm2"
                  style={{
                    border: "1px solid #FFFFFF",
                    height: "14rem",
                    width: "100%",
                  }}
                >
                  <div className="fgef23 d-flex">
                    <img
                      src="./image/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x@2x.png"
                      style={{
                        height: "3rem",
                        width: "17%",
                        margin: "1rem 1rem",
                      }}
                    />
                    <div className="ib4551" style={{ margin: "1rem 10rem" }}>
                      <RadialProgress
                        width={55}
                        height={55}
                        steps={10}
                        fontRatio={3}
                        step={8.5}
                        ringBgColour="#E3E3E3"
                        ringFgColour="#00823B"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        //   style={{height:"70%",with:"70%"}}
                        className="thrtrt"
                      />
                    </div>
                  </div>
                  <div className="ddddss">
                    <p
                      className="wdsddw"
                      style={{ fontSize: "15px", margin: "0rem 1rem" }}
                    >
                      <b>Govarthini</b>
                    </p>
                    <p
                      className="sfww"
                      style={{
                        fontSize: "10px",
                        color: "#B6B6B6",
                        margin: "0rem 1rem",
                      }}
                    >
                      Chennai, India
                    </p>
                  </div>
                  <div
                    className="kha00"
                    style={{
                      border: "1px solid #F2E0BC",
                      fontSize: "10px",
                      width: "35%",
                      height: "25px",
                      margin: "0.5rem 1rem",
                    }}
                  >
                    <p
                      className="fs"
                      style={{ color: "#CB8A07", textAlign: "center" ,margin:"0.2rem 0rem"}}
                    >
                      <b>UX Designer</b>
                    </p>
                  </div>

                  <div
                    className="wuol"
                    style={{
                      border: "1px solid #fff",
                      height: "32px",
                      // backgroundColor: "#fff",
                      width: "80%",
                      margin: "0.6rem 1rem",
                      // borderRadius:"5px"
                    }}
                  >
                    <p
                      className="wwwl"
                      style={{
                        fontSize: "15px",
                        color: "#00823B",
                        textAlign: "center",
                      }}
                    >
                      <b> Re-Assess Colleague</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="skm3"
                  style={{
                    border: "1px solid #FFFFFF",
                    height: "14rem",
                    width: "100%",
                  }}
                >
                  <div className="fgef23 d-flex">
                    <img
                      src="./image/kk3.png"
                      style={{
                        height: "3rem",
                        width: "17%",
                        margin: "1rem 1rem",
                      }}
                    />
                    <div className="ib4551" style={{ margin: "1rem 10rem" }}>
                      <RadialProgress
                        width={55}
                        height={55}
                        steps={10}
                        fontRatio={3}
                        step={8.5}
                        ringBgColour="#E3E3E3"
                        ringFgColour="#00823B"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        //   style={{height:"70%",with:"70%"}}
                        className="thrtrt"
                      />
                    </div>
                  </div>

                  <div className="ddddss">
                    <p
                      className="wdsddw"
                      style={{ fontSize: "15px", margin: "0rem 1rem" }}
                    >
                      <b>Govarthini</b>
                    </p>
                    <p
                      className="sfww"
                      style={{
                        fontSize: "10px",
                        color: "#B6B6B6",
                        margin: "0rem 1rem",
                      }}
                    >
                      Chennai, India
                    </p>
                  </div>
                  <div
                    className="kha0"
                    style={{
                      border: "1px solid #D7F2BC",
                      fontSize: "10px",
                      width: "35%",
                      height: "25px",
                      margin: "0.5rem 1rem",
                    }}
                  >
                    <p
                      className="fsff"
                      style={{ color: "#CB8A07", textAlign: "center",margin:"0.2rem 0rem" }}
                    >
                      <b>Graphic Designer</b>
                    </p>
                  </div>

                  <div
                    className="wuo"
                    style={{
                      border: "1px solid #00823B",
                      height: "32px",
                      backgroundColor: "#00823B",
                      width: "80%",
                      margin: "0.6rem 1rem",
                      borderRadius: "5px",
                    }}
                  >
                    <p
                      className="wwwdww"
                      style={{
                        fontSize: "15px",
                        color: "#FFFFFF",
                        textAlign: "center",
                      }}
                    >
                      Assess Colleague
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-md-4">
                <div
                  className="skm4"
                  style={{
                    border: "1px solid #FFFFFF",
                    height: "14rem",
                    width: "100%",
                  }}
                >
                  <div className="fgef23 d-flex">
                    <img
                      src="./image/peter.png"
                      style={{
                        height: "3rem",
                        width: "17%",
                        margin: "1rem 1rem",
                      }}
                    />
                    <div className="ib4551" style={{ margin: "1rem 10rem" }}>
                      <RadialProgress
                        width={55}
                        height={55}
                        steps={10}
                        fontRatio={3}
                        step={8.5}
                        ringBgColour="#E3E3E3"
                        ringFgColour="#00823B"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        //   style={{height:"70%",with:"70%"}}
                        className="thrtrt"
                      />
                    </div>
                  </div>
                  {/* <img
                    src="./image/peter.png"
                    style={{
                      height: "3rem",
                      width: "17%",
                      margin: "1rem 1rem",
                    }}
                  /> */}
                  <div className="ddddss">
                    <p
                      className="wdsddw"
                      style={{ fontSize: "15px", margin: "0rem 1rem" }}
                    >
                      <b>Peter England</b>
                    </p>
                    <p
                      className="sfww"
                      style={{
                        fontSize: "10px",
                        color: "#B6B6B6",
                        margin: "0rem 1rem",
                      }}
                    >
                      Chennai, India
                    </p>
                  </div>
                  <div
                    className="kha1"
                    style={{
                      border: "1px solid #FDF8E1",
                      fontSize: "10px",
                      width: "35%",
                      height: "25px",
                      margin: "0.5rem 1rem",
                    }}
                  >
                    <p
                      className="fs"
                      style={{ color: "#D6B82D", textAlign: "center",margin:"0.2rem 0rem" }}
                    >
                      <b>Project Lead</b>
                    </p>
                  </div>

                  <div
                    className="wuol"
                    style={{
                      border: "1px solid #fff",
                      height: "32px",
                      // backgroundColor: "#fff",
                      width: "80%",
                      margin: "0.6rem 1rem",
                      // borderRadius:"5px"
                    }}
                  >
                    <p
                      className="wwwl"
                      style={{
                        fontSize: "15px",
                        color: "#00823B",
                        textAlign: "center",
                      }}
                    >
                      <b> Re-Assess Colleague</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="skm5"
                  style={{
                    border: "1px solid #FFFFFF",
                    height: "14rem",
                    width: "100%",
                  }}
                >
                  <div className="fgef23 d-flex">
                    <img
                      src="./image/david.png"
                      style={{
                        height: "3rem",
                        width: "17%",
                        margin: "1rem 1rem",
                      }}
                    />
                    <div className="ib4551" style={{ margin: "1rem 10rem" }}>
                      <RadialProgress
                        width={55}
                        height={55}
                        steps={10}
                        fontRatio={3}
                        step={8.5}
                        ringBgColour="#E3E3E3"
                        ringFgColour="#00823B"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        //   style={{height:"70%",with:"70%"}}
                        className="thrtrt"
                      />
                    </div>
                  </div>

                  <div className="ddddss">
                    <p
                      className="wdsddw"
                      style={{ fontSize: "15px", margin: "0rem 1rem" }}
                    >
                      <b>David Paulson</b>
                    </p>
                    <p
                      className="sfww"
                      style={{
                        fontSize: "10px",
                        color: "#B6B6B6",
                        margin: "0rem 1rem",
                      }}
                    >
                      Chennai, India
                    </p>
                  </div>
                  <div
                    className="kha2"
                    style={{
                      border: "1px solid #E1FDE8",
                      fontSize: "10px",
                      width: "35%",
                      height: "25px",
                      margin: "0.5rem 1rem",
                    }}
                  >
                    <p
                      className="fs1"
                      style={{ color: "#54C96F", textAlign: "center",margin:"0.2rem 0rem" }}
                    >
                      <b>Research Analyst</b>
                    </p>
                  </div>

                  <div
                    className="wuol"
                    style={{
                      border: "1px solid #fff",
                      height: "32px",
                      // backgroundColor: "#fff",
                      width: "80%",
                      margin: "0.6rem 1rem",
                      // borderRadius:"5px"
                    }}
                  >
                    <p
                      className="wwwl"
                      style={{
                        fontSize: "15px",
                        color: "#00823B",
                        textAlign: "center",
                      }}
                    >
                      <b> Re-Assess Colleague</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="skm6"
                  style={{
                    border: "1px solid #FFFFFF",
                    height: "14rem",
                    width: "100%",
                  }}
                >
                  <div className="fgef23 d-flex">
                    <img
                      src="./image/mitchel.png"
                      style={{
                        height: "3rem",
                        width: "17%",
                        margin: "1rem 1rem",
                      }}
                    />
                    <div className="ib4551" style={{ margin: "1rem 10rem" }}>
                      <RadialProgress
                        width={55}
                        height={55}
                        steps={10}
                        fontRatio={3}
                        step={8.5}
                        ringBgColour="#E3E3E3"
                        ringFgColour="#00823B"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        //   style={{height:"70%",with:"70%"}}
                        className="thrtrt"
                      />
                    </div>
                  </div>

                  <div className="ddddss">
                    <p
                      className="wdsddw"
                      style={{ fontSize: "15px", margin: "0rem 1rem" }}
                    >
                      <b>Mitchel obama</b>
                    </p>
                    <p
                      className="sfww"
                      style={{
                        fontSize: "10px",
                        color: "#B6B6B6",
                        margin: "0rem 1rem",
                      }}
                    >
                      Chennai, India
                    </p>
                  </div>
                  <div
                    className="kha4"
                    style={{
                      border: "1px solid #D7E4F5",
                      fontSize: "10px",
                      width: "35%",
                      height: "25px",
                      margin: "0.5rem 1rem",
                    }}
                  >
                    <p
                      className="fs2"
                      style={{ color: "#5E98DC", textAlign: "center",margin:"0.2rem 0rem" }}
                    >
                      <b>Developer</b>
                    </p>
                  </div>

                  <div
                    className="wuol"
                    style={{
                      border: "1px solid #fff",
                      height: "32px",
                      // backgroundColor: "#fff",
                      width: "80%",
                      margin: "0.6rem 1rem",
                      // borderRadius:"5px"
                    }}
                  >
                    <p
                      className="wwwl"
                      style={{
                        fontSize: "15px",
                        color: "#00823B",
                        textAlign: "center",
                      }}
                    >
                      <b> Re-Assess Colleague</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-md-4">
                <div
                  className="skm7"
                  style={{
                    border: "1px solid #FFFFFF",
                    height: "14rem",
                    width: "100%",
                  }}
                >
                  <div className="fgef23 d-flex">
                    <img
                      src="./image/360_F_316184778_9LgpM5aO70ZsO28e251mpii7irZzTN7S@2x.png"
                      style={{
                        height: "3rem",
                        width: "17%",
                        margin: "1rem 1rem",
                      }}
                    />
                    <div className="ib4551" style={{ margin: "1rem 10rem" }}>
                      <RadialProgress
                        width={55}
                        height={55}
                        steps={10}
                        fontRatio={3}
                        step={8.5}
                        ringBgColour="#E3E3E3"
                        ringFgColour="#00823B"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        //   style={{height:"70%",with:"70%"}}
                        className="thrtrt"
                      />
                    </div>
                  </div>

                  <div className="ddddss">
                    <p
                      className="wdsddw"
                      style={{ fontSize: "15px", margin: "0rem 1rem" }}
                    >
                      <b>Govarthini</b>
                    </p>
                    <p
                      className="sfww"
                      style={{
                        fontSize: "10px",
                        color: "#B6B6B6",
                        margin: "0rem 1rem",
                      }}
                    >
                      Chennai, India
                    </p>
                  </div>
                  <div
                    className="rrkhn"
                    style={{
                      border: "1px solid #D7F2BC",
                      fontSize: "10px",
                      width: "35%",
                      height: "25px",
                      margin: "0.5rem 1rem",
                    }}
                  >
                    <p
                      className="fsff"
                      style={{ color: "#66BC11", textAlign: "center" ,margin:"0.2rem 0rem"}}
                    >
                      <b>Project Manager</b>
                    </p>
                  </div>

                  <div
                    className="wuo"
                    style={{
                      border: "1px solid #00823B",
                      height: "32px",
                      backgroundColor: "#00823B",
                      width: "80%",
                      margin: "0.6rem 1rem",
                      borderRadius: "5px",
                    }}
                  >
                    <p
                      className="wwwdww"
                      style={{
                        fontSize: "15px",
                        color: "#FFFFFF",
                        textAlign: "center",
                      }}
                    >
                      Assess Colleague
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="skm8"
                  style={{
                    border: "1px solid #FFFFFF",
                    height: "14rem",
                    width: "100%",
                  }}
                >
                  <div className="fgef23 d-flex">
                    <img
                      src="./image/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x@2x.png"
                      style={{
                        height: "3rem",
                        width: "17%",
                        margin: "1rem 1rem",
                      }}
                    />
                    <div className="ib4551" style={{ margin: "1rem 10rem" }}>
                      <RadialProgress
                        width={55}
                        height={55}
                        steps={10}
                        fontRatio={3}
                        step={8.5}
                        ringBgColour="#E3E3E3"
                        ringFgColour="#00823B"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        //   style={{height:"70%",with:"70%"}}
                        className="thrtrt"
                      />
                    </div>
                  </div>

                  <div className="ddddss">
                    <p
                      className="wdsddw"
                      style={{ fontSize: "15px", margin: "0rem 1rem" }}
                    >
                      <b>Govarthini</b>
                    </p>
                    <p
                      className="sfww"
                      style={{
                        fontSize: "10px",
                        color: "#B6B6B6",
                        margin: "0rem 1rem",
                      }}
                    >
                      Chennai, India
                    </p>
                  </div>
                  <div
                    className="kha00"
                    style={{
                      border: "1px solid #F2E0BC",
                      fontSize: "10px",
                      width: "35%",
                      height: "25px",
                      margin: "0.5rem 1rem",
                    }}
                  >
                    <p
                      className="fs"
                      style={{ color: "#CB8A07", textAlign: "center",margin:"0.2rem 0rem" }}
                    >
                      <b>UX Designer</b>
                    </p>
                  </div>

                  <div
                    className="wuol"
                    style={{
                      border: "1px solid #fff",
                      height: "32px",
                      // backgroundColor: "#fff",
                      width: "80%",
                      margin: "0.6rem 1rem",
                      // borderRadius:"5px"
                    }}
                  >
                    <p
                      className="wwwl"
                      style={{
                        fontSize: "15px",
                        color: "#00823B",
                        textAlign: "center",
                      }}
                    >
                      <b> Re-Assess Colleague</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="skm9"
                  style={{
                    border: "1px solid #FFFFFF",
                    height: "14rem",
                    width: "100%",
                  }}
                >
                  <div className="fgef23 d-flex">
                    <img
                      src="./image/kk3.png"
                      style={{
                        height: "3rem",
                        width: "17%",
                        margin: "1rem 1rem",
                      }}
                    />
                    <div className="ib4551" style={{ margin: "1rem 10rem" }}>
                      <RadialProgress
                        width={55}
                        height={55}
                        steps={10}
                        fontRatio={3}
                        step={8.5}
                        ringBgColour="#E3E3E3"
                        ringFgColour="#00823B"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        //   style={{height:"70%",with:"70%"}}
                        className="thrtrt"
                      />
                    </div>
                  </div>

                  <div className="ddddss">
                    <p
                      className="wdsddw"
                      style={{ fontSize: "15px", margin: "0rem 1rem" }}
                    >
                      <b>Govarthini</b>
                    </p>
                    <p
                      className="sfww"
                      style={{
                        fontSize: "10px",
                        color: "#B6B6B6",
                        margin: "0rem 1rem",
                      }}
                    >
                      Chennai, India
                    </p>
                  </div>
                  <div
                    className="kha0"
                    style={{
                      border: "1px solid #D7F2BC",
                      fontSize: "10px",
                      width: "35%",
                      height: "25px",
                      margin: "0.5rem 1rem",
                    }}
                  >
                    <p
                      className="fsff"
                      style={{ color: "#CB8A07", textAlign: "center",margin:"0.2rem 0rem" }}
                    >
                      <b>Graphic Designer</b>
                    </p>
                  </div>

                  <div
                    className="wuo"
                    style={{
                      border: "1px solid #00823B",
                      height: "32px",
                      backgroundColor: "#00823B",
                      width: "80%",
                      margin: "0.6rem 1rem",
                      borderRadius: "5px",
                    }}
                  >
                    <p
                      className="wwwdww"
                      style={{
                        fontSize: "15px",
                        color: "#FFFFFF",
                        textAlign: "center",
                      }}
                    >
                      Assess Colleague
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-md-4">
                <div
                  className="skm10"
                  style={{
                    border: "1px solid #FFFFFF",
                    height: "14rem",
                    width: "100%",
                  }}
                >
                  <div className="fgef23 d-flex">
                    <img
                      src="./image/peter.png"
                      style={{
                        height: "3rem",
                        width: "17%",
                        margin: "1rem 1rem",
                      }}
                    />
                    <div className="ib4551" style={{ margin: "1rem 10rem" }}>
                      <RadialProgress
                        width={55}
                        height={55}
                        steps={10}
                        fontRatio={3}
                        step={8.5}
                        ringBgColour="#E3E3E3"
                        ringFgColour="#00823B"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        //   style={{height:"70%",with:"70%"}}
                        className="thrtrt"
                      />
                    </div>
                  </div>

                  <div className="ddddss">
                    <p
                      className="wdsddw"
                      style={{ fontSize: "15px", margin: "0rem 1rem" }}
                    >
                      <b>Peter England</b>
                    </p>
                    <p
                      className="sfww"
                      style={{
                        fontSize: "10px",
                        color: "#B6B6B6",
                        margin: "0rem 1rem",
                      }}
                    >
                      Chennai, India
                    </p>
                  </div>
                  <div
                    className="kha1"
                    style={{
                      border: "1px solid #FDF8E1",
                      fontSize: "10px",
                      width: "35%",
                      height: "25px",
                      margin: "0.5rem 1rem",
                    }}
                  >
                    <p
                      className="fs"
                      style={{ color: "#D6B82D", textAlign: "center",margin:"0.2rem 0rem" }}
                    >
                      <b>Project Lead</b>
                    </p>
                  </div>

                  <div
                    className="wuol"
                    style={{
                      border: "1px solid #fff",
                      height: "32px",
                      // backgroundColor: "#fff",
                      width: "80%",
                      margin: "0.6rem 1rem",
                      // borderRadius:"5px"
                    }}
                  >
                    <p
                      className="wwwl"
                      style={{
                        fontSize: "15px",
                        color: "#00823B",
                        textAlign: "center",
                      }}
                    >
                      <b> Re-Assess Colleague</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="skm11"
                  style={{
                    border: "1px solid #FFFFFF",
                    height: "14rem",
                    width: "100%",
                  }}
                >
                  <div className="fgef23 d-flex">
                    <img
                      src="./image/david.png"
                      style={{
                        height: "3rem",
                        width: "17%",
                        margin: "1rem 1rem",
                      }}
                    />
                    <div className="ib4551" style={{ margin: "1rem 10rem" }}>
                      <RadialProgress
                        width={55}
                        height={55}
                        steps={10}
                        fontRatio={3}
                        step={8.5}
                        ringBgColour="#E3E3E3"
                        ringFgColour="#00823B"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        //   style={{height:"70%",with:"70%"}}
                        className="thrtrt"
                      />
                    </div>
                  </div>
                  {/* <img
                    src="./image/david.png"
                    style={{
                      height: "3rem",
                      width: "17%",
                      margin: "1rem 1rem",
                    }}
                  /> */}
                  <div className="ddddss">
                    <p
                      className="wdsddw"
                      style={{ fontSize: "15px", margin: "0rem 1rem" }}
                    >
                      <b>David Paulson</b>
                    </p>
                    <p
                      className="sfww"
                      style={{
                        fontSize: "10px",
                        color: "#B6B6B6",
                        margin: "0rem 1rem",
                      }}
                    >
                      Chennai, India
                    </p>
                  </div>
                  <div
                    className="kha2"
                    style={{
                      border: "1px solid #E1FDE8",
                      fontSize: "10px",
                      width: "35%",
                      height: "25px",
                      margin: "0.5rem 1rem",
                    }}
                  >
                    <p
                      className="fs1"
                      style={{ color: "#54C96F", textAlign: "center",margin:"0.2rem 0rem" }}
                    >
                      <b>Research Analyst</b>
                    </p>
                  </div>

                  <div
                    className="wuol"
                    style={{
                      border: "1px solid #fff",
                      height: "32px",
                      // backgroundColor: "#fff",
                      width: "80%",
                      margin: "0.6rem 1rem",
                      // borderRadius:"5px"
                    }}
                  >
                    <p
                      className="wwwl"
                      style={{
                        fontSize: "15px",
                        color: "#00823B",
                        textAlign: "center",
                      }}
                    >
                      <b> Re-Assess Colleague</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="skm12"
                  style={{
                    border: "1px solid #FFFFFF",
                    height: "14rem",
                    width: "100%",
                  }}
                >
                    <div className="fgef23 d-flex">
                    <img
                      src="./image/mitchel.png"
                      style={{
                        height: "3rem",
                        width: "17%",
                        margin: "1rem 1rem",
                      }}
                    />
                    <div className="ib4551" style={{ margin: "1rem 10rem" }}>
                      <RadialProgress
                        width={55}
                        height={55}
                        steps={10}
                        fontRatio={3}
                        step={8.5}
                        ringBgColour="#E3E3E3"
                        ringFgColour="#00823B"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        //   style={{height:"70%",with:"70%"}}
                        className="thrtrt"
                      />
                    </div>
                  </div>
                  {/* <img
                    src="./image/mitchel.png"
                    style={{
                      height: "3rem",
                      width: "17%",
                      margin: "1rem 1rem",
                    }}
                  /> */}
                  <div className="ddddss">
                    <p
                      className="wdsddw"
                      style={{ fontSize: "15px", margin: "0rem 1rem" }}
                    >
                      <b>Mitchel obama</b>
                    </p>
                    <p
                      className="sfww"
                      style={{
                        fontSize: "10px",
                        color: "#B6B6B6",
                        margin: "0rem 1rem",
                      }}
                    >
                      Chennai, India
                    </p>
                  </div>
                  <div
                    className="kha4"
                    style={{
                      border: "1px solid #D7E4F5",
                      fontSize: "10px",
                      width: "35%",
                      height: "25px",
                      margin: "0.5rem 1rem",
                    }}
                  >
                    <p
                      className="fs2"
                      style={{ color: "#5E98DC", textAlign: "center",margin:"0.2rem 0rem" }}
                    >
                      <b>Developer</b>
                    </p>
                  </div>

                  <div
                    className="wuol"
                    style={{
                      border: "1px solid #fff",
                      height: "32px",
                      // backgroundColor: "#fff",
                      width: "80%",
                      margin: "0.6rem 1rem",
                      // borderRadius:"5px"
                    }}
                  >
                    <p
                      className="wwwl"
                      style={{
                        fontSize: "15px",
                        color: "#00823B",
                        textAlign: "center",
                      }}
                    >
                      <b> Re-Assess Colleague</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default EmployeeSearch;
