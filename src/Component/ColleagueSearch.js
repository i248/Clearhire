import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";

import Form from "react-bootstrap/Form";
import Header5 from "./Header5";
import Footer from "./Footer";
import "react-circular-progressbar/dist/styles.css";
import { RadialProgress } from "react-radial-progress-indicator";

function ColleagueSearch() {
  return (
    <div>
      <div
        className="ewcn"
        style={{
          border: "1px solid #C8C8C8",
          width: "100%",
          height: "60rem",
          margin: "0rem 0rem",
          backgroundColor: "#F5F7F9 ",
        }}
      >
        <Header5 />
        <div className="row">
          <div className="col-md-4">
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
                  <Space direction="vertical">
                    <Tooltip title="search">
                      <Button
                        type=""
                        shape="circle"
                        icon={<SearchOutlined />}
                      />
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
                  }}
                >
                  Job title, company and keyword
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
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
          <div className="col-md-5">
            <div
              className="dddaw"
              style={{
                border: "1px solid  #C8C8C8",
                height: "5rem",
                backgroundColor: "#FFFFFF",
              }}
            >
              <div
                className="sdsaet"
                style={{
                  border: "1px solid #00823B",
                  height: "3.5rem",
                  width: "30%",
                  backgroundColor: "#00823B",
                  borderRadius: "5px",
                  margin: "1rem 20rem",
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
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <br></br>
              <h5 className="sfsff" style={{ margin: "0rem 2rem" }}>
                <b>Colleague Search Settings</b>
              </h5>
              <br></br>
              <div className="afasv" style={{ margin: "0rem 2rem" }}>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                      <b>Job Title</b>
                    </Form.Label>
                    <Form.Control type="email" placeholder="" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                      <b>Catagories</b>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                      <b>Location</b>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Form>
              </div>
              <br></br>
              <div className="wrwff" style={{ margin: "0rem 2rem" }}>
                <p className="sds">
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
            <div className="col-md-8">
              <br></br>
              <br></br>
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="skm"
                    style={{
                      border: "1px solid #FFFFFF",
                      height: "12.5rem",
                      width: "100%",
                    }}
                  >
                    <div className="weg32 d-flex">
                      <img
                        src="./image/360_F_316184778_9LgpM5aO70ZsO28e251mpii7irZzTN7S@2x.png"
                        style={{
                          height: "3rem",
                          width: "17%",
                          margin: "1rem 1rem",
                        }}
                      />
                     <div className="werg46" style={{ marginTop: "16px",marginLeft:"110px"}}>
                     <RadialProgress
                        width={45}
                        height={45}
                        steps={10}
                        step={7.5}
                        fontRatio={3}
                 
                        ringBgColour="#E3E3E3"
                        ringFgColour="#E56839"
                        ringIntermediateColour="black"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        className="th8788rtrt"
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
                        width: "45%",
                        height: "20px",
                        margin: "0.5rem 1rem",
                      }}
                    >
                      <p
                        className="fsff"
                        style={{ color: "#66BC11", textAlign: "center" }}
                      >
                        <b>Project Manager</b>
                      </p>
                    </div>

                    <div
                      className="wuo"
                      style={{
                        border: "1px solid #00823B",
                        height: "25px",
                        backgroundColor: "#00823B",
                        width: "80%",
                        margin: "0.6rem 1rem",
                        borderRadius: "5px",
                      }}
                    >
                      <p
                        className="wwwdww"
                        style={{
                          fontSize: "12px",
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
                    className="skm "
                    style={{
                      border: "1px solid #FFFFFF",
                      height: "12.5rem",
                      width: "100%",
                    }}
                  >
                       <div className="weg32 d-flex">
                      <img
                        src="./image/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x@2x.png"
                        style={{
                          height: "3rem",
                          width: "17%",
                          margin: "1rem 1rem",
                        }}
                      />
                     <div className="werg46" style={{ marginTop: "16px",marginLeft:"110px"}}>
                     <RadialProgress
                        width={45}
                        height={45}
                        steps={10}
                        step={7.5}
                        fontRatio={3}
                 
                        ringBgColour="#E3E3E3"
                        ringFgColour="#E56839"
                        ringIntermediateColour="black"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        className="th8788rtrt"
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
                        width: "45%",
                        height: "20px",
                        margin: "0.5rem 1rem",
                      }}
                    >
                      <p
                        className="fs"
                        style={{ color: "#CB8A07", textAlign: "center" }}
                      >
                        <b>UX Designer</b>
                      </p>
                    </div>

                    <div
                      className="wuol"
                      style={{
                        border: "1px solid #fff",
                        height: "25px",
                        // backgroundColor: "#fff",
                        width: "80%",
                        margin: "0.6rem 1rem",
                        // borderRadius:"5px"
                      }}
                    >
                      <p
                        className="wwwl"
                        style={{
                          fontSize: "12px",
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
                    className="skm"
                    style={{
                      border: "1px solid #FFFFFF",
                      height: "12.5rem",
                      width: "100%",
                    }}
                  >
                       <div className="weg32 d-flex">
                      <img
                        src="./image/kk3.png"
                        style={{
                          height: "3rem",
                          width: "17%",
                          margin: "1rem 1rem",
                        }}
                      />
                     <div className="werg46" style={{ marginTop: "16px",marginLeft:"110px"}}>
                     <RadialProgress
                        width={45}
                        height={45}
                        steps={10}
                        step={7.5}
                        fontRatio={3}
                 
                        ringBgColour="#E3E3E3"
                        ringFgColour="#E56839"
                        ringIntermediateColour="black"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        className="th8788rtrt"
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
                        width: "45%",
                        height: "20px",
                        margin: "0.5rem 1rem",
                      }}
                    >
                      <p
                        className="fsff"
                        style={{ color: "#CB8A07", textAlign: "center" }}
                      >
                        <b>Graphic Designer</b>
                      </p>
                    </div>

                    <div
                      className="wuo"
                      style={{
                        border: "1px solid #00823B",
                        height: "25px",
                        backgroundColor: "#00823B",
                        width: "80%",
                        margin: "0.6rem 1rem",
                        borderRadius: "5px",
                      }}
                    >
                      <p
                        className="wwwdww"
                        style={{
                          fontSize: "12px",
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
                    className="skm"
                    style={{
                      border: "1px solid #FFFFFF",
                      height: "12.5rem",
                      width: "100%",
                    }}
                  >
                         <div className="weg32 d-flex">
                      <img
                        src="./image/peter.png"
                        style={{
                          height: "3rem",
                          width: "17%",
                          margin: "1rem 1rem",
                        }}
                      />
                     <div className="werg46" style={{ marginTop: "16px",marginLeft:"110px"}}>
                     <RadialProgress
                        width={45}
                        height={45}
                        steps={10}
                        step={7.5}
                        fontRatio={3}
                 
                        ringBgColour="#E3E3E3"
                        ringFgColour="#E56839"
                        ringIntermediateColour="black"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        className="th8788rtrt"
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
                        width: "45%",
                        height: "20px",
                        margin: "0.5rem 1rem",
                      }}
                    >
                      <p
                        className="fs"
                        style={{ color: "#D6B82D", textAlign: "center" }}
                      >
                        <b>Project Lead</b>
                      </p>
                    </div>

                    <div
                      className="wuol"
                      style={{
                        border: "1px solid #fff",
                        height: "25px",
                        // backgroundColor: "#fff",
                        width: "80%",
                        margin: "0.6rem 1rem",
                        // borderRadius:"5px"
                      }}
                    >
                      <p
                        className="wwwl"
                        style={{
                          fontSize: "12px",
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
                    className="skm"
                    style={{
                      border: "1px solid #FFFFFF",
                      height: "12.5rem",
                      width: "100%",
                    }}
                  >
                         <div className="weg32 d-flex">
                      <img
                        src="./image/david.png"
                        style={{
                          height: "3rem",
                          width: "17%",
                          margin: "1rem 1rem",
                        }}
                      />
                     <div className="werg46" style={{ marginTop: "16px",marginLeft:"110px"}}>
                     <RadialProgress
                        width={45}
                        height={45}
                        steps={10}
                        step={7.5}
                        fontRatio={3}
                 
                        ringBgColour="#E3E3E3"
                        ringFgColour="#E56839"
                        ringIntermediateColour="black"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        className="th8788rtrt"
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
                        width: "45%",
                        height: "20px",
                        margin: "0.5rem 1rem",
                      }}
                    >
                      <p
                        className="fs1"
                        style={{ color: "#54C96F", textAlign: "center" }}
                      >
                        <b>Research Analyst</b>
                      </p>
                    </div>

                    <div
                      className="wuol"
                      style={{
                        border: "1px solid #fff",
                        height: "25px",
                        // backgroundColor: "#fff",
                        width: "80%",
                        margin: "0.6rem 1rem",
                        // borderRadius:"5px"
                      }}
                    >
                      <p
                        className="wwwl"
                        style={{
                          fontSize: "12px",
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
                    className="skm"
                    style={{
                      border: "1px solid #FFFFFF",
                      height: "12.5rem",
                      width: "100%",
                    }}
                  >
                    
                    <div className="weg32 d-flex">
                      <img
                        src="./image/mitchel.png"
                        style={{
                          height: "3rem",
                          width: "17%",
                          margin: "1rem 1rem",
                        }}
                      />
                     <div className="werg46" style={{ marginTop: "16px",marginLeft:"110px"}}>
                     <RadialProgress
                        width={45}
                        height={45}
                        steps={10}
                        step={7.5}
                        fontRatio={3}
                 
                        ringBgColour="#E3E3E3"
                        ringFgColour="#E56839"
                        ringIntermediateColour="black"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        className="th8788rtrt"
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
                        width: "45%",
                        height: "20px",
                        margin: "0.5rem 1rem",
                      }}
                    >
                      <p
                        className="fs2"
                        style={{ color: "#5E98DC", textAlign: "center" }}
                      >
                        <b>Developer</b>
                      </p>
                    </div>

                    <div
                      className="wuol"
                      style={{
                        border: "1px solid #fff",
                        height: "25px",
                        // backgroundColor: "#fff",
                        width: "80%",
                        margin: "0.6rem 1rem",
                        // borderRadius:"5px"
                      }}
                    >
                      <p
                        className="wwwl"
                        style={{
                          fontSize: "12px",
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
                    className="skm"
                    style={{
                      border: "1px solid #FFFFFF",
                      height: "12.5rem",
                      width: "100%",
                    }}
                  >
                           <div className="weg32 d-flex">
                      <img
                        src="./image/360_F_316184778_9LgpM5aO70ZsO28e251mpii7irZzTN7S@2x.png"
                        style={{
                          height: "3rem",
                          width: "17%",
                          margin: "1rem 1rem",
                        }}
                      />
                     <div className="werg46" style={{ marginTop: "16px",marginLeft:"110px"}}>
                     <RadialProgress
                        width={45}
                        height={45}
                        steps={10}
                        step={7.5}
                        fontRatio={3}
                 
                        ringBgColour="#E3E3E3"
                        ringFgColour="#E56839"
                        ringIntermediateColour="black"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        className="th8788rtrt"
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
                        width: "45%",
                        height: "20px",
                        margin: "0.5rem 1rem",
                      }}
                    >
                      <p
                        className="fsff"
                        style={{ color: "#66BC11", textAlign: "center" }}
                      >
                        <b>Project Manager</b>
                      </p>
                    </div>

                    <div
                      className="wuo"
                      style={{
                        border: "1px solid #00823B",
                        height: "25px",
                        backgroundColor: "#00823B",
                        width: "80%",
                        margin: "0.6rem 1rem",
                        borderRadius: "5px",
                      }}
                    >
                      <p
                        className="wwwdww"
                        style={{
                          fontSize: "12px",
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
                    className="skm"
                    style={{
                      border: "1px solid #FFFFFF",
                      height: "12.5rem",
                      width: "100%",
                    }}
                  >
                        <div className="weg32 d-flex">
                      <img
                        src="./image/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x@2x.png"
                        style={{
                          height: "3rem",
                          width: "17%",
                          margin: "1rem 1rem",
                        }}
                      />
                     <div className="werg46" style={{ marginTop: "16px",marginLeft:"110px"}}>
                     <RadialProgress
                        width={45}
                        height={45}
                        steps={10}
                        step={7.5}
                        fontRatio={3}
                 
                        ringBgColour="#E3E3E3"
                        ringFgColour="#E56839"
                        ringIntermediateColour="black"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        className="th8788rtrt"
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
                        width: "45%",
                        height: "20px",
                        margin: "0.5rem 1rem",
                      }}
                    >
                      <p
                        className="fs"
                        style={{ color: "#CB8A07", textAlign: "center" }}
                      >
                        <b>UX Designer</b>
                      </p>
                    </div>

                    <div
                      className="wuol"
                      style={{
                        border: "1px solid #fff",
                        height: "25px",
                        // backgroundColor: "#fff",
                        width: "80%",
                        margin: "0.6rem 1rem",
                        // borderRadius:"5px"
                      }}
                    >
                      <p
                        className="wwwl"
                        style={{
                          fontSize: "12px",
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
                    className="skm"
                    style={{
                      border: "1px solid #FFFFFF",
                      height: "12.5rem",
                      width: "100%",
                    }}
                  >
                    {/* <img
                      src="./image/kk3.png"
                      style={{
                        height: "3rem",
                        width: "17%",
                        margin: "1rem 1rem",
                      }}
                    /> */}
                          <div className="weg32 d-flex">
                      <img
                        src="./image/kk3.png"
                        style={{
                          height: "3rem",
                          width: "17%",
                          margin: "1rem 1rem",
                        }}
                      />
                     <div className="werg46" style={{ marginTop: "16px",marginLeft:"110px"}}>
                     <RadialProgress
                        width={45}
                        height={45}
                        steps={10}
                        step={7.5}
                        fontRatio={3}
                 
                        ringBgColour="#E3E3E3"
                        ringFgColour="#E56839"
                        ringIntermediateColour="black"
                        text={function text(steps, proportion) {
                          return "".concat(Math.floor(100 * proportion), "%");
                        }}
                        className="th8788rtrt"
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
                        width: "45%",
                        height: "20px",
                        margin: "0.5rem 1rem",
                      }}
                    >
                      <p
                        className="fsff"
                        style={{ color: "#CB8A07", textAlign: "center" }}
                      >
                        <b>Graphic Designer</b>
                      </p>
                    </div>

                    <div
                      className="wuo"
                      style={{
                        border: "1px solid #00823B",
                        height: "25px",
                        backgroundColor: "#00823B",
                        width: "80%",
                        margin: "0.6rem 1rem",
                        borderRadius: "5px",
                      }}
                    >
                      <p
                        className="wwwdww"
                        style={{
                          fontSize: "12px",
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
            </div>
          </div>
        </div>
        <div className="efwfg354" style={{ margin: "4.5rem 0rem" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ColleagueSearch;
