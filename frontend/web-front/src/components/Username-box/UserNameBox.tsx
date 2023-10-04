import React, {useState} from 'react'
import styled from 'styled-components';


const BoxDiv = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  height: 200px;
  padding: 15px 0px 15px 0px;
  border: solid 3px #999999;
  border-radius: 40px; /* 枠を角丸にする */
` 
const StyeledInput = styled.input`
  width: 78%;
  height: 50px;
  font-size: 20px;

`
const StyeledButton = styled.button`
  width: 160px;
  height: 40px;
  fontWidth: 10px; 
  font-size: 20px;
  margin-top: 10px;
  border-radius: 40px;
  box-shadow: 0 9px 0 #aaaaaa;
  cursor: pointer;

  & ::hover {
    color: #333333;
    text-decoration: none;
    background-color: #a0c4d3;
  }

  &:active {
    transform: translateY(3px);
  }
`
const LocationDiv = styled.div`
  margin-Top: 100px;
`
const Triangle = styled.h1`
  width: 20px;
  height: 20px;
  clip-path: polygon(0 0, 0% 100%, 100% 50%);
  margin-top: -25px;
  background-color: #00FFFF;
`

const UserNameBox = () => {

  const [userName,setUserName] = useState('');

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  }

  function gameStart() {
    if(userName === '') return;
    alert(userName);
  }

  return (
    <BoxDiv className="NameField">
      <LocationDiv>
        <StyeledInput 
          type="text" 
          value={userName} 
          onChange={handleInputChange}
          placeholder="名前を入力してください"/>
        <StyeledButton onClick={gameStart}>
          はじめる
          <Triangle />
        </StyeledButton>
      </LocationDiv>
      
    </BoxDiv>
  );
}

export default UserNameBox