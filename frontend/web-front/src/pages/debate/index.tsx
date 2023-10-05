import React, { useState } from "react";
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
    title: "たけのこ派",
    flag: true,
  };

  // APIにリクエストした回数をカウントする
  const [count, setCount] = useState(0);
  const [formValues, setFromValues] = useState(initialValues);
  const [messageValues, setMessageFromValues] = useState(initialValues);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        // setCount(count + 1);
        console.log(response.data);
      })
      .catch((error) => {
        // console.log("error.response.data");
      });
  };

  const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFromValues({
      ...formValues,
      [name]: [
        {
          role: "user",
          content: value,
        },
      ],
    });
    console.log(formValues);
  };

  const handleGameStart = async (e: React.FormEvent<HTMLFormElement>) => {
    await axios
      .get("http://localhost:8080/api/", {})
      .then((response) => {
        console.log("body:", response.status);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div>
      <StyledHello>debate</StyledHello>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="入力"
          name="message"
          onChange={(e) => handleChanged(e)}
        />
        <button>送信</button>
      </form>

      {formValues.message[0].content}
    </div>
  );
};

export default App;
