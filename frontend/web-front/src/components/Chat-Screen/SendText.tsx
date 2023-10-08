import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;

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

function SendText({
  onTextSubmit,
  onFormSubmit,
  handleInput,
  setIsLoading,
  handleInputBlur,
  setCheckJudgeGame,
}) {
  const [text, setText] = useState("");
  const initialValues = {
    message: [{ role: "user", content: "" }],
    title: "たけのこの里よりもきのこの山のほうが美味しい",
    flag: true,
  };

  // APIにリクエストした回数をカウントする
  const [count, setCount] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formStartValues, setFormStartValues] = useState({ title: "" });
  const [messageValues, setMessageFromValues] = useState(initialValues);
  const [checkResult, setCheckResult] = useState(false);
  const [checkStart, setCheckStartResult] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const csrfToken = Cookies.get("csrftoken");

    onTextSubmit(formValues.message[formValues.message.length - 1]);
    onFormSubmit(formValues);
    formRef.current.reset();

    await axios
      .post(
        "http://localhost:8080/api/debate/",
        {
          message: formValues.message,
          title: formValues.title,
          flag: formValues.flag,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("body:", response.status);
        setCount(count + 1);
        console.log(count);

        setFormValues(response.data);
        const newMessage = { role: "user", content: "" };
        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          message: [...prevFormValues.message, newMessage], // 新しいメッセージを追加
        }));
        console.log(response.data);
        if (count >= 3) {
          setCheckResult(true);
          handleJudgeSubmit();
        }
        onTextSubmit(
          response.data["message"][response.data["message"].length - 1]
        );
        onFormSubmit(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        // console.log("error.response.data");
      });
  };

  const handleJudgeSubmit = async () => {
    const csrfToken = Cookies.get("csrftoken");
    console.log("judge now");
    setCheckJudgeGame(true); //ジャッジ中
    await axios
      .post(
        "http://localhost:8080/api/judge/",
        {
          message: formValues.message,
          title: formValues.title,
          flag: formValues.flag,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("body:", response.data);

        onTextSubmit({
          role: "assistant",
          content: "勝者：" + response.data["winner"],
        }); //チャット画面に反映
        console.log("judge end　onTextSubmit");

        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          message: [
            ...prevFormValues.message,
            { role: "assistant", content: "勝者：" + response.data["winner"] },
          ], // 新しいメッセージを追加
        }));
        console.log("judge end setFormValues");

        onTextSubmit({ role: "assistant", content: response.data["comment"] }); //チャット画面に反映
        console.log("judge end　onTextSubmit2");

        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          message: [
            ...prevFormValues.message,
            { role: "assistant", content: response.data["comment"] },
          ], // 新しいメッセージを追加
        }));
        console.log("judge end");
        setCheckJudgeGame(false); //ジャッジ中
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
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
    // console.log(formValues);
  };

  const handleStartChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormStartValues({ ...formStartValues, [name]: value });

    console.log("formStartValues :", formStartValues);
  };

  const handleGameStart = async (e: React.FormEvent<HTMLFormElement>) => {
    const csrfToken = Cookies.get("csrftoken");
    e.preventDefault();
    if (
      formStartValues.title === "ランダム" ||
      formStartValues.title === "random"
    ) {
      await axios
        .get("http://localhost:8080/api/randomtheme/", {
          withCredentials: true,
        })
        .then((response) => {
          console.log("body:", response.data);
          setFormValues({
            ...formValues,
            title: response.data["title"],
          });
          onTextSubmit({
            role: "assistant",
            content:
              response.data["title"] + "について肯定派として議論してください。",
          }); //チャット画面に反映
          setCheckStartResult(true);
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      setFormValues({
        ...formValues,
        title: formStartValues["title"],
      });
      onTextSubmit({
        role: "assistant",
        content: formStartValues["title"] + "について議論してください",
      }); //チャット画面に反映

      setCheckStartResult(true);
    }
    console.log("formValues", formValues);
    formRef.current.reset();
  };

  return (
    <SendDiv>
      {checkStart ? (
        <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
          <input
            className="InputText"
            type="text"
            placeholder="入力"
            name="message"
            onChange={(e) => handleChanged(e)}
            // onFocus={handleInput} // formに入力中の時にhandleInputを呼び出す
            // onBlur={handleInputBlur} // formに入力も何もしていないときにhandleInputBlurを呼び出す
          />
          <button>送信</button>
        </form>
      ) : (
        <form onSubmit={(e) => handleGameStart(e)} ref={formRef}>
          <input
            className="InputText"
            type="text"
            placeholder="タイトルを入力"
            name="title"
            onChange={(e) => handleStartChanged(e)}
            // onFocus={handleInput} // formに入力中の時にhandleInputを呼び出す
            // onBlur={handleInputBlur} // formに入力も何もしていないときにhandleInputBlurを呼び出す
          />
          <button>送信</button>
        </form>
      )}
    </SendDiv>
  );
}

export default SendText;
