import { style } from "@mui/system";
import React from "react";

const CircleprogressBar = ({ percentage, circleWidth }) => {
  const radius = 25;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={"0 0 ${circleWidth} ${circleWidth}"}
        style={{    margin: "-2rem -3rem",}}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="1px"
          r={radius}
          className="circle-background"
          style={{
            stroke: "#FFECE5",
            backgroundColor: "#FFECE5",
          }}
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="1px"
          r={radius}
          className="circle-progress"
          style={{
            fill: "none",
            stroke: "#ddd",
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            stroke: "#FFECE5",
            backgroundColor: "#FFECE5",
            margin: "0rem 0rem",
          }}
          transform={"rotate(-90 ${circleWidth / 2} ${circleWidth / 2})"}
        />
        <text
          x="50%"
          y="50%"
          dy="0.5em"
          textAnchor="middle"
          className="circle-text"
          style={{ fontSize: "12px", stroke: "#E56839" }}
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircleprogressBar;
