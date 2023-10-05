import React from "react";
import styled from "styled-components";


/*
const StyledTitle=styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=Ubuntu:wght@300&display=swap');
  position: relative;
  padding: 0.6em;
  background:linear-gradient(45deg, #12c2e9,#c471ed,#f64f59);/*グラデーションを定義*/
/*	background-size: 200% 200%;/*サイズを大きくひきのばす*/
/*	animation: bggradient 7s ease infinite;
  width: fit-content;
  border-radius: 10px;
  font-family: 'DotGothic16', sans-serif;
  font-family: 'Ubuntu', sans-serif;

  @keyframes bggradient{
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`
*/

const StyledTitle=styled.h1`
  position: relative;
  padding: 0.6em;
  width: fit-content;
  color: transparent;             /*文字を透明にする*/
  background-clip: text;          /*背景を文字で切り抜く*/
  font-size: 100px;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px white;
  background-image : linear-gradient(45deg, #12c2e9,#c471ed,#f64f59);
  background-size: 1200%; 
  animation: 4s linear 0s infinite alternate slide; 

  @keyframes slide { 
    from { background-position: 0% 0%; } 
    to { background-position: 100% 0%; }    /* 右から左へ移動するアニメーション */
}


`


const Title =()=>{
  return(
    <div>
      <StyledTitle>ディベートAIバトル</StyledTitle>
    </div>

  );
};


export default Title;

