// export default EmployerSignup
import React from "react";
import Header from "./Header";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import Footer from "./Footer";

const options = [
  { label: "2022 ", value: "2022" },
  { label: "2023 ", value: "2023" },
  { label: "2024 ", value: "2024", disabled: true },
];

function EmployerSignup() {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <div
        className="tomar"
        style={{
          border: "1px solid #C8C8C8",
          width: "100%",
          height: "84rem",

          backgroundColor: "#FFFFFF ",
        }}
      >
        <Header />
        <br></br>
        <br></br>
        <br></br>
        <h1 className="dgsgh" style={{ textAlign: "center" }}>
          Employer Signup
        </h1>
        <br></br>
        <div className="sedsdji" style={{ width: "40%", margin: "0rem 30rem" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: "20px" }}>
                <b>Email</b>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="input your company mail id, use an official email address."
                style={{ borderBlockColor: "#00823B", height: "3.5rem" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ fontSize: "20px" }}>
                <b>Password</b>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="input your password in here"
                style={{ borderBlockColor: "#00823B", height: "3.5rem" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ fontSize: "20px" }}>
                <b>Company Name</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="input your company name"
                style={{ borderBlockColor: "#00823B", height: "3.5rem" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ fontSize: "20px" }}>
                <b>Company Website</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="input your official company website link"
                style={{ borderBlockColor: "#00823B", height: "3.5rem" }}
              />
            </Form.Group>
          </Form>
          <br></br>
          <div className="dsgsg d-flex">
            <div
              className="gshdzcz"
              style={{
                border: "1px solid #0000001C",
                height: "4rem",
                width: "50%",
                margin: "0rem 0.5rem",
              }}
            >
              <div className="safaf  d-flex justify-content-end">
                <p
                  className="asf"
                  style={{ fontSize: "20px", margin: "1rem 6rem" }}
                >
                  Country
                </p>
                <img
                  src="./image/Icon ionic-ios-arrow-dropup.svg"
                  style={{ height: "1.5rem", margin: "1rem 1rem" }}
                />
              </div>
            </div>
            <div
              className="gshdzcz"
              style={{
                border: "1px solid #0000001C",
                height: "4rem",
                width: "47%",
              }}
            >
              <div className="safaf  d-flex justify-content-end">
                <p
                  className="asf"
                  style={{ fontSize: "20px", margin: "1rem 7rem" }}
                >
                  State
                </p>
                <img
                  src="./image/Icon ionic-ios-arrow-dropup.svg"
                  style={{ height: "1.5rem", margin: "1rem 1rem" }}
                />
              </div>
            </div>
          </div>
          <br></br>
          <div className="saf">
            <p
              className="sffa"
              style={{ margin: "0rem 1rem", fontSize: "20px" }}
            >
              <b> Company Logo</b>
            </p>
            <div
              className="asghrrh"
              style={{
                border: "1px solid #0000001C",
                height: "4rem",
                width: "100%",
                margin: "0.4rem 0rem",
              }}
            >
              <div
                className="af d-flex justify-content-center"
                style={{ margin: "1rem  0rem" }}
              >
                <img
                  src="./image/Icon feather-upload.svg"
                  style={{ height: "27px", margin: "0rem 0.5rem" }}
                />
                <p
                  className="sfaf"
                  style={{ fontSize: "15px", margin: "0.2rem 0rem" }}
                >
                  <b>Upload Image</b>
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="saf">
            {/* <p className="sffa" style={{margin:"0rem 1rem"}}>Company Establishment Date</p> */}
            {/* <div
            className="asghrrh"
            style={{
              border: "1px solid #0000001C",
              height: "3rem",
              width: "100%",
              margin: "0.4rem 0rem",
            }}
          >
      
            <div className="af d-flex justify-content-end" style={{margin:"1rem  0rem"}}>
            <p className="sfaf" style={{fontSize:"12px",margin:"0.2rem 0rem"}}><b>Select Year</b></p>
                <img className="sdgsg m-0-end" src="./image/Icon ionic-ios-arrow-dropup.svg" style={{height:"18px", margin:"0rem 0.5rem"}}/>
                
            </div>
          </div> */}
            <div className="ggg5">
              <p className="gfg3" style={{ fontSize: "20px" }}>
                <b>Company Establishment Date</b>
              </p>
              <div
                className="fghfg"
                style={{
                  border: "1px solid #0000001C",
                  height: "4rem",
                  width: "100%",
                  margin: "0.4rem 0rem",
                  background: " #FFFFFF 0% 0% no-repeat padding-box",
                  boxShadow: " 0px 0px 11px #0000001C",
                  borderRadius: "14px",
                  opacity: "1",
                }}
              >
          <div className="safaf  d-flex justify-content-end">
                <p
                  className="asf12"
                  style={{ fontSize: "17px", margin: "1rem 30rem" }}
                >
                  2014
                </p>
                <img
                  src="./image/Icon ionic-ios-arrow-dropup.svg"
                  style={{ height: "1.5rem", margin: "1rem 1rem" }}
                />
              </div>
              </div>
              {/* <pre>{JSON.stringify(selected)}</pre> */}
              {/* <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"0
             
              /> */}
            </div>
            <br></br>
            <br></br>
            <div
              className="sesgr"
              style={{
                border: "1px solid #00823B",
                height: "4rem",
                width: "100%",
                borderRadius: "9px",
                backgroundColor: "#00823B",
                color: "white",
              }}
            >
              <p
                className="faff"
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  margin: "1rem 0rem",
                }}
              >
                Signup
              </p>
            </div>
          </div>
        </div>
    <div className="af16" style={{margin:"8rem 0rem"}}>
    <Footer />
    </div>
      </div>
    </div>
  );
}

export default EmployerSignup;
