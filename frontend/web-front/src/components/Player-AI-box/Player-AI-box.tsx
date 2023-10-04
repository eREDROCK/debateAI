import React from "react";
import styled from "styled-components";

const  Player=(role: number)=>{

  if (role==0) {
    return(
      <div>
        プレイヤーです
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