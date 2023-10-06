import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";

const BodyDiv = styled.div`
  /*吹き出し*/
  .balloon_l,
  .balloon_r {
    margin: 30px 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start; /*縦位置を上揃え*/
    /*   align-items: center; */ /*縦位置を真ん中揃え*/
  }
  .balloon_r {
    justify-content: flex-end;
  }
  .faceicon img {
    width: 80px; /*任意のサイズ*/
    height: auto;
  }
  .balloon_r .faceicon {
    margin-left: 25px;
  }
  .balloon_l .faceicon {
    margin-right: 25px;
  }
  .balloon_r .faceicon {
    order: 2 !important;
  }
  .says {
    max-width: 500px; /*最大幅は任意*/
    display: flex;
    flex-wrap: wrap;
    position: relative;
    padding: 17px 13px 15px 18px;
    border-radius: 12px;
    background: #99dddd; /*色は任意*/
    box-sizing: border-box;
    margin: 0 !important;
    line-height: 1.5;
    /*   align-items: center; */
  }
  .says p {
    margin: 8px 0 0 !important;
  }
  .says p:first-child {
    margin-top: 0 !important;
  }
  .says:after {
    content: "";
    position: absolute;
    border: 10px solid transparent;
    /*   margin-top:-3px;  */
  }
  .balloon_l .says:after {
    left: -26px;
    border-right: 22px solid #99dddd;
  }
  .balloon_r .says:after {
    right: -26px;
    border-left: 22px solid #99dddd;
  }
`;

type ChatLog = {
  key: string;
  name: string;
  msg: string;
  date: Date;
};

/**
 * UNIX TIME => hh:mm
 **/
function getStrTime(time: any) {
  let t = new Date(time);
  return (
    `${t.getHours()}`.padStart(2, "0") +
    ":" +
    `${t.getMinutes()}`.padStart(2, "0")
  );
}

/**
 * チャットコンポーネント(Line風)
 */
const Chat1: React.FC = () => {
  const [chatLogs, setChatLogs] = useState<ChatLog[]>([]);
  const [msg, setMsg] = useState("");
  const [texts, setTexts] = useState([]);
  const [names, setNames] = useState([]);
  const [text, setText] = useState("");
  const onTextSubmit = (newText) => {
    setTexts((prevTexts) => [...prevTexts, newText]);
  };

  return (
    <>
      {/* チャットログ */}
      <BodyDiv>
        {chatLogs.map((item, i) => (
          <div className={"balloon_r"} key={item.key}>
            <div style={{ marginLeft: "3px" }}>
              {item.name}
              <p className="says">{item.msg}</p>
            </div>
          </div>
        ))}
      </BodyDiv>

      {/* メッセージ入力 */}
      <form
        className="chatform"
        onSubmit={(e) => {
          onTextSubmit(e);
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
      </form>
    </>
  );
};

export default Chat1;
