import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegHandshake } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, Dropdown, Space } from "antd";
import { FiList } from "react-icons/fi";
const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Signout
      </a>
    ),
  },
  {
    key: "3",
    label: <a target="_blank" rel="noopener noreferrer"></a>,
  },
];

function Header4() {
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
          <img
            className="safs4444ff"
            src="./image/Group 2@2x.png"
            style={{ height: "2rem", width: "60%", margin: "2rem 4rem" }}
          />
        </Link>
        <div
          className="wdvnm d-flex justify-content-center"
          style={{ margin: "1rem 2rem" }}
        >
          <Link
            to="/employeesearch"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p
              className="fhh7"
              style={{ margin: "1.5rem 0.5rem", fontSize: "20px" }}
            >
              <CiSearch
              className="tth43"
                style={{
                  fontSize: "30px",
                  color: "#00823B",
                  margin: "-0.3rem 0rem",
                }}
              />
              <b>Your Employees</b>
            </p>
          </Link>
          <Link
            to="/sentapprovals"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p
              className="fhh8"
              style={{ margin: "1.5rem 2rem", fontSize: "20px" }}
            >
              <FaRegHandshake
              className="kl4364"
                style={{
                  fontSize: "35px",
                  color: "#00823B",
                  margin: "-0.3rem 0.3rem",
                }}
              />
              <b> On-Board</b>
            </p>
          </Link>
          <p
            className="fdvvvd"
            style={{ margin: "1.5rem 1rem", fontSize: "20px" }}
          >
            <img
              className="assaa"
              src="./image/Group 842.svg"
              style={{ height: "2rem" }}
            />
            <b> Verification Request</b>
          </p>
          <p
            className="fdvvgg"
            style={{ margin: "1.3rem 1rem",  }}
          >
            <FiList className="wrewwww" style={{ color: "#00823B",fontSize:"2rem" }} />
            <b className="ff665" style={{fontSize:"20px"}}>Assessment</b>
          </p>
        </div>
        <div
          className="safsdhjgh10"
          style={{ margin: "2.5rem 6rem", textAlign: "center" }}
        >
          <Space direction="vertical">
            <Space wrap>
              <Dropdown
                menu={{
                  items,
                }}
                placement="top"
              >
                <Button>
                  <AiOutlineUser style={{ fontSize: "20px" }} />
                </Button>
              </Dropdown>
            </Space>
          </Space>
        </div>
        {/* <div
          className="fhjm"
          style={{
            margin: "0.8rem 1rem",
            border: "1px solid #00823B",
            height: "2.4rem",
            width: "10%",
            backgroundColor: "#00823B",
            color: "#FFFFFF",
          }}
        >
          <p
            className="dsav"
            style={{
              textAlign: "center",
              fontSize: "10px",
              margin: "0.5rem 0rem",
            }}
          >
            Login
          </p>
        </div>
        <div
          className="fhjm"
          style={{
            margin: "0.8rem 1rem",
            border: "1px solid #000000",
            height: "2.4rem",
            width: "10%",
            backgroundColor: "#000000",
            color: "#FFFFFF",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "10px",
              margin: "0.5rem 0rem",
            }}
          >
            Signup
          </p>
        </div> */}
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Header4;
