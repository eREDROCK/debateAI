import React, { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledHello = styled.div`
  color: red;
  span {
    color: blue;
  }

  @media (min-width: 768px) {
    span {
      display: block;
    }
  }
`;

const App = () => {
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
      })
      .catch((error) => {
        // console.log("error.response.data");
      });
    formRef.current.reset();
  };

  const handleJudgeSubmit = async () => {
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
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("body:", response.data);

        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          message: [
            ...prevFormValues.message,
            { role: "assistant", content: "勝者：" + response.data["winner"] },
          ], // 新しいメッセージを追加
        }));

        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          message: [
            ...prevFormValues.message,
            { role: "assistant", content: response.data["comment"] },
          ], // 新しいメッセージを追加
        }));
      })
      .catch((error) => {
        // console.log("error.response.data");
      });
  };

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

  const handleStartChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormStartValues({ ...formStartValues, [name]: value });

    console.log("formStartValues :", formStartValues);
  };

  const handleGameStart = async (e: React.FormEvent<HTMLFormElement>) => {
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
          setCheckStartResult(true);
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      setFormValues({
        ...formValues,
        title: formValues["title"],
      });
    }
    console.log("formValues", formValues);
    formRef.current.reset();
  };

  return (
    <div>
      <StyledHello>debate</StyledHello>
      {checkStart ? (
        <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
          <input
            type="text"
            placeholder="入力"
            name="message"
            onChange={(e) => handleChanged(e)}
          />
          <button>送信</button>
        </form>
      ) : (
        <form onSubmit={(e) => handleGameStart(e)} ref={formRef}>
          <input
            type="text"
            placeholder="タイトルを入力"
            name="title"
            onChange={(e) => handleStartChanged(e)}
          />
          <button>送信</button>
        </form>
      )}

      {formValues.message.length < 2
        ? formValues.message[formValues.message.length - 1].content
        : formValues.message[formValues.message.length - 2].content}
      {checkResult ? (
        <p>{formValues.message[formValues.message.length - 1].content}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
