import React from "react";
import styled from "styled-components";

const BoxDiv = styled.div`
  display: inline-block;
  height: 100%;
  width: auto;
  margin-left: 240px;
  margin-top: 70px;
  padding: 10px 0px 0px 10px;
  border: solid 1px #999999;

  li {
    /* display: inline-block; */
    list-style: none;
    padding: 0px 0px 0px 0px;
  }
  .container {
    width: 150px;
    margin: 5px;
    border: solid 1px #999999;
  }

  .item {
    width: 100px;
    margin: 5px;
    border: solid 1px #999999;
  }
`;

const ExplainBox = () => {
  return (
    <BoxDiv>
      <li>プレイ方法</li>
    </BoxDiv>
  );
};

export default ExplainBox;
