import React from "react";
import styled from "styled-components";
import UserNameBox from "../../components/Username-box/UserNameBox";
import TitleBox from "../../components/Title-box/Title-box";
import ExplainBox from "../../components/Explain-box/explain-box";


const BodyDiv = styled.div`

border: none; 
position: fixed;
left: 0;
right: 0;
bottom: 0;
background: linear-gradient(200deg, #3399FF 0%, #6699FF 100%); 
background-attachment: fixed;
transition-property: background-image; 
transition-duration: 1s;
margin: 0;

.bgimg {
  
  -ms-flex-direction: row;
  flex-direction: row;
  background-image: url('/image/TopBackGround.png');
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: center;
 
}
   
  h1 {
   /* margin-top: 10px;*/
  }

  .FlexBox {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    transform: translateY(-100px);
  }
`

const App = () => {
  return (
    <BodyDiv>
    <div className="bgimg">
      <h1><TitleBox /></h1>
      <div className="FlexBox">
        <UserNameBox  />
        <ExplainBox />        
      </div>    
      </div>
    </BodyDiv>


  );
};

export default App;



/**
   position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .bg-icon {
    background-size: cover; // 画像をコンテナに合わせて拡大縮小
    display: inline-block;
    background-repeat: no-repeat;
    overflow: hidden;
    background-blend-mode: multiply;
    background-image: url('/image/TopBackGround.png');
    mask-image: url('/image/TopBackGround.png');
    -webkit-mask-image: url('/image/TopBackGround.png');
  }

  .item-1 {
    background-position: 0px -0px;
    mask-position-x: -0px;
    -webkit-mask-position-x: -0px;
  }

  .col-1 {
    background-color: #ffbe23;    
  }
 */