import React from "react";

function Footer() {
  return (
    <div className="ssyku">
      <div
        className="csc"
        style={{
          border: "1px solid #00000029",
          backgroundColor: "#FFFFFF",
          height: "4rem",
          width: "100%",
        }}
      >
        <div className="sd">
          <div className="ppo d-flex justify-content-center">
            <p className="dd" style={{ margin: "1rem 1rem",fontSize:"20px" }}>
              About
            </p>
            <p className="dd" style={{ margin: "1rem 1rem",fontSize:"20px" }}>
              Careers
            </p>
            <p className="dd" style={{ margin: "1rem 1rem",fontSize:"20px" }}>
              Privacy
            </p>
            <p className="dd" style={{ margin: "1rem 1rem",fontSize:"20px" }}>
              Cookies
            </p>
            <p className="dd" style={{ margin: "1rem 1rem",fontSize:"20px" }}>
              Terms
            </p>
            <p className="dd" style={{ margin: "1rem 1rem",fontSize:"20px" }}>
              Help
            </p>
            <p className="dd" style={{ margin: "1rem 1rem",fontSize:"20px" }}>
              Feedback
            </p>
            <p className="dd" style={{ margin: "1rem 8rem",fontSize:"20px" }}>
              Copyright © clearhire
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
