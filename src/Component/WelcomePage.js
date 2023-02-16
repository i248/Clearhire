import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function WelcomePage() {
  return (
    <div className="ddsgg">
      <div
        className="gdgvc"
        style={{
            border: "1px solid #C8C8C8",
            width: "75%",
            height: "40rem",
            margin: "4rem 12rem",
            backgroundColor: "#F5F7F9 ",
          }}
      >
        <Header/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="safsdgh" style={{textAlign:"center"}}>
            <h2>Welcome to <span style={{color:"#00823B"}}>clearhire</span></h2>
            <p>clearhire helps you find that best employee<br/> you've been looking all along</p>
            <br></br>
            <br></br>
            <div className="asfsnm" style={{border:"1px solid #00000014", width:"30%",height:"3rem", margin:"0rem 25rem"}}>
         <div className="fsshnz d-flex" style={{fontSize:"12px",margin:"0rem 4rem"}}>
         <img src="./image/Group 545.svg" style={{height:"20px",margin:"1rem 0.7rem"}}/>
            <p className="fet" style={{margin:"1rem 0rem"}}><b>CONTINUE WITH LINKEDIN</b></p>
         </div>
            </div>
            <br></br>
            <div className="asfsnm" style={{border:"1px solid #00000014", width:"30%",height:"3rem", margin:"0rem 25rem"}}>
         <div className="fsshnz d-flex" style={{fontSize:"12px",margin:"0rem 4rem"}}>
         <img src="./image/Icon material-mail-outline.svg" style={{height:"20px",margin:"1rem 0.7rem"}}/>
            <p className="fet" style={{margin:"1rem 0rem"}}><b>CONTINUE WITH E-MAIL</b></p>
         </div>
            </div>
        </div>
     <div className="asfas" style={{margin:"8rem 0rem"}}>
     <Footer/>
     </div>
      </div>
    </div>
  );
}

export default WelcomePage;
