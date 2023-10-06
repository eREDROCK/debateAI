import React, { useState } from "react";
import styled from "styled-components";

const SendDiv = styled.div`
  .InputText {
    width: 600px;
    height: 50px;
    bottom: 10px;
    border-radius: 16px;
    border: solid 0.5px black;
    font-size: 20px;
    z-index: 2;
  }
`;

function SendText({ onTextSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //再ロードされなくなる
    onTextSubmit(text);
    setText("");
  };

  return (
    <SendDiv>
      <form onSubmit={handleSubmit}>
        <input
          className="InputText"
          type="text"
          placeholder="お考えを述べてください （Enterキー押す）"
          onChange={(e) => setText(e.target.value)}
          value={text} //inputの中身
        />
      </form>
    </SendDiv>
  );
}

export default SendText;
