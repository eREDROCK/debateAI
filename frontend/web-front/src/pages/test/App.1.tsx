import React, { useState, useRef } from "react";
import Audience from "../../components/Audience/Audience";
import PlayerAI from "../../components/Player-AI-box/Player-AI-box";
import ThemeBox from "../../components/ThemeBox/ThemeBox";
import ChatScreen from "../../components/Chat-Screen/ChatScreen";
import axios from "axios";
import { BodyDiv } from "./iooo";

export const App = () => {
  const initialValues = {
    message: [{ role: "user", content: "" }],
    title: "たけのこ派",
    flag: true,
  };

  // APIにリクエストした回数をカウントする
  const [count, setCount] = useState(0);
  const [formValues, setFromValues] = useState(initialValues);

  const [isInputting, setIsInputting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);

  const onFormSubmit = (message) => {
    //お題，賛成派の変数受け取り
    setFromValues(message);
  };

  const handleInput = (bool) => {
    setIsInputting(bool);
    console.log("inputting", bool);
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
    <BodyDiv>
      <div />
      <ul className="Player">
        <div>
          <ThemeBox theme={"お題"} flag={true} />
          <li className="AI">
            <PlayerAI
              role={1}
              isInputting={isInputting}
              isLoading={isLoading}
            />{" "}
          </li>
        </div>
        <ChatScreen
          onFormSubmit={onFormSubmit}
          handleInput={handleInput}
          setIsLoading={setIsLoading}
        />
        <div>
          <ThemeBox theme={"お題"} flag={true} />
          <li className="User">
            <PlayerAI
              role={0}
              isInputting={isInputting}
              isLoading={isLoading}
            />{" "}
          </li>
        </div>
      </ul>
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
    </BodyDiv>
  );
};
