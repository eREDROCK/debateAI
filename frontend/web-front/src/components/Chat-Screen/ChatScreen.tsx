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
  /* background-color: #93aad4; */
  background: linear-gradient(#9b9b9b, rgba(0, 0, 0, 0));
  overflow: scroll;
  /* border: solid 2px; */
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
    /* display: flex; */
    overflow: auto;

    padding-bottom: 10px;
    padding-top: 10px;
    width: 600px;
    height: 550px;
    justify-content: flex-start; /* 水平方向左寄せ */
  }

  .txts {
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    /* margin-top: 70%; */
    padding-bottom: 10px;
    justify-content: flex-start;
    /* flex-direction: column; */
    overflow-wrap: break-word;
    color: #ffffff;
  }
  .txts_r {
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    /* margin-top: 70%; */
    padding-bottom: 10px;
    justify-content: flex-end;
    /* flex-direction: column; */
    overflow-wrap: break-word;
    color: #ffffff;
  }

  .txts p {
    display: inline-block;
    position: relative;
    margin: 10px 0 0 5px;
    padding: 8px;
    max-width: 80%;
    border-radius: 12px;
    background: rgba(97, 63, 246, 0.8);
    font-size: 15px;
    text-align: left;

    justify-content: flex-start;
  }

  .txts_r p {
    display: inline-block;
    position: relative;
    margin: 10px 0 5px 5px;
    padding: 8px;
    max-width: 80%;
    border-radius: 12px;
    background: rgba(241, 74, 74, 0.8);
    font-size: 15px;
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
    border-right: 18px solid rgba(97, 63, 246, 0.8);
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
  }

  .txts_r p:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 3px;
    right: -19px;
    border: 8px solid transparent;
    border-right: 18px solid rgba(241, 74, 74, 0.8);
    -webkit-transform: rotate(145deg); /* 180度回転 */
    transform: rotate(145deg); /* 180度回転 */
  }
`;

function ChatScreen() {
  const initialValues = {
    message: [],
    title: "たけのこの里よりもきのこの山のほうが美味しい",
    flag: true,
  };

  const [texts, setTexts] = useState([]);
  const [names, setNames] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setTexts([]);
    setNames([]);
  }, []);

  const onTextSubmit = (newText) => {
    setTexts((prevTexts) => [...prevTexts, newText]);
    console.log(texts);
    increment();
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

  const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target);
    const { name, value } = e.target;
    const newMessage = { role: "user", content: value };

    setFormValues((prevFormValues) => {
      const updatedMessages = [...prevFormValues.message]; // 既存のメッセージをコピー
      const lastMessageIndex = updatedMessages.length - 1;

      // 最後のメッセージの content を更新
      updatedMessages[lastMessageIndex].content = value;

      return {
        ...prevFormValues,
        message: updatedMessages, // 更新されたメッセージをセット
      };
    });
    console.log(formValues);
  };

  return (
    <div>
      <OutLineDiv>
        <BodyDiv>
          <div className="styledtxts">
            <div style={{ padding: "300px 0 0 0" }}></div>
            {texts.map((text, index) => (
              <div>
                {text["role"] === "assistant" ? (
                  <div key={index} className="txts">
                    <p>{text["content"]}</p>
                  </div>
                ) : (
                  <div key={index} className="txts_r">
                    <p>{text["content"]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </BodyDiv>
      </OutLineDiv>
      <SendText onTextSubmit={onTextSubmit} />
    </div>
  );
}

export default ChatScreen;
