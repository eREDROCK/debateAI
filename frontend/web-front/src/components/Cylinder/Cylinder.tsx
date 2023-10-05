import React from "react";
import styled from "styled-components";

const CylinderDiv = styled.div`
  .cylinder-3 {
    width: 100px;
    height: 150px;
    position: relative;
    background: #ffa07a;
  }

  .cylinder-3::before {
    content: "";
    width: 100px;
    height: 10px;
    position: absolute;
    top: -5px;
    border-radius: 50%;
    background: #ff4500;
  }

  .cylinder-3::after {
    content: "";
    width: 100px;
    height: 10px;
    position: absolute;
    top: 145px;
    border-radius: 50%;
    background: #ffa07a;
  }
`;

const Cylinder = () => {
  return (
    <div>
      <CylinderDiv>
        <div className="cylinder-1"></div>
        <div className="cylinder-2"></div>
        <div className="cylinder-3"></div>
      </CylinderDiv>
    </div>
  );
};
export default Cylinder;
