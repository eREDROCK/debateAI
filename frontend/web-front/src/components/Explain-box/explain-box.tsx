import { useEffect, useState } from "react";
import styled from "styled-components";
import { InstructData } from "./InstructData";

const BoxDiv = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  height: auto;
  padding: 15px 0px 15px 0px;
  border: solid 3px #999999;
  border-radius: 40px; /* 枠を角丸にする */

  font-size: 24px;
  font-family: "游ゴシック";

  li {
    /* display: inline-block; */
    list-style: none;
    padding: 0px 0px 0px 0px;
  }
`;

const CardDiv = styled.div`
  width: 80%;
  height: 300px;

  margin-left: auto; /* 左の余白 */
  margin-right: auto; /* 右の余白 */
  margin-top: 10px; /* 上の余白 */
  margin-bottom: 5px; /* 下の余白 */
`;

const ExplainBox = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((oldCount) => {
        if (oldCount < 3) return oldCount + 1;
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <BoxDiv>
      <li>プレイ方法</li>
      <CardDiv className="item">
        <li>{InstructData[count].image}</li>
        <li>{InstructData[count].instruction}</li>
        <li>{count}</li>
      </CardDiv>
    </BoxDiv>
  );
};

export default ExplainBox;
