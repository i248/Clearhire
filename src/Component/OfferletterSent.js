import React from "react";
import Footer from "./Footer";
import Header2 from "./Header2";
import Header4 from "./Header4";
function OfferletterSent() {
  return (
    <div className="jbjjjjh">
      <div
        className="ef"
        style={{
          border: "1px solid #C8C8C8",
          width: "100%",
          height: "44rem",
          // margin: "4rem 12rem",
          backgroundColor: "#F5F7F9 ",
        }}
      >
        <Header4 />
        <div className="ckjhkh" style={{ margin: "10rem 0rem " }}>
          <div className="fsf">
            <img
              className="evb"
              src="./image/Check.svg"
              style={{ margin: "1rem 45rem ", height: "83px" }}
            />

            <h2 className="ssa" style={{ textAlign: "center" }}>
              Your offer letter is sent
              <br /> to the new recruit
            </h2>
            <p style={{ textAlign: "center",fontSize:"20px" }}>
              Once they confirm they will be added
              <br /> to your employee's list
            </p>
          </div>
        </div>

        <div className="daaafaf" style={{ margin: "2rem 0rem" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default OfferletterSent;
