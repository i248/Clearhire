import React from "react";
import Header from "./Header";
import Form from "react-bootstrap/Form";
import  { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import Footer from "./Footer";



import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat = (value) =>
  `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
    .endOf('week')
    .format(weekFormat)}`;



function EmployeeeSignup() {
  const [selected, setSelected] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div
        className="tomar"
        style={{
          border: "1px solid #C8C8C8",
          width: "100%",
          height: "70rem",
          margin: "0rem 0rem",
          backgroundColor: "#FFFFFF ",
        }}
      >
        <Header />
        <br></br>
        <br></br>
        <br></br>
        <h3 className="dgsgh" style={{ textAlign: "center" }}>
        Employee Signup
        </h3>
        <br></br>
        <div className="sedsdji" style={{ width: "40%", margin: "0rem 30rem" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{fontSize:"20px"}}><b>Email</b></Form.Label>
              <Form.Control
              className="dd556"
                type="email"
                placeholder="input your company mail id, use an official email address."
                style={{ borderBlockColor: "#00823B",height:"3.5rem" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{fontSize:"20px"}}><b>Password</b></Form.Label>
              <Form.Control
                type="password"
                placeholder="input your password in here"
                style={{ borderBlockColor: "#00823B",height:"3.5rem" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{fontSize:"20px"}}><b>Your Name</b></Form.Label>
              <Form.Control
                type="text"
                placeholder="input your company name"
                style={{ borderBlockColor: "#00823B",height:"3.5rem" }}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{fontSize:"20px"}}>Company Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="input your official company website link"
                style={{ borderBlockColor: "#00823B",height:"3.5rem" }}
              />
            </Form.Group> */}
          </Form>
          
          <p className="faff" style={{margin:"0.3rem 1rem",fontSize:"20px"}}><b>Your Location</b></p>
          <div className="dsgsg d-flex">
            <div
              className="gshdzcz"
              style={{
                border: "1px solid #0000001C",
                height: "3rem",
                width: "50%",
                margin: "0rem 0.5rem",
              }}
            >
              <div className="safaf  d-flex justify-content-end">
                <p
                  className="asf"
                  style={{ fontSize: "14px", margin: "0.7rem 10rem",fontSize:"15px" }}
                >
                  Country
                </p>
                <img
                  src="./image/Icon ionic-ios-arrow-dropup.svg"
                  style={{ height: "1.1rem", margin: "0.9rem 1rem" }}
                />
              </div>
            </div>
            <div
              className="gshdzcz"
              style={{
                border: "1px solid #0000001C",
                height: "3rem",
                width: "47%",
              }}
            >
              <div className="safaf  d-flex justify-content-end">
                
                <p
                  className="asf"
                  style={{ fontSize: "14px", margin: "0.7rem 10rem" ,fontSize:"15px"}}
                >
                  State
                </p>
                <img
                  src="./image/Icon ionic-ios-arrow-dropup.svg"
                  style={{ height: "1.1rem", margin: "0.9rem 1rem" }}
                />
              </div>
            </div>
          </div>
          <br></br>
        <div className="saf" >
            <p className="sffa" style={{margin:"0rem 1rem"}}>Profile Image</p>
        <div
            className="asghrrh"
            style={{
              border: "1px solid #0000001C",
              height: "4rem",
              width: "100%",
              margin: "0.4rem 0rem",
            }}
          >
            <div className="af d-flex justify-content-center" style={{margin:"1rem  0rem"}}>
                <img src="./image/Icon feather-upload.svg" style={{height:"25px", margin:"0rem 0.5rem"}}/>
                <p className="sfaf" style={{fontSize:"12px",margin:"0.5rem 0rem"}}><b>Upload Image</b></p>
            </div>
          </div>
        </div>
 
        <div className="saf" >
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
   <div className="affe">
    <p className="efewf" style={{margin:"0.3rem 1rem"}}>Date of Birth</p>
    <Space direction="vertical" size={12} >
    <DatePicker className="afegeg" defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} style={{width:"407%",height:"4rem"}}/>
  </Space>
   </div>
    <br></br>
    <br></br>
    <div className="sesr" style={{border:"1px solid #00823B", height:"4rem",width:"100%",borderRadius:"9px",backgroundColor:"#00823B",color:"white"}}>
<p className="faff" style={{fontSize:"20px",textAlign:"center",margin:"1rem 0rem"}}>Signup</p>
    </div>
        </div>
        </div>
        <br></br>
    <br></br>
    <br></br>
    <br></br>

 

        <Footer/>
      </div>
     
    </div>
  );
}

export default EmployeeeSignup;
