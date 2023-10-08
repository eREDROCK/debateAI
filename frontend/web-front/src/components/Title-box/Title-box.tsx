import React from "react";
import styled from "styled-components";

const StyledTitle=styled.h1`
  position: relative;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  color: transparent;             /*文字を透明にする*/
  background-clip: text;          /*背景を文字で切り抜く*/
  font-size: 140px;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px white;
  background-image : linear-gradient(45deg, #12c2e9,#c471ed,#f64f59);
  background-size: 1200%; 
  animation: 4s linear 0s infinite alternate slide; 

  @keyframes slide { 
    from { background-position: 0% 0%; } 
    to { background-position: 100% 0%; }    /* 右から左へ移動するアニメーション */
  }

  .subtitle {
    transform: translateY(-30px);
    font-size: 60px;
  }

  .ul {
    list-style: none;
    margin-block-start: 0.6em;
    margin-block-end: 0.6em;
  }

`

const Title =()=>{
  return(
    <div>
      <StyledTitle>
        <ul>
          <li className="title">DaBぇる</li>
          <li className="subtitle">～Debate AI Battle～</li>
        </ul>
        
      </StyledTitle>
    </div>

  );
};


export default Title;

