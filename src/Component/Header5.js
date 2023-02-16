import React from "react";
import {CiSearch} from "react-icons/ci";
import {FaRegHandshake} from "react-icons/fa";
import {AiOutlineUser} from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, Dropdown, Space } from 'antd';
import {BsFillPersonFill} from "react-icons/bs";
import {FaUsers} from "react-icons/fa";
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer">
   View Profile
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer">
   Signout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" >
    
      </a>
    ),
  },
];

function Header3() {
  return (
    <div
      className="safagmcb"
      style={{
        border: "1px solid #C8C8C8",
        width: "100%",
        height: "6rem",
        margin: "0rem 0rem",
        backgroundColor: "#FFFFFF ",
        // boxShadow: " 0px 3px 6px #00000029",
        opacity: "1",
      }}
    >
      <div className="faag d-flex">
       <Link to="/home">
       <img className="safhfh"
          src="./image/Group 2@2x.png"
          style={{ height: "2rem", width: "60%", margin: "2rem 4rem" }}
        />
       </Link>
        <div
          className="wdvnm d-flex justify-content-center"
          style={{ margin: "0rem 2rem" }}
        >
         <Link to="/sentapprovals"  style={{textDecoration:"none",color:"black"}}>
         <p
            className="fhguph8"
            style={{ margin: "2rem 2rem", fontSize: "25px" }}
          >
           <BsFillPersonFill className="fewfew35" style={{color:"#00823B",fontSize:"30px"}}/>
            <b className="efewiuhis" style={{ fontSize: "20px" }}> Your Profile</b>
          </p>
         </Link>
          <p
            className="fdvvvd"
            style={{ margin: "2.2rem 0rem", fontSize: "20px" }}
          >
            <img className="assa566a" src="./image/Icon awesome-briefcase-medical (1).svg" style={{height:"25px"}}/>
            <b className="ffrwiuiu5h" style={{margin:"0rem 0.5rem",color:"#686868"}}> Your Employees</b>
          </p>
          <Link to="/sentapprovals"  style={{textDecoration:"none",color:"black"}}>
         <p
            className="fhguph8"
            style={{ margin: "2.2rem 2rem", fontSize: "20px" }}
          >
           <FaUsers className="effe" style={{color:"#00823B",fontSize:"30px"}}/>
            <b className="euiuhjfews" style={{ fontSize: "20px",color:"#686868" }}> Colleagues</b>
          </p>
         </Link>
        </div>
        <div className="safsd1sdfg0" style={{margin:"2rem 14rem",}}>
        <Space direction="vertical">
   
    <Space wrap>
     
      <Dropdown
        menu={{
          items,
        }}
        placement="top"
      >
        <Button><AiOutlineUser style={{fontSize:"20px"}}/></Button>
      </Dropdown>
    
    </Space>
  </Space>
          
        </div>
     
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Header3;
