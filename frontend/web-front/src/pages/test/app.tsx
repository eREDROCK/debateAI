import React, { FC } from "react";
import ExplainBox from "../../components/Explain-box/explain-box";
import Cylinder from "../../components/Cylinder/Cylinder";

export default (() => {
  return (
    <div>
      <ExplainBox />
      <Cylinder />
      <img src={`${process.env.PUBLIC_URL}/image/台座.png`} alt="" />
    </div>
  );
}) as FC;
