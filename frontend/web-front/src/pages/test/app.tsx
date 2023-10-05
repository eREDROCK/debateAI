import React, { FC } from "react";
import ExplainBox from "../../components/Explain-box/explain-box";
import Cylinder from "../../components/Cylinder/Cylinder";

export default (() => {
  return (
    <div>
      <ExplainBox />
      <Cylinder></Cylinder>
    </div>
  );
}) as FC;
