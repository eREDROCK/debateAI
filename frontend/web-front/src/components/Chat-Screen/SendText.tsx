import React, {useState} from 'react'
import styled from "styled-components";


const SendDiv = styled.div`
    .InputText {
        width: 95%;
        height: 50px;
        position: absolute;  /* 位置を絶対位置に設定 */
        bottom: 10px;         /* 下側の余白を設定 */
        left: 50%;            /* 水平方向の中央に配置 */
        transform: translateX(-50%); /* 中央寄せ */
        border-radius: 16px; 
        border: solid 0.5px black;
        font-size: 20px;
    }
`

function SendText({ onTextSubmit }) {
    const [text, setText] = useState("");

    const handleSubmit =(e) => {
        e.preventDefault();             //再ロードされなくなる
        onTextSubmit(text);
        setText('');
    }

  return (
    <SendDiv>
        <form onSubmit={handleSubmit}>
            <input 
                className='InputText' 
                type="text" 
                placeholder="お考えを述べてください （Enterキー押す）"
                onChange={(e) => setText(e.target.value)}
                value={text}                             //inputの中身
            />                
        </form>        
    </SendDiv>
  )
}

export default SendText
