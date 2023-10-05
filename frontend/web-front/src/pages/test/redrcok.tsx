import Player from "../../components/Player-AI-box/Player-AI-box";
import React, { useState, useEffect } from "react";



const App = () => {

  const [isInputting, setIsInputting] = useState(false);
  // formの入力中に呼び出す関数
  const handleInput = () => {
    setIsInputting(true);
  };
  // formに入力も何もしていないときに呼び出す関数
  const handleInputBlur = () => {
    setIsInputting(false);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="テキストを入力してください"
        onFocus={handleInput}// formに入力中の時にhandleInputを呼び出す
        onBlur={handleInputBlur}// formに入力も何もしていないときにhandleInputBlurを呼び出す
      />
    <Player role={0} isInputting={isInputting}/> 
    <button>botann</button>
    </div>
  );
};

export default App;