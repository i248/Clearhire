import React from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="dwdatu"
      style={{
        border: "1px solid #C8C8C8",
        width: "100%",
        height: "130rem",
        margin: "0rem 0rem",
        backgroundColor: "#F5F7F9 ",
      }}
    >
      <Header />
      <div className="fsfc"style={{margin:"8rem 0rem"}}>
        
        <div className="row">
          <div className="col-md-6">
            <h1 className="efehk" style={{margin:"0rem 7rem" }}>
              <b>
                Eprehenderit in{" "}
                <span style={{ color: "#00823B" }}>
                  voluptate
                  <br /> velit
                </span>{" "}
                esse cillum auptate
              </b>
            </h1>

            <div
              className="sfvvb"
              style={{
                margin: "0rem 7rem",
                textAlign: "justify",
                color: "#ACACAC",
              }}
            >
              <p className="sfsnx">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequ.
              </p>
            </div>
            <div className="sfaf d-flex" style={{ margin: "0rem 6rem" }}>
              <div
                className="fhpp"
                style={{
                  margin: "1rem 1rem",
                  border: "1px solid #00823B",
                  height: "4rem",
                  width: "30%",
                  backgroundColor: "#00823B",
                  color: "#FFFFFF",
                }}
              >
              <Link to="/welcomepage" style={{textDecoration:"none",color:"White"}}>
              <p
                  className="dsav1"
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                    margin: "1rem 0rem",
                  }}
                >
                  Login
                </p>
              </Link>
              </div>
              <div
                className="fhjmxvxvxv"
                style={{
                  margin: "1rem 1rem",
                  border: "1px solid #000000",
                  height: "4rem",
                  width: "30%",
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                }}
              >
            <Link to="/welcomeloginPage" style={{textDecoration:"none",color:"White"}}>
            <p
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                    margin: "1rem 0rem",
                  }}
                >
                  Signup
                </p>
            </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img className="hjhh"
              src="./image/Group 733@2x.png"
              style={{ height: "30rem", margin: "-5rem 0rem" }}
            />
          </div>
        </div>
      

       <div className="dfasffa" style={{margin:"6rem 0rem"}}>
       <div className="row" >
          <div className="col-md-6">
            <div className="efga" style={{ margin: "0rem 7rem" }}>
              <p className="sgd" style={{ fontSize: "30px" }}>
                About us
              </p>
              <h1>
                <b>
                  <span style={{ color: "#00823B" }}>voluptate  velit</span> esse
                  cillum auptate
                </b>
              </h1>
            </div>
          </div>
          <div className="col-md-6">
          
            <p className="fgqr" style={{ color: "#ACACAC",margin:"3rem 0rem" ,fontSize:"20px"}}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              <br /> aut odit aut fugit, sed quia consequuntur magni dolores
              <br /> eos qui ratione voluptatem sequ.
            </p>
          </div>
        </div>
       </div>
        <br></br>
        <br></br>
        <div className="conta56">
          <div className="row">
            <div className="col-md-4">
              <div
                className="eegg"
                style={{
                  border: "1px solid #FFFFFF",
                  height: "15rem",
                  width: "80%",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0px 0px 34px #00000012",
                  borderRadius: "25px",
                  opacity: "1",
                  margin: "0rem 6rem",
                }}
              >
                <div
                  className="rekm"
                  style={{
                    border: "1px solid #E2F0E8",
                    height: "3rem",
                    width: "18%",
                    backgroundColor: "#E2F0E8",
                    borderRadius: "10px",
                    opacity: "1",
                    margin: "1rem 1rem",
                  }}
                >
                  <img
                    src="./image/Icon feather-search@2x.png"
                    style={{ height: "30px", margin: "0.5rem 1rem" }}
                  />
                </div>
                <div className="dgshk" style={{ margin: "0rem 1rem" }}>
                  <h5>
                    <b>Voluptate velit esse cillum.</b>
                  </h5>
                  <p
                    className="fsjki"
                    style={{ fontSize: "15px", color: "#ACACAC" }}
                  >
                    Nemo enim ipsam voluptatem quia voluptas sit
                    <br /> aspernatur aut odit aut fugit, sed quia
                    <br /> consequuntur magni.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="eegg"
                style={{
                  border: "1px solid #FFFFFF",
                  height: "15rem",
                  width: "80%",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0px 0px 34px #00000012",
                  borderRadius: "25px",
                  opacity: "1",
                  margin: "0rem 3rem",
                }}
              >
                <div
                  className="rekm"
                  style={{
                    border: "1px solid #E2F0E8",
                    height: "3rem",
                    width: "18%",
                    backgroundColor: "#E2F0E8",
                    borderRadius: "10px",
                    opacity: "1",
                    margin: "1rem 1rem",
                  }}
                >
                  <img
                    src="./image/Icon material-chat-bubble@2x.png"
                    style={{ height: "30px", margin: "0.5rem 1rem" }}
                  />
                </div>
                <div className="dgshk" style={{ margin: "0rem 1rem" }}>
                  <h5>
                    <b>Voluptate velit esse cillum.</b>
                  </h5>
                  <p
                    className="fsjki"
                    style={{ fontSize: "15px", color: "#ACACAC" }}
                  >
                    Nemo enim ipsam voluptatem quia voluptas sit
                    <br /> aspernatur aut odit aut fugit, sed quia
                    <br /> consequuntur magni.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="eegg"
                style={{
                  border: "1px solid #FFFFFF",
                  height: "15rem",
                  width: "80%",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0px 0px 34px #00000012",
                  borderRadius: "25px",
                  opacity: "1",
                }}
              >
                <div
                  className="rekm"
                  style={{
                    border: "1px solid #E2F0E8",
                    height: "3rem",
                    width: "18%",
                    backgroundColor: "#E2F0E8",
                    borderRadius: "10px",
                    opacity: "1",
                    margin: "1rem 1rem",
                  }}
                >
                  <img
                    src="./image/Icon simple-wheniwork@2x.png"
                    style={{ height: "25px", margin: "0.5rem 1rem" }}
                  />
                </div>
                <div className="dgshk" style={{ margin: "0rem 1rem" }}>
                  <h5>
                    <b>Voluptate velit esse cillum.</b>
                  </h5>
                  <p
                    className="fsjki"
                    style={{ fontSize: "15px", color: "#ACACAC" }}
                  >
                    Nemo enim ipsam voluptatem quia voluptas sit
                    <br /> aspernatur aut odit aut fugit, sed quia
                    <br /> consequuntur magni.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
       <div className="asfsg" style={{margin:"7rem 0rem"}}>
       <div className="row">
          <div className="col-md-6">
            <img className="dfssgjkio"
              src="./image/Group 744@2x.png"
              style={{ width: "60%", margin: "0rem 7rem" }}
            />
          </div>
          <div className="col-md-6">
           
           <div className="hfhgfii" style={{margin:"4rem 0rem"}}>
           <p style={{fontSize:"30px"}}>About us</p>
            <h1>
              <b>
                <span style={{ color: "#00823B" }}>voluptate velit </span>esse{" "}
                <br /> cillum auptate
              </b>
            </h1>
            <p className="fghm" style={{ color: "#ACACAC" ,fontSize:"20px"}}>
              Nemo enim ipsam voluptatem quia voluptas sit
              <br /> aspernatur aut odit aut fugit, sed quia consequuntur
              <br /> magni dolores eos qui ratione voluptatem sequ.
            </p>
           </div>
          </div>
        </div>
       </div>
        <div
          className="ggrykk"
          style={{
            border: "1px solid #C8C8C8",
            width: "100%",
            height: "35rem",
            margin: "0rem 0rem",
            backgroundColor: "#000000 ",
            color: "white",
          }}
        >
          <div className="row">
            <div className="col-md-6">
              <div className="ehj" style={{ margin: "10rem 5rem" }}>
                <h1>
                  <b>
                    Eprehenderit in
                    <span style={{ color: "#00823B" }}>
                      {" "}
                      voluptate velit
                    </span>{" "}
                    esse cillum auptate
                  </b>
                </h1>
                <p className="hkkyk" style={{ color: "#FFFFFF" ,fontSize:"20px"}}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequ.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="fhjj"
                style={{
                  border: "1px solid #707070",
                  width: "65%",
                  height: "29rem",
                  margin: "3rem 0rem",
                  backgroundColor: "#FFFFFF",
                  color: "black",
                }}
              >
                <br></br>
                <br></br>

                <div className="dgdhd" style={{ textAlign: "center" }}>
                  <p className="dgd" style={{fontSize:"22px"}}>
                    Login to your account
                  </p>

                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "45ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Email address"
                      variant="standard"
                    />
                  </Box>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "45ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Password"
                      variant="standard"
                    />
                  </Box>
                  <p style={{ fontSize: "15px",margin:"1rem 0rem" }}>
                    <b>
                      Forgot password?
                      <span style={{ color: "#50B855", fontSize: "15px" }}>
                        {" "}
                        click here
                      </span>
                    </b>
                  </p>
                  <div
                    className="fsg"
                    style={{
                      border: "1px solid #707070",
                      width: "80%",
                      height: "3rem",
                      margin: "2rem 4rem",
                      backgroundColor: "#00823B",
                      color: "white",
                    }}
                  >
                    <p className="qwdqw5" style={{margin:"0rem 0rem",fontSize:"25px"}}>Login</p>
                  </div>
        
                  <p style={{ fontSize: "15px", margin:"0.5rem 0rem" }}>
                    <b>
                    Don't have an account Signup
                      <span style={{ color: "#50B855", fontSize: "15px" }}>
                        {" "}
                        click here
                      </span>
                    </b>
                  </p>
                </div>
              </div>
        
            </div>
          </div>
        </div>
     <div className="eff2" style={{margin:"0rem 0rem"}}>
     <Footer/>
     </div>
      </div>
     
    </div>
  );
}

export default Home;
