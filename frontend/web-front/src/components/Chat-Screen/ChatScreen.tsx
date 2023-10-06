import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import SendText from "./SendText";
import UserName from '../Username-box/UserNameBox';


const OutLineDiv = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    justify-content: center; /* 水平方向中央揃え */
    align-items: flex-end;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    height: 550px;
    padding: 10px;
    background-color: #93aad4;
    border: solid 2px black;
    border-radius: 20px;     
    z-index: 1;               /* 自然数が大きいほど上に重なる relative-absolute-ab-ab...*/

`

const BodyDiv = styled.div`
    &: not(.txts){
        position: absolute;
        display: flex;
        top: 0;
        left: 0;
        right: 0;
        justify-content: center; /* 水平方向中央揃え */
        align-items: flex-end;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        width: 600px;
        height: 550px;
        padding: 10px;
        border: solid 2px black;
        border-radius: 20px;     
        z-index: 1;               /* 自然数が大きいほど上に重なる relative-absolute-ab-ab...*/
    }
      
    
    

    .styledtxts {
        display: flex;
        justify-content: flex-start; /* 水平方向左寄せ */
    }

    .txts {
        display: flex;
        justify-content: flex-start;
        margin: 85px 0;
        flex-direction: column;  
        color: blue;
        overflow-wrap: break-word;
        /*text-align: left;*/
    }


   
    .txts p {
        display: inline-block;
        position: relative; 
        /*margin: 10px 0 0 5px;*/
        padding: 8px;
        max-width: 180px;
        border-radius: 12px;
        background: #edf1ee;
        font-size: 26px;
        text-align: left;
        /*justify-content: flex-start;*/

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
        <OutLineDiv />
            <BodyDiv >
                <div className='styledtxts'>
                    <SendText onTextSubmit={onTextSubmit}/>
                        <div className='txts'>
                            {texts.map((text, index) => (
                                <div className='ScrollScreen'>
                                    <p key={index}>{text}</p>
                                </div>
                            ))}
                        </div>                    
                    </div>
            </ BodyDiv >   
        
    </div>

         

  )
  
}

export default ChatScreen