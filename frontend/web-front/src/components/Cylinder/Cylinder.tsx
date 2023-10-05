import React from "react";
import styled from "styled-components";
import Image from "next/image";
import LocalImage from "../../../public/image/台座.png";

const CylinderDiv = styled.div`
  .cylinder-3 {
    width: 80%;
    height: 20px;
    position: relative;
    background: #ffa07a;
  }

  .cylinder-3::before {
    content: "";
    width: 100%;
    height: 10px;
    position: absolute;
    top: -5px;
    border-radius: 50%;
    background: #ff4500;
  }

  .cylinder-3::after {
    content: "";
    width: 100%;
    height: 10px;
    position: absolute;
    top: 15px;
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
      <Image src={LocalImage} alt="" layout="responsive" sizes="50%" />
      <Image
        src="/image/台座.png"
        layout="responsive"
        sizes="50%"
        alt="none"
        width={100}
        height={100}
      />
    </div>
  );
};
export default Cylinder;
