import React from "react";
import styled from "styled-components";
import UserNameBox from "../../components/Username-box/UserNameBox";
import TitleBox from "../../components/Title-box/Title-box";
import ExplainBox from "../../components/Explain-box/explain-box";


const BodyDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #CC66FF;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #CC66FF;
  background-image: 
    linear-gradient( 
      90deg, 
      #000000F0, 
      #CC66FF var(--lpos), 
      #000000C0),
    repeating-linear-gradient(
      45deg,
      rgba(0,0,0,0.8),
      rgba(0,0,0,0.8) 100px,
      transparent 0px,
      transparent 200px
    ),
    repeating-linear-gradient(
      -45deg,
      rgba(0,0,0,0.5),
      rgba(0,0,0,0.5) 100px,
      transparent 0px,
      transparent 200px
    );
  background-size: 100%;
  animation: move 6s infinite both;

@keyframes move{
  0% {
    --lpos: 0%;
  }
  25% {
    --lpos: 75%;
  }
  50% {
    --lpos: 50%;
  }
  75% {
    --lpos: 25%;
  }
  100% {
    --lpos: 100%;
  }
}

  h1 {
    margin: auto;
    margin-top: 50px;
  }

  .FlexBox {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
  }

`

const App = () => {
  return (
    <BodyDiv>
      <h1><TitleBox /></h1>
      <div className="FlexBox">
        <UserNameBox  />
        <ExplainBox />        
      </div>

    </BodyDiv>
  );
};

export default App;
