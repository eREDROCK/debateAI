import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import SendText from "./SendText";
import UserName from '../Username-box/UserNameBox';

const BodyDiv = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    height: 550px;
    padding: 15px 0px 15px 0px;
    border: solid 2px black;
    border-radius: 20px;     
    padding: 10px;            /* 内側に余白を設定 */
    background-color: #93aad4;  /* 背景色を設定 */


    .txts {
        margin: 85px 0;
        flex-direction: row-reverse;
        flex-direction: column;  
        color: black;
        overflow-wrap: break-word;
        float: left;
    }

   
    .txts p {
        display: inline-block;
        position: relative; 
        margin: 10px 0 0 5px;
        padding: 8px;
        max-width: 180px;
        border-radius: 12px;
        background: #edf1ee;
        font-size: 26px;

    }
      
    .txts p:after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 3px; 
        left: -19px;
        border: 8px solid transparent;
        border-right: 18px solid #edf1ee;
        -webkit-transform: rotate(35deg);
        transform: rotate(35deg);

    }



`

function ChatScreen() {
    const [texts, setTexts] = useState([]);
    const [names, setNames] = useState([]);
    useEffect(() => {
        setTexts([]);
        setNames([]);
    },[]);

    const onTextSubmit = (newText) => {
        setTexts((prevTexts) => [...prevTexts, newText]);
    }

     

  return (
     
    <div>
    <BodyDiv>
        <div>
            <span className='txts'>
                {texts.map((text, index) => (
                    <div className='ScrollScreen'>
                        <p key={index}>{text}</p>
                    </div>
                ))}
            </span>
            <SendText onTextSubmit={onTextSubmit}/>
        </div>
    </BodyDiv>
    </div>
  )
  
}

export default ChatScreen