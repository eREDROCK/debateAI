import React from "react";
import styled from "styled-components";

const StyledTitle=styled.h1`
  position: relative;/*相対位置*/
  padding-left: 1.2em;/*アイコン分のスペース*/
  line-height: 1.4;/*行高*/

  &::before{
    font-family: "Font Awesome 5 Free";
    content: "\f075";/*アイコンのユニコード*/
    font-weight: 900;
    position: absolute;/*絶対位置*/
    font-size: 1em;/*サイズ*/
    left: 0;/*アイコンの位置*/
    top: 0;/*アイコンの位置*/
    color: #5ab9ff; /*アイコン色*/
  }
`

const Title =()=>{
  return(
    <div>
      <StyledTitle>ディベートAIバトル</StyledTitle>
    </div>

  );
};

export default Title;