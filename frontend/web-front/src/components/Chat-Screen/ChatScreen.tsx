import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SendText from "./SendText";
import UserName from "../Username-box/UserNameBox";

const OutLineDiv = styled.div`
  /* position: fixed; */
  display: flex;
  align-items: flex-end;
  width: 600px;
  height: 550px;
  padding: 0px 10px 10px 10px;
  background-color: #93aad4;
  overflow: scroll;
  border: solid 2px black;
  border-radius: 20px;
`;

const BodyDiv = styled.div`
  /* position: static;
  display: flex; */

  z-index: 1;

  &:not(.txts) {
    /* border-radius: 20px; */
    z-index: 1; /* 自然数が大きいほど上に重なる relative-absolute-ab-ab...*/
  }

  .styledtxts {
    display: flex;
    overflow: auto;

    padding-bottom: 10px;
    width: 600px;
    height: 550px;
    justify-content: flex-start; /* 水平方向左寄せ */
  }

  .styledtxts_r {
    display: flex;
    overflow: auto;

    padding-bottom: 10px;
    width: 600px;
    height: 550px;
    justify-content: flex-end; /* 水平方向左寄せ */
    text-align: right;
  }

  .txts {
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 70%;
    padding-bottom: 10px;
    justify-content: flex-start;
    flex-direction: column;
    overflow-wrap: break-word;
    color: blue;
  }
  .txts_r {
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 70%;
    padding-bottom: 10px;
    justify-content: flex-end;
    flex-direction: column;
    float: right;
  }

  .txts p {
    display: inline-block;
    position: relative;
    margin: 10px 0 0 5px;
    padding: 8px;
    max-width: 200px;
    border-radius: 12px;
    background: #edf1ee;
    font-size: 26px;
    text-align: left;

    justify-content: flex-start;
  }

  .txts_r p {
    display: inline-block;
    position: relative;
    margin: 10px 0 0 5px;
    padding: 8px;
    max-width: 200px;
    border-radius: 12px;
    background: #edf1ee;
    font-size: 26px;
    text-align: left;
    justify-content: flex-end;
  }

  .txts p:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 3px;
    left: -19px;
    border: 8px solid transparent;
    border-right: 18px solid #edf1ee;
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
  }

  .txts_r p:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 3px;
    left: -19px;
    border: 8px solid transparent;
    border-right: 18px solid #edf1ee;
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
  }
`;

function ChatScreen() {
  const [texts, setTexts] = useState([]);
  const [names, setNames] = useState([]);
  useEffect(() => {
    setTexts([]);
    setNames([]);
  }, []);

  const onTextSubmit = (newText) => {
    setTexts((prevTexts) => [...prevTexts, newText]);
  };

  const scrollToBottom = () => {
    const scrollContainer = document.querySelector(".styledtxts");
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [texts]);

  return (
    <div>
      <OutLineDiv>
        <BodyDiv>
          <div className="styledtxts">
            <div className="txts">
              {texts.map((text, index) => (
                <div key={index}>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </BodyDiv>
      </OutLineDiv>
      <SendText onTextSubmit={onTextSubmit} />
    </div>
  );
}

export default ChatScreen;
