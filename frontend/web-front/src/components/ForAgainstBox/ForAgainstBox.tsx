import React from "react";
import styled from "styled-components";

const BoxDiv = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  height: auto;
  padding: 15px 0px 15px 0px;
  border: solid 3px #999999;
  border-radius: 40px; /* 枠を角丸にする */

  .title {
    /* display: inline-block; */
    font-size: 35px;
    font-family: "游ゴシック";
    color: #ffffff;

    list-style: none;
    padding: 0px 0px 0px 0px;
  }
  .flag {
    display: inline-block;
    font-size: 40px;
    font-family: "游ゴシック";
    color: #ffffff;

    list-style: none;
    padding: 0px 0px 0px 0px;
  }
`;

// テーマと賛成反対を表示するコンポーネント
const ForAgainstBox = (props: { theme; flag }) => {
  var ForAgainst = "";
  if (props.flag === true) {
    ForAgainst = "賛成派";
  } else {
    ForAgainst = "反対派";
  }

  return (
    <BoxDiv>
      {/* <li className="title">{props.theme}</li> */}
      <li className="flag">{ForAgainst}</li>
    </BoxDiv>
  );
};
export default ForAgainstBox;
