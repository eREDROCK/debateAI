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
  const initialValues = { message: "", title: "", flag: true };

  // APIにリクエストした回数をカウントする
  const [count, setCount] = useState(0);
  const [formValues, setFromValues] = useState(initialValues);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await axios
      .post(
        "http://localhost:8080/api/debate",
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
        if (response.status === 200) {
          setCount(count + 1);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFromValues({ ...formValues, [name]: value });
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
      </form>
    </div>
  );
};

export default App;
