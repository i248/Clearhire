import React from "react";
import {CiSearch} from "react-icons/ci";
import {FaRegHandshake} from "react-icons/fa";
import {AiOutlineUser} from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, Dropdown, Space } from 'antd';
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


function Header2() {
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
       <img className="safsff"
          src="./image/Group 2@2x.png"
          style={{ height: "2rem", width: "70%", margin: "1.5rem 2.5rem" }}
        />
       </Link>
        <div
          className="wdvnm d-flex justify-content-center"
          style={{ margin: "0rem 2rem" }}
        >
         <Link to="/employeesearch"  style={{textDecoration:"none",color:"black"}}>
         <p
            className="fhh7"
            style={{ margin: "2rem 1rem", fontSize: "18px",color:"#686868" }}
          >
            <CiSearch style={{fontSize:"30px" , color:"#00823B",margin:"0rem 1rem"}}/>
          Your Employees
          </p>
         </Link>
         <Link to="/sentapprovals"  style={{textDecoration:"none",color:"black"}}>
         <p
            className="fhh8"
            style={{ margin: "2rem 4rem", fontSize: "18px" }}
          >
            <FaRegHandshake style={{fontSize:"40px" , color:"#00823B",margin:"0rem 0.3rem"}}/>
            <b> On-Board</b>
          </p>
         </Link>
          <p
            className="fdvvvd"
            style={{ margin: "2.2rem 1rem", fontSize: "18px" }}
          >
            <img className="assaa" src="./image/Group 842.svg" style={{height:"1.8rem"}}/>
             Verification / Request
          </p>
        </div>
        {/* <div className="safsd10" style={{margin:"2rem 9.5rem",textAlign:"center"}}>
        <Space direction="vertical" >
   
   <Space wrap >
    
     <Dropdown
     style={{height:"rem"}}
       menu={{
         items,
       }}
       placement="top"
     >
       <Button><AiOutlineUser style={{fontSize:"20px"}}/></Button>
     </Dropdown>
   
   </Space>
 </Space>
        </div> */}
       
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Header2;
