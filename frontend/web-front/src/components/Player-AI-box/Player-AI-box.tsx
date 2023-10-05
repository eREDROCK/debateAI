import React, {useEffect} from "react";
import styled from "styled-components";

const  Player=({role, isInputting}: {role: number; isInputting: boolean })=>{

  if (role === 0) {
    return(
      <div>
         {isInputting ? (<div>応答中です</div>) : (<div>考え中です</div>)}
      </div>
    );
  } else {
    return(
      <div>
        AIです
      </div>
    );
  }
};


export default Player;


// ゲーム画面に合体するときは以下の部分を入れてください
// const [isInputting, setIsInputting] = useState(false);
//   // formの入力中に呼び出す関数
//   const handleInput = () => {
//     setIsInputting(true);
//   };
//   // formに入力も何もしていないときに呼び出す関数
//   const handleInputBlur = () => {
//     setIsInputting(false);
//   };
//

//   formのinputにonFocusとonBlurを
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="テキストを入力してください"
//         onFocus={handleInput}// formに入力中の時にhandleInputを呼び出す
//         onBlur={handleInputBlur}// formに入力も何もしていないときにhandleInputBlurを呼び出す
//       />
//     <Player role={0} isInputting={isInputting}/> //ユーザー画像を呼び出したいときはrole={0} AI画像を呼び出したいときはrole={1}
//     <button>botann</button>
//     </div>
//   );