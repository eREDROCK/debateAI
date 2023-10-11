import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Audience from "../../components/Audience/Audience";
import Cylinder from "../../components/Cylinder/Cylinder";
import PlayerAI from "../../components/Player-AI-box/Player-AI-box";
import ThemeBox from "../../components/ThemeBox/ThemeBox";
import ForAgainstBox from "../../components/ForAgainstBox/ForAgainstBox";
import ChatScreen from "../../components/Chat-Screen/ChatScreen";
import axios from "axios";
import Image from "next/image";
import useSound from "use-sound";

//rolo{1} Ai 左　{2}ユーザ　右

const BodyDiv = styled.div`
  position: fixed;
  background: linear-gradient(200deg, #3e1d85 0%, #ff8a66 100%);
  /* background-image: url("/image/BackGround.png"); // 背景画像の相対パスを指定 */
  /* background-image: url("/image/TopBackGround.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; // 画像をコンテナに合わせて拡大縮小 */

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .bgimg {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    -ms-flex-direction: row;
    flex-direction: row;
    background-image: url("/image/TopBackGround.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .bg {
    animation: slide 10s ease-in-out infinite alternate;
    background: linear-gradient(-90deg, #aa0000 50%, #0000aa 50%);
    bottom: 0;
    left: -50%;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
  }

  .bg2 {
    /*  animation-direction:alternate-reverse;
        animation-duration:4s;*/
  }

  .bg3 {
    /*animation-duration:5s;*/
  }

  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(25%);
    }
  }

  .Player {
    display: flex;
    list-style: none;
    transform: translateY(10px);
    justify-content: space-evenly;
    padding-inline-start: 0;
  }
  .AI {
    max-width: 400px;
    max-height: 400px;
  }
  .User {
    max-width: 400px;
    max-height: 400px;
    margin-right: 40px;
  }

  .AllAudi {
    display: flex;
    transform: translateY(0px);
  }
  .AudiA {
    display: flex;
    list-style: none;
    justify-content: space-between;
    padding-inline-start: 0;
    width: 60%;
  }
  .AudiB {
    display: flex;
    list-style: none;
    justify-content: space-between;
    padding-inline-start: 0;
    width: 60%;
  }
`;

const App = () => {
  const initialValues = {
    message: [{ role: "user", content: "" }],
    title: "お題",
    flag: true,
    defeatedstate: false,
  };

  const [formValues, setFromValues] = useState(initialValues);
  const [isInputting, setIsInputting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  var defeatedSate = false;

  const [play, { stop }] = useSound("/sound/Electric_Shine.mp3", {
    volume: 0.3,
    loop: true,
  });
  const handlePlay = () => {
    console.log("bgm play");
    play();
  };
  const handleStop = () => {
    stop();
  };

  const onFormSubmit = (message) => {
    //お題，賛成派の変数受け取り
    setFromValues(message);
    defeatedSate = message.defeatedstate;
  };

  const handleInput = () => {
    setIsInputting(true);
    // console.log("inputting", bool);
  };
  // formに入力も何もしていないときに呼び出す関数
  const handleInputBlur = () => {
    setIsInputting(false);
  };

  return (
    <BodyDiv>
      <div className="bgimg">
        <div>
          <button onClick={handlePlay}>Play Sound</button>
          <button onClick={handleStop}>Stop Sound</button>
        </div>
        <ul className="Player">
          <div>
            <ForAgainstBox theme={formValues.title} flag={!formValues.flag} />
            <li className="AI">
              <PlayerAI
                role={1}
                isInputting={isInputting}
                isLoading={isLoading}
                defeatedState={formValues.defeatedstate}
              />{" "}
            </li>
          </div>
          <ChatScreen
            onFormSubmit={onFormSubmit}
            handleInput={handleInput}
            handleInputBlur={handleInputBlur}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
          <div>
            <ForAgainstBox theme={formValues.title} flag={formValues.flag} />
            <li className="User">
              <PlayerAI
                role={0}
                isInputting={isInputting}
                isLoading={isLoading}
                defeatedState={formValues.defeatedstate}
              />{" "}
            </li>
          </div>
        </ul>
        <ThemeBox theme={formValues.title} flag={!formValues.flag} />
        <ul className="AllAudi">
          <ul className="AudiA">
            <li>
              <Audience
                role={0}
                isInputting={isInputting}
                isLoading={isLoading}
              />
            </li>
            <li>
              <Audience
                role={1}
                isInputting={isInputting}
                isLoading={isLoading}
              />
            </li>
            <li>
              <Audience
                role={2}
                isInputting={isInputting}
                isLoading={isLoading}
              />
            </li>
          </ul>
          <ul className="AudiB">
            <li>
              <Audience
                role={0}
                isInputting={isInputting}
                isLoading={isLoading}
              />
            </li>
            <li>
              <Audience
                role={1}
                isInputting={isInputting}
                isLoading={isLoading}
              />
            </li>
            <li>
              <Audience
                role={2}
                isInputting={isInputting}
                isLoading={isLoading}
              />
            </li>
          </ul>
        </ul>
      </div>
    </BodyDiv>
  );
};

export default App;
