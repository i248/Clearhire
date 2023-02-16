import React from "react";
import Header2 from "./Header2";
import Form from "react-bootstrap/Form";
import { MDBRadio } from "mdb-react-ui-kit";
import { HiPlus } from "react-icons/hi";
import Button from "react-bootstrap/Button";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function SentApprovals() {
  return (
    <div
      className="sfsf"
      style={{
        border: "1px solid #C8C8C8",
        width: "100%",
        height: "62rem",
        margin: "0rem 0rem",
        backgroundColor: "#F5F7F9 ",
      }}
    >
      <Header2 />
      <br></br>
      <br></br>
      <div className="contain2">
        <div className="row">
          <div className="col-md-6">
            <h3 className="afa" style={{ margin: "0rem 2rem" }}>
              <b>Sent Approvals (Pending)</b>
            </h3>
          </div>
          <div className="col-md-6">
            <div className="asfff d-flex">
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="All"
                style={{ margin: "0.4rem 0.7rem" }}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Fresher"
                defaultChecked
                style={{ margin: "0.4rem 0.7rem" }}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Not on Clearhire"
                style={{ margin: "0.4rem 0.7rem" }}
              />
              <div
                className="aff"
                style={{
                  border: "1px solid  #00000012",
                  width: "25%",
                  height: "2.5rem",
                  margin: "-0.5rem 0.9rem",
                }}
              >
                <div
                  className="asfa  d-flex justify-content-center"
                  style={{ margin: "0.7rem 0rem" }}
                >
                  <HiPlus style={{ color: "#00823B" }} />
               <Link to="/newemployeee" style={{textDecoration:"none",color:"black"}}>
               <p
                    className="asff"
                    style={{
                      fontSize: "14px",
                      color: "#00823B",
                      margin: "-0.2rem 0.2rem",
                    }}
                  >
                    <b>New Recruit</b>
                  </p>
               </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="sff" style={{ margin: "-1rem 2rem" }}>
        <div className="row">
          <div className="col-md-3">
            <div
              className="afaf"
              style={{
                border: "1px solid #C3D0DC",
                width: "100%",
                height: "22rem",
                backgroundColor: "#F8FCFF",
              }}
            >
              <div className="fsgg" style={{ margin: "0.3rem 1.5rem" }}>
                <p>
                  <b>Govarthini</b>
                </p>
                <div
                  className="asfa"
                  style={{
                    border: "1px solid #F2DCBC",
                    height: "1.7rem",
                    width: "50%",
                    backgroundColor: "#F2DCBC",
                    borderRadius: "6px",
                  }}
                >
                  <p
                    className="wff"
                    style={{
                      fontSize: "10px",
                      color: "#CF8618",
                      margin: "0.3rem 0.5rem",
                    }}
                  >
                    Graphic Designer
                  </p>
                </div>
                <br></br>
                <p>Chennai, India</p>
                <p>Govarthini1994@gmail.com</p>
                <p>01-01-2023</p>
                <p>500,000</p>
                <div className="afa d-flex">
                  <div className="afa d-flex">
                    <BsFileEarmarkTextFill style={{ color: "#00823B",fontSize:"22px" }} />
                    <p
                      className="asff"
                      style={{
                        fontSize: "14px",
                        margin: "0rem 1rem",
                        color: "#00823B",
                      }}
                    >
                      View Offer Letter
                    </p>
                  </div>
                   <Button
                    variant="danger"
                    style={{
                      fontSize: "14px",
                      height: "2rem",
                      margin: "-0.4rem 1rem",
                      width:"31%"
                    }}
                  >
                    Delete
                  </Button>
                </div>
                <br></br>
                <div
                  className="asfaf"
                  style={{
                    border: "1px solid #E2F0E8",
                    height: "2rem",
                    width: "100%",
                    backgroundColor: "#E2F0E8",
                    borderRadius: "6px",
                  }}
                >
                  <p
                    className="sdgsg"
                    style={{
                      fontSize: "12px",
                      textAlign: "center",
                      color: "#00823B",
                      margin: "0.4rem 0rem",
                    }}
                  >
                    <b>Request to view assessment</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
          <div
              className="afaf"
              style={{
                border: "1px solid #C3D0DC",
                width: "100%",
                height: "22rem",
                backgroundColor: "#F8FCFF",
              }}
            >
              <div className="fsgg" style={{ margin: "0.3rem 1.5rem" }}>
                <p>
                  <b>Govarthini</b>
                </p>
                <div
                  className="asfa"
                  style={{
                    border: "1px solid #F2DCBC",
                    height: "1.7rem",
                    width: "50%",
                    backgroundColor: "#F2DCBC",
                    borderRadius: "6px",
                  }}
                >
                  <p
                    className="wff"
                    style={{
                      fontSize: "10px",
                      color: "#CF8618",
                      margin: "0.3rem 0.5rem",
                    }}
                  >
                    Graphic Designer
                  </p>
                </div>
                <br></br>
                <p>Chennai, India</p>
                <p>Govarthini1994@gmail.com</p>
                <p>01-01-2023</p>
                <p>500,000</p>
                <div className="afa d-flex">
                  <div className="afa d-flex">
                    <BsFileEarmarkTextFill style={{ color: "#00823B",fontSize:"22px" }} />
                    <p
                      className="asff"
                      style={{
                        fontSize: "14px",
                        margin: "0rem 1rem",
                        color: "#00823B",
                      }}
                    >
                      View Offer Letter
                    </p>
                  </div>
                   <Button
                    variant="danger"
                    style={{
                      fontSize: "14px",
                      height: "2rem",
                      margin: "-0.4rem 1rem",
                      width:"31%"
                    }}
                  >
                    Delete
                  </Button>
                </div>
                <br></br>
                <div
                  className="asfaf"
                  style={{
                    border: "1px solid #00823B",
                    height: "2rem",
                    width: "100%",
                    // backgroundColor: "#E2F0E8",
                    borderRadius: "6px",
                  }}
                >
                  <p
                    className="sdgsg"
                    style={{
                      fontSize: "12px",
                      textAlign: "center",
                      color: "#00823B",
                      margin: "0.4rem 0rem",
                    }}
                  >
                    <b>View assessment</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
          <div
              className="afaf"
              style={{
                border: "1px solid #C3D0DC",
                width: "100%",
                height: "22rem",
                backgroundColor: "#F8FCFF",
              }}
            >
              <div className="fsgg" style={{ margin: "0.3rem 1.5rem" }}>
                <p>
                  <b>Govarthini</b>
                </p>
                <div
                  className="asfa"
                  style={{
                    border: "1px solid #F2DCBC",
                    height: "1.7rem",
                    width: "50%",
                    backgroundColor: "#F2DCBC",
                    borderRadius: "6px",
                  }}
                >
                  <p
                    className="wff"
                    style={{
                      fontSize: "10px",
                      color: "#CF8618",
                      margin: "0.3rem 0.5rem",
                    }}
                  >
                    Graphic Designer
                  </p>
                </div>
                <br></br>
                <p>Chennai, India</p>
                <p>Govarthini1994@gmail.com</p>
                <p>01-01-2023</p>
                <p>500,000</p>
                <div className="afa d-flex">
                  <div className="afa d-flex">
                    <BsFileEarmarkTextFill style={{ color: "#00823B",fontSize:"22px" }} />
                    <p
                      className="asff"
                      style={{
                        fontSize: "14px",
                        margin: "0rem 1rem",
                        color: "#00823B",
                      }}
                    >
                      View Offer Letter
                    </p>
                  </div>
                   <Button
                    variant="danger"
                    style={{
                      fontSize: "14px",
                      height: "2rem",
                      margin: "-0.4rem 1rem",
                      width:"31%"
                    }}
                  >
                    Delete
                  </Button>
                </div>
                <br></br>
                <div
                  className="asfaf"
                  style={{
                    border: "1px solid #EEF8FF",
                    height: "2rem",
                    width: "100%",
                    backgroundColor: "#EEF8FF",
                    borderRadius: "6px",
                  }}
                >
                  <p
                    className="sdgsg"
                    style={{
                      fontSize: "12px",
                      textAlign: "center",
                      color: "#B2C2CE",
                      margin: "0.4rem 0rem",
                    }}
                  >
                    <b>Request Sent</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
          <div
              className="afaf"
              style={{
                border: "1px solid #C3D0DC",
                width: "100%",
                height: "22rem",
                backgroundColor: "#F8FCFF",
              }}
            >
              <div className="fsgg" style={{ margin: "0.3rem 1.5rem" }}>
                <p>
                  <b>Govarthini</b>
                </p>
                <div
                  className="asfa"
                  style={{
                    border: "1px solid #F2DCBC",
                    height: "1.7rem",
                    width: "50%",
                    backgroundColor: "#F2DCBC",
                    borderRadius: "6px",
                  }}
                >
                  <p
                    className="wff"
                    style={{
                      fontSize: "10px",
                      color: "#CF8618",
                      margin: "0.3rem 0.5rem",
                    }}
                  >
                    Graphic Designer
                  </p>
                </div>
                <br></br>
                <p>Chennai, India</p>
                <p>Govarthini1994@gmail.com</p>
                <p>01-01-2023</p>
                <p>500,000</p>
                <div className="afa d-flex">
                  <div className="afa d-flex">
                    <BsFileEarmarkTextFill style={{ color: "#00823B",fontSize:"22px" }} />
                    <p
                      className="asff"
                      style={{
                        fontSize: "14px",
                        margin: "0rem 1rem",
                        color: "#00823B",
                      }}
                    >
                      View Offer Letter
                    </p>
                  </div>
                   <Button
                    variant="danger"
                    style={{
                      fontSize: "14px",
                      height: "2rem",
                      margin: "-0.4rem 1rem",
                      width:"31%"
                    }}
                  >
                    Delete
                  </Button>
                </div>
                <br></br>
                <div
                  className="asfaf"
                  // style={{
                  //   border: "1px solid #ffff",
                  //   height: "2rem",
                  //   width: "100%",
                  //   backgroundColor: "#ffff",
                  //   borderRadius: "6px",
                  // }}
                >
                  <p
                    className="sdgsg"
                    style={{
                      fontSize: "12px",
                      // textAlign: "center",
                      color: "#00A5E1",
                      margin: "0.4rem 0rem",
                    }}
                  >
                    <b>Fresher</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-3">
            <div
              className="afaf"
              style={{
                border: "1px solid #C3D0DC",
                width: "100%",
                height: "22rem",
                backgroundColor: "#F8FCFF",
              }}
            >
              <div className="fsgg" style={{ margin: "0.3rem 1.5rem" }}>
                <p>
                  <b>Govarthini</b>
                </p>
                <div
                  className="asfa"
                  style={{
                    border: "1px solid #F2DCBC",
                    height: "1.7rem",
                    width: "50%",
                    backgroundColor: "#F2DCBC",
                    borderRadius: "6px",
                  }}
                >
                  <p
                    className="wff"
                    style={{
                      fontSize: "10px",
                      color: "#CF8618",
                      margin: "0.3rem 0.5rem",
                    }}
                  >
                    Graphic Designer
                  </p>
                </div>
                <br></br>
                <p>Chennai, India</p>
                <p>Govarthini1994@gmail.com</p>
                <p>01-01-2023</p>
                <p>500,000</p>
                <div className="afa d-flex">
                  <div className="afa d-flex">
                    <BsFileEarmarkTextFill style={{ color: "#00823B",fontSize:"22px" }} />
                    <p
                      className="asff"
                      style={{
                        fontSize: "14px",
                        margin: "0rem 1rem",
                        color: "#00823B",
                      }}
                    >
                      View Offer Letter
                    </p>
                  </div>
                   <Button
                    variant="danger"
                    style={{
                      fontSize: "14px",
                      height: "2rem",
                      margin: "-0.4rem 1rem",
                      width:"31%"
                    }}
                  >
                    Delete
                  </Button>
                </div>
                <br></br>
                <div
                  className="asfaf"
                  // style={{
                  //   border: "1px solid #E2F0E8",
                  //   height: "2rem",
                  //   width: "100%",
                  //   backgroundColor: "#E2F0E8",
                  //   borderRadius: "6px",
                  // }}
                >
                  <p
                    className="sdgsg"
                    style={{
                      fontSize: "12px",
                      // textAlign: "center",
                      color: "#DB7E00",
                      margin: "0.4rem 0rem",
                    }}
                  >
                    <b>Not on Clearhire</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
         
         
        </div>
      </div>
    <div className="afsdf" style={{margin:"2rem 0rem"}}>
    <Footer/>
    </div>
    </div>
  );
}

export default SentApprovals;
