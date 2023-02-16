import React from "react";
import { MdSend } from "react-icons/md";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Header5 from "./Header5";
import Header4 from "./Header4";
import Footer from "./Footer";
function NewEmployee() {
  return (
    <div className="contai54">
      <div
        className="efe21l"
        style={{
          border: "1px solid #C8C8C8",
          width: "100%",
          height: "74rem",
          // margin: "4rem 12rem",
          backgroundColor: "#F5F7F9 0% 0% no-repeat padding-box",
        }}
      >
      <Header4/>
      <br></br>
      <br></br>
      <Link to="/sentapprovals"  style={{textDecoration:"none",color:"black"}}>
      <div className="fs d-flex" style={{margin:"0rem 4rem"}}>
          <IoIosArrowDropleftCircle
            style={{
              fontSize: "3rem",
              color: "#9EC2AD",
              margin: "0rem 2rem",
            }}
          />
          <h4 className="af6" style={{margin:"0.5rem 0rem"}}>Back</h4>
        </div>
      </Link>
        <br></br>

        <div className="container">
          <h1 className="fwf" style={{ textAlign: "center" }}>
            On-Board New Employee
          </h1>
          <br></br>
          <br></br>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              style={{ width: "50%", margin: "0rem 22rem" ,}}
            >
              <Form.Control type="text" placeholder="Name"  style={{height:"4rem"}}/>
            </Form.Group>
            <br></br>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              style={{ width: "50%", margin: "0rem 22rem" }}
            >
              <Form.Control type="email" placeholder="E-mail" style={{height:"4rem"}} />
            </Form.Group>
            <br></br>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              style={{ width: "50%", margin: "0rem 22rem" }}
            >
              <Form.Control type="Number" placeholder="Aadhar Number"  style={{height:"4rem"}}/>
            </Form.Group>
            <br></br>
            <Form.Select
              aria-label="Default select example"
              style={{ width: "50%", margin: "0rem 22rem",height:"4rem" }}
            >
              <option>Designation*</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <br></br>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              style={{ width: "50%", margin: "0rem 22rem" }}
            >
              <Form.Control type="text" placeholder="Date of Joining*" style={{height:"4rem"}}/>
            </Form.Group>
            <br></br>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              style={{ width: "50%", margin: "0rem 22rem" }}
            >
              <Form.Control type="text" placeholder="Salary*" style={{height:"4rem"}}/>
            </Form.Group>
          </Form>
          <br></br>
          <div
            className="sdp"
            style={{
              border: "1.5px solid #00823B",
              margin: "0rem 22rem",
              padding: "0.5rem",
              width: "50%",
              color: "#00823B",
              borderRadius: "0.4rem",
              height:"4rem"
            }}
          >
            <div className="wddx1 d-flex ">
              <p className="sda" style={{ margin: "0.5rem 1.5rem",fontSize:"20px" }}>
                Upload Offer Letter{" "}
                <img
                  className="dddaa my-end"
                  src="./image/Icon ionic-md-person-add.svg"
                  style={{ height: "10px" }}
                />
              </p>
            </div>
          </div>
          <br></br>
          <div
            className="sdg"
            style={{
              border: "1.5px solid #00823B",
              backgroundColor: "#00823B",
              height: "4rem",
              margin: "0rem 22rem",
              padding: "0.5rem",
              width: "50%",
              color: "#00823B",
              borderRadius: "0.4rem",
            }}
          >
            <div className="wddx d-flex" style={{ margin: "0.5rem 8rem" }}>
              <MdSend style={{ color: "white", margin: "0.3rem 0rem",fontSize:"20px" }} />
              <p
                className="sdau"
                style={{
                  textAlign: "center",
                  color: "white",
                  marginLeft: "1rem",
                  fontSize:"20px"
                }}
              >
                Send Offer Letter{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="fsdfdf23" style={{margin:"4rem 0rem"}}>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default NewEmployee;
