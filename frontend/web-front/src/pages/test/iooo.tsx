import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Audience from "../../components/Audience/Audience";
import Cylinder from "../../components/Cylinder/Cylinder";
import PlayerAI from "../../components/Player-AI-box/Player-AI-box";
import ThemeBox from "../../components/ThemeBox/ThemeBox";
import ChatScreen from "../../components/Chat-Screen/ChatScreen";
import axios from "axios";
import Image from "next/image";

//rolo{1} Ai 左　{2}ユーザ　右

const BodyDiv = styled.div`
    position: fixed;
    background-image: url('/image/BackGround.png'); // 背景画像の相対パスを指定
    background-size: cover; // 画像をコンテナに合わせて拡大縮小
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .bg {
        animation: slide 10s ease-in-out infinite alternate;
        background: linear-gradient(-90deg, #AA0000 50%, #0000AA 50%);
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
        justify-content:space-between;
        padding-inline-start: 0;
    }
    .AI {
        width: 400px;
        height: 400px;
    }
    .User {
        width: 400px;
        height: 400px;
        margin-right: 40px;
    }

    .AllAudi {
        display: flex;
        transform: translateY(0px);
    }
    .AudiA {
        display: flex;
        list-style: none;
        justify-content:space-between;
        padding-inline-start: 0;
        width: 60%;
    }
    .AudiB {
        display: flex;
        list-style: none;
        justify-content:space-between;
        padding-inline-start: 0;
        width: 60%;
    }
    
`


const App = () => {

    const initialValues =  {
        message: [{ role: "user", content: "" }],
        title: "たけのこ派",
        flag: true,
      };
    
      // APIにリクエストした回数をカウントする
      const [count, setCount] = useState(0);
      const [formValues, setFromValues] = useState(initialValues);
    
      const [isInputting, setIsInputting] = useState(false);
      const [isLoading, setIsLoading] =useState(false);
    
      const formRef = useRef(null);
    
      // formの入力中に呼び出す関数
      const handleInput = () => {
        setIsInputting(true);
      };
      // formに入力も何もしていないときに呼び出す関数
      const handleInputBlur = () => {
        setIsInputting(false);
      };
      
      /*const onFormSubmit = () => {                 //お題，賛成派の変数受け取り
        setFromValues();
      }*/
    
      const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFromValues({ ...formValues, [name]: value });
        console.log(formValues);
      };
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        await axios
          .post(
            "http://localhost:8080/api/debate/",
            {
              message: [
                {
                  role: "user",
                  content: "きのこの里より、たけのこの里のほうが美味しいです。",
                },
                {
                  role: "assistant",
                  content:
                    "私は「きのこの里のほうが美味しい」と主張します。きのこの里は、口どけの良いチョコレートと、ほんのりとしたきのこの風味が絶妙にマッチしています。また、その独特な食感も魅力の一つです。たけのこの里も美味しいですが、きのこの里の方がより多くの人々に愛されており、その証拠に売り上げも高いです。",
                },
                {
                  role: "user",
                  content: "きのこの里より、たけのこの里のほうが売上は高いですよ",
                },
              ],
              title: formValues.title,
              flag: formValues.flag,
            },
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          )
          .then((response) => {
            console.log("body:", response.status);
            formRef.current.reset();
            setIsLoading(false);
            if (response.status === 200) {
              setCount(count + 1);
            }
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      };


  return (
    <BodyDiv>
    <div />
        <div>
      <input
        type="text"
        placeholder="テキストを入力してください"
        onFocus={handleInput}// formに入力中の時にhandleInputを呼び出す
        onBlur={handleInputBlur}// formに入力も何もしていないときにhandleInputBlurを呼び出す
      />
      <button>botann</button>
      <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
        <input
          type="text"
          placeholder="入力"
          name="message"
          onChange={(e) => handleChanged(e)}
        />
        <button type='submit'>送信</button>
      </form>
    </div>


                <ul className="Player">
                    <div>
                        <ThemeBox theme={"お題"} flag={true} />
                        <li className="AI"><PlayerAI role={1} isInputting={isInputting} isLoading={isLoading}/> </li>                    
                    </div>
                    <ChatScreen/>
                    <div>
                        <ThemeBox theme={"お題"} flag={true} />
                        <li className="User"><PlayerAI role={0} isInputting={isInputting} isLoading={isLoading}/> </li>                    
                    </div>
                </ul>
                <ul className="AllAudi">
                    <ul className="AudiA">
                        <li><Audience role={0} isInputting={isInputting} isLoading={isLoading}/></li>
                        <li><Audience role={1} isInputting={isInputting} isLoading={isLoading}/></li>
                        <li><Audience role={2} isInputting={isInputting} isLoading={isLoading}/></li>
                    </ul>
                    <ul className="AudiB">
                        <li><Audience role={0} isInputting={isInputting} isLoading={isLoading}/></li>
                        <li><Audience role={1} isInputting={isInputting} isLoading={isLoading}/></li>
                        <li><Audience role={2} isInputting={isInputting} isLoading={isLoading}/></li>
                    </ul>
                </ul>
    </BodyDiv>
  );
};

export default App;
