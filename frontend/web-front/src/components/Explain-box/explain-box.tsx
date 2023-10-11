import { useEffect, useState } from "react";
import styled from "styled-components";
import { InstructData } from "./InstructData";
import Image from "next/image";

const BoxDiv = styled.div`
  text-align: center;
  /* margin-left: auto; */
  margin-right: auto;
  width: 40%;
  height: auto;
  padding: 15px 0px 15px 0px;
  border: solid 3px #999999;
  border-radius: 40px; /* 枠を角丸にする */

  font-size: 24px;
  font-family: "游ゴシック";

  white-space: pre-line;

  li {
    list-style: none;
    padding: 0px 0px 0px 0px;
  }
  .howtoplay {
    color: #5cffb6;
    font-size: 30px;
    font-weight: bold;
    -webkit-text-stroke: 1px white;
  }

  .title {
    font-family: "Black";
    font-size: 20px;
    color: #ffffff;
    -webkit-letter-spacing: 0;
    -moz-letter-spacing: 0;
    -ms-letter-spacing: 0;
    letter-spacing: 0;
    text-align: center;
    margin: 10px 0;
  }

  .inst {
    font-family: "Regular";
    font-size: 25px;
    color: #ffffff;
    -webkit-letter-spacing: 0;
    -moz-letter-spacing: 0;
    -ms-letter-spacing: 0;
    letter-spacing: 0;
    text-align: center;
  }
`;

const CardDiv = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;

  .allstyle {
    display: flex;
    margin: 10px 0 0;
    display: none;
    -ms-flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-pack: center;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-item-align: stretch;
    align-self: stretch;
  }
  .imgbox {
    width: 224px;
    height: 150px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0 0 20px 0;
  }
  .imgfield {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    outline: none;
  }
  .img {
    width: 100%;
    height: 100%;
    transform: translate3d(0px, 0px, 0px);
  }
`;

const ExplainBox = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((oldCount) => {
        if (oldCount < 11) return oldCount + 1;
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <BoxDiv>
      <li className="howtoplay">プレイ方法</li>
      <div className="allstyle">
        <figure className="imgbox">
          <div className="imgfield">
            <Image
              className="img"
              src={InstructData[Math.floor(count / 3)].image}
              alt=""
              width={100}
              height={100}
            ></Image>
          </div>
        </figure>
        <CardDiv className="item">
          <h4 className="title">{InstructData[Math.floor(count / 3)].title}</h4>
          <p className="inst">
            {InstructData[Math.floor(count / 3)].instruction}
          </p>
        </CardDiv>
      </div>
    </BoxDiv>
  );
};

export default ExplainBox;

//{InstructData[Math.floor(count / 3)].image}
