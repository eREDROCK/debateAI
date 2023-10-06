import Link from 'next/link';
import React, {useState} from 'react'
import styled from 'styled-components';


const BoxDiv = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 450px;
  height: 350px;
  padding: 15px 0px 15px 0px;
  border: solid 3px #999999;
  border-radius: 40px;       /* 枠を角丸にする */


  .LocationDiv {
    margin-Top: 220px;    
  }

  .StartButton {
    width: 160px;
    height: 40px;
    fontWidth: 10px; 
    font-size: 20px;
    margin-top: 10px;
    border-radius: 40px;
    box-shadow: 0 6px 0 #aaaaaa;
    cursor: pointer;
  
    & ::hover {
      color: #333333;
      text-decoration: none;
      background-color: #a0c4d3;
    }
  
    &:active {
      transform: translateY(3px);
    }    
  }

  .InputName {
    width: 78%;
    height: 50px;
    font-size: 20px;
    border-radius: 20px;
    background-color: rgba(250, 250, 250, 0.6);
  }
` 

const Triangle = styled.div`
  width: 20px;
  height: 20px;
  clip-path: polygon(0 0, 0% 100%, 100% 50%);
  margin-top: -28px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); /* 影の設定 */
  background-color: #00FFFF;
`

const UserNameBox = () => {

  const [userName,setUserName] = useState('');

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  }

  function gameStart() {
    if(userName === '') return;
    //alert(userName);
    return (
      <Link href="/debate">
        <a>Start Game</a>
      </Link>
    )
  }

  return (
    <BoxDiv >
      <div className='LocationDiv'>
        <input className='InputName' 
          type="text" 
          value={userName} 
          onChange={handleInputChange}
          placeholder="名前を入力してください"
        />
        <Link href="/debate">
        <button onClick={gameStart} className='StartButton'>
          はじめる
          <Triangle />
        </button>        
        </Link>

      </div>
      
    </BoxDiv>
  );
}

export default UserNameBox