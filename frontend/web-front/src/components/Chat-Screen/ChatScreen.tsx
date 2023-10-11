import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import SendText from "./SendText";
import UserName from "../Username-box/UserNameBox";

const AllDiv = styled.div`
  /* position: fixed; */
  display: inline-flexbox;
  min-width: 500px;
`;

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
  overflow-x: hidden;
  /* border: solid 2px; */
  border-radius: 20px;
`;

const LoadingAnimation = styled.div`
  .loader,
  .loader:before,
  .loader:after {
    border-radius: 50%;
    width: 10px; /* フォントサイズと同じサイズに設定 */
    height: 10px; /* フォントサイズと同じサイズに設定 */
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
  }
  .loader {
    color: #ffffff;
    font-size: 19px;
    /* margin: auto; */
    /* position: relative; */
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    top: 0;
  }
  .loader:before {
    left: -1.3em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 1.3em;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 1.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
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
    font-size: 24px;
    text-align: left;
    justify-content: flex-start;
    white-space: normal; /* または break-spaces */
    word-wrap: break-word;
  }

  .txts_r p {
    display: inline-block;
    position: relative;
    margin: 10px 0 5px 5px;
    padding: 8px;
    max-width: 80%;
    border-radius: 12px;
    background: rgba(241, 74, 74, 0.8);
    font-size: 24px;
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

function ChatScreen({
  onFormSubmit,
  handleInput,
  handleInputBlur,
  setIsLoading,
  isLoading,
}) {
  const initialValues = {
    message: [],
    title: "たけのこの里よりもきのこの山のほうが美味しい",
    flag: true,
  };

  const [texts, setTexts] = useState([]);
  //   const [names, setNames] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);
  const [checkStartGame, setCheckStartGame] = useState(true); //ゲームが一番最初に開始したかチェックする開始
  const [checkJudgeGame, setCheckJudgeGame] = useState(false); //ゲームが一番最初に開始したかチェックする開始
  //   const [animationCompleteCheck, setAnimationCompleteCheck] = useState(false);
  //   onFormSubmit(formValues);

  useEffect(() => {
    setTexts([]);
    // setNames([]);
  }, []);

  const onTextSubmit = (newText) => {
    // メッセージを追加
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

  const TypingAnimation = ({ text }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationComplete, setAnimationComplete] = useState(false);
    // setAnimationCompleteCheck(false);

    useEffect(() => {
      if (animationComplete) {
        // アニメーションが完了したらスクロールを一番下に移動
        scrollToBottom();
        return; // アニメーションが完了したら何も表示しない
      }

      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);

          // スクロールを一番下に移動
          scrollToBottom();
        } else {
          clearInterval(typingInterval);
          setAnimationComplete(true); // アニメーションが完了したことをマーク
          //   setAnimationCompleteCheck(true);
        }
      }, 80); // 100ミリ秒ごとに1文字ずつ表示

      return () => {
        clearInterval(typingInterval);
      };
    }, [currentIndex, text, animationComplete]);

    return <div>{animationComplete ? text : displayText}</div>;
  };

  useEffect(() => {
    // コンポーネントがマウントされたときに実行される処理
    console.log("game start");
    if (checkStartGame) {
      onTextSubmit({
        role: "assistant",
        content:
          "DaBぇるへようこそ! ディベートをする前にまず最初にお題を決めましょう。 お題は自由に決めることができます。また、「ランダム」と入力すると自動でお題を決めることができます。お題を決めたらあなたは肯定派として意見をしてください。それではディベートを始めましょう!",
      });

      setCheckStartGame(false); // ゲームが開始されたことをマーク
    }
  }, [checkStartGame]); // 空の依存配列を渡すことで、マウント時の一度だけ実行されます

  useEffect(() => {
    // コンポーネントがマウントされたときに実行される処理
    console.log("judge log  start");
    if (checkJudgeGame) {
      onTextSubmit({
        role: "assistant",
        content:
          "そこまで！今からAIによるジャッジを行います。しばらくお待ち下さい。",
      });

      setCheckJudgeGame(false); // ジャッジを行ったことをマーク
    }
  }, [checkJudgeGame]);

  return (
    <AllDiv>
      <OutLineDiv>
        <BodyDiv>
          <div className="styledtxts">
            <div style={{ padding: "300px 0 0 0" }}></div>
            {texts.map((text, index) => (
              <div>
                {text["role"] === "assistant" ? (
                  <div key={index} className="txts">
                    <p>
                      {index === texts.length - 1 ? (
                        <TypingAnimation text={text["content"]} />
                      ) : (
                        <span>{text["content"]}</span>
                      )}
                    </p>
                  </div>
                ) : (
                  <div key={index} className="txts_r">
                    <p>{text["content"]}</p>
                  </div>
                )}
              </div>
            ))}
            {isLoading ? (
              <LoadingAnimation>
                <div className="txts">
                  <p>
                    <span className="loader"></span>loading...
                  </p>
                </div>
              </LoadingAnimation>
            ) : (
              <></>
            )}
          </div>
        </BodyDiv>
      </OutLineDiv>
      <SendText
        onTextSubmit={onTextSubmit}
        handleInput={handleInput}
        handleInputBlur={handleInputBlur}
        setIsLoading={setIsLoading}
        onFormSubmit={onFormSubmit}
        setCheckJudgeGame={setCheckJudgeGame}
      />
    </AllDiv>
  );
}

export default ChatScreen;
