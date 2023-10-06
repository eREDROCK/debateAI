import Player from "../../components/Player-AI-box/Player-AI-box";
import Audience from "../../components/Audience/Audience";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useRef } from "react";

const  TestDiv=styled.div`
ul{
  display: flex;
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
    <TestDiv>
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
      <ul>
        <li><Player role={1} isInputting={isInputting} isLoading={isLoading}/> </li>
        <li><Player role={0} isInputting={isInputting} isLoading={isLoading}/> </li>
      </ul>
      <ul>
        <li><Audience role={0} isInputting={isInputting} isLoading={isLoading}/></li>
        <li><Audience role={1} isInputting={isInputting} isLoading={isLoading}/></li>
        <li><Audience role={2} isInputting={isInputting} isLoading={isLoading}/></li>
      </ul>

    </div>
    </TestDiv>
  );
};

export default App;