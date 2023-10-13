import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";

axios.defaults.withCredentials = true;

const SendDiv = styled.div`
  .InputText {
    width: 90%;
    height: 50px;
    bottom: 10px;
    border-radius: 16px;
    border: solid 0.5px black;
    font-size: 20px;
    z-index: 2;
  }
  button {
    display: flex; /* コンテンツを中央に配置するために flex レイアウトを使用 */
    align-items: center; /* 垂直方向の中央寄せ */
    justify-content: space-between; /* 水平方向の中央寄せ */
    background-color: transparent; /* 背景を透明に */
    border: none; /* ボーダーをなしに */
    padding: 0; /* パディングを0に */
    width: 35px; /* 画像の幅を指定 */
    height: auto; /* 高さを自動調整（アスペクト比を保持） */
  }
  button:hover {
    background-color: rgba(0, 0, 0, 0.053); /* ホバー時の背景色 */
    transition: background-color 0.5s ease; /* ホバー時に背景色をゆっくり変化させる */
    border-radius: 16px;
    width: 40px; /* 画像の幅を指定 */
    height: auto; /* 高さを自動調整（アスペクト比を保持） */
  }
  button:active {
    background-color: rgba(0, 0, 0, 0.37); /* 押したときの背景色を設定 */
    width: 35px; /* 画像の幅を指定 */
    height: auto; /* 高さを自動調整（アスペクト比を保持） */
  }
  input {
    margin-right: 10px; /* input 右側の余白 */
  }
`;

const Container = styled.div`
  display: flex; /* Flexコンテナを作成 */
  align-items: center; /* 垂直方向に中央寄せ */
`;

function SendText({
  onTextSubmit,
  onFormSubmit,
  handleInput,
  setIsLoading,
  handleInputBlur,
  setCheckJudgeGame,
}) {
  const initialValues = {
    message: [{ role: "user", content: "" }],
    title: "",
    flag: true,
  };

  // APIにリクエストした回数をカウントする
  const [count, setCount] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formStartValues, setFormStartValues] = useState({ title: "" });
  const [checkResult, setCheckResult] = useState(false);
  const [checkStart, setCheckStartResult] = useState(false);
  const [isLoadingNow, setIsLoadingNow] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 入力内容を取得
    const inputValue =
      formValues.message[formValues.message.length - 1].content;

    // 入力内容が空であれば送信を中止
    if (!inputValue.trim() || isLoadingNow) {
      return; // フォーム送信を中止
    }

    setIsLoading(true);
    setIsLoadingNow(true);
    const csrfToken = Cookies.get("csrftoken");

    onTextSubmit(formValues.message[formValues.message.length - 1]);
    onFormSubmit(formValues);
    formRef.current.reset();

    await axios
      .post(
        // "http://localhost:8080/api/debate/",
        "http://localhost:80/api/debate/",
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
        setIsLoadingNow(false);
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
        // "http://localhost:8080/api/judge/",
        "http://localhost:80/api/judge/",
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

    const inputValue = formStartValues.title;
    // 入力内容が空であれば送信を中止
    if (!inputValue.trim()) {
      return; // フォーム送信を中止
    }

    if (
      formStartValues.title === "ランダム" ||
      formStartValues.title === "random"
    ) {
      await axios
        .get(
          // "http://localhost:8080/api/randomtheme/",
          "http://localhost:80/api/randomtheme/",
          {
            withCredentials: true,
          }
        )
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
          <Container>
            <input
              className="InputText"
              type="text"
              placeholder="入力"
              name="message"
              onChange={(e) => handleChanged(e)}
              // onFocus={handleInput} // formに入力中の時にhandleInputを呼び出す
              // onBlur={handleInputBlur} // formに入力も何もしていないときにhandleInputBlurを呼び出す
            />
            <button>
              <Image
                src="/image/紙飛行機アイコン.png"
                layout="responsive"
                //   sizes="20%"
                alt="none"
                width={20}
                height={20}
              />
            </button>
          </Container>
        </form>
      ) : (
        <form onSubmit={(e) => handleGameStart(e)} ref={formRef}>
          <Container>
            <input
              className="InputText"
              type="text"
              placeholder="タイトルを入力"
              name="title"
              onChange={(e) => handleStartChanged(e)}
              // onFocus={handleInput} // formに入力中の時にhandleInputを呼び出す
              // onBlur={handleInputBlur} // formに入力も何もしていないときにhandleInputBlurを呼び出す
            />
            <button>
              <Image
                src="/image/紙飛行機アイコン.png"
                layout="responsive"
                //   sizes="15%"
                alt="none"
                width={20}
                height={20}
              />
            </button>
          </Container>
        </form>
      )}
    </SendDiv>
  );
}

export default SendText;
